import { Link } from "react-router";
import { useParams } from "react-router";
import exampleImage from "~/assets/images/example.jpg";
import { DIARY_STATUS, type DiaryStatusKey } from "~/constants/diary";

import type { DayInfo } from "~/lib/date-utils";
import type { Diary } from "./calendar-list";

interface CellDataProps {
  day: DayInfo;
  diary?: Diary;
}

export default function CellData({ day, diary }: CellDataProps) {
  if (day.isEmpty) {
    return null;
  }

  const { slug } = useParams();
  const endPath = diary ? `${day.date}` : "create";

  const renderCell = () => {
    if (!diary) {
      // TODO: 글 없을 때 스타일 변경
      return (
        <div className="absolute top-0 left-0 size-full p-2 bg-muted-foreground/30">
          <span className="px-1.5 md:px-2 py-0.5 rounded-full border bg-primary-foreground/60 text-[12px] md:text-sm font-semibold group-hover:bg-primary-foreground/80 transition-all-300">
            {day.dayOfMonth}
          </span>
        </div>
      );
    }

    return (
      <div className="absolute top-0 left-0 size-full p-2 bg-primary/60">
        {/* 날짜 */}
        <span className="absolute z-1 px-1.5 md:px-2 py-0.5 rounded-full border bg-primary-foreground/60 text-[12px] md:text-sm font-semibold group-hover:bg-primary-foreground/80 transition-all-300">
          {day.dayOfMonth}
        </span>

        {/* 썸네일 */}
        <div className="absolute top-0 left-0 flex-center size-full overflow-hidden">
          {diary.thumbnail ? (
            <img
              src={diary?.thumbnail ?? exampleImage}
              alt="diary"
              className="size-full object-cover group-hover:scale-120 transition-all-300"
            />
          ) : (
            // TODO: 타입
            <span className="text-lg md:text-2xl group-hover:scale-130 transition-all-300">
              {DIARY_STATUS[diary.status as DiaryStatusKey]}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <Link to={`/${slug}/diaries/${endPath}`} className="flex-center size-full">
      {renderCell()}
    </Link>
  );
}
