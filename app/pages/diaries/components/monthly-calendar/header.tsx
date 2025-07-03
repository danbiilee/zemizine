import { FaEllipsisVertical } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { format, addMonths, subMonths, parse, isAfter } from "date-fns";
import { useMemo } from "react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "~/components/ui/dropdown-menu";

interface MonthlyCalendarHeaderProps {
  currentMonth: string; // YYYY-MM
  themeTitle?: string;
  onMonthChange: (newMonth: string) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MonthlyCalendarHeader({
  currentMonth,
  themeTitle,
  onMonthChange,
  setOpen,
}: MonthlyCalendarHeaderProps) {
  const displayMonth = currentMonth.replace("-", ".");

  const { isPrevDisabled, isNextDisabled } = useMemo(() => {
    const today = new Date();
    const parsedCurrentMonth = parse(currentMonth, "yyyy-MM", today);

    return {
      isPrevDisabled: false, // TODO: 회원가입일 기준 이전 달로 이동 불가
      isNextDisabled: isAfter(addMonths(parsedCurrentMonth, 1), today), // 오늘 기준 다음 달로 이동 불가
    };
  }, [currentMonth]);

  const handleMonthChange = (direction: "prev" | "next") => {
    const date = parse(currentMonth, "yyyy-MM", new Date());
    const newDate =
      direction === "prev" ? subMonths(date, 1) : addMonths(date, 1);
    const newMonth = format(newDate, "yyyy-MM");
    onMonthChange(newMonth);
  };

  return (
    <div className="flex-center-y flex-col-reverse md:flex-row md:justify-between w-full my-10 md:my-12 px-5 md:px-12">
      <div className="flex-center-y">
        {/* Title */}
        <div className="flex-center-y flex-col md:flex-row md:items-start gap-0.5 order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            {themeTitle || displayMonth}
          </h1>
          {themeTitle && <span className="md:text-lg">{displayMonth}</span>}
        </div>

        {/* Navigation */}
        {/* TODO: disabled 스타일 적용 */}
        <Button
          className="order-1 md:order-2 mr-3 md:mr-5 md:ml-6"
          onClick={() => handleMonthChange("prev")}
          disabled={isPrevDisabled}
        >
          <IoIosArrowBack className="w-7 h-7 stroke-5 md:stroke-10 md:w-8 md:h-8" />
        </Button>
        <Button
          className="order-3 ml-3 md:ml-0"
          onClick={() => handleMonthChange("next")}
          disabled={isNextDisabled}
        >
          <IoIosArrowForward className="w-7 h-7 stroke-5 md:stroke-10 md:w-8 md:h-8" />
        </Button>
      </div>

      {/* TODO: DropdownMenu 컴포넌트 분리, 스타일 적용 */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <FaEllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>기록하기</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            테마 설정하기
          </DropdownMenuItem>
          <DropdownMenuItem>발행하기</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
