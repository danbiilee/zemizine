-- 좋아요
CREATE FUNCTION public.handle_diary_like()
RETURNS trigger
LANGUAGE plpgsql
SECURITY definer
SET search_path = ''
AS $$
BEGIN
  UPDATE public.diaries SET likes = likes + 1 WHERE diary_id = new.diary_id;
  RETURN new;
END;
$$;

CREATE TRIGGER diary_like_trigger
AFTER INSERT ON public.diary_likes
FOR EACH ROW EXECUTE FUNCTION public.handle_diary_like();

-- 좋아요 취소 (diary_likes 테이블에서 DELETE 이벤트 발생 시 -> OLD 키워드 사용)
CREATE FUNCTION public.handle_diary_unlike()
RETURNS trigger
LANGUAGE plpgsql
SECURITY definer
SET search_path = ''
AS $$
BEGIN
  UPDATE public.diaries SET likes = likes - 1 WHERE diary_id = old.diary_id;
  RETURN old;
END;
$$;

CREATE TRIGGER diary_unlike_trigger
AFTER DELETE ON public.diary_likes
FOR EACH ROW EXECUTE FUNCTION public.handle_diary_unlike();