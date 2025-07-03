ALTER TABLE "diaries" DROP CONSTRAINT "title_length";--> statement-breakpoint
ALTER TABLE "diaries" ALTER COLUMN "title" DROP NOT NULL;