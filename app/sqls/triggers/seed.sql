-- spaces 테이블 데이터
INSERT INTO spaces (profile_id, title, description, visibility, stats)
VALUES
  ('a569caa9-3e24-4c8a-a130-e5b04d926eb5', '안냥', '메이커 클럽 아자자자', 'PUBLIC', '{"views": 5}'::jsonb);

-- diaries 테이블 데이터
INSERT INTO diaries (profile_id, status, title, content, views, date)
VALUES
  ('a569caa9-3e24-4c8a-a130-e5b04d926eb5', 'SUNNY', '오늘의 일기', '오늘은 날씨가 좋았다.', 10, '2025-06-20'),
  ('a569caa9-3e24-4c8a-a130-e5b04d926eb5', 'CLOUDY', '친구들과의 하루', '친구들과 즐거운 시간을 보냈다.', 5, '2025-06-19'),
  ('a569caa9-3e24-4c8a-a130-e5b04d926eb5', 'RAINY', '봄 나들이', '벚꽃이 예쁘게 피었다.', 15, '2025-06-18'),
  ('a569caa9-3e24-4c8a-a130-e5b04d926eb5', 'PILL', '비밀 일기', '오늘의 비밀스러운 이야기', 0, '2025-06-17'),
  ('a569caa9-3e24-4c8a-a130-e5b04d926eb5', 'CLOUDY', '운동 일지', '오늘도 열심히 운동했다.', 8, '2025-06-16');

-- guestbooks 테이블 데이터
INSERT INTO guestbooks (owner_profile_id, author_profile_id, content, is_secret)
VALUES
  ('a569caa9-3e24-4c8a-a130-e5b04d926eb5', '86978641-410c-41fc-a745-63d9cba8d7f1', '방명록 남겨요~', false),
  ('a569caa9-3e24-4c8a-a130-e5b04d926eb5', '86978641-410c-41fc-a745-63d9cba8d7f1', '비밀 방명록입니다.', true),
  ('a569caa9-3e24-4c8a-a130-e5b04d926eb5', '86978641-410c-41fc-a745-63d9cba8d7f1', '답방 왔어요!', false),
  ('a569caa9-3e24-4c8a-a130-e5b04d926eb5', '86978641-410c-41fc-a745-63d9cba8d7f1', '안녕하세요~', false),
  ('a569caa9-3e24-4c8a-a130-e5b04d926eb5', '86978641-410c-41fc-a745-63d9cba8d7f1', '반갑습니다!', false);

-- monthly_themes 테이블 데이터
INSERT INTO monthly_themes (profile_id, title, description, cover_image, date)
VALUES
  ('a569caa9-3e24-4c8a-a130-e5b04d926eb5', '여름 맛집', '6월의 테마: 여름 맛집', 'https://example.com/summer-food.jpg', '2025-06-01');