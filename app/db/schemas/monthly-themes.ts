import {
  bigint,
  text,
  timestamp,
  pgTable,
  uuid,
  date,
  unique,
  check,
  foreignKey,
  varchar,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { profiles } from "./users";

/**
 * 월별 테마 테이블
 * - 한 달에 한개만 작성 가능 (unique 제약)
 */
export const monthly_themes = pgTable(
  "monthly_themes",
  {
    theme_id: bigint({ mode: "number" })
      .primaryKey()
      .generatedAlwaysAsIdentity(),
    profile_id: uuid().notNull(),
    title: varchar({ length: 16 }).notNull(),
    description: text(),
    cover_image: text(),
    date: date().notNull(), // YYYY-MM-01 형식으로 저장
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.profile_id],
      foreignColumns: [profiles.profile_id],
      name: "fk_monthly_themes_profile_id",
    }).onDelete("cascade"),
    unique().on(table.profile_id, table.date),
    check(
      "date_first_day_of_month",
      sql`date_trunc('month', ${table.date}) = ${table.date}`
    ),
  ]
);
