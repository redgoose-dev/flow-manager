const app = document.querySelector("#app");
const toastRegion = document.querySelector("#toast-region");
const brandName = document.querySelector("#brand-name");
const brandLink = document.querySelector("#brand-link");
const topbarNote = document.querySelector("#topbar-note");
const topbarVersion = document.querySelector("#topbar-version");
const descriptionMeta = document.querySelector("#app-description-meta");
const applicationNameMeta = document.querySelector("#application-name-meta");
const appleAppTitleMeta = document.querySelector("#apple-app-title-meta");
const manifestLink = document.querySelector("#app-manifest-link");
const settingsLink = document.querySelector("#settings-link");
const logoutButton = document.querySelector("#logout-button");

const statusLabels = {
  queued: "대기 중",
  running: "실행 중",
  waiting_input: "입력 대기 중",
  succeeded: "성공",
  failed: "실패",
  canceled: "취소됨",
  interrupted: "중단됨",
  skipped: "건너뜀",
};

const activeRunStatuses = ["queued", "running", "waiting_input"];

let activeEventSource = null;
let currentRun = null;
let seenLogSeqs = new Set();
const STEP_AUTOSAVE_DELAY = 700;
const stepAutosaveControllers = new Set();
let settingsLoaded = false;
let authChecked = false;
let currentAuth = {
  configured: false,
  authenticated: false,
  user: null,
  csrfToken: null,
};
let applicationSettings = {
  name: "FlowManager",
  tagline: "Self-hosted workflow manager",
  title: "서버의 반복 작업을 한 흐름으로...",
  description:
    "프로젝트별 셸 워크플로우를 구성하고 실행 상태와 로그를 한곳에서 추적하세요.",
};
let applicationVersion = "dev";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(value) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("ko-KR", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function formatDuration(startedAt, finishedAt) {
  if (!startedAt) return "대기 중";
  const end = finishedAt ? new Date(finishedAt).getTime() : Date.now();
  const seconds = Math.max(0, Math.round((end - new Date(startedAt).getTime()) / 1000));
  if (seconds < 60) return `${seconds}초`;
  return `${Math.floor(seconds / 60)}분 ${seconds % 60}초`;
}

function status(value) {
  if (!value) return `<span class="status">실행 기록 없음</span>`;
  return `<span class="status status-${escapeHtml(value)}">${statusLabels[value] ?? value}</span>`;
}

function toast(message, type = "success") {
  const element = document.createElement("div");
  element.className = `toast ${type}`;
  element.textContent = message;
  toastRegion.append(element);
  setTimeout(() => element.remove(), 3500);
}

async function api(path, options = {}) {
  const headers = new Headers(options.headers ?? {});
  if (options.body) headers.set("content-type", "application/json");
  const method = (options.method ?? "GET").toUpperCase();
  if (
    currentAuth.csrfToken &&
    !["GET", "HEAD", "OPTIONS"].includes(method)
  ) {
    headers.set("x-csrf-token", currentAuth.csrfToken);
  }
  const response = await fetch(path, {
    ...options,
    headers,
  });
  if (!response.ok) {
    let message = `요청을 처리하지 못했습니다. (${response.status})`;
    try {
      const payload = await response.json();
      message = payload.error?.message ?? message;
    } catch {}
    if (response.status === 401 && !path.startsWith("/api/auth/")) {
      authChecked = false;
      currentAuth = {
        configured: true,
        authenticated: false,
        user: null,
        csrfToken: null,
      };
      updateAuthChrome();
      location.hash = "#/login";
    }
    throw new Error(message);
  }
  if (response.status === 204) return null;
  return response.json();
}

function updateAuthChrome() {
  const authenticated = currentAuth.authenticated;
  settingsLink.hidden = !authenticated;
  logoutButton.hidden = !authenticated;
  brandLink.href = authenticated ? "#/projects" : "#/login";
}

function closeRunStream() {
  activeEventSource?.close();
  activeEventSource = null;
}

function showError(error) {
  console.error(error);
  app.innerHTML = `
    <div class="error-view">
      <span class="eyebrow">문제가 발생했습니다</span>
      <h1>화면을 불러오지 못했습니다.</h1>
      <p>${escapeHtml(error.message ?? String(error))}</p>
      <div><button class="button primary" id="retry-button">다시 시도</button></div>
    </div>`;
  document.querySelector("#retry-button")?.addEventListener("click", route);
}

function setBusy(button, busy, label = "처리 중…") {
  if (!button) return;
  if (busy) {
    button.dataset.originalLabel = button.textContent;
    button.textContent = label;
    button.disabled = true;
  } else {
    button.textContent = button.dataset.originalLabel ?? button.textContent;
    button.disabled = false;
  }
}

function applyApplicationSettings(settings, version) {
  applicationSettings = settings;
  if (version) applicationVersion = version;
  brandName.textContent = settings.name;
  brandLink.setAttribute("aria-label", `${settings.name} 프로젝트 목록`);
  topbarNote.textContent = settings.tagline;
  descriptionMeta.setAttribute("content", settings.description);
  applicationNameMeta.setAttribute("content", settings.name);
  appleAppTitleMeta.setAttribute("content", settings.name);
  if (topbarVersion) {
    topbarVersion.textContent = applicationVersion;
    topbarVersion.hidden = false;
  }
  manifestLink.setAttribute(
    "href",
    `/manifest.webmanifest?revision=${Date.now()}`,
  );
  document.title = `${settings.name} · Workflow Manager`;
}

async function loadAuthStatus() {
  const result = await api("/api/auth/status");
  currentAuth = {
    configured: result.configured,
    authenticated: result.authenticated,
    user: result.user,
    csrfToken: result.csrfToken,
  };
  applyApplicationSettings(result.settings, result.version);
  settingsLoaded = true;
  authChecked = true;
  updateAuthChrome();
  return currentAuth;
}

async function loadApplicationSettings() {
  const result = await api("/api/settings");
  applyApplicationSettings(result.settings, result.version);
  settingsLoaded = true;
  return result;
}

function webAuthnAvailable() {
  return Boolean(window.PublicKeyCredential && navigator.credentials);
}

function base64UrlToBytes(value) {
  const normalized = value.replaceAll("-", "+").replaceAll("_", "/");
  const padding = "=".repeat((4 - (normalized.length % 4)) % 4);
  const binary = atob(normalized + padding);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

function bytesToBase64Url(value) {
  const bytes = new Uint8Array(value);
  let binary = "";
  for (let index = 0; index < bytes.length; index += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000));
  }
  return btoa(binary)
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
}

function creationOptionsFromJSON(options) {
  if (typeof PublicKeyCredential.parseCreationOptionsFromJSON === "function") {
    return PublicKeyCredential.parseCreationOptionsFromJSON(options);
  }
  return {
    ...options,
    challenge: base64UrlToBytes(options.challenge),
    user: {
      ...options.user,
      id: base64UrlToBytes(options.user.id),
    },
    excludeCredentials: (options.excludeCredentials ?? []).map((credential) => ({
      ...credential,
      id: base64UrlToBytes(credential.id),
    })),
  };
}

function requestOptionsFromJSON(options) {
  if (typeof PublicKeyCredential.parseRequestOptionsFromJSON === "function") {
    return PublicKeyCredential.parseRequestOptionsFromJSON(options);
  }
  return {
    ...options,
    challenge: base64UrlToBytes(options.challenge),
    allowCredentials: (options.allowCredentials ?? []).map((credential) => ({
      ...credential,
      id: base64UrlToBytes(credential.id),
    })),
  };
}

