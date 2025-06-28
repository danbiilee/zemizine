import { cn } from "~/lib/utils";
import ZemiTextarea from "~/components/zemi/zemi-textarea";

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
    <div className={cn("p-2 bg-zinc-200 rounded-md", className)}>
      <ZemiTextarea
        value={value}
        handleToggleMode={handleToggleMode}
        placeholder="댓글을 입력해주세요"
      />
    </div>
  );
}
