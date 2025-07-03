import { useLoaderData, Await, useNavigate, useParams } from "react-router";
import { Suspense, useState } from "react";

import CalendarWeekdays from "./weekdays";
import { ThemeModal } from "../theme-modal";
import MonthlyCalendarHeader from "./header";
import CalendarList from "./calendar-list";

export default function MonthlyCalendar() {
  // TODO: 타입 추론 안됨
  const { diaries, monthlyTheme, currentMonth } = useLoaderData();
  const { slug } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleMonthChange = (newMonth: string) => {
    navigate(`/${slug}/diaries?month=${newMonth}`);
  };

  return (
    <div className="flex-center-y flex-col h-full">
      <ThemeModal
        monthlyTheme={monthlyTheme}
        open={open}
        onOpenChange={setOpen}
      />

      {/* Header */}
      <MonthlyCalendarHeader
        currentMonth={currentMonth}
        themeTitle={monthlyTheme?.title}
        onMonthChange={handleMonthChange}
        setOpen={setOpen}
      />

      {/* Calendar */}
      <div className="w-full">
        {/* Weekdays Header */}
        <CalendarWeekdays />

        {/* Calendar List */}
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={diaries}>
            {(diaries) => (
              <CalendarList
                diaries={diaries}
                currentMonth={currentMonth}
                themeCover={monthlyTheme?.coverImage}
              />
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}
