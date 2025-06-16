import {
  bigint,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  type AnyPgColumn,
} from "drizzle-orm/pg-core";
import { DIARY_STATUS } from "./constants";
import { profiles } from "../settings/profile/schema";

export const diaryStatus = pgEnum(
  "diary_status",
  Object.keys(DIARY_STATUS) as [string, ...string[]]
);

// TODO: 하루에 한개만 작성 가능하도록 제약 추가
export const diaries = pgTable("diaries", {
  diary_id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  profile_id: uuid()
    .notNull()
    .references(() => profiles.profile_id, { onDelete: "cascade" }),
  status: diaryStatus().notNull(),
  content: text().notNull(),
  images: text().array(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

/**
 * parent_id -> 대댓글 여부 확인
 */
export const diary_comments = pgTable("diary_comments", {
  diary_comment_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  parent_id: bigint({ mode: "number" }).references(
    (): AnyPgColumn => diary_comments.diary_comment_id,
    {
      onDelete: "set null",
    }
  ),
  diary_id: bigint({ mode: "number" })
    .notNull()
    .references(() => diaries.diary_id, { onDelete: "cascade" }),
  profile_id: uuid().references(() => profiles.profile_id, {
    onDelete: "set null",
  }),
  content: text().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

// TODO: 위치 컬럼 추가. 스티커명(태그?) 같은 데이터도 필요할까?
export const diary_stickers = pgTable("diary_stickers", {
  diary_id: bigint({ mode: "number" })
    .notNull()
    .references(() => diaries.diary_id, { onDelete: "cascade" }),
  profile_id: uuid().references(() => profiles.profile_id, {
    onDelete: "set null",
  }),
  image: text().notNull(),
});
