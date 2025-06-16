import {
  bigint,
  pgTable,
  text,
  timestamp,
  uuid,
  boolean,
} from "drizzle-orm/pg-core";
import { profiles } from "../settings/profile/schema";

// TODO: author 컬럼 확인 (삭제된 경우 작성자명만 "탈퇴한 유저"로 보여지도록)
export const guestbooks = pgTable("guestbooks", {
  guestbook_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  profile_id: uuid()
    .notNull()
    .references(() => profiles.profile_id, { onDelete: "cascade" }),
  author: uuid()
    .notNull()
    .references(() => profiles.profile_id, { onDelete: "set null" }),
  content: text().notNull(),
  is_secret: boolean().notNull().default(false),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
