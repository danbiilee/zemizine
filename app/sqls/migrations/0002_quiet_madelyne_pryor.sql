-- 1. 먼저 기본값 제거
ALTER TABLE "spaces" ALTER COLUMN "visibility" DROP DEFAULT;--> statement-breakpoint

-- 2. 컬럼을 text로 변경
ALTER TABLE "spaces" ALTER COLUMN "visibility" SET DATA TYPE text;--> statement-breakpoint

-- 3. 기존 데이터를 올바른 값으로 변환
UPDATE "spaces" SET "visibility" = 'PUBLIC' WHERE "visibility" NOT IN ('PUBLIC', 'FRIEND', 'PRIVATE');--> statement-breakpoint

-- 4. 새로운 ENUM 타입 생성
CREATE TYPE "public"."space_visibility" AS ENUM('PUBLIC', 'FRIEND', 'PRIVATE');--> statement-breakpoint

-- 5. 컬럼 타입을 새로운 ENUM으로 변경
ALTER TABLE "spaces" ALTER COLUMN "visibility" SET DATA TYPE "public"."space_visibility" USING "visibility"::text::"public"."space_visibility";--> statement-breakpoint

-- 6. 새로운 기본값 설정
ALTER TABLE "spaces" ALTER COLUMN "visibility" SET DEFAULT 'PUBLIC';