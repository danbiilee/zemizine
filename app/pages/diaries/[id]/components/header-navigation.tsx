import { IoIosArrowForward } from "react-icons/io";

import { IoIosArrowBack } from "react-icons/io";
import { cn } from "~/lib/utils";

export default function DiaryHeaderNavigation() {
  return (
    <div className="flex items-center border-2 border-foreground rounded-tl-md rounded-tr-md">
      {/* 오늘 날짜 */}
      <div className="flex flex-row sm:flex-col sm:items-center sm:justify-center gap-1 sm:gap-0.5 h-full p-4">
        <span className="text-secondary text-3xl font-extrabold">06.23</span>
        <span className="text-md">월요일</span>
      </div>
      {/* 월 이동 및 날짜 리스트 */}
      <div className="hidden sm:flex flex-1 flex-wrap gap-1 lg:gap-2 p-4 sm:border-l-2 sm:border-foreground">
        {/* 월 이동 */}
        <div className="flex items-center gap-2">
          <button className="p-0.5 border-2 border-muted-foreground rounded-md transition-all-300 hover:bg-zinc-200">
            <IoIosArrowBack className="w-4 h-4 stroke-5 text-muted-foreground" />
          </button>
          <span className="text-muted-foreground lg:text-lg font-semibold">
            2025.06
          </span>
          <button className="p-0.5 border-2 border-muted-foreground rounded-md transition-all-300 hover:bg-zinc-200">
            <IoIosArrowForward className="w-4 h-4 stroke-5 text-muted-foreground" />
          </button>
        </div>
        {/* 날짜 리스트 */}
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ].map((day) => (
          <button
            key={day}
            className={cn([
              "flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-all-300 hover:bg-accent hover:border-2 hover:border-foreground",
              day === 23 && "bg-accent border-2 border-foreground",
            ])}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
