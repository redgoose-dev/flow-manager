# FlowManager Workflow Manager

한 대의 서버에서 셸 명령으로 구성된 워크플로우를 만들고 실행하는 셀프 호스팅 웹 애플리케이션입니다.

프로젝트별 기본 작업 경로, 순차 실행 단계, 실행 중 한 줄 입력, 실시간 stdout/stderr, 취소와 타임아웃, 과거 실행 이력을 관리합니다. Git, Docker, Bun 같은 특정 도구의 동작을 내장하지 않으며 필요한 작업을 일반 셸 명령으로 표현합니다.

## Codex로 개발하기

이 프로젝트는 초기 구현부터 Codex를 중심으로 개발·관리합니다. 일관된 구현과 검증을 위해 Codex 사용을 권장하며, 저장소의 개발 규칙과 보안 불변 조건은 [`AGENTS.md`](./AGENTS.md)에서 관리합니다.

다른 코딩 에이전트를 사용하는 경우에도 작업을 시작하기 전에 `AGENTS.md`를 읽고 해당 지침을 따르도록 설정하세요. 지침과 실제 동작이 달라지지 않도록 기능 변경 시 관련 테스트와 README를 함께 갱신합니다.

## 요구 사항

- macOS 또는 Linux
- [Bun](https://bun.sh) 1.1 이상
- 워크플로우 명령을 실행할 서버 디렉터리에 대한 읽기·쓰기 권한

## 설치와 실행

```bash
bun install
bun run start
```

서버를 시작하면 터미널에 로컬 주소와 내부 네트워크 주소가 표시됩니다. 아직 관리자가 없으면 15분 동안 한 번만 사용할 수 있는 최초 패스키 설정 주소도 함께 출력됩니다.

```text
Workflow Manager:
  Local: http://localhost:3000/
  Network: http://192.168.0.20:3000/

First-time passkey setup (valid for 15 minutes):
  http://localhost:3000/#/setup?token=...
```

처음에는 `Local` 아래의 설정 주소를 열고 관리자 이름과 패스키 이름을 입력한 뒤 기기 인증을 완료합니다. 설정 토큰은 URL fragment에만 들어가므로 HTTP 요청과 서버 접근 로그로 전달되지 않으며, 패스키 등록이 끝나면 즉시 폐기됩니다.

개발 중 파일 변경을 감지해 서버를 다시 시작하려면 다음 명령을 사용합니다.

```bash
bun run dev
```

## 빌드와 릴리스

운영 서버에는 개발 소스 대신 빌드 산출물이 들어 있는 `release` 브랜치만 배포할 수 있습니다.

```bash
# 현재 소스로 dist/ 산출물만 생성
bun run build

# 테스트, 빌드, release 브랜치 커밋과 자동 태그 생성
bun run release

# 릴리스 커밋과 태그를 origin에 함께 전송
bun run release:push
```

`bun run release`는 `package.json`의 major·minor 버전과 기존 태그를 기준으로 패치 버전을 자동 증가시킵니다. 예를 들어 기존 태그가 `v0.1.2`이면 다음 릴리스는 `v0.1.3`입니다. 작업 트리가 깨끗할 때만 릴리스를 만들며, `release` 브랜치에는 번들된 서버 파일과 `web/` 정적 자산만 커밋합니다.

`.env`, `data/`, SQLite 데이터베이스와 로그는 릴리스 브랜치에 포함하지 않습니다. 운영 서버는 `release` 브랜치를 받은 뒤 Bun으로 `index.js`를 실행하고, 운영 데이터는 별도 디렉터리에 보관해야 합니다.

기본 설정은 환경 변수로 바꿀 수 있습니다.

| 환경 변수 | 기본값 | 설명 |
| --- | --- | --- |
| `WORKFLOW_MANAGER_NAME` | `FlowManager` | 헤더와 브라우저에 표시할 서비스 이름 |
| `WORKFLOW_MANAGER_TAGLINE` | `Self-hosted workflow manager` | 헤더에서 서비스 이름 옆에 표시할 보조 문구 |
| `WORKFLOW_MANAGER_TITLE` | `서버의 반복 작업을 한 흐름으로.` | 프로젝트 목록 화면의 제목 |
| `WORKFLOW_MANAGER_DESCRIPTION` | `프로젝트별 셸 워크플로우를…` | 프로젝트 목록 화면과 메타 정보의 설명 |
| `HOST` | `0.0.0.0` | HTTP 서버 바인딩 주소 |
| `PORT` | `3000` | HTTP 서버 포트 |
| `WORKFLOW_MANAGER_ACCESS_MODE` | `private` | `private`: 사설망·루프백 허용, `local`: 루프백만 허용 |
| `WORKFLOW_MANAGER_DATA_DIR` | `<현재 디렉터리>/data` | 데이터 디렉터리 |
| `WORKFLOW_MANAGER_DB` | `<데이터 디렉터리>/workflow-manager.sqlite` | SQLite 파일 경로 |
| `WORKFLOW_MANAGER_PUBLIC_DIR` | `<실행 파일 디렉터리>/web` | 빌드된 정적 웹 자산 디렉터리 |
| `WORKFLOW_MANAGER_RP_ID` | `localhost` | 패스키 Relying Party ID. 서비스 도메인 또는 그 상위 도메인 |
| `WORKFLOW_MANAGER_RP_NAME` | 서비스 이름 | 패스키 등록 화면에 표시할 서비스 이름 |
| `WORKFLOW_MANAGER_ORIGIN` | `http://localhost:<PORT>` | 패스키를 등록·사용할 정확한 origin |

헤더의 `환경설정` 화면에서는 서비스 이름·헤더 보조 문구·홈 제목·설명을 즉시 변경할 수 있습니다. 접근 범위와 데이터 디렉터리는 프로젝트 루트의 `.env`에 저장된 뒤 서버를 재시작하면 적용됩니다. `HOST`, `PORT`, `WORKFLOW_MANAGER_DB`는 화면에 노출하지 않으며 `.env`나 서버 실행 환경에서 직접 관리합니다. 그 밖의 프로세스 환경 변수와 비밀값도 화면과 API에 노출하지 않습니다.

기본 `private` 모드는 다음 주소의 직접 접속만 허용합니다.

- 루프백: `127.0.0.0/8`, `::1`
- 사설 IPv4: `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`
- 링크 로컬 및 CGNAT: `169.254.0.0/16`, `100.64.0.0/10`
- 사설·링크 로컬 IPv6: `fc00::/7`, `fe80::/10`

그 외 공인 주소에서 직접 들어오는 요청은 `403`으로 거부합니다. 다시 같은 서버에서만 접속하도록 제한하려면 다음처럼 실행합니다.

```bash
HOST=127.0.0.1 WORKFLOW_MANAGER_ACCESS_MODE=local bun run start
```

## 패스키 인증

FlowManager는 비밀번호 없이 패스키만으로 로그인합니다. 등록된 공개키와 서명 카운터는 SQLite에 저장하며 개인키는 사용자의 기기 또는 패스키 제공자 밖으로 나오지 않습니다. 로그인 후에는 12시간 유효한 `HttpOnly`, `SameSite=Strict` 세션 쿠키를 사용하고, 상태 변경 API는 세션별 CSRF 토큰과 요청 origin을 함께 검사합니다.

로컬에서는 브라우저가 보안 컨텍스트로 취급하는 `http://localhost`에서 패스키를 테스트할 수 있습니다. `http://192.168.x.x` 같은 내부 IP 주소는 패스키 origin으로 사용할 수 없습니다. 다른 내부 기기에서 접속할 때는 고정된 사내 DNS 이름과 HTTPS를 준비하고 다음처럼 설정합니다.

```dotenv
WORKFLOW_MANAGER_RP_ID="internal.example.com"
WORKFLOW_MANAGER_RP_NAME="FlowManager"
WORKFLOW_MANAGER_ORIGIN="https://flow.internal.example.com"
```

`WORKFLOW_MANAGER_ORIGIN`은 경로 없이 실제 브라우저 주소와 정확히 같아야 합니다. `WORKFLOW_MANAGER_RP_ID`는 origin의 호스트와 같거나 그 상위 도메인이어야 합니다. HTTP는 `localhost`에서만 허용되고, HTTPS origin에서는 세션 쿠키에도 `Secure` 속성이 자동으로 붙습니다.

리버스 프록시를 통해 공개 도메인으로 서비스할 때는 애플리케이션이 실행되는 서버의 `.env`에 공개 주소를 명시해야 합니다. 예를 들어 `https://flow.example.com`으로 접속한다면 다음처럼 설정합니다.

```dotenv
HOST="127.0.0.1"
WORKFLOW_MANAGER_ACCESS_MODE="local"
WORKFLOW_MANAGER_RP_ID="flow.example.com"
WORKFLOW_MANAGER_ORIGIN="https://flow.example.com"
```

이 설정이 로드되면 서버 시작 시 최초 패스키 설정 주소도 `https://flow.example.com/#/setup?token=...` 형태로 출력됩니다. macOS `launchd`로 실행할 때는 `WorkingDirectory`를 `.env`가 있는 디렉터리로 지정하거나, 같은 값을 서비스 환경 변수로 전달해야 합니다. `WORKFLOW_MANAGER_ORIGIN`이 없으면 안전한 기본값인 `localhost`가 사용되고 시작 로그에 경고가 표시됩니다.

Relying Party ID가 바뀌면 기존 패스키는 새 주소에서 사용할 수 없습니다. 로컬 테스트에서 운영 도메인으로 옮길 때 운영 환경에서 패스키를 다시 등록해야 합니다. 관리자 설정 이후 환경설정 화면에서 패스키를 추가하거나 삭제할 수 있으며, 잠금을 방지하기 위해 마지막 패스키는 삭제할 수 없습니다.

패스키가 있더라도 신뢰할 수 없는 네트워크에 서버 포트를 직접 노출하지 마세요. 워크플로우는 애플리케이션 프로세스와 같은 OS 권한으로 명령을 실행합니다. 공유기·OS 방화벽과 HTTPS 리버스 프록시에서도 접근을 내부 네트워크로 제한하는 것을 권장합니다.

리버스 프록시를 앞에 두면 애플리케이션에서는 프록시의 IP만 보이므로 네트워크 검사만으로 외부 사용자를 구분할 수 없습니다. 프록시 자체에서도 사설망 접근 제한을 적용하고 위의 패스키 origin을 외부에 표시되는 HTTPS 주소로 설정해야 합니다.

## 사용 방법

1. 프로젝트 목록에서 새 프로젝트를 만듭니다.
2. 서버에 실제로 존재하는 절대 경로를 기본 작업 경로로 입력합니다.
3. 프로젝트 안에 워크플로우를 만들고 셸 명령 단계를 추가합니다.
4. 위·아래 버튼으로 순서를 정하고 필요 없는 단계는 비활성화합니다.
5. 실행 버튼을 누른 뒤 실행 상세 화면에서 상태와 실시간 로그를 확인합니다.

단계의 하위 작업 경로를 비우면 프로젝트 기본 경로를 사용합니다. 값을 입력할 때는 프로젝트 경로를 기준으로 한 상대 경로만 허용됩니다. 명령은 `/bin/sh -lc`로 실행합니다.

단계의 `실행 전 입력 요청`에 안내 문구를 설정하면 해당 단계 직전에 실행이 `입력 대기 중`으로 전환됩니다. 실행 상세 화면에서 입력한 값 한 줄은 명령의 표준 입력으로 한 번 전달되며 데이터베이스에는 저장되지 않습니다. `민감한 입력으로 처리`를 켜면 입력란을 가리고, 명령 출력에 동일한 원문이 포함되더라도 `[민감한 입력 숨김]`으로 치환합니다. 명령이 값을 변형하거나 인코딩해서 출력한 결과까지 자동으로 찾을 수는 없으므로 민감한 값을 출력하는 명령은 사용하지 마세요.

`sudo` 비밀번호를 받으려면 명령이 터미널 대신 표준 입력을 읽도록 `-S` 옵션을 사용하고 프롬프트 출력을 끌 수 있습니다.

```sh
sudo -S -p '' -- /usr/local/sbin/example-task
```

FlowManager를 신뢰할 수 있는 내부 네트워크와 HTTPS 뒤에서 운영하고, 가능하면 임의의 root 셸 대신 권한과 인자가 제한된 관리 명령을 실행하세요. 서버가 재시작되어도 입력 대기 상태와 요청 정보는 유지되지만 입력값은 저장되지 않으므로 다시 입력해야 합니다.

단계가 0이 아닌 종료 코드를 반환하거나 타임아웃되면 해당 단계가 실패하고 나머지 단계는 실행되지 않습니다. 프로젝트 하나에서는 동시에 하나의 워크플로우만 실행할 수 있습니다.

## 테스트

전체 자동 테스트:

```bash
bun test
```

변경을 감지하며 반복 실행:

```bash
bun run test:watch
```

테스트는 임시 디렉터리와 `printf`, `sleep` 같은 무해한 명령만 사용합니다. 다음 규칙을 검증합니다.

- 프로젝트·워크플로우·단계 CRUD와 단계 순서
- 실행 시점 단계 스냅샷
- 활성 단계 순차 실행과 stdout/stderr 저장
- 실패 이후 단계 중단
- 프로젝트별 중복 실행 차단
- 실행 취소와 하위 프로세스 그룹 종료
- 단계 타임아웃
- 실행 중 입력 대기·재개와 민감한 출력 가림
- SSE 상태 및 로그 전달
- 시작 시 미완료 실행의 `interrupted` 복구
- 내부 네트워크 IP 접근 제한
- 주요 HTTP API와 정적 웹 화면

## 데이터와 복구

기본 데이터베이스는 `data/workflow-manager.sqlite`에 저장됩니다. 프로젝트, 워크플로우, 단계, 실행 이력과 로그가 모두 SQLite에 남으므로 서버를 다시 시작해도 다시 열람할 수 있습니다.

서버 시작 시 `queued` 또는 `running` 상태로 남아 있는 실행과 단계는 `interrupted`로 정리됩니다. `waiting_input` 실행은 프로세스를 유지하지 않는 안전한 대기 상태이므로 그대로 보존됩니다. 안전하게 백업하려면 서버를 멈춘 뒤 데이터 디렉터리 전체를 복사하세요.

## API

헬스 체크와 인증 시작·검증 경로를 제외한 모든 API는 로그인 세션이 필요합니다. 상태 변경 요청은 `/api/auth/status`에서 받은 `csrfToken`을 `X-CSRF-Token` 헤더로 전달해야 합니다. 모든 요청과 응답 본문은 JSON입니다. 오류 응답은 다음 형식을 사용합니다.

```json
{
  "error": {
    "code": "not_found",
    "message": "프로젝트를 찾을 수 없습니다."
  }
}
```

### 프로젝트

| 메서드 | 경로 | 동작 |
| --- | --- | --- |
| `GET` | `/api/projects` | 프로젝트 목록 |
| `POST` | `/api/projects` | 프로젝트 생성 |
| `GET` | `/api/projects/:id` | 프로젝트, 워크플로우, 최근 실행 조회 |
| `PATCH` | `/api/projects/:id` | 프로젝트 수정 |
| `DELETE` | `/api/projects/:id` | 프로젝트 및 관련 데이터 삭제 |

프로젝트 생성 본문:

```json
{
  "name": "사내 API",
  "description": "빌드와 운영 작업",
  "rootDirectory": "/srv/internal-api"
}
```

### 워크플로우와 단계

| 메서드 | 경로 | 동작 |
| --- | --- | --- |
| `GET` | `/api/projects/:projectId/workflows` | 프로젝트 워크플로우 목록 |
| `POST` | `/api/projects/:projectId/workflows` | 워크플로우 생성 |
| `GET` | `/api/workflows/:id` | 워크플로우와 단계 조회 |
| `PATCH` | `/api/workflows/:id` | 워크플로우 수정 |
| `DELETE` | `/api/workflows/:id` | 워크플로우 삭제 |
| `POST` | `/api/workflows/:id/steps` | 단계 생성 |
| `PATCH` | `/api/steps/:id` | 단계 수정 |
| `DELETE` | `/api/steps/:id` | 단계 삭제 |
| `POST` | `/api/workflows/:id/steps/reorder` | 단계 순서 변경 |

단계 생성 본문:

```json
{
  "name": "자동 테스트",
  "command": "bun test",
  "workingDirectory": "",
  "timeoutSeconds": 300,
  "inputPrompt": "관리자 비밀번호",
  "inputSensitive": true,
  "enabled": true
}
```

단계 순서 변경 본문은 현재 워크플로우의 모든 단계 ID를 원하는 순서로 전달합니다.

```json
{
  "stepIds": ["step-id-2", "step-id-1"]
}
```

### 실행과 로그

| 메서드 | 경로 | 동작 |
| --- | --- | --- |
| `POST` | `/api/workflows/:id/runs` | 워크플로우 실행 시작 |
| `GET` | `/api/runs?projectId=:id&limit=30` | 실행 목록 |
| `GET` | `/api/runs/:id` | 실행 및 단계 결과 조회 |
| `POST` | `/api/runs/:id/cancel` | 실행 취소 |
| `POST` | `/api/runs/:id/input` | 대기 중인 실행에 입력값 전달 |
| `GET` | `/api/runs/:id/logs?after=:seq` | 저장된 로그 조회 |
| `GET` | `/api/runs/:id/events?after=:seq` | SSE 상태·로그 스트림 |
| `GET` | `/api/health` | 서버 상태 확인 |
| `GET` | `/api/settings` | 편집 가능한 환경설정과 현재 적용값 조회 |
| `PATCH` | `/api/settings` | 허용된 환경 변수값 저장 |

입력 응답 본문의 `value`는 한 줄이어야 하며 저장되거나 응답에 포함되지 않습니다.

```json
{
  "requestId": "input-request-id",
  "value": "one-time-value"
}
```

### 인증

| 메서드 | 경로 | 동작 |
| --- | --- | --- |
| `GET` | `/api/auth/status` | 최초 설정·로그인 상태와 공개 화면 설정 조회 |
| `POST` | `/api/auth/setup/options` | 최초 관리자 패스키 등록 옵션 생성 |
| `POST` | `/api/auth/setup/verify` | 최초 패스키 검증 및 세션 생성 |
| `POST` | `/api/auth/login/options` | 패스키 로그인 옵션 생성 |
| `POST` | `/api/auth/login/verify` | 패스키 검증 및 세션 생성 |
| `POST` | `/api/auth/logout` | 현재 세션 종료 |
| `GET` | `/api/auth/passkeys` | 등록된 관리자 패스키 목록 |
| `POST` | `/api/auth/passkeys/options` | 추가 패스키 등록 옵션 생성 |
| `POST` | `/api/auth/passkeys/verify` | 추가 패스키 검증 및 저장 |
| `DELETE` | `/api/auth/passkeys/:id` | 패스키 삭제 |

SSE 스트림은 `run`과 `log` 이벤트를 전송합니다. `after`에는 마지막으로 받은 로그 순번을 넘겨 과거 로그를 이어서 받을 수 있습니다.

## 프로젝트 구조

```text
src/
├─ db/           SQLite 스키마와 데이터 접근
├─ domain/       상태 및 도메인 타입
├─ runner/       셸 실행, 로그 수집, 취소, SSE
├─ server/       HTTP API, 검증, 정적 파일 제공
├─ web/          프레임워크 없는 브라우저 UI
└─ index.ts      애플리케이션 시작점
tests/           데이터, 실행 엔진, API 테스트
data/            런타임 데이터 (Git 제외)
```

## 현재 범위

현재 버전은 단일 관리자와 패스키 전용 인증, 단일 서버의 로컬 명령 실행, 실행 중 일회성 입력을 지원합니다. 사용자별 권한, 영속 비밀값 관리, 원격 Agent, 예약 실행, 웹훅, 병렬 단계, 조건 분기, 자동 재시도, 알림과 도구별 전용 단계는 포함하지 않습니다.
