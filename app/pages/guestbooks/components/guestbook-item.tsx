import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import notionFace from "~/assets/images/my-notion-face-transparent.png";
import ZemiTextarea from "~/components/zemi/zemi-textarea";

export default function GuestbookItem() {
  return (
    <div>
      {/* 작성자 정보 */}
      <div className="flex-between py-2 px-4 bg-primary">
        <span className="flex-center-y gap-2">
          <Link to="/bboong" className="font-semibold">
            김똘똘
          </Link>
          <span className="text-muted-foreground text-[12px]">
            (2025.06.26 00:00)
          </span>
        </span>
        <div className="flex-center-y gap-2 text-sm">
          <Button variant="link" className="p-0">
            둘만 보기
          </Button>
          <span className="divider" />
          <Button variant="link" className="p-0">
            수정
          </Button>
          <span className="divider" />
          <Button variant="link" className="p-0">
            삭제
          </Button>
        </div>
      </div>

      {/* 컨텐츠 */}
      <div className="flex-center-y gap-4 p-4">
        <img
          src={notionFace}
          alt="profile"
          className="hidden md:block size-50"
        />
        <div className="flex-1">캬캬캬 내가 쓴 일촌명 맘에 들어?? ㅋㅋㅋㅋ</div>
      </div>

      {/* 댓글 영역 */}
      <div className="p-2 bg-zinc-200">
        <ZemiTextarea placeholder="댓글을 입력해주세요" />
      </div>
    </div>
  );
}
