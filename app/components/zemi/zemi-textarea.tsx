import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { COMMENT_MODE } from "~/constants/comment";

import type { CommentMode } from "~/constants/comment";
import ZemiLableField from "./zemi-lable-field";
import { Checkbox } from "../ui/checkbox";
import { cn } from "~/lib/utils";

interface ZemiTextareaProps {
  value?: string;
  placeholder?: string;
  hasSecretMode?: boolean;
  handleToggleMode?: (mode: CommentMode) => void;
}

export default function ZemiTextarea({
  value,
  placeholder,
  hasSecretMode,
  handleToggleMode,
}: ZemiTextareaProps) {
  const hasOneButton = !hasSecretMode && !handleToggleMode;

  return (
    <div className="flex-1 flex flex-col gap-2">
      <Textarea
        value={value}
        placeholder={placeholder}
        className="flex-1 border-none bg-primary-foreground input-base"
      />
      <div className={cn(hasSecretMode ? "flex-between" : "flex-end")}>
        {/* 비밀글 영역 */}
        {hasSecretMode && (
          <ZemiLableField
            name="isPrivate"
            label="비밀글"
            className="flex-row items-center gap-2"
          >
            <Checkbox id="isPrivate" name="isPrivate" />
          </ZemiLableField>
        )}
        {/* 버튼 영역 */}
        <div className="flex-end gap-1 md:gap-3">
          {handleToggleMode && (
            <Button
              className="btn-text-ghost px-3.5 py-1"
              onClick={() => handleToggleMode(COMMENT_MODE.VIEW)}
            >
              취소
            </Button>
          )}
          <Button className="btn-outline px-3.5 py-1 rounded-md text-sm md:text-base">
            등록
          </Button>
        </div>
      </div>
    </div>
  );
}
