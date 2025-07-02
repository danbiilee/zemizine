import { cn } from "~/lib/utils";
import { getMonthDays } from "~/lib/date-utils";
import CalendarCell from "./calendar-cell";

export interface Diary {
  id: number;
  status: string;
  title: string;
  thumbnail: string | null;
  likes: string;
  date: string;
}

interface CalendarListProps {
  diaries: Diary[];
  currentMonth: string;
}

export default function CalendarList({
  diaries,
  currentMonth,
}: CalendarListProps) {
  const baseDate = `${currentMonth}-01`;
  const days = getMonthDays(baseDate);

  return (
    <ul className="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 border-t-1 md:border-t-2 bg-primary/50 overflow-hidden">
      {/* TODO: 배경 테마 이미지로 변경 (https://i.pinimg.com/736x/b3/4f/c0/b34fc024e86ec102c021fd5efe049257.jpg) */}
      <div
        className="absolute inset-0 opacity-30 bg-[url('/gpt-empty-jam.png')] bg-[length:120%_120%] bg-center transition-[background-size] duration-500 ease-in-out group-hover:bg-[length:140%_140%]"
        aria-hidden="true"
      />
      {days.map((day, idx) => {
        const diary = diaries.find((diary) => diary.date === day.date);
        return (
          <li
            key={idx}
            className={cn([
              "group relative aspect-square border-b-1",
              !day.isEmpty && "cursor-pointer",
              // TODO: 반응형 그리드 보더 + 칸수 해결
              idx % 3 !== 0 && "border-l-1", // 기본(모바일, 3열)
              idx % 4 !== 0 && "sm:border-l-1", // sm(4열)
              idx % 5 !== 0 && "md:border-l-1", // md(5열)
              idx % 7 !== 0 && "lg:border-l-1", // lg(7열)
            ])}
          >
            <CalendarCell day={day} diary={diary} />
          </li>
        );
      })}
    </ul>
  );
}