function registrationResponseJSON(credential) {
  if (typeof credential.toJSON === "function") return credential.toJSON();
  return {
    id: credential.id,
    rawId: bytesToBase64Url(credential.rawId),
    type: credential.type,
    authenticatorAttachment: credential.authenticatorAttachment ?? undefined,
    clientExtensionResults: credential.getClientExtensionResults(),
    response: {
      clientDataJSON: bytesToBase64Url(credential.response.clientDataJSON),
      attestationObject: bytesToBase64Url(credential.response.attestationObject),
      transports: credential.response.getTransports?.() ?? [],
    },
  };
}

function authenticationResponseJSON(credential) {
  if (typeof credential.toJSON === "function") return credential.toJSON();
  return {
    id: credential.id,
    rawId: bytesToBase64Url(credential.rawId),
    type: credential.type,
    authenticatorAttachment: credential.authenticatorAttachment ?? undefined,
    clientExtensionResults: credential.getClientExtensionResults(),
    response: {
      clientDataJSON: bytesToBase64Url(credential.response.clientDataJSON),
      authenticatorData: bytesToBase64Url(credential.response.authenticatorData),
      signature: bytesToBase64Url(credential.response.signature),
      userHandle: credential.response.userHandle
        ? bytesToBase64Url(credential.response.userHandle)
        : undefined,
    },
  };
}

async function createPasskey(options) {
  if (!webAuthnAvailable()) {
    throw new Error("이 브라우저는 패스키(WebAuthn)를 지원하지 않습니다.");
  }
  try {
    const credential = await navigator.credentials.create({
      publicKey: creationOptionsFromJSON(options),
    });
    if (!credential) throw new Error("패스키 등록이 취소되었습니다.");
    return registrationResponseJSON(credential);
  } catch (error) {
    if (error.name === "NotAllowedError") {
      throw new Error("패스키 등록이 취소되었거나 요청 시간이 만료되었습니다.");
    }
    if (error.name === "SecurityError") {
      throw new Error("현재 주소가 서버의 패스키 origin 설정과 일치하지 않습니다.");
    }
    throw error;
  }
}

async function getPasskey(options) {
  if (!webAuthnAvailable()) {
    throw new Error("이 브라우저는 패스키(WebAuthn)를 지원하지 않습니다.");
  }
  try {
    const credential = await navigator.credentials.get({
      publicKey: requestOptionsFromJSON(options),
    });
    if (!credential) throw new Error("패스키 로그인이 취소되었습니다.");
    return authenticationResponseJSON(credential);
  } catch (error) {
    if (error.name === "NotAllowedError") {
      throw new Error("패스키 로그인이 취소되었거나 요청 시간이 만료되었습니다.");
    }
    if (error.name === "SecurityError") {
      throw new Error("현재 주소가 서버의 패스키 origin 설정과 일치하지 않습니다.");
    }
    throw error;
  }
}

function renderAuthUnsupported() {
  if (webAuthnAvailable()) return "";
  return `
    <div class="auth-warning" role="alert">
      이 브라우저에서는 패스키를 사용할 수 없습니다. 최신 Safari, Chrome, Edge 또는 Firefox에서 접속해 주세요.
    </div>`;
}

function completeAuthentication(result) {
  currentAuth = {
    configured: true,
    authenticated: true,
    user: result.user,
    csrfToken: result.csrfToken,
  };
  authChecked = true;
  updateAuthChrome();
  history.replaceState(null, "", `${location.pathname}${location.search}#/projects`);
  void route();
}

async function renderSetup(searchParams) {
  const setupToken = searchParams.get("token");
  app.innerHTML = `
    <section class="auth-shell">
      <img class="auth-mark" src="/icon-192.png" alt="" width="112" height="112" />
      <span class="eyebrow">First-time setup</span>
      <h1>관리자 패스키를 등록하세요.</h1>
      <p>이 패스키가 FlowManager의 유일한 로그인 방식입니다. 지문, 얼굴 인식 또는 기기 잠금으로 인증합니다.</p>
      ${renderAuthUnsupported()}
      ${
        setupToken
          ? `
            <form id="setup-form" class="form-grid auth-form">
              <div class="field">
                <label>관리자 이름</label>
                <input name="displayName" value="관리자" maxlength="80" autocomplete="name" required />
              </div>
              <div class="field">
                <label>패스키 이름</label>
                <input name="passkeyName" value="내 기기" maxlength="80" autocomplete="off" required />
              </div>
              <button class="button primary auth-submit" type="submit" ${webAuthnAvailable() ? "" : "disabled"}>패스키 등록</button>
            </form>`
          : `
            <div class="auth-instruction">
              서버 터미널에 출력된 <strong>First-time passkey setup</strong> 주소로 접속해 주세요. 설정 주소는 서버 시작 후 15분 동안 한 번만 유효합니다.
            </div>`
      }
      <p class="auth-footnote">로컬 테스트는 <code>http://localhost</code>, 실제 서비스는 고정된 HTTPS 도메인이 필요합니다.</p>
    </section>`;

  document.querySelector("#setup-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = event.submitter;
    const values = Object.fromEntries(new FormData(event.currentTarget));
    setBusy(button, true, "기기 확인 중…");
    try {
      const begin = await api("/api/auth/setup/options", {
        method: "POST",
        body: JSON.stringify({ setupToken, ...values }),
      });
      const response = await createPasskey(begin.options);
      const result = await api("/api/auth/setup/verify", {
        method: "POST",
        body: JSON.stringify({
          setupToken,
          flowId: begin.flowId,
          response,
        }),
      });
      toast("관리자 패스키를 등록했습니다.");
      completeAuthentication(result);
    } catch (error) {
      toast(error.message, "error");
      setBusy(button, false);
    }
  });
}

async function renderLogin() {
  app.innerHTML = `
    <section class="auth-shell">
      <img class="auth-mark" src="/icon-192.png" alt="" width="112" height="112" />
      <span class="eyebrow">Passkey sign in</span>
      <h1>패스키로 로그인하세요.</h1>
      <p>${escapeHtml(applicationSettings.name)}에 등록한 패스키를 선택하고 기기 인증을 완료해 주세요.</p>
      ${renderAuthUnsupported()}
      <button class="button primary auth-submit" id="passkey-login" type="button" ${webAuthnAvailable() ? "" : "disabled"}>패스키로 계속</button>
      <p class="auth-footnote">비밀번호 로그인은 제공하지 않습니다.</p>
    </section>`;

  document.querySelector("#passkey-login")?.addEventListener("click", async (event) => {
    const button = event.currentTarget;
    setBusy(button, true, "기기 확인 중…");
    try {
      const begin = await api("/api/auth/login/options", {
        method: "POST",
        body: "{}",
      });
      const response = await getPasskey(begin.options);
      const result = await api("/api/auth/login/verify", {
        method: "POST",
        body: JSON.stringify({ flowId: begin.flowId, response }),
      });
      toast("로그인했습니다.");
      completeAuthentication(result);
    } catch (error) {
      toast(error.message, "error");
      setBusy(button, false);
    }
  });
}

