import client from "~/supa-client";

/**
 * Supabase Client + Views 사용
 */
export const getDiaries = async ({
  slug,
  startDate,
  endDate,
}: {
  slug: string;
  startDate: string;
  endDate: string;
}) => {
  const { data, error } = await client
    .from("diaries")
    .select(
      `
        id:diary_id,
        status,
        title,
        thumbnail:thumbnail_image,
        date,
        profiles!fk_diaries_profile_id!inner (
          slug
        )
      `
    )
    .eq("profiles.slug", slug)
    .gte("date", startDate)
    .lte("date", endDate)
    .order("date");

  if (error) throw error; // ErrorBoundary에서 catch
  return data;
};

export const getDiary = async ({
  slug,
  date,
}: {
  slug: string;
  date: string;
}) => {
  const { data, error } = await client
    .from("diaries")
    .select(
      `
        status,
        title,
        content,
        thumbnail:thumbnail_image,
        date,
        likeCount:stats->>likes,
        commentCount:stats->>comments,
        updatedAt:updated_at,
        profiles!fk_diaries_profile_id!inner (
          slug
        )
      `
    )
    .eq("profiles.slug", slug)
    .eq("date", date)
    .maybeSingle();

  if (error) throw error;
  return data;
};
