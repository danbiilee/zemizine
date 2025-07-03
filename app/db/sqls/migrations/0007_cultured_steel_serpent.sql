ALTER TABLE "diaries" DROP CONSTRAINT "diaries_profile_id_profiles_profile_id_fk";
--> statement-breakpoint
ALTER TABLE "profiles" ALTER COLUMN "nickname" SET DATA TYPE varchar(10);--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "slug" varchar(16);--> statement-breakpoint
ALTER TABLE "diaries" ADD CONSTRAINT "fk_diaries_profile_id" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_slug_unique" UNIQUE("slug");--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "slug_length" CHECK (LENGTH("profiles"."slug") >= 3 AND LENGTH("profiles"."slug") <= 16);

UPDATE "profiles" 
SET "slug" = LOWER(REPLACE(nickname, ' ', '-'));

ALTER TABLE "profiles" ALTER COLUMN "slug" SET NOT NULL;