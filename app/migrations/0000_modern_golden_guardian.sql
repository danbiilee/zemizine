CREATE TYPE "public"."diary_status" AS ENUM('☀️', '⛅️', '🌧️', '🏖️', '💊');--> statement-breakpoint
CREATE TABLE "diaries" (
	"diary_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "diaries_diary_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"status" "diary_status" NOT NULL,
	"content" text NOT NULL,
	"images" text[],
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
