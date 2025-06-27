import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function DiaryHeaderNavigation() {
  return (
    <div className="flex-center-y border-b-2">
      {/* 오늘 날짜 */}
      <div className="flex flex-row md:flex-col md:flex-center gap-1 md:gap-0.5 h-full p-4">
        <span className="text-secondary text-3xl font-extrabold">06.23</span>
        <span>월요일</span>
      </div>
      {/* 월 이동 및 날짜 리스트 */}
      <div className="hidden md:flex flex-1 flex-wrap gap-1 md:gap-2 p-4 md:border-l-2">
        {/* 월 이동 */}
        <div className="flex-center-y gap-2">
          <Button className="btn-outline-muted-sqaure p-0.5">
            <IoIosArrowBack className="size-4 stroke-5 text-muted-foreground" />
          </Button>
          <span className="text-muted-foreground md:text-lg font-semibold">
            2025.06
          </span>
          <Button className="btn-outline-muted-sqaure p-0.5">
            <IoIosArrowForward className="size-4 stroke-5 text-muted-foreground" />
          </Button>
        </div>
        {/* 날짜 리스트 */}
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ].map((day) => (
          <button
            key={day}
            className={cn([
              "flex-center size-8 btn-ghost-accent text-sm",
              day === 23 && "bg-accent border-foreground",
            ])}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
