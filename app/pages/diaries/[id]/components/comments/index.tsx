import CommentItem from "./comment";
import CommentTextarea from "./comment-writer";

export default function DiaryComments() {
  return (
    <div className="p-4 md:p-8 border-t-2 text-sm md:text-base">
      <div className="mb-2 text-base md:text-lg">
        댓글 <span className="font-semibold">0</span>개
      </div>
      {/* 댓글 목록 */}
      <ul>
        <li>
          <CommentItem isParent />
          {/* 대댓글 */}
          <ul className="ml-8">
            <CommentItem />
          </ul>
        </li>
      </ul>
      {/* 댓글 작성 */}
      <div className="mt-4 md:mt-8 border-t-1 border-dashed-muted">
        <CommentTextarea className="mt-4" />
      </div>
    </div>
  );
}
