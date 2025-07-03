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
        likes:stats->>likes,
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
