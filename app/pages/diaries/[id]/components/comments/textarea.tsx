import { Textarea } from "~/components/ui/textarea";

export default function CommentTextarea() {
  return (
    // TODO: 포커싱 전에는 인풋 + 등록 버튼 한줄로 보이게
    <div className="mt-4 p-2 bg-zinc-200 rounded-md">
      <Textarea
        placeholder="댓글을 입력해주세요"
        className="min-h-10 md:min-h-16 border-none shadow-none text-sm lg:text-base placeholder:text-foreground-muted placeholder:text-sm lg:placeholder:text-base resize-none"
      />
      <div className="flex items-center justify-end mt-2">
        <div className="text-[12px] lg:text-sm text-zinc-400">
          <span>1</span> / <span>500</span>
        </div>
        <button className="ml-2 px-3.5 py-1 rounded-md border-2 border-foreground font-semibold transition-all-300 hover:bg-accent">
          등록
        </button>
      </div>
    </div>
  );
}
