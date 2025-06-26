import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import notionFace from "~/assets/images/my-notion-face-transparent.png";
import { Textarea } from "~/components/ui/textarea";

export default function GuestbookItem() {
  return (
    <div>
      <div className="flex items-center justify-between py-2 px-4 bg-primary">
        <span className="flex items-center gap-2">
          <Link to="/bboong" className="font-semibold">
            김똘똘
          </Link>
          <span className="text-muted-foreground text-[12px]">
            (2025.06.26 00:00)
          </span>
        </span>
        <div className="flex items-center gap-2 text-sm">
          <Button variant="link" className="p-0">
            둘만 보기
          </Button>
          <Button variant="link" className="p-0">
            수정
          </Button>
          <Button variant="link" className="p-0">
            삭제
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4">
        <img src={notionFace} alt="profile" className="size-50" />
        <div className="flex-1">캬캬캬 내가 쓴 일촌평 맘에 들어?? ㅋㅋㅋㅋ</div>
      </div>
      <div className="flex justify-end pr-4">
        <Button className="ml-2 px-3.5 py-1 rounded-md border-2 border-foreground font-semibold transition-all-300 hover:bg-accent">
          댓글 달기
        </Button>
      </div>

      <div className="p-4 bg-zinc-200">
        <Textarea
          placeholder="댓글을 입력해주세요"
          className="min-h-10 md:min-h-16 border-none bg-primary-foreground shadow-none text-sm lg:text-base placeholder:text-foreground-muted placeholder:text-sm lg:placeholder:text-base resize-none"
        />
        <div className="flex justify-end mt-4">
          <Button className="ml-2 px-3.5 py-1 rounded-md border-2 border-foreground font-semibold transition-all-300 hover:bg-accent">
            등록
          </Button>
        </div>
      </div>
    </div>
  );
}
