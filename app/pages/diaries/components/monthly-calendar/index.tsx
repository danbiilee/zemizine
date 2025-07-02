import { useLoaderData, Await, useNavigate, useParams } from "react-router";
import { Suspense, useState } from "react";

import CalendarWeekdays from "./weekdays";
import { ThemeModal } from "../theme-modal";
import MonthlyCalendarHeader from "./header";
import CalendarList from "./calendar-list";

export default function MonthlyCalendar() {
  const { diaries, currentMonth } = useLoaderData();
  const { userId } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleMonthChange = (newMonth: string) => {
    navigate(`/${userId}/diaries?month=${newMonth}`);
  };

  return (
    <div className="flex-center-y flex-col h-full">
      <ThemeModal open={open} onOpenChange={setOpen} />

      {/* Header */}
      <MonthlyCalendarHeader
        currentMonth={currentMonth}
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
              <CalendarList diaries={diaries} currentMonth={currentMonth} />
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}
