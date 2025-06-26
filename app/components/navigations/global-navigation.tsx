import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link } from "react-router";

interface GlobalNavigationProps {
  isLoggedIn?: boolean;
}

// TODO: 로그인 상태 처리
export default function GlobalNavigation({
  isLoggedIn = false,
}: GlobalNavigationProps) {
  return (
    <header className="fixed top-0 left-0 right-0 flex-between h-12 px-5">
      {/* 로고 + 타이틀 */}
      <div className="flex-center-y gap-2">
        {/* 로고  */}
        <div className="size-8 rounded-full border-2 text-xl font-bold">
          <Link to="/" className="flex-center">
            Z
          </Link>
        </div>
        {/* 타이틀 */}
        <h1 className="ml-1 text-lg font-semibold">
          <Link to={isLoggedIn ? "/homepi" : "/"}>
            {isLoggedIn ? "db.log" : "zemizine"}
          </Link>
        </h1>
      </div>
      {/* 검색바 */}
      {isLoggedIn && (
        <div className="relative mx-8">
          {/* TODO: 검색바 포커스 시 테두리 없애기 */}
          <Input
            type="text"
            placeholder="친구를 찾으시나요?"
            className="w-[300px] h-[36px] rounded-full border bg-primary-foreground"
          />
          <Button type="button" className="absolute right-1.5 top-1.5 p-1">
            <Search className="size-4stroke-3" />
          </Button>
        </div>
      )}
      {/* 로그인/로그아웃 */}
      <Button asChild className="px-3 font-semibold">
        <Link to="/sign-in">로그인</Link>
      </Button>
    </header>
  );
}
