import {
  bigint,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  check,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { profiles } from "./users";
import { SPACE_VISIBILITY } from "~/constants/space";

export const spaceVisibility = pgEnum(
  "diary_status",
  Object.keys(SPACE_VISIBILITY) as [string, ...string[]]
);

/**
 * 홈(내 공간) 테이블
 */
export const spaces = pgTable(
  "spaces",
  {
    space_id: bigint({ mode: "number" })
      .primaryKey()
      .generatedAlwaysAsIdentity(),
    profile_id: uuid()
      .notNull()
      .references(() => profiles.profile_id, { onDelete: "cascade" }),
    title: text().notNull(),
    description: text(),
    visibility: spaceVisibility().notNull().default(SPACE_VISIBILITY.PUBLIC),
    stats: jsonb().$type<{
      views: number;
    }>(),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  (table) => [
    check(
      "title_length",
      sql`LENGTH(${table.title}) >= 1 AND LENGTH(${table.title}) <= 12`
    ),
    check("description_length", sql`LENGTH(${table.description}) <= 200`),
  ]
);
