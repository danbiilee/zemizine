-- 함수: 유저 테이블에 데이터가 추가되면 프로필 테이블에 데이터를 추가
CREATE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY definer
SET search_path = ''
AS $$
BEGIN
    -- IF + END IF, 마지막은 RETURN NEW;
    -- NEW 키워드: 삽입되고 있는 행의 데이터를 참조
    IF new.raw_app_meta_data IS NOT NULL THEN
      -- 먼저 provider 키가 있는지 체크 후 값 확인
      IF new.raw_app_meta_data ? 'provider' AND new.raw_app_meta_data ->> 'provider' = 'email' THEN
        INSERT INTO public.profiles (profile_id, nickname)
        VALUES (new.id, substr(md5(random()::text), 1, 8)); -- 랜덤 값으로 고유 닉네임 생성
      END IF;
    END IF;
    RETURN new;
END;
$$; 

-- 트리거
CREATE TRIGGER user_to_profile_trigger
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();