function stepFormValues(form) {
  const data = new FormData(form);
  const values = Object.fromEntries(data);
  values.enabled = data.has("enabled");
  values.inputSensitive = data.has("inputSensitive");
  values.timeoutSeconds = values.timeoutSeconds ? Number(values.timeoutSeconds) : null;
  return values;
}

function updateActiveStepCount(workflow) {
  const count = document.querySelector("#active-step-count");
  if (count) {
    count.textContent = `${workflow.steps.filter((step) => step.enabled).length}개 활성 단계`;
  }
}

function setStepAutosaveStatus(card, state, message) {
  const statusElement = card.querySelector("[data-save-status]");
  if (!statusElement) return;
  statusElement.dataset.state = state;
  statusElement.textContent = message;
}

function bindStepAutosave(card, step, workflow) {
  const form = card.querySelector(".step-form");
  const heading = card.querySelector("[data-step-heading]");
  let timer = null;
  let dirty = false;
  let revision = 0;
  let disposed = false;
  let saveQueue = Promise.resolve(true);

  const persist = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (!dirty) return saveQueue;
    if (!form.checkValidity()) {
      setStepAutosaveStatus(card, "error", "필수 항목을 확인해 주세요");
      return Promise.resolve(false);
    }

    const saveRevision = revision;
    const values = stepFormValues(form);
    dirty = false;
    setStepAutosaveStatus(card, "saving", "저장 중…");

    const operation = saveQueue.then(async () => {
      try {
        const { step: savedStep } = await api(`/api/steps/${step.id}`, {
          method: "PATCH",
          body: JSON.stringify(values),
          keepalive: true,
        });
        Object.assign(step, savedStep);
        if (!disposed && saveRevision === revision) {
          card.classList.toggle("is-disabled", !step.enabled);
          if (heading) heading.textContent = step.name;
          setStepAutosaveStatus(card, "saved", "저장됨");
          updateActiveStepCount(workflow);
        }
        return true;
      } catch (error) {
        if (!disposed && saveRevision === revision) {
          dirty = true;
          setStepAutosaveStatus(card, "error", "저장 실패");
        }
        toast(error.message, "error");
        return false;
      }
    });
    saveQueue = operation;
    return operation;
  };

  const schedule = (immediate = false) => {
    dirty = true;
    revision += 1;
    setStepAutosaveStatus(card, "pending", "저장 대기 중");
    if (timer) clearTimeout(timer);
    if (immediate) {
      void persist();
    } else {
      timer = setTimeout(() => void persist(), STEP_AUTOSAVE_DELAY);
    }
  };

  form.addEventListener("input", (event) => {
    if (event.target instanceof HTMLInputElement && event.target.type === "checkbox") {
      return;
    }
    if (event.target instanceof HTMLInputElement && event.target.name === "name" && heading) {
      heading.textContent = event.target.value.trim() || "이름 없는 단계";
    }
    schedule();
  });

  form.addEventListener("change", (event) => {
    if (event.target instanceof HTMLInputElement && event.target.type === "checkbox") {
      if (event.target.name === "enabled") {
        card.classList.toggle("is-disabled", !event.target.checked);
      }
      schedule(true);
    }
  });

  form.addEventListener("focusout", (event) => {
    if (!form.contains(event.relatedTarget)) void persist();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    void persist();
  });

  const controller = {
    flush: persist,
    discard() {
      if (timer) clearTimeout(timer);
      timer = null;
      dirty = false;
      disposed = true;
      stepAutosaveControllers.delete(controller);
      return saveQueue;
    },
  };
  stepAutosaveControllers.add(controller);
  return controller;
}

async function flushStepAutosaves() {
  const controllers = [...stepAutosaveControllers];
  if (!controllers.length) return true;
  const results = await Promise.all(controllers.map((controller) => controller.flush()));
  return results.every(Boolean);
}

async function disposeStepAutosaves() {
  const controllers = [...stepAutosaveControllers];
  await Promise.all(controllers.map((controller) => controller.discard()));
}

async function renderProjects() {
  const { projects } = await api("/api/projects");
  const running = projects.filter((project) =>
    activeRunStatuses.includes(project.recentRunStatus),
  ).length;
  const succeeded = projects.filter(
    (project) => project.recentRunStatus === "succeeded",
  ).length;

  app.innerHTML = `
    <section class="page-heading">
      <div>
        <span class="eyebrow">Workspace overview</span>
        <h1>${escapeHtml(applicationSettings.title)}</h1>
        <p>${escapeHtml(applicationSettings.description)}</p>
      </div>
      <div class="summary" aria-label="프로젝트 요약">
        <div><strong>${projects.length}</strong><span>프로젝트</span></div>
        <div><strong>${running}</strong><span>실행 중</span></div>
        <div><strong>${succeeded}</strong><span>최근 성공</span></div>
      </div>
    </section>
    <div class="split-layout">
      <section>
        <div class="section-header">
          <div><h2>프로젝트</h2><p>관련 워크플로우와 기본 작업 경로를 묶습니다.</p></div>
        </div>
        <div class="stack">
          ${
            projects.length
              ? projects
                  .map(
                    (project) => `
              <article class="project-row">
                <div>
                  <h3 class="row-title"><a class="row-link" href="#/projects/${project.id}">${escapeHtml(project.name)}</a></h3>
                  <p class="row-description">${escapeHtml(project.description || "설명이 없습니다.")}</p>
                  <div class="row-meta">
                    ${status(project.recentRunStatus)}
                    <span class="path-text" title="${escapeHtml(project.rootDirectory)}">${escapeHtml(project.rootDirectory)}</span>
                    <span>${formatDate(project.updatedAt)} 수정</span>
                  </div>
                </div>
                <span class="arrow" aria-hidden="true">→</span>
              </article>`,
                  )
                  .join("")
              : `<div class="empty-inline">아직 프로젝트가 없습니다. 오른쪽에서 첫 프로젝트를 만들어 보세요.</div>`
          }
        </div>
      </section>
      <aside class="panel sticky">
        <h2 class="panel-title">새 프로젝트</h2>
        <p class="panel-description">명령을 실행할 서버의 기존 디렉터리를 연결합니다.</p>
        <form id="create-project-form" class="form-grid">
          <div class="field">
            <label for="project-name">프로젝트 이름</label>
            <input id="project-name" name="name" required maxlength="200" placeholder="예: 사내 API" />
          </div>
          <div class="field">
            <label for="project-path">기본 작업 경로</label>
            <input id="project-path" name="rootDirectory" required placeholder="/absolute/path/to/project" />
          </div>
          <div class="field">
            <label for="project-description">설명 <span class="subtle">(선택)</span></label>
            <textarea id="project-description" name="description" placeholder="이 프로젝트에서 관리할 작업을 적어 주세요."></textarea>
          </div>
          <button class="button primary" type="submit">프로젝트 만들기</button>
        </form>
      </aside>
    </div>`;

  document.querySelector("#create-project-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = event.submitter;
    const formData = new FormData(event.currentTarget);
    setBusy(button, true);
    try {
      const { project } = await api("/api/projects", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      toast("프로젝트를 만들었습니다.");
      location.hash = `#/projects/${project.id}`;
    } catch (error) {
      toast(error.message, "error");
      setBusy(button, false);
    }
  });
}

