ALTER TABLE "monthly_themes" DROP CONSTRAINT "monthly_themes_profile_id_profiles_profile_id_fk";
--> statement-breakpoint
ALTER TABLE "diaries" ALTER COLUMN "title" SET DATA TYPE varchar(40);--> statement-breakpoint
ALTER TABLE "monthly_themes" ALTER COLUMN "title" SET DATA TYPE varchar(16);--> statement-breakpoint
ALTER TABLE "monthly_themes" ADD CONSTRAINT "fk_monthly_themes_profile_id" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;