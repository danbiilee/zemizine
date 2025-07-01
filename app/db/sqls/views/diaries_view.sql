CREATE OR REPLACE VIEW diaries_view AS
SELECT
  diaries.diary_id AS id,
  diaries.status,
  diaries.title,
  diaries.thumbnail_image AS thumbnail,
  diaries.date,
  diaries.likes,
  profiles.nickname
FROM diaries
INNER JOIN profiles USING (profile_id)
LEFT JOIN diary_likes USING (diary_id)
GROUP BY diaries.diary_id, profiles.nickname;

SELECT * FROM diaries_view;