function environmentControl(variable) {
  const id = `environment-${variable.key.toLowerCase().replaceAll("_", "-")}`;
  const required =
    variable.key === "WORKFLOW_MANAGER_DESCRIPTION" ? "" : "required";
  if (variable.control === "textarea") {
    return `<textarea id="${id}" name="${variable.key}" ${required}>${escapeHtml(variable.value)}</textarea>`;
  }
  if (variable.control === "select") {
    return `
      <select id="${id}" name="${variable.key}" ${required}>
        ${(variable.options ?? [])
          .map(
            (option) =>
              `<option value="${escapeHtml(option.value)}" ${option.value === variable.value ? "selected" : ""}>${escapeHtml(option.label)}</option>`,
          )
          .join("")}
      </select>`;
  }
  const numberAttributes =
    variable.control === "number" ? 'type="number" min="1" max="65535"' : 'type="text"';
  return `<input id="${id}" name="${variable.key}" ${numberAttributes} value="${escapeHtml(variable.value)}" ${required} autocomplete="off" />`;
}

function environmentVariableMarkup(variable) {
  const changed =
    variable.apply === "restart" && variable.value !== variable.currentValue;
  return `
    <div class="environment-variable ${changed ? "has-pending-value" : ""}">
      <div class="environment-variable-head">
        <label for="environment-${variable.key.toLowerCase().replaceAll("_", "-")}">${escapeHtml(variable.label)}</label>
        <span class="apply-badge ${variable.apply}">${variable.apply === "immediate" ? "즉시 적용" : "재시작 후 적용"}</span>
      </div>
      <p>${escapeHtml(variable.description)}</p>
      ${environmentControl(variable)}
      <div class="environment-variable-meta">
        <code>${escapeHtml(variable.key)}</code>
        ${
          variable.apply === "restart"
            ? `<span>현재 적용값: <code>${escapeHtml(variable.currentValue)}</code></span>`
            : `<span>기본값: <code>${escapeHtml(variable.defaultValue)}</code></span>`
        }
      </div>
      ${changed ? `<p class="pending-message">저장된 값이 현재 적용값과 다릅니다. 서버를 재시작해 주세요.</p>` : ""}
    </div>`;
}

async function renderSettings() {
  const [{ environment }, { passkeys }] = await Promise.all([
    loadApplicationSettings(),
    api("/api/auth/passkeys"),
  ]);
  const immediateVariables = environment.filter(
    (variable) => variable.apply === "immediate",
  );
  const restartVariables = environment.filter(
    (variable) => variable.apply === "restart",
  );

  app.innerHTML = `
    <section class="page-heading compact settings-heading">
      <div>
        <nav class="context-nav" aria-label="환경설정 화면 이동">
          <a class="context-back" href="#/projects"><span aria-hidden="true">←</span> 프로젝트 목록</a>
        </nav>
        <h1>환경설정</h1>
        <p>화면 정보와 서버 시작 환경을 허용된 변수 범위 안에서 관리합니다.</p>
      </div>
    </section>
    <div class="settings-shell">
    <form id="environment-settings-form" class="settings-form">
      <section class="panel settings-section">
        <div class="section-header">
          <div>
            <h2>화면 정보</h2>
            <p>서비스 이름과 홈 화면의 제목·설명은 저장 즉시 반영됩니다.</p>
          </div>
        </div>
        <div class="environment-list">
          ${immediateVariables.map(environmentVariableMarkup).join("")}
        </div>
      </section>
      <section class="panel settings-section">
        <div class="section-header">
          <div>
            <h2>서버 환경 변수</h2>
            <p>접근 범위와 데이터 디렉터리는 저장 후 서버를 재시작해야 적용됩니다.</p>
          </div>
        </div>
        <div class="settings-notice">
          바인딩 주소, 포트, 데이터베이스 파일은 이 화면에서 다루지 않습니다. 해당 값은 <code>.env</code>에서 직접 관리해 주세요.
        </div>
        <div class="environment-list">
          ${restartVariables.map(environmentVariableMarkup).join("")}
        </div>
      </section>
      <div class="settings-actions">
        <button class="button primary" type="submit">환경설정 저장</button>
      </div>
    </form>
    <section class="panel settings-section">
      <div class="section-header">
        <div>
          <h2>관리자 패스키</h2>
          <p>분실에 대비해 서로 다른 기기에 패스키를 두 개 이상 등록하는 것을 권장합니다.</p>
        </div>
      </div>
      <div class="passkey-list">
        ${passkeys
          .map(
            (passkey) => `
              <div class="passkey-row">
                <div class="passkey-icon" aria-hidden="true">⌁</div>
                <div>
                  <strong>${escapeHtml(passkey.name)}</strong>
                  <p>${passkey.deviceType === "multiDevice" ? "동기화 가능 패스키" : "이 기기에 저장된 패스키"} · ${passkey.backedUp ? "백업됨" : "백업 확인 안 됨"}</p>
                  <span>등록 ${formatDate(passkey.createdAt)} · ${passkey.lastUsedAt ? `최근 사용 ${formatDate(passkey.lastUsedAt)}` : "아직 사용 안 함"}</span>
                </div>
                <button class="button small danger" type="button" data-delete-passkey="${escapeHtml(passkey.id)}" ${passkeys.length === 1 ? "disabled title=\"마지막 패스키는 삭제할 수 없습니다.\"" : ""}>삭제</button>
              </div>`,
          )
          .join("")}
      </div>
      <form id="add-passkey-form" class="add-passkey-form">
        <div class="field">
          <label>새 패스키 이름</label>
          <input name="passkeyName" maxlength="80" placeholder="예: 업무용 MacBook" required />
        </div>
        <button class="button primary" type="submit" ${webAuthnAvailable() ? "" : "disabled"}>새 패스키 등록</button>
      </form>
    </section>
    </div>`;

  document
    .querySelector("#environment-settings-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const button = event.submitter;
      const values = Object.fromEntries(new FormData(event.currentTarget));
      setBusy(button, true, "저장 중…");
      try {
        const result = await api("/api/settings", {
          method: "PATCH",
          body: JSON.stringify({ values }),
        });
        applyApplicationSettings(result.settings);
        toast(
          result.restartRequired
            ? "저장했습니다. 서버 환경 변수는 재시작 후 적용됩니다."
            : "환경설정을 저장했습니다.",
        );
        await renderSettings();
      } catch (error) {
        toast(error.message, "error");
        setBusy(button, false);
      }
    });

  document
    .querySelector("#add-passkey-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const button = event.submitter;
      const values = Object.fromEntries(new FormData(event.currentTarget));
      setBusy(button, true, "기기 확인 중…");
      try {
        const begin = await api("/api/auth/passkeys/options", {
          method: "POST",
          body: JSON.stringify(values),
        });
        const response = await createPasskey(begin.options);
        await api("/api/auth/passkeys/verify", {
          method: "POST",
          body: JSON.stringify({ flowId: begin.flowId, response }),
        });
        toast("새 패스키를 등록했습니다.");
        await renderSettings();
      } catch (error) {
        toast(error.message, "error");
        setBusy(button, false);
      }
    });

  document.querySelectorAll("[data-delete-passkey]").forEach((button) => {
    button.addEventListener("click", async () => {
      if (!confirm("이 패스키를 삭제할까요? 해당 기기에서는 더 이상 로그인할 수 없습니다.")) {
        return;
      }
      setBusy(button, true, "삭제 중…");
      try {
        await api(
          `/api/auth/passkeys/${encodeURIComponent(button.dataset.deletePasskey)}`,
          { method: "DELETE" },
        );
        toast("패스키를 삭제했습니다.");
        await renderSettings();
      } catch (error) {
        toast(error.message, "error");
        setBusy(button, false);
      }
    });
  });
}

