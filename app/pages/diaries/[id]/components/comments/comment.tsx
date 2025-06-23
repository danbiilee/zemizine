import { FaEraser, FaReply, FaXmark } from "react-icons/fa6";
import { Link } from "react-router";

export default function CommentItem() {
  return (
    <div className="flex flex-wrap md:flex-nowrap items-center mb-1.5">
      <span className="bg-accent/80 font-bold">
        <Link to="/bboong">김똘똘</Link>
      </span>
      <span>
        :{" "}
        <span className="mr-1.5 font-semibold">
          <Link to="/bboong">@김뿡뿡</Link>
        </span>
        야 방구 좀 그만 껴ㅡㅡ
      </span>
      <span className="mx-1 text-zinc-400 text-[12px]">(2025.06.23 13:00)</span>
      <div className="flex items-center gap-0.5">
        <button className="p-1">
          <FaReply className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
        </button>
        <button className="p-1">
          <FaEraser className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
        </button>
        <button className="p-1">
          <FaXmark className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}
