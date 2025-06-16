import {
  jsonb,
  pgSchema,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

/**
 * - 실제 데이터베이스에 생성되지 않는, foreign key 참고용 스키마
 * - db:generate 실행 후 생성되는 migrations/sql 파일에서 CREATE TABLE "users" 스크립트 제거해줘야 함!
 */
export const users = pgSchema("auth").table("users", {
  id: uuid().primaryKey(),
});

/**
 * references(): foreign key
 * jsonb(): 카운트를 역정규화 하기 위해 json 데이터 사용
 */
export const profiles = pgTable("profiles", {
  profile_id: uuid()
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
  title: text().notNull(),
  username: text(),
  description: text(),
  image: text(),
  stats: jsonb().$type<{
    views: number;
    followers: number;
    following: number;
  }>(),
  views: jsonb(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

// TODO: 친구 추가 방식으로 변경하기?
export const follows = pgTable("follows", {
  follower_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade",
  }),
  following_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade",
  }),
  created_at: timestamp().notNull().defaultNow(),
});