function runRows(runs) {
  if (!runs.length) return `<div class="empty-inline">아직 실행 이력이 없습니다.</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>워크플로우</th><th>상태</th><th>시작</th><th>소요 시간</th><th>종료 코드</th></tr></thead>
        <tbody>
          ${runs
            .map(
              (run) => `
            <tr data-href="#/runs/${run.id}" tabindex="0">
              <td>${escapeHtml(run.workflowName)}</td>
              <td>${status(run.status)}</td>
              <td>${formatDate(run.startedAt ?? run.createdAt)}</td>
              <td>${formatDuration(run.startedAt, run.finishedAt)}</td>
              <td>${run.exitCode ?? "—"}</td>
            </tr>`,
            )
            .join("")}
        </tbody>
      </table>
    </div>`;
}

async function renderProject(projectId) {
  const { project, workflows, runs } = await api(`/api/projects/${projectId}`);
  const projectBusy = runs.some((run) => activeRunStatuses.includes(run.status));
  app.innerHTML = `
    <section class="page-heading compact">
      <div>
        <nav class="context-nav" aria-label="프로젝트 이동">
          <a class="context-back" href="#/projects"><span aria-hidden="true">←</span> 프로젝트 목록</a>
        </nav>
        <h1>${escapeHtml(project.name)}</h1>
        <p>${escapeHtml(project.description || "이 프로젝트의 워크플로우와 실행 이력을 관리합니다.")}</p>
      </div>
      <div class="button-row">
        <button class="button danger" id="delete-project">프로젝트 삭제</button>
      </div>
    </section>
    <div class="split-layout">
      <section>
        <div class="section-header">
          <div><h2>워크플로우</h2><p>활성화된 셸 단계를 위에서 아래 순서로 실행합니다.</p></div>
        </div>
        <div class="stack">
          ${
            workflows.length
              ? workflows
                  .map(
                    (workflow) => `
              <article class="workflow-row">
                <div>
                  <h3 class="row-title"><a class="row-link" href="#/workflows/${workflow.id}">${escapeHtml(workflow.name)}</a></h3>
                  <p class="row-description">${escapeHtml(workflow.description || "설명이 없습니다.")}</p>
                  <div class="row-meta">
                    ${status(workflow.recentRunStatus)}
                    <span>${workflow.activeStepCount ?? 0}개 활성 단계 · ${workflow.stepCount ?? 0}개 단계</span>
                    <span>${formatDate(workflow.updatedAt)} 수정</span>
                  </div>
                </div>
                <div class="workflow-row-actions${(workflow.activeStepCount ?? 0) > 0 ? "" : " is-unavailable"}">
                  ${(workflow.activeStepCount ?? 0) > 0
                    ? '<button class="button small accent" type="button" data-action="run-workflow" data-workflow-id="' +
                      escapeHtml(workflow.id) +
                      '" ' +
                      (projectBusy
                        ? 'disabled title="이 프로젝트에서 다른 워크플로우가 실행 중입니다."'
                        : 'aria-label="' + escapeHtml(workflow.name) + ' 실행"') +
                      '>▶ 실행</button>'
                    : '<span class="workflow-run-unavailable">활성 단계 없음</span><span class="arrow" aria-hidden="true">→</span>'}
                </div>
              </article>`,
                  )
                  .join("")
              : `<div class="empty-inline">워크플로우가 없습니다. 새 흐름을 추가해 보세요.</div>`
          }
        </div>
      </section>
      <aside class="stack">
        <details class="panel collapsible-panel">
          <summary class="panel-summary">
            <span class="panel-summary-copy">
              <span class="panel-title" role="heading" aria-level="2">프로젝트 설정</span>
              <span class="panel-description">이 프로젝트의 표시 정보와 기본 작업 경로입니다.</span>
            </span>
            <span class="panel-toggle" aria-hidden="true"></span>
          </summary>
          <form id="edit-project-form" class="form-grid">
            <div class="field"><label for="edit-project-name">이름</label><input id="edit-project-name" name="name" value="${escapeHtml(project.name)}" required /></div>
            <div class="field"><label for="edit-project-path">기본 작업 경로</label><input id="edit-project-path" name="rootDirectory" value="${escapeHtml(project.rootDirectory)}" required /></div>
            <div class="field"><label for="edit-project-description">설명</label><textarea id="edit-project-description" name="description">${escapeHtml(project.description)}</textarea></div>
            <button class="button" type="submit">설정 저장</button>
          </form>
        </details>
        <section class="panel">
          <h2 class="panel-title">새 워크플로우</h2>
          <p class="panel-description">작업 흐름의 이름을 정하고 단계를 추가합니다.</p>
          <form id="create-workflow-form" class="form-grid">
            <div class="field"><label for="workflow-name">이름</label><input id="workflow-name" name="name" required placeholder="예: 프로덕션 배포" /></div>
            <div class="field"><label for="workflow-description">설명</label><textarea id="workflow-description" name="description" placeholder="이 흐름이 수행하는 작업"></textarea></div>
            <button class="button primary" type="submit">워크플로우 만들기</button>
          </form>
        </section>
      </aside>
    </div>
    <section class="section">
      <div class="section-header"><div><h2>최근 실행</h2><p>완료된 작업과 진행 중인 작업을 다시 확인할 수 있습니다.</p></div></div>
      ${runRows(runs)}
    </section>`;

  document.querySelectorAll("[data-href]").forEach((row) => {
    const navigate = () => (location.hash = row.dataset.href);
    row.addEventListener("click", navigate);
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") navigate();
    });
  });

  document.querySelectorAll('[data-action="run-workflow"]').forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      setBusy(button, true, "시작 중…");
      try {
        const { run } = await api(`/api/workflows/${button.dataset.workflowId}/runs`, {
          method: "POST",
        });
        location.hash = `#/runs/${run.id}`;
      } catch (error) {
        toast(error.message, "error");
        setBusy(button, false);
      }
    });
  });

  document.querySelector("#edit-project-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = event.submitter;
    setBusy(button, true);
    try {
      await api(`/api/projects/${projectId}`, {
        method: "PATCH",
        body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))),
      });
      toast("프로젝트 설정을 저장했습니다.");
      await renderProject(projectId);
    } catch (error) {
      toast(error.message, "error");
      setBusy(button, false);
    }
  });

  document.querySelector("#create-workflow-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = event.submitter;
    setBusy(button, true);
    try {
      const { workflow } = await api(`/api/projects/${projectId}/workflows`, {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))),
      });
      toast("워크플로우를 만들었습니다.");
      location.hash = `#/workflows/${workflow.id}`;
    } catch (error) {
      toast(error.message, "error");
      setBusy(button, false);
    }
  });

  document.querySelector("#delete-project").addEventListener("click", async () => {
    if (!confirm(`"${project.name}" 프로젝트와 모든 실행 이력을 삭제할까요?`)) return;
    try {
      await api(`/api/projects/${projectId}`, { method: "DELETE" });
      toast("프로젝트를 삭제했습니다.");
      location.hash = "#/projects";
    } catch (error) {
      toast(error.message, "error");
    }
  });
}

