import {
  bigint,
  pgTable,
  text,
  timestamp,
  uuid,
  boolean,
  primaryKey,
} from "drizzle-orm/pg-core";
import { profiles } from "../settings/profile/schema";

export const guestbooks = pgTable("guestbooks", {
  guestbook_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  profile_id: uuid()
    .notNull()
    .references(() => profiles.profile_id, { onDelete: "cascade" }),
  author_id: uuid().references(() => profiles.profile_id, {
    onDelete: "set null",
  }),
  content: text().notNull(),
  is_secret: boolean().notNull().default(false),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

/**
 * composite primary key
 * - 여러 개의 컬럼을 조합하여 primary key를 설정
 * - 하나의 방명록에 여러 개의 댓글을 달 수 없음
 * - 예: product_upvotes > product_id + profile_id > 중복 추천 방지
 */
export const guestbook_comments = pgTable(
  "guestbook_comments",
  {
    guestbook_comment_id: bigint({ mode: "number" })
      .primaryKey()
      .generatedAlwaysAsIdentity(),
    guestbook_id: bigint({ mode: "number" })
      .notNull()
      .references(() => guestbooks.guestbook_id, { onDelete: "cascade" }),
    profile_id: uuid()
      .notNull()
      .references(() => profiles.profile_id, {
        onDelete: "cascade",
      }),
    content: text().notNull(),
    is_secret: boolean().notNull().default(false), // TODO: 부모 데이터의 is_secret 값으로 자동 설정
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  (table) => [
    primaryKey({ columns: [table.guestbook_comment_id, table.guestbook_id] }),
  ]
);
