import { FaRegCalendarDays, FaRegPenToSquare } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export default function DiaryFooterNavigation() {
  return (
    <div className="flex-between p-4 md:p-8 border-t-2">
      {/* 목록 페이지로 이동 */}
      <Button asChild>
        <Link to="/danbi/diaries">
          <FaRegCalendarDays className="w-5 h-5 md:w-6 md:h-6" />
        </Link>
      </Button>
      {/* 이전, 다음 글로 이동 */}
      <div className="flex gap-4 md:gap-6 text-sm md:text-base">
        <Button
          className="flex items-center gap-1 btn-text-ghost font-normal md:font-semibold"
          asChild
        >
          <Link to="/danbi/diaries/1">
            <IoIosArrowBack className="w-4 h-4 md:w-5 md:h-5" />
            이전글
          </Link>
        </Button>
        <Button
          className="flex items-center gap-1 btn-text-ghost font-normal md:font-semibold"
          asChild
        >
          <Link to="/danbi/diaries/1">
            다음글
            <IoIosArrowForward className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </Button>
      </div>
      {/* 글 작성 페이지로 이동 */}
      <Button asChild>
        <Link to="/danbi/diaries/create">
          <FaRegPenToSquare className="w-5 h-5 md:w-6 md:h-6" />
        </Link>
      </Button>
    </div>
  );
}