function stepEditor(step, index, count) {
  return `
    <article class="step-card ${step.enabled ? "" : "is-disabled"}" data-step-id="${step.id}">
      <div class="step-index">${index + 1}</div>
      <div class="step-content">
        <div class="step-head">
          <div class="step-title">
            <h3 data-step-heading>${escapeHtml(step.name)}</h3>
            <span class="autosave-status" data-save-status data-state="saved" role="status" aria-live="polite">저장됨</span>
          </div>
          <div class="button-row">
            <button class="button small" type="button" data-action="up" ${index === 0 ? "disabled" : ""} aria-label="단계를 위로 이동">↑</button>
            <button class="button small" type="button" data-action="down" ${index === count - 1 ? "disabled" : ""} aria-label="단계를 아래로 이동">↓</button>
            <button class="button small danger" type="button" data-action="delete">삭제</button>
          </div>
        </div>
        <form class="form-grid step-form">
          <div class="field-row">
            <div class="field"><label>단계 이름</label><input name="name" value="${escapeHtml(step.name)}" required /></div>
            <div class="field"><label>하위 작업 경로</label><input name="workingDirectory" value="${escapeHtml(step.workingDirectory)}" placeholder="비우면 프로젝트 루트" /></div>
          </div>
          <div class="field"><label>셸 명령</label><textarea class="command-input" name="command" required spellcheck="false">${escapeHtml(step.command)}</textarea></div>
          <div class="input-settings">
            <div class="field">
              <label>실행 전 입력 요청</label>
              <input name="inputPrompt" value="${escapeHtml(step.inputPrompt)}" maxlength="500" placeholder="비우면 입력 없이 실행" />
              <span class="field-help">입력값 한 줄을 명령의 표준 입력으로 전달합니다. 예: sudo 비밀번호</span>
            </div>
            <label class="checkbox"><input name="inputSensitive" type="checkbox" ${step.inputSensitive ? "checked" : ""} /> 민감한 입력으로 처리</label>
          </div>
          <div class="field-row">
            <div class="field"><label>타임아웃(초)</label><input name="timeoutSeconds" type="number" min="1" max="86400" value="${step.timeoutSeconds ?? ""}" placeholder="제한 없음" /></div>
            <div class="field">
              <span class="label">실행 설정</span>
              <label class="checkbox"><input name="enabled" type="checkbox" ${step.enabled ? "checked" : ""} /> 이 단계 활성화</label>
            </div>
          </div>
        </form>
      </div>
    </article>`;
}

async function renderWorkflow(workflowId) {
  await disposeStepAutosaves();
  const { workflow } = await api(`/api/workflows/${workflowId}`);
  const { project } = await api(`/api/projects/${workflow.projectId}`);
  const hasActiveSteps = workflow.steps.some((step) => step.enabled);
  app.innerHTML = `
    <section class="page-heading compact">
      <div>
        <nav class="context-nav" aria-label="워크플로우 이동">
          <a class="context-back" href="#/projects/${project.id}"><span aria-hidden="true">←</span> 프로젝트: ${escapeHtml(project.name)}</a>
          <a class="context-link" href="#/projects">프로젝트 목록</a>
        </nav>
        <h1>${escapeHtml(workflow.name)}</h1>
        <p>${escapeHtml(workflow.description || "단계를 구성하고 실행할 수 있습니다.")}</p>
      </div>
      <div class="run-actions">
        <span id="active-step-count">${workflow.steps.filter((step) => step.enabled).length}개 활성 단계</span>
        <button class="button accent" id="run-workflow" ${hasActiveSteps ? "" : 'disabled title="활성화된 단계를 하나 이상 추가해 주세요."'}>▶ 실행</button>
      </div>
    </section>
    <div class="split-layout">
      <section>
        <div class="section-header"><div><h2>실행 단계</h2><p>입력을 멈추거나 다른 곳으로 이동하면 자동 저장됩니다. 위·아래 버튼으로 실행 순서를 변경합니다.</p></div></div>
        <div class="step-list" id="step-list">
          ${
            workflow.steps.length
              ? workflow.steps
                  .map((step, index) => stepEditor(step, index, workflow.steps.length))
                  .join("")
              : `<div class="empty-inline">아직 단계가 없습니다. 오른쪽에서 첫 명령을 추가하세요.</div>`
          }
        </div>
      </section>
      <aside class="stack">
        <details class="panel collapsible-panel">
          <summary class="panel-summary">
            <span class="panel-summary-copy">
              <span class="panel-title" role="heading" aria-level="2">워크플로우 설정</span>
              <span class="panel-description">목록에서 흐름을 구분할 이름과 설명입니다.</span>
            </span>
            <span class="panel-toggle" aria-hidden="true"></span>
          </summary>
          <form id="edit-workflow-form" class="form-grid">
            <div class="field"><label>이름</label><input name="name" value="${escapeHtml(workflow.name)}" required /></div>
            <div class="field"><label>설명</label><textarea name="description">${escapeHtml(workflow.description)}</textarea></div>
            <div class="button-row">
              <button class="button" type="submit">설정 저장</button>
              <button class="button danger" type="button" id="delete-workflow">삭제</button>
            </div>
          </form>
        </details>
        <section class="panel sticky">
          <h2 class="panel-title">새 단계</h2>
          <p class="panel-description">일반 셸 명령을 하나의 순차 실행 단계로 추가합니다.</p>
          <form id="create-step-form" class="form-grid">
            <div class="field"><label>단계 이름</label><input name="name" required placeholder="예: 테스트 실행" /></div>
            <div class="field"><label>셸 명령</label><textarea class="command-input" name="command" required placeholder="bun test" spellcheck="false"></textarea></div>
            <div class="field"><label>하위 작업 경로</label><input name="workingDirectory" placeholder="비우면 프로젝트 루트" /></div>
            <div class="field"><label>타임아웃(초)</label><input name="timeoutSeconds" type="number" min="1" max="86400" placeholder="제한 없음" /></div>
            <div class="field"><label>실행 전 입력 요청</label><input name="inputPrompt" maxlength="500" placeholder="예: 관리자 비밀번호" /><span class="field-help">비우면 입력 없이 바로 실행합니다.</span></div>
            <label class="checkbox"><input name="inputSensitive" type="checkbox" checked /> 민감한 입력으로 처리</label>
            <button class="button primary" type="submit">단계 추가</button>
          </form>
        </section>
      </aside>
    </div>`;

  document.querySelector("#edit-workflow-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = event.submitter;
    setBusy(button, true);
    if (!(await flushStepAutosaves())) {
      toast("저장되지 않은 단계가 있어 설정을 변경하지 않았습니다.", "error");
      setBusy(button, false);
      return;
    }
    try {
      await api(`/api/workflows/${workflowId}`, {
        method: "PATCH",
        body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))),
      });
      toast("워크플로우 설정을 저장했습니다.");
      await renderWorkflow(workflowId);
    } catch (error) {
      toast(error.message, "error");
      setBusy(button, false);
    }
  });

  document.querySelector("#create-step-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = event.submitter;
    const values = Object.fromEntries(new FormData(event.currentTarget));
    values.timeoutSeconds = values.timeoutSeconds ? Number(values.timeoutSeconds) : null;
    values.inputSensitive = new FormData(event.currentTarget).has("inputSensitive");
    setBusy(button, true);
    if (!(await flushStepAutosaves())) {
      toast("저장되지 않은 단계가 있어 새 단계를 추가하지 않았습니다.", "error");
      setBusy(button, false);
      return;
    }
    try {
      await api(`/api/workflows/${workflowId}/steps`, {
        method: "POST",
        body: JSON.stringify(values),
      });
      toast("단계를 추가했습니다.");
      await renderWorkflow(workflowId);
    } catch (error) {
      toast(error.message, "error");
      setBusy(button, false);
    }
  });

  document.querySelectorAll(".step-card").forEach((card) => {
    const stepId = card.dataset.stepId;
    const step = workflow.steps.find((item) => item.id === stepId);
    const autosave = bindStepAutosave(card, step, workflow);

    card.querySelector('[data-action="delete"]').addEventListener("click", async () => {
      if (!confirm("이 단계를 삭제할까요?")) return;
      await autosave.discard();
      if (!(await flushStepAutosaves())) {
        toast("다른 단계의 변경 사항을 저장한 뒤 다시 시도해 주세요.", "error");
        return;
      }
      try {
        await api(`/api/steps/${stepId}`, { method: "DELETE" });
        toast("단계를 삭제했습니다.");
        await renderWorkflow(workflowId);
      } catch (error) {
        toast(error.message, "error");
      }
    });

    card.querySelectorAll('[data-action="up"], [data-action="down"]').forEach((button) => {
      button.addEventListener("click", async () => {
        if (!(await flushStepAutosaves())) {
          toast("변경 사항을 저장한 뒤 순서를 바꿀 수 있습니다.", "error");
          return;
        }
        const stepIds = workflow.steps.map((step) => step.id);
        const currentIndex = stepIds.indexOf(stepId);
        const targetIndex = button.dataset.action === "up" ? currentIndex - 1 : currentIndex + 1;
        [stepIds[currentIndex], stepIds[targetIndex]] = [
          stepIds[targetIndex],
          stepIds[currentIndex],
        ];
        try {
          await api(`/api/workflows/${workflowId}/steps/reorder`, {
            method: "POST",
            body: JSON.stringify({ stepIds }),
          });
          await renderWorkflow(workflowId);
        } catch (error) {
          toast(error.message, "error");
        }
      });
    });
  });

  document.querySelector("#run-workflow").addEventListener("click", async (event) => {
    const button = event.currentTarget;
    setBusy(button, true, "저장 확인 중…");
    if (!(await flushStepAutosaves())) {
      toast("저장되지 않은 단계가 있어 실행을 시작하지 않았습니다.", "error");
      setBusy(button, false);
      return;
    }
    if (!workflow.steps.some((step) => step.enabled)) {
      toast("활성화된 단계를 하나 이상 추가해 주세요.", "error");
      setBusy(button, false);
      return;
    }
    button.textContent = "시작 중…";
    try {
      const { run } = await api(`/api/workflows/${workflowId}/runs`, {
        method: "POST",
      });
      location.hash = `#/runs/${run.id}`;
    } catch (error) {
      toast(error.message, "error");
      setBusy(button, false);
    }
  });

  document.querySelector("#delete-workflow").addEventListener("click", async () => {
    if (!confirm(`"${workflow.name}" 워크플로우를 삭제할까요? 과거 실행 이력은 유지됩니다.`)) return;
    await disposeStepAutosaves();
    try {
      await api(`/api/workflows/${workflowId}`, { method: "DELETE" });
      toast("워크플로우를 삭제했습니다.");
      location.hash = `#/projects/${project.id}`;
    } catch (error) {
      toast(error.message, "error");
    }
  });
}

