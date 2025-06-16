import { ArrowLeft, ArrowRight } from "lucide-react";
import { useParams, Link } from "react-router";
import { cn } from "~/lib/utils";

export default function MonthlyCalendar() {
  const { userId } = useParams();

  return (
    <article className="flex flex-col items-center h-full pt-10">
      {/* Navigation */}
      {/* TODO: 회원가입 날짜 기준 이전달로 못넘어가게 + 오늘날짜 기준 다음달로 못넘어가게 처리 */}
      {/* TODO: 타이틀 없으면 날짜 노출 */}
      <div className="flex items-start justify-between w-full px-12">
        <button className="flex items-center gap-3">
          <ArrowLeft size={24} strokeWidth={3} />
          <span>REBIRTH</span>
        </button>
        <div className="text-center">
          <span>2025.06</span>
          {/* TODO: 타이틀 없으면 UNTITLED 노출 */}
          {/* TODO: 타이틀 설정 팝업? */}
          <h3 className="mt-1 text-3xl font-bold">EVOLUTION</h3>
        </div>
        <button className="flex items-center gap-3">
          <span>SPIRIT</span>
          <ArrowRight size={24} strokeWidth={3} />
        </button>
      </div>
      {/* Calendar */}
      <div className="w-full mt-8">
        <ul className="grid grid-cols-7 h-10 border-b-2 border-foreground">
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
            <li key={day} className="flex items-center justify-center">
              {day}
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-7 border-b-1 border-foreground">
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
                to={`/space/${userId}/diary/2025-06-01`}
                className="flex items-center justify-center w-full h-full"
              >
                {idx + 1}
                <span className="opacity-0 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-accent text-md font-bold transition-all-300 hover:opacity-100">
                  이동
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
