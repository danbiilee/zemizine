import PrivateLayout from "~/components/layouts/private-layout";
import DiaryHeaderNavigation from "./components/header-navigation";
import DiaryFooterNavigation from "./components/footer-navigation";
import DiaryContent from "./components/content";
import { Await, useLoaderData } from "react-router";
import { getDiary } from "~/db/queries/diaries";

import type { Route } from "./+types";
import { Suspense } from "react";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "다이어리 :: zemizine" },
    { name: "다이어리", description: "재미진 다이어리" },
  ];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { slug, date } = params;

  const diary = await getDiary({
    slug,
    date,
  });

  return {
    diary,
  };
};

export default function Diary() {
  const { diary } = useLoaderData();

  return (
    <PrivateLayout>
      <div className="m-4 border-2 rounded-md">
        <DiaryHeaderNavigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={diary}>
            {(diary) => <DiaryContent diary={diary} />}
          </Await>
        </Suspense>
        <DiaryFooterNavigation />
      </div>
    </PrivateLayout>
  );
}