function runStepMarkup(step) {
  return `
    <div class="run-step" data-step-run-id="${step.id}" data-status="${step.status}">
      <span class="run-step-marker" aria-hidden="true"></span>
      <div>
        <div class="run-step-name">${escapeHtml(step.stepName)}</div>
        <div class="run-step-meta"><span data-step-status>${statusLabels[step.status] ?? step.status}</span> · <span data-step-duration>${formatDuration(step.startedAt, step.finishedAt)}</span></div>
      </div>
    </div>`;
}

function appendLog(log) {
  if (seenLogSeqs.has(log.seq)) return;
  seenLogSeqs.add(log.seq);
  const output = document.querySelector("#log-output");
  if (!output) return;
  const shouldScroll =
    output.scrollHeight - output.scrollTop - output.clientHeight < 80;
  const span = document.createElement("span");
  span.className = `log-${log.stream}`;
  span.textContent = log.content;
  output.append(span);
  if (shouldScroll) output.scrollTop = output.scrollHeight;
}

function inputRequestMarkup(run) {
  const request = run.pendingInput;
  if (!request) return "";
  return `
    <section class="input-request" aria-labelledby="input-request-title">
      <div>
        <span class="eyebrow">Input required</span>
        <h2 id="input-request-title">${escapeHtml(request.prompt)}</h2>
        <p>${request.sensitive
          ? "민감한 입력입니다. 값은 실행 기록과 로그에 저장하지 않습니다."
          : "입력값은 이번 단계의 표준 입력으로 한 번 전달하며 저장하지 않습니다."}</p>
      </div>
      <form id="run-input-form" class="input-request-form">
        <input
          name="value"
          type="${request.sensitive ? "password" : "text"}"
          maxlength="10000"
          autocomplete="off"
          spellcheck="false"
          aria-label="${escapeHtml(request.prompt)}"
          required
        />
        <button class="button accent" type="submit">입력하고 계속</button>
      </form>
    </section>`;
}

function bindInputRequest(run) {
  const region = document.querySelector("#input-request-region");
  if (!region) return;
  region.innerHTML = inputRequestMarkup(run);
  const form = region.querySelector("#run-input-form");
  if (!form || !run.pendingInput) return;
  form.querySelector("input")?.focus();
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = event.submitter;
    const input = form.elements.namedItem("value");
    const value = input.value;
    input.value = "";
    setBusy(button, true, "전달 중…");
    try {
      const { run: updated } = await api(`/api/runs/${run.id}/input`, {
        method: "POST",
        body: JSON.stringify({ requestId: run.pendingInput.id, value }),
      });
      updateRunView(updated);
    } catch (error) {
      toast(error.message, "error");
      setBusy(button, false);
      input.focus();
    }
  });
}

function updateRunView(run) {
  currentRun = run;
  const runStatus = document.querySelector("#run-status");
  if (runStatus) runStatus.outerHTML = status(run.status).replace("<span ", '<span id="run-status" ');
  const duration = document.querySelector("#run-duration");
  if (duration) duration.textContent = formatDuration(run.startedAt, run.finishedAt);
  const cancel = document.querySelector("#cancel-run");
  if (cancel) cancel.disabled = !activeRunStatuses.includes(run.status);
  bindInputRequest(run);

  for (const step of run.steps) {
    const element = document.querySelector(`[data-step-run-id="${step.id}"]`);
    if (!element) continue;
    element.dataset.status = step.status;
    element.querySelector("[data-step-status]").textContent =
      statusLabels[step.status] ?? step.status;
    element.querySelector("[data-step-duration]").textContent = formatDuration(
      step.startedAt,
      step.finishedAt,
    );
  }

  const toolbar = document.querySelector("#stream-label");
  if (run.status === "waiting_input") {
    if (toolbar) toolbar.textContent = "사용자 입력 대기 중";
  } else if (activeRunStatuses.includes(run.status)) {
    if (toolbar) toolbar.textContent = "실시간 로그 연결됨";
  } else if (!activeRunStatuses.includes(run.status)) {
    if (toolbar) toolbar.textContent = "실행 완료 · 저장된 로그";
    setTimeout(closeRunStream, 250);
  }
}

