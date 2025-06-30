import {
  bigint,
  boolean,
  pgEnum,
  pgTable,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { profiles } from "./users";
import { diaries } from "./diaries";
import { guestbooks } from "./guestbooks";

export const notificationType = pgEnum("notification_type", [
  "DIARY_COMMENT",
  "DIARY_MENTION",
  "GUESTBOOK",
  "GUESTBOOK_COMMENT",
]);

/**
 * 알림 테이블
 * - target_id: 알림 수신자 (필수)
 * - source_id: 알림 발생자 (옵셔널)
 */
export const notifications = pgTable("notifications", {
  notification_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  target_id: uuid()
    .references(() => profiles.profile_id, {
      onDelete: "cascade",
    })
    .notNull(),
  source_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade",
  }),
  diary_id: bigint({ mode: "number" }).references(() => diaries.diary_id, {
    onDelete: "cascade",
  }),
  guestbook_id: bigint({ mode: "number" }).references(
    () => guestbooks.guestbook_id,
    {
      onDelete: "cascade",
    }
  ),
  type: notificationType().notNull(),
  is_read: boolean().notNull().default(false),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
