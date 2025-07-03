import MonthlyCalendar from "./components/monthly-calendar";
import PrivateLayout from "~/components/layouts/private-layout";
import { getDiaries, getMonthlyTheme } from "~/db/queries/diaries";
import { getMonthRange } from "~/lib/date-utils";
import { redirect } from "react-router";
import { format } from "date-fns";

import type { Route } from "./+types";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "다이어리 :: zemizine" },
    { name: "다이어리", description: "재미진 다이어리" },
  ];
};

export const loader = async ({ request, params }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const currentMonth = url.searchParams.get("month");
  const { slug } = params;

  // URL에 month 파라미터가 없으면 현재 월로 리다이렉트
  if (!currentMonth) {
    const today = new Date();
    const defaultMonth = format(today, "yyyy-MM");
    return redirect(`/${slug}/diaries?month=${defaultMonth}`);
  }

  // YYYY-MM 형식의 날짜 검증
  if (!/^\d{4}-\d{2}$/.test(currentMonth)) {
    return redirect(`/${slug}/diaries?month=${format(new Date(), "yyyy-MM")}`);
  }

  const baseDate = `${currentMonth}-01`;
  const { startDate, endDate } = getMonthRange(baseDate);

  // 다이어리와 먼슬리테마 데이터를 병렬로 조회
  const [diaries, monthlyTheme] = await Promise.all([
    getDiaries({
      slug,
      startDate,
      endDate,
    }),
    getMonthlyTheme({
      slug,
      date: baseDate,
    }),
  ]);

  return {
    diaries,
    monthlyTheme,
    currentMonth,
  };
};

export default function Diaries() {
  return (
    <PrivateLayout>
      <MonthlyCalendar />
    </PrivateLayout>
  );
}