async function renderRun(runId) {
  const [{ run }, { logs }] = await Promise.all([
    api(`/api/runs/${runId}`),
    api(`/api/runs/${runId}/logs`),
  ]);
  currentRun = run;
  seenLogSeqs = new Set();
  app.innerHTML = `
    <section class="page-heading compact">
      <div>
        <nav class="context-nav" aria-label="실행 화면 이동">
          <a class="context-back" href="#/projects/${run.projectId}"><span aria-hidden="true">←</span> 프로젝트: ${escapeHtml(run.projectName)}</a>
          ${run.workflowId ? `<a class="context-link" href="#/workflows/${run.workflowId}">워크플로우 편집</a>` : ""}
          <a class="context-link" href="#/projects">프로젝트 목록</a>
        </nav>
        <h1>${escapeHtml(run.workflowName)}</h1>
        <p>실행 단계와 표준 출력·오류 로그를 시간순으로 확인합니다.</p>
      </div>
      <div class="run-actions">
        <span class="run-id">${escapeHtml(run.id.slice(0, 12))}</span>
        ${status(run.status).replace("<span ", '<span id="run-status" ')}
        <button class="button danger" id="cancel-run" ${activeRunStatuses.includes(run.status) ? "" : "disabled"}>실행 취소</button>
      </div>
    </section>
    <div id="input-request-region">${inputRequestMarkup(run)}</div>
    <section class="run-shell">
      <aside class="run-sidebar">
        <span class="eyebrow">Execution</span>
        <h2>${formatDate(run.startedAt ?? run.createdAt)}</h2>
        <p>소요 시간 <span id="run-duration">${formatDuration(run.startedAt, run.finishedAt)}</span></p>
        <div class="run-step-list">
          ${
            run.steps.length
              ? run.steps.map(runStepMarkup).join("")
              : `<div class="empty-inline">활성 단계가 없습니다.</div>`
          }
        </div>
      </aside>
      <div class="log-pane">
        <div class="log-toolbar">
          <span class="live-dot" id="live-dot"></span>
          <span id="stream-label">${run.status === "waiting_input" ? "사용자 입력 대기 중" : activeRunStatuses.includes(run.status) ? "실시간 로그 연결 중" : "저장된 로그"}</span>
          <button type="button" id="scroll-log">맨 아래로 ↓</button>
        </div>
        <pre class="log-output" id="log-output" aria-live="polite"></pre>
      </div>
    </section>`;

  logs.forEach(appendLog);
  const output = document.querySelector("#log-output");
  output.scrollTop = output.scrollHeight;
  bindInputRequest(run);

  document.querySelector("#scroll-log").addEventListener("click", () => {
    output.scrollTop = output.scrollHeight;
  });
  document.querySelector("#cancel-run").addEventListener("click", async (event) => {
    if (!confirm("현재 실행을 취소할까요? 실행 중인 하위 프로세스도 종료됩니다.")) return;
    setBusy(event.currentTarget, true, "취소 중…");
    try {
      const { run: updated } = await api(`/api/runs/${runId}/cancel`, {
        method: "POST",
      });
      updateRunView(updated);
    } catch (error) {
      toast(error.message, "error");
      setBusy(event.currentTarget, false);
    }
  });

  if (activeRunStatuses.includes(run.status)) {
    activeEventSource = new EventSource(`/api/runs/${runId}/events?after=${Math.max(0, ...seenLogSeqs)}`);
    activeEventSource.addEventListener("open", () => {
      document.querySelector("#live-dot")?.classList.remove("disconnected");
      const label = document.querySelector("#stream-label");
      if (label) label.textContent = "실시간 로그 연결됨";
    });
    activeEventSource.addEventListener("run", (event) => {
      updateRunView(JSON.parse(event.data));
    });
    activeEventSource.addEventListener("log", (event) => {
      appendLog(JSON.parse(event.data));
    });
    activeEventSource.addEventListener("error", () => {
      document.querySelector("#live-dot")?.classList.add("disconnected");
      const label = document.querySelector("#stream-label");
      if (label && activeRunStatuses.includes(currentRun?.status)) {
        label.textContent = "연결 재시도 중";
      }
    });
  } else {
    document.querySelector("#live-dot")?.classList.add("disconnected");
  }
}

async function route() {
  const autosavesComplete = await flushStepAutosaves();
  if (!autosavesComplete) {
    toast("일부 단계의 변경 사항을 저장하지 못했습니다.", "error");
  }
  await disposeStepAutosaves();
  closeRunStream();
  app.innerHTML = `<div class="loading-view"><span class="spinner" aria-hidden="true"></span><p>화면을 불러오는 중입니다.</p></div>`;
  const hash = location.hash.replace(/^#\/?/, "");
  const [hashPath, hashQuery = ""] = hash.split("?", 2);
  const path = hashPath.split("/").filter(Boolean);
  const searchParams = new URLSearchParams(hashQuery);
  try {
    if (!authChecked) {
      await loadAuthStatus();
    }
    if (!currentAuth.configured) {
      if (path[0] !== "setup") {
        location.hash = "#/setup";
        return;
      }
      await renderSetup(searchParams);
      app.focus({ preventScroll: true });
      return;
    }
    if (!currentAuth.authenticated) {
      if (path[0] !== "login") {
        location.hash = "#/login";
        return;
      }
      await renderLogin();
      app.focus({ preventScroll: true });
      return;
    }
    if (path[0] === "login" || path[0] === "setup") {
      location.hash = "#/projects";
      return;
    }
    if (!settingsLoaded) {
      await loadApplicationSettings();
    }
    if (!path.length || path[0] === "projects" && path.length === 1) {
      await renderProjects();
    } else if (path[0] === "settings" && path.length === 1) {
      await renderSettings();
    } else if (path[0] === "projects" && path[1]) {
      await renderProject(path[1]);
    } else if (path[0] === "workflows" && path[1]) {
      await renderWorkflow(path[1]);
    } else if (path[0] === "runs" && path[1]) {
      await renderRun(path[1]);
    } else {
      location.hash = "#/projects";
      return;
    }
    app.focus({ preventScroll: true });
  } catch (error) {
    showError(error);
  }
}

window.addEventListener("hashchange", route);
logoutButton.addEventListener("click", async () => {
  setBusy(logoutButton, true, "로그아웃 중…");
  try {
    await api("/api/auth/logout", { method: "POST", body: "{}" });
    currentAuth = {
      configured: true,
      authenticated: false,
      user: null,
      csrfToken: null,
    };
    authChecked = true;
    setBusy(logoutButton, false);
    updateAuthChrome();
    const alreadyOnLogin = location.hash === "#/login";
    location.hash = "#/login";
    if (alreadyOnLogin) void route();
  } catch (error) {
    toast(error.message, "error");
    setBusy(logoutButton, false);
  }
});
window.addEventListener("beforeunload", () => {
  void flushStepAutosaves();
  closeRunStream();
});
route();
