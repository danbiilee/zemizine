import {
  bigint,
  pgTable,
  text,
  timestamp,
  uuid,
  boolean,
  check,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { profiles } from "./users";

/**
 * 방명록 테이블
 */
export const guestbooks = pgTable(
  "guestbooks",
  {
    guestbook_id: bigint({ mode: "number" })
      .primaryKey()
      .generatedAlwaysAsIdentity(),
    owner_profile_id: uuid()
      .notNull()
      .references(() => profiles.profile_id, { onDelete: "cascade" }),
    author_profile_id: uuid().references(() => profiles.profile_id, {
      onDelete: "set null",
    }),
    content: text().notNull(),
    is_secret: boolean().notNull().default(false),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  (table) => [check("content_length", sql`LENGTH(${table.content}) <= 1_000`)]
);

/**
 * 방명록 코멘트 테이블
 * - 방명록 하나에 한 개의 코멘트만 가능 (방명록 아이디를 PK 설정)
 * - 방명록 주인만 코멘트 작성 가능
 * - 방명록의 비밀글 설정을 그대로 따름
 */
export const guestbook_comments = pgTable(
  "guestbook_comments",
  {
    guestbook_id: bigint({ mode: "number" })
      .primaryKey()
      .references(() => guestbooks.guestbook_id, { onDelete: "cascade" }),
    content: text().notNull(),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  (table) => [check("content_length", sql`LENGTH(${table.content}) <= 500`)]
);
