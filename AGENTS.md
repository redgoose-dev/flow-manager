# FlowManager Codex 지침

이 파일은 이 저장소에서 작업하는 Codex가 따라야 할 프로젝트 지침이다. 프로젝트의 사용자 문서는 `README.md`에 두고, 이 파일에는 구현·검증 과정에서 반복해서 필요한 규칙만 유지한다.

## 프로젝트 개요

- FlowManager는 한 서버에서 셸 명령 기반 워크플로우를 구성하고 실행하는 셀프 호스팅 웹 애플리케이션이다.
- 런타임은 Bun이고, 서버는 TypeScript, 브라우저 화면은 프레임워크 없는 HTML·CSS·JavaScript로 구성한다.
- 상태, 실행 스냅샷, 로그, 패스키 공개키와 세션은 SQLite에 저장한다.
- 특정 도구의 동작을 애플리케이션에 내장하지 않는다. Git, Docker, Bun 등의 작업도 일반 셸 명령 단계로 표현한다.

## 주요 경로

- `src/index.ts`: 환경 변수 해석, 데이터베이스·인증·러너 조립, Bun HTTP 서버 시작
- `src/server/app.ts`: HTTP API 라우팅, 인증 적용, 정적 파일 제공, 보안 헤더
- `src/server/validation.ts`: API 입력 검증과 작업 경로 제한
- `src/server/passkey-auth.ts`: WebAuthn 등록·로그인, 세션, CSRF와 origin 검증
- `src/server/network-access.ts`: `private`·`local` 접근 범위 판정
- `src/server/environment-settings.ts`: 화면에서 수정 가능한 `.env` 값의 제한적 관리
- `src/db/database.ts`: SQLite 스키마, 호환 마이그레이션, CRUD와 실행 상태 저장
- `src/runner/runner.ts`: 단계 실행, 취소·타임아웃·입력 대기, 로그와 SSE
- `src/web/`: 브라우저 UI와 정적 자산
- `tests/`: 모듈 및 HTTP API 회귀 테스트

## 개발 명령

```bash
bun install
bun run dev
bun test
bun run start
```

- 의존성 설치와 스크립트 실행에는 `npm`, `pnpm`, `yarn` 대신 Bun을 사용한다.
- 정상적인 변경 검증은 저장소 루트에서 `bun test`를 실행하는 것이다.
- 테스트는 임시 디렉터리와 무해한 셸 명령만 사용해야 하며 실제 운영 경로나 운영 데이터에 의존하면 안 된다.
- 서버를 직접 실행하는 검증은 기존 프로세스, 포트, `.env`, `data/`에 영향을 줄 수 있으므로 필요한 경우에만 범위를 확인하고 수행한다.

## 구현 규칙

- 기존 TypeScript 스타일을 따른다: 엄격한 타입, ES 모듈, 2칸 들여쓰기, 큰따옴표, 세미콜론.
- 새로운 API 입력은 `src/server/validation.ts`의 검증 함수를 사용하거나 같은 방식으로 명시적으로 검증한다.
- 오류는 `AppError`와 `{ "error": { "code", "message" } }` 응답 형식을 유지한다.
- 상태 변경 API는 인증, 정확한 origin, CSRF 검사를 우회하지 않는다. 공개 API가 필요하면 의도와 위협 모델을 문서화하고 테스트한다.
- 데이터베이스 변경은 기존 SQLite 파일을 보존하는 전진 호환 마이그레이션이어야 한다. 새 설치와 기존 스키마 업그레이드를 모두 테스트한다.
- 실행 이력은 시작 시점 단계 스냅샷을 유지해야 한다. 워크플로우 편집이 과거 실행 기록을 바꾸면 안 된다.
- UI는 현재의 프레임워크 없는 구조와 접근성 특성을 유지한다. 동적 문자열은 HTML로 직접 삽입하지 말고 안전한 DOM API나 기존 이스케이프 방식을 사용한다.
- 동작을 변경하면 README의 사용법, 환경 변수 또는 API 설명도 함께 갱신한다.

## 보안 불변 조건

- 워크플로우 명령은 애플리케이션 프로세스와 같은 OS 권한으로 `/bin/sh -lc`를 통해 실행된다는 점을 항상 위협 모델에 포함한다.
- 프로젝트 루트는 실제 절대 디렉터리여야 하고 단계 작업 경로는 그 루트 밖으로 탈출할 수 없어야 한다.
- 기본 접근 모드는 내부 네트워크만 허용하는 `private`다. 공인 주소 허용이나 프록시 헤더 신뢰를 암묵적으로 추가하지 않는다.
- 패스키의 RP ID와 origin 검증, `HttpOnly`·`SameSite=Strict` 세션 쿠키, 세션 토큰 해시 저장을 약화하지 않는다.
- 민감 입력 원문은 데이터베이스, API 응답, 로그에 저장하지 않는다. 동일 원문 마스킹 동작과 그 한계를 보존한다.
- 마지막 패스키 삭제 방지, 프로젝트별 동시 실행 제한, 실패 이후 단계 중단, 취소 시 하위 프로세스 그룹 종료를 유지한다.
- 서버 재시작 시 `queued`·`running` 실행은 `interrupted`로 복구하고, 프로세스가 없는 `waiting_input` 상태는 보존한다.

## 데이터와 비밀값

- `.env`, `data/`, `node_modules/`, 로그와 로컬 IDE 파일은 커밋하지 않는다.
- 사용자가 명시적으로 요청하지 않으면 실제 `.env`나 `data/`를 수정하지 않는다.
- 문서와 테스트에는 비밀값, 실제 사내 도메인, 운영 경로를 넣지 않는다. 공개 가능한 예시는 `.env.example`에만 추가한다.
- 데이터베이스 스키마를 확인할 때도 운영 SQLite 파일 대신 `:memory:` 또는 임시 파일을 우선한다.

## 변경별 검증

- 데이터베이스: `tests/database.test.ts`
- 실행기·입력·취소·SSE: `tests/runner.test.ts`
- 인증·패스키·세션: `tests/passkey-auth.test.ts`
- 네트워크 제한: `tests/network-access.test.ts`
- 환경설정 파일 관리: `tests/environment-settings.test.ts`
- HTTP API·정적 화면·보안 경계: `tests/api.test.ts`

관련 테스트를 먼저 보강하고 마지막에 전체 `bun test`를 실행한다. 테스트를 실행하지 못했거나 일부만 실행했다면 완료 보고에 이유와 남은 검증을 명시한다.

## 작업 완료 기준

- 요청한 동작과 문서가 일치한다.
- 보안 불변 조건과 기존 데이터 호환성이 유지된다.
- 관련 회귀 테스트가 추가 또는 갱신되었고 전체 테스트가 통과한다.
- 사용자 소유의 무관한 변경, 로컬 설정, 운영 데이터를 건드리지 않는다.
