import { useParams, Link } from "react-router";
import { cn } from "~/lib/utils";
import CalendarWeekdays from "./weekdays";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import exampleImage from "~/assets/images/example.jpg";
import { FaRegPenToSquare, FaRegPaperPlane } from "react-icons/fa6";

export default function MonthlyCalendar() {
  const { userId } = useParams();

  return (
    <div className="flex flex-col items-center h-full">
      {/* Header */}
      <div className="flex flex-col-reverse items-center w-full mt-10 mb-10 px-5 sm:flex-row sm:justify-between sm:mt-15 sm:px-12">
        <div className="flex items-center">
          {/* Title */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-0.5 order-2 sm:order-1">
            {/* TODO: 타이틀 없으면 UNTITLED 노출 */}
            {/* TODO: 타이틀 설정 팝업? */}
            <h3 className="text-2xl font-extrabold sm:text-4xl lg:text-5xl">
              UNTITLED
            </h3>
            <span className="text-sm sm:text-base lg:text-lg">2025.06</span>
          </div>
          {/* Navigation */}
          {/* TODO: 회원가입 날짜 기준 이전달로 못넘어가게 + 오늘날짜 기준 다음달로 못넘어가게 처리 */}
          {/* TODO: 타이틀 없으면 날짜 노출 */}
          <button className="order-1 ml-5 mr-3 sm:order-2 sm:mr-5 lg:ml-8">
            <IoIosArrowBack className="w-6 h-6 stroke-5 sm:stroke-10 md:w-7 md:h-7 lg:w-8 lg:h-8" />
          </button>
          <button className="order-3 ml-3 sm:ml-0">
            <IoIosArrowForward className="w-6 h-6 stroke-5 sm:stroke-10 md:w-7 md:h-7 lg:w-8 lg:h-8" />
          </button>
        </div>
        {/* Action Buttons (Mobile) */}
        <div className="flex justify-end gap-8 mb-8 sm:mb-0 lg:hidden">
          <button>
            <FaRegPenToSquare className="w-6 h-6" />
          </button>
          <button>
            <FaRegPaperPlane className="w-6 h-6" />
          </button>
        </div>
        {/* Action Buttons (Desktop) */}
        <div className="hidden gap-5 lg:flex">
          <button className="px-9 py-1.5 font-semibold rounded-full border-2 border-foreground hover:bg-accent hover:border-foreground transition-all-300">
            기록하기
          </button>
          <button className="px-9 py-1.5 font-semibold rounded-full border-2 border-foreground hover:bg-accent hover:border-foreground transition-all-300">
            발행하기
          </button>
        </div>
      </div>

      {/* Calendar */}
      <div className="w-full">
        {/* Header */}
        <CalendarWeekdays />
        {/* Body */}
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 border-t-1 md:border-t-2 border-b-1 border-foreground">
          {Array.from({ length: 31 }).map((_, idx) => (
            <li
              key={idx}
              className={cn([
                "relative aspect-square border-b-1 border-foreground cursor-pointer",
                idx % 7 !== 0 && "border-l-1",
              ])}
            >
              {/* TODO: 캘린더 날짜 노출 제대로 + 빈데이터 처리 */}
              {/* TODO: 상세, 편집 페이지 분기 처리 */}
              <Link
                to={`/${userId}/diaries/2025-06-01`}
                className="flex items-center justify-center w-full h-full"
              >
                <img
                  src={exampleImage}
                  alt="diary"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-0 left-0 w-full h-full p-2 transition-all-300 group hover:bg-primary-foreground/60">
                  <span className="px-1.5 md:px-2 py-0.5 rounded-full border border-foreground bg-primary-foreground/60 text-[12px] md:text-sm font-semibold transition-all-300 group-hover:bg-primary-foreground/80">
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
