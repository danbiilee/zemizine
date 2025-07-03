import { Button } from "~/components/ui/button";
import DiaryComments from "./comments";
import { DIARY_STATUS } from "~/constants/diary";

import type { Diary } from "../../components/monthly-calendar/calendar-list";

export default function DiaryContent({ diary }: { diary: Diary }) {
  return (
    <div className="text-sm md:text-base">
      <div className="p-4 md:p-8">
        {/* TLDR */}
        <div className="flex-center-y gap-1 md:gap-2 pb-4 md:pb-8 mb-4 md:mb-8 border-b-1 border-dashed-muted">
          <span className="text-2xl md:text-3xl">
            {DIARY_STATUS[diary.status as keyof typeof DIARY_STATUS]}
          </span>
          {diary.title && (
            <span className="md:text-lg font-semibold">{diary.title}</span>
          )}
        </div>
        {/* 내용 */}
        {diary.content && <div>{diary.content}</div>}
        {/* 버튼 */}
        <div className="flex-between pt-4 mt-4 border-t-1 border-dashed-muted">
          <Button className="btn-text-ghost">스티커</Button>
          <div className="flex-center-y gap-1">
            <Button className="btn-text-ghost">수정</Button>
            <span className="divider" />
            <Button className="btn-text-ghost">삭제</Button>
          </div>
        </div>
      </div>
      <DiaryComments />
    </div>
  );
}
