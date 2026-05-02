-- ============================================================================
-- Mike 스키마 전체 삭제 스크립트
-- 000_one_shot_schema.sql로 생성된 모든 객체를 제거합니다.
-- ============================================================================
--
-- ┌─────────────────────────────────────────────────────────────────────────┐
-- │ 실행 전 반드시 확인하세요                                                   │
-- ├─────────────────────────────────────────────────────────────────────────┤
-- │                                                                         │
-- │ 1. 데이터 영구 삭제                                                       │
-- │    이 스크립트를 실행하면 모든 사용자 데이터(프로젝트, 문서 메타데이터,          │
-- │    채팅 기록, 워크플로우, 표 리뷰)가 즉시 영구 삭제됩니다.                     │
-- │    삭제된 데이터는 복구할 수 없습니다.                                       │
-- │                                                                         │
-- │ 2. Storage 파일은 별도 삭제 필요                                           │
-- │    이 스크립트는 DB 테이블만 삭제합니다.                                     │
-- │    Supabase Storage 버킷(mike)에 저장된 실제 파일(PDF, DOCX 등)은           │
-- │    삭제되지 않습니다.                                                      │
-- │    파일 삭제: Supabase 대시보드 → Storage → mike 버킷 → 전체 선택 후         │
-- │    Delete (또는 버킷 자체를 삭제)                                          │
-- │                                                                         │
-- │ 3. 사용자 계정(auth.users)은 삭제되지 않음                                  │
-- │    Supabase Auth가 관리하는 계정 테이블(auth.users)은 이 스크립트            │
-- │    대상이 아닙니다. 계정 삭제가 필요하면:                                    │
-- │    Supabase 대시보드 → Authentication → Users → 개별 삭제                 │
-- │    또는 Supabase 대시보드 → SQL Editor에서:                               │
-- │      delete from auth.users;  -- 전체 삭제 시                            │
-- │                                                                         │
-- │ 4. pgcrypto 확장은 삭제하지 않음                                           │
-- │    Supabase가 내부적으로 pgcrypto를 사용할 수 있으므로 기본 주석              │
-- │    처리되어 있습니다. 필요 시 맨 아래 주석을 해제하여 실행하세요.               │
-- │                                                                         │
-- └─────────────────────────────────────────────────────────────────────────┘

-- ---------------------------------------------------------------------------
-- 1. 트리거 제거
--    신규 가입 시 user_profiles를 자동 생성하는 트리거입니다.
--    테이블 삭제 전에 먼저 제거해야 합니다.
-- ---------------------------------------------------------------------------

drop trigger if exists on_auth_user_created on auth.users;

-- ---------------------------------------------------------------------------
-- 2. 함수 제거
--    트리거가 호출하는 함수입니다. 트리거 제거 후 삭제합니다.
-- ---------------------------------------------------------------------------

drop function if exists public.handle_new_user();

-- ---------------------------------------------------------------------------
-- 3. 테이블 제거 (의존성 역순: 자식 테이블 → 부모 테이블)
--    외래 키 제약 조건 때문에 참조하는 쪽(자식)을 먼저 삭제해야 합니다.
--    cascade 옵션으로 남아 있는 참조 제약도 함께 제거합니다.
-- ---------------------------------------------------------------------------

-- 표 리뷰 채팅 (tabular_review_chats를 참조)
drop table if exists public.tabular_review_chat_messages cascade;
drop table if exists public.tabular_review_chats         cascade;

-- 표 리뷰 (tabular_reviews를 참조)
drop table if exists public.tabular_cells   cascade;
drop table if exists public.tabular_reviews cascade;

-- 채팅 (chats를 참조)
drop table if exists public.chat_messages cascade;
drop table if exists public.chats         cascade;

-- 워크플로우 (workflows를 참조)
drop table if exists public.workflow_shares  cascade;
drop table if exists public.hidden_workflows cascade;
drop table if exists public.workflows        cascade;

-- 문서 편집 / 버전 / 문서 (documents → document_versions → document_edits 순)
drop table if exists public.document_edits    cascade;
drop table if exists public.document_versions cascade;
drop table if exists public.documents         cascade;

-- 프로젝트 (projects를 참조하는 project_subfolders 먼저)
drop table if exists public.project_subfolders cascade;
drop table if exists public.projects           cascade;

-- 사용자 프로필 (auth.users를 참조)
drop table if exists public.user_profiles cascade;

-- ---------------------------------------------------------------------------
-- 4. 확장(Extension) 제거
--    pgcrypto는 Supabase 내부에서도 사용될 수 있으므로 기본 주석 처리.
--    완전히 초기화하려면 아래 주석을 해제하세요.
-- ---------------------------------------------------------------------------

-- drop extension if exists "pgcrypto";
