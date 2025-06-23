import CommentItem from "./comment";
import CommentTextarea from "./textarea";

export default function DiaryComments() {
  return (
    <div className="p-4 sm:p-8 border-t-2 border-foreground text-sm lg:text-base">
      <div className="mb-2 text-base">
        댓글 <span className="font-semibold">0</span>개
      </div>
      {/* 댓글 목록 */}
      <ul>
        <li>
          <CommentItem />
          {/* 대댓글 */}
          <ul className="ml-8">
            <CommentItem />
          </ul>
        </li>
      </ul>
      {/* 댓글 작성 */}
      <CommentTextarea />
    </div>
  );
}
