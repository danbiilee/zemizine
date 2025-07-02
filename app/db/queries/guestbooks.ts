import client from "~/supa-client";

export const getGuestBooks = async ({ limit }: { limit: number }) => {
  const guestbooks = await client.from("guestbooks").select();
};
