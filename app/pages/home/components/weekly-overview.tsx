import { X } from "lucide-react";
import { Link, useParams } from "react-router";
import { getWeekDates } from "~/lib/date-utils";
import { cn } from "~/lib/utils";

const diaries = [
  {
    date: "2025-06-10", // 필수값
    status: "😁", // 필수값
    description: "오늘은 좋은 하루였어요.", // 필수값
    images: [
      "https://cdn.pixabay.com/photo/2025/03/25/23/08/parrot-9493341_1280.jpg",
    ],
  },
  {
    date: "2025-06-11",
    status: "😁",
    description: "오늘은 좋은 하루였어요.",
    images: [],
  },
];

export default function DiaryOverview() {
  const { userId } = useParams();

  const weekDates = getWeekDates();

  const renderThumbnail = (date: string) => {
    const diary = diaries.find((d) => d.date === date);

    if (!diary) {
      return (
        <span className="flex items-center justify-center h-full text-zinc-300">
          <X size={80} />
        </span>
      );
    }

    if (diary.images.length > 0) {
      return (
        <img
          src={diary.images[0]}
          alt="썸네일"
          className="w-full h-full object-cover"
        />
      );
    }
    return (
      <span className="flex items-center justify-center h-full text-4xl">
        {diary.status}
      </span>
    );
  };

  return (
    <ul className="grid grid-cols-7 border-b-2 border-foreground">
      {weekDates.map((date, idx) => (
        <li
          key={date}
          className={cn([
            "relative aspect-square border-l-2 border-foreground cursor-pointer",
            idx === 0 && "border-l-0",
          ])}
        >
          <Link to={`/space/${userId}/diary/${date}`}>
            {renderThumbnail(date)}
            <span className="opacity-0 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-accent text-md font-extrabold transition-all-300 hover:opacity-100">
              {["월", "화", "수", "목", "금", "토", "일"][idx]}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
