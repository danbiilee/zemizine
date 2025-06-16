ALTER TABLE "diaries" ALTER COLUMN "status" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."diary_status";--> statement-breakpoint
CREATE TYPE "public"."diary_status" AS ENUM('SUNNY', 'CLOUDY', 'RAINY', 'VACATION', 'PILL');--> statement-breakpoint
ALTER TABLE "diaries" ALTER COLUMN "status" SET DATA TYPE "public"."diary_status" USING "status"::"public"."diary_status";