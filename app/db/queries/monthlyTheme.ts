import client from "~/supa-client";

export async function getMonthlyTheme({
  slug,
  date,
}: {
  slug: string;
  date: string;
}) {
  const { data, error } = await client
    .from("monthly_themes")
    .select(
      `
        title,
        description,
        coverImage:cover_image,
        profiles!fk_monthly_themes_profile_id!inner (
          slug
        )
      `
    )
    .eq("profiles.slug", slug)
    .eq("date", date)
    .maybeSingle();

  if (error) throw error;

  return {
    title: data?.title ?? null,
    description: data?.description ?? null,
    coverImage: data?.coverImage ?? null,
  };
}
