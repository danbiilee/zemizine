import { bigint, text, timestamp, pgTable, uuid } from "drizzle-orm/pg-core";
import { profiles } from "../profile/schema";

// TODO: 한달에 한개만 작성 가능하도록 제약 추가
export const monthly_themes = pgTable("monthly_themes", {
  theme_id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  profile_id: uuid()
    .notNull()
    .references(() => profiles.profile_id, { onDelete: "cascade" }),
  title: text().notNull(),
  description: text(),
  image: text(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
