import db from "~/db";
import { diaries, diary_likes } from "../schemas/diaries";
import { profiles } from "../schemas/users";
import { asc, count, eq } from "drizzle-orm";

export const getDiaries = async () => {
  const allDiaries = await db
    .select({
      id: diaries.diary_id,
      status: diaries.status,
      title: diaries.title,
      thumbnail: diaries.thumbnail_image,
      date: diaries.date,
      nickname: profiles.nickname, // innerJoin 함으로써 조인된 테이블의 데이터를 가져올 수 있음
    })
    .from(diaries)
    .innerJoin(profiles, eq(diaries.profile_id, profiles.profile_id))
    .orderBy(asc(diaries.date));

  return allDiaries;
};

export const getDiary = async (diaryId: number) => {
  const diary = await db
    .select({
      status: diaries.status,
      title: diaries.title,
      content: diaries.content,
      likeCount: count(diary_likes.diary_id),
      date: diaries.date,
      updatedAt: diaries.updated_at,
    })
    .from(diaries)
    .leftJoin(diary_likes, eq(diaries.diary_id, diary_likes.diary_id))
    .groupBy(diaries.diary_id)
    .where(eq(diaries.diary_id, diaryId));
  return diary;
};
