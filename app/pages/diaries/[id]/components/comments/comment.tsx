import { useState } from "react";
import { FaEraser, FaReply, FaXmark } from "react-icons/fa6";
import { Link } from "react-router";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import CommentWriter from "./comment-writer";
import { COMMENT_MODE } from "~/constants/comment";

import type { CommentMode } from "~/constants/comment";

interface CommentItemProps {
  isParent?: boolean;
}

export default function CommentItem({ isParent = false }: CommentItemProps) {
  const [mode, setMode] = useState<CommentMode>(COMMENT_MODE.VIEW);

  const handleToggleMode = (mode: CommentMode) => {
    setMode((prev) => (prev === mode ? COMMENT_MODE.VIEW : mode));
  };

  return mode === COMMENT_MODE.EDIT ? (
    // 댓글 수정
    <CommentWriter
      className="mb-1.5"
      value="야 방구 좀 그만 껴ㅡㅡ"
      handleToggleMode={() => handleToggleMode(COMMENT_MODE.EDIT)}
    />
  ) : (
    <div className="mb-1.5">
      {/* 댓글 */}
      <div className="flex-center-y flex-wrap md:flex-nowrap">
        {/* 작성자 */}
        <Button className="btn-text-ghost" asChild>
          <Link to="/bboong">김똘똘</Link>
        </Button>
        :{/* 컨텐츠 */}
        <Button className="btn-text-ghost font-normal" asChild>
          <Link to="/bboong">@김뿡뿡</Link>
        </Button>
        야 방구 좀 그만 껴ㅡㅡ
        <span className="mx-1 text-zinc-400 text-[12px]">
          (2025.06.23 13:00)
        </span>
        {/* 버튼 그룹 */}
        <div className="flex-center-y gap-0.5">
          <Button
            className="p-1"
            onClick={() => handleToggleMode(COMMENT_MODE.REPLY)}
          >
            <FaReply className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
          </Button>
          <Button
            className="p-1"
            onClick={() => handleToggleMode(COMMENT_MODE.EDIT)}
          >
            <FaEraser className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
          </Button>
          <Button className="p-1">
            <FaXmark className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
          </Button>
        </div>
      </div>

      {/* 답글 작성 */}
      {mode === COMMENT_MODE.REPLY && (
        <CommentWriter
          className={cn("mt-1.5", isParent && "ml-8")}
          handleToggleMode={() => handleToggleMode(COMMENT_MODE.REPLY)}
        />
      )}
    </div>
  );
}
