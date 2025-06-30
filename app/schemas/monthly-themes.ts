import {
  bigint,
  text,
  timestamp,
  pgTable,
  uuid,
  date,
  unique,
  check,
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
    profile_id: uuid()
      .notNull()
      .references(() => profiles.profile_id, { onDelete: "cascade" }),
    title: text().notNull(),
    description: text(),
    cover_image: text(),
    date: date().notNull(), // YYYY-MM-01 형식으로 저장
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  (table) => [
    unique().on(table.profile_id, table.date),
    // date 컬럼이 항상 월의 첫 날이어야 함
    check(
      "date_first_day_of_month",
      sql`date_trunc('month', ${table.date}) = ${table.date}`
    ),
  ]
);
