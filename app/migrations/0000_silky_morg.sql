CREATE TYPE "public"."diary_status" AS ENUM('PUBLIC', 'FRIEND', 'PRIVATE');--> statement-breakpoint
CREATE TYPE "public"."notification_type" AS ENUM('DIARY_COMMENT', 'DIARY_MENTION', 'GUESTBOOK', 'GUESTBOOK_COMMENT');--> statement-breakpoint
CREATE TABLE "diaries" (
	"diary_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "diaries_diary_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"status" "diary_status" NOT NULL,
	"title" text NOT NULL,
	"content" text,
	"views" integer DEFAULT 0 NOT NULL,
	"date" date NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "diaries_profile_id_date_unique" UNIQUE("profile_id","date"),
	CONSTRAINT "title_length" CHECK (LENGTH("diaries"."title") >= 1 AND LENGTH("diaries"."title") <= 40),
	CONSTRAINT "content_length" CHECK (LENGTH("diaries"."content") <= 65_535)
);
--> statement-breakpoint
CREATE TABLE "diary_comments" (
	"comment_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "diary_comments_comment_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"diary_id" bigint NOT NULL,
	"parent_comment_id" bigint,
	"profile_id" uuid,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "content_length" CHECK (LENGTH("diary_comments"."content") <= 300)
);
--> statement-breakpoint
CREATE TABLE "diary_likes" (
	"diary_id" bigint NOT NULL,
	"profile_id" uuid,
	CONSTRAINT "diary_likes_diary_id_profile_id_pk" PRIMARY KEY("diary_id","profile_id")
);
--> statement-breakpoint
CREATE TABLE "guestbook_comments" (
	"guestbook_id" bigint PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "content_length" CHECK (LENGTH("guestbook_comments"."content") <= 500)
);
--> statement-breakpoint
CREATE TABLE "guestbooks" (
	"guestbook_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "guestbooks_guestbook_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"owner_profile_id" uuid NOT NULL,
	"author_profile_id" uuid,
	"content" text NOT NULL,
	"is_secret" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "content_length" CHECK (LENGTH("guestbooks"."content") <= 1_000)
);
--> statement-breakpoint
CREATE TABLE "monthly_themes" (
	"theme_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "monthly_themes_theme_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"cover_image" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "notifications" (
	"notification_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "notifications_notification_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"target_id" uuid NOT NULL,
	"source_id" uuid,
	"diary_id" bigint,
	"guestbook_id" bigint,
	"type" "notification_type" NOT NULL,
	"is_read" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "spaces" (
	"space_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "spaces_space_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"visibility" "diary_status" DEFAULT 'PUBLIC' NOT NULL,
	"stats" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "title_length" CHECK (LENGTH("spaces"."title") >= 1 AND LENGTH("spaces"."title") <= 12),
	CONSTRAINT "description_length" CHECK (LENGTH("spaces"."description") <= 200)
);
--> statement-breakpoint
CREATE TABLE "friends" (
	"requester_profile_id" uuid,
	"accepter_profile_id" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "friends_requester_profile_id_accepter_profile_id_pk" PRIMARY KEY("requester_profile_id","accepter_profile_id")
);
--> statement-breakpoint
CREATE TABLE "profiles" (
	"profile_id" uuid PRIMARY KEY NOT NULL,
	"nickname" text NOT NULL,
	"profile_image" text,
	"stats" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "nickname_length" CHECK (LENGTH("profiles"."nickname") >= 2 AND LENGTH("profiles"."nickname") <= 10)
);
--> statement-breakpoint
ALTER TABLE "diaries" ADD CONSTRAINT "diaries_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "diary_comments" ADD CONSTRAINT "diary_comments_diary_id_diaries_diary_id_fk" FOREIGN KEY ("diary_id") REFERENCES "public"."diaries"("diary_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "diary_comments" ADD CONSTRAINT "diary_comments_parent_comment_id_diary_comments_comment_id_fk" FOREIGN KEY ("parent_comment_id") REFERENCES "public"."diary_comments"("comment_id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "diary_comments" ADD CONSTRAINT "diary_comments_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "diary_likes" ADD CONSTRAINT "diary_likes_diary_id_diaries_diary_id_fk" FOREIGN KEY ("diary_id") REFERENCES "public"."diaries"("diary_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "diary_likes" ADD CONSTRAINT "diary_likes_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "guestbook_comments" ADD CONSTRAINT "guestbook_comments_guestbook_id_guestbooks_guestbook_id_fk" FOREIGN KEY ("guestbook_id") REFERENCES "public"."guestbooks"("guestbook_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "guestbooks" ADD CONSTRAINT "guestbooks_owner_profile_id_profiles_profile_id_fk" FOREIGN KEY ("owner_profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "guestbooks" ADD CONSTRAINT "guestbooks_author_profile_id_profiles_profile_id_fk" FOREIGN KEY ("author_profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "monthly_themes" ADD CONSTRAINT "monthly_themes_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_target_id_profiles_profile_id_fk" FOREIGN KEY ("target_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_source_id_profiles_profile_id_fk" FOREIGN KEY ("source_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_diary_id_diaries_diary_id_fk" FOREIGN KEY ("diary_id") REFERENCES "public"."diaries"("diary_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_guestbook_id_guestbooks_guestbook_id_fk" FOREIGN KEY ("guestbook_id") REFERENCES "public"."guestbooks"("guestbook_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces" ADD CONSTRAINT "spaces_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "friends" ADD CONSTRAINT "friends_requester_profile_id_profiles_profile_id_fk" FOREIGN KEY ("requester_profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "friends" ADD CONSTRAINT "friends_accepter_profile_id_profiles_profile_id_fk" FOREIGN KEY ("accepter_profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_profile_id_users_id_fk" FOREIGN KEY ("profile_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;