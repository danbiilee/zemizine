import { useParams, Link } from "react-router";
import { useState } from "react";

import { cn } from "~/lib/utils";
import CalendarWeekdays from "./weekdays";
import exampleImage from "~/assets/images/example.jpg";
import { ThemeModal } from "../theme-modal";
import MonthlyCalendarHeader from "./header";

export default function MonthlyCalendar() {
  const { userId } = useParams();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex-center-y flex-col h-full">
      <ThemeModal open={open} onOpenChange={setOpen} />

      <MonthlyCalendarHeader setOpen={setOpen} />

      {/* Calendar */}
      <div className="w-full">
        {/* Weekdays Header */}
        <CalendarWeekdays />
        {/* Body */}
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 border-t-1 md:border-t-2 border-b-1">
          {Array.from({ length: 31 }).map((_, idx) => (
            <li
              key={idx}
              className={cn([
                "relative aspect-square border-b-1 cursor-pointer",
                idx % 7 !== 0 && "border-l-1",
              ])}
            >
              {/* TODO: 캘린더 날짜 노출 제대로 + 빈데이터 처리 */}
              {/* TODO: 상세, 편집 페이지 분기 처리 */}
              <Link
                to={`/${userId}/diaries/2025-06-01`}
                className="flex-center size-full"
              >
                <img
                  src={exampleImage}
                  alt="diary"
                  className="size-full object-cover"
                />
                <span className="absolute top-0 left-0 size-full p-2 transition-all-300 hover:bg-primary-foreground/60 group">
                  <span className="px-1.5 md:px-2 py-0.5 rounded-full border bg-primary-foreground/60 text-[12px] md:text-sm font-semibold transition-all-300 group-hover:bg-primary-foreground/80">
                    {idx + 1}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
