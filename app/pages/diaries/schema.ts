import {
  bigint,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { DIARY_STATUS } from "./constants";
import { profiles } from "../settings/profile/schema";

export const diaryStatus = pgEnum(
  "diary_status",
  Object.keys(DIARY_STATUS) as [string, ...string[]]
);

// TODO: 작성자 아이디 컬럼, 코멘트 데이터 확인
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
