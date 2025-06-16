CREATE TABLE "guestbooks" (
	"guestbook_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "guestbooks_guestbook_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"author" uuid NOT NULL,
	"content" text NOT NULL,
	"is_secret" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "monthly_themes" (
	"theme_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "monthly_themes_theme_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"theme" text NOT NULL,
	"description" text,
	"image" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "diaries" ADD COLUMN "profile_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "guestbooks" ADD CONSTRAINT "guestbooks_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "guestbooks" ADD CONSTRAINT "guestbooks_author_profiles_profile_id_fk" FOREIGN KEY ("author") REFERENCES "public"."profiles"("profile_id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "monthly_themes" ADD CONSTRAINT "monthly_themes_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "diaries" ADD CONSTRAINT "diaries_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;