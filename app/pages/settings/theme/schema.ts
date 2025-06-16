import { bigint, text, timestamp, pgTable, uuid } from "drizzle-orm/pg-core";
import { profiles } from "../profile/schema";

// TODO: 작성자 아이디 컬럼 확인
export const monthly_themes = pgTable("monthly_themes", {
  theme_id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  profile_id: uuid()
    .notNull()
    .references(() => profiles.profile_id, { onDelete: "cascade" }),
  theme: text().notNull(),
  description: text(),
  image: text(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
