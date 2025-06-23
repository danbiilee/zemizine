import { FaRegCalendarDays, FaRegPenToSquare } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function DiaryFooterNavigation() {
  return (
    <div className="flex items-center justify-between p-4 md:p-8 border-2 border-foreground rounded-bl-md rounded-br-md">
      <button>
        <FaRegCalendarDays className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <div className="flex gap-4 md:gap-6 text-sm md:text-base md:font-semibold">
        <button className="flex items-center gap-1">
          <IoIosArrowBack className="w-4 h-4 md:w-5 md:h-5" />
          이전글
        </button>
        <button className="flex items-center gap-1">
          다음글
          <IoIosArrowForward className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
      <button>
        <FaRegPenToSquare className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
}
