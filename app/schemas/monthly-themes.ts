import { bigint, text, timestamp, pgTable, uuid } from "drizzle-orm/pg-core";
import { profiles } from "./users";

/**
 * 월별 테마 테이블
 */
export const monthly_themes = pgTable("monthly_themes", {
  theme_id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  profile_id: uuid()
    .notNull()
    .references(() => profiles.profile_id, { onDelete: "cascade" }),
  title: text().notNull(),
  description: text(),
  cover_image: text(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
