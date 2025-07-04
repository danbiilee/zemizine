import {
  bigint,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  type AnyPgColumn,
  unique,
  date,
  primaryKey,
  check,
  jsonb,
  foreignKey,
  varchar,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { DIARY_STATUS } from "~/constants/diary";
import { profiles } from "./users";

export const diaryStatus = pgEnum(
  "diary_status",
  Object.keys(DIARY_STATUS) as [string, ...string[]]
);

/**
 * 다이어리 테이블
 * - 하루에 한개만 작성 가능 (unique 제약)
 */
export const diaries = pgTable(
  "diaries",
  {
    diary_id: bigint({ mode: "number" })
      .primaryKey()
      .generatedAlwaysAsIdentity(),
    profile_id: uuid().notNull(),
    status: diaryStatus().notNull(),
    title: varchar({ length: 40 }),
    content: text(), // 0자 허용
    thumbnail_image: text(),
    stats: jsonb().notNull().default({ views: 0, likes: 0, comments: 0 }),
    date: date().notNull(),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.profile_id],
      foreignColumns: [profiles.profile_id],
      name: "fk_diaries_profile_id",
    }).onDelete("cascade"),
    unique().on(table.profile_id, table.date),
    check("content_length", sql`LENGTH(${table.content}) <= 65_535`),
  ]
);

/**
 * 다이어리 좋아요 테이블
 * - 한 명의 사용자가 같은 글에 중복 좋아요 불가 (composite primary key)
 */
export const diary_likes = pgTable(
  "diary_likes",
  {
    diary_id: bigint({ mode: "number" })
      .notNull()
      .references(() => diaries.diary_id, { onDelete: "cascade" }),
    profile_id: uuid().references(() => profiles.profile_id, {
      onDelete: "set null",
    }),
  },
  (table) => [primaryKey({ columns: [table.diary_id, table.profile_id] })]
);

/**
 * 다이어리 댓글 테이블
 */
export const diary_comments = pgTable(
  "diary_comments",
  {
    comment_id: bigint({ mode: "number" })
      .primaryKey()
      .generatedAlwaysAsIdentity(),
    diary_id: bigint({ mode: "number" })
      .notNull()
      .references(() => diaries.diary_id, { onDelete: "cascade" }),
    parent_comment_id: bigint({ mode: "number" }).references(
      (): AnyPgColumn => diary_comments.comment_id,
      {
        onDelete: "set null",
      }
    ),
    profile_id: uuid().references(() => profiles.profile_id, {
      onDelete: "set null",
    }),
    content: text().notNull(),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  (table) => [check("content_length", sql`LENGTH(${table.content}) <= 300`)]
);
