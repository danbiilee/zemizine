import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { COMMENT_MODE } from "~/constants/comment";

import type { CommentMode } from "~/constants/comment";

interface CommentTextareaProps {
  value?: string;
  handleToggleMode?: (mode: CommentMode) => void;
  className?: string;
}

export default function CommentTextarea({
  value,
  handleToggleMode,
  className,
}: CommentTextareaProps) {
  return (
    <div className={cn("p-2.5 bg-zinc-200 rounded-md", className)}>
      <Textarea
        value={value}
        placeholder="댓글을 입력해주세요"
        className="min-h-10 md:min-h-16 input-base border-none shadow-none resize-none"
      />
      <div className="flex-end gap-3 mt-2">
        {/* 글자 수 표시 */}
        <div className="text-[12px] text-sm md:text-base text-zinc-400">
          <span>1</span> / <span>500</span>
        </div>
        {/* 버튼 그룹 */}
        <div>
          {handleToggleMode && (
            <Button
              className="px-3.5 py-1 btn-text-ghost"
              onClick={() => handleToggleMode?.(COMMENT_MODE.VIEW)}
            >
              취소
            </Button>
          )}
          <Button className="px-3.5 py-1 btn-outline rounded-md">등록</Button>
        </div>
      </div>
    </div>
  );
}
