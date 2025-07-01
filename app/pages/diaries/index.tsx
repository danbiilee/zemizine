import { getDiaries } from "~/db/queries/diaries";
import MonthlyCalendar from "./components/monthly-calendar";
import PrivateLayout from "~/components/layouts/private-layout";

import type { Route } from "./+types";

/**
 * loader
 * - 컴포넌트가 사용자에게 보여지기 전 호출되는 함수
 * - 서버에서 실행되기 때문에 drizzle 연결해도 안전
 */
export const loader = async () => {
  const diaries = await getDiaries();
  // const diary = await getDiary(1);
  return { diaries };
};

export default function Diary({ loaderData }: Route.ComponentProps) {
  const { diaries } = loaderData;
  console.log(diaries);

  return (
    <PrivateLayout>
      <MonthlyCalendar />
    </PrivateLayout>
  );
}
