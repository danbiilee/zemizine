ALTER TABLE "monthly_themes" ADD COLUMN "date" date NOT NULL;--> statement-breakpoint
ALTER TABLE "monthly_themes" ADD CONSTRAINT "monthly_themes_profile_id_date_unique" UNIQUE("profile_id","date");--> statement-breakpoint
ALTER TABLE "monthly_themes" ADD CONSTRAINT "date_first_day_of_month" CHECK (date_trunc('month', "monthly_themes"."date") = "monthly_themes"."date");