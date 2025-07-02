import client from "~/supa-client";

/**
 * Supabase Client + Views 사용
 */
export const getDiaries = async ({
  startDate,
  endDate,
}: {
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
        likes:stats->>likes
      `
    )
    .gte("date", startDate)
    .lte("date", endDate)
    .order("date");

  if (error) throw error; // ErrorBoundary에서 catch
  return data;
};
