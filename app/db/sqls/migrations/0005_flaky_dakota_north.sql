-- 새로운 stats jsonb 컬럼 추가
ALTER TABLE "diaries" ADD COLUMN "stats" jsonb;

-- 기존 likes 데이터를 jsonb 형태로 변환하여 stats 컬럼에 업데이트
UPDATE "diaries" 
SET "stats" = jsonb_build_object(
  'likes', COALESCE("likes", 0),
  'comments', 0
);

-- stats 컬럼을 NOT NULL로 설정하고 기본값 지정
ALTER TABLE "diaries" ALTER COLUMN "stats" SET NOT NULL;
ALTER TABLE "diaries" ALTER COLUMN "stats" SET DEFAULT '{"likes": 0, "comments": 0}'::jsonb;

-- likes 컬럼 삭제
-- ALTER TABLE "diaries" DROP COLUMN "likes";
