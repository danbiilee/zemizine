import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function GlobalNavigation() {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between h-12 px-5 bg-primary">
      {/* 로고 + 타이틀 */}
      <div className="flex items-center gap-2">
        {/* 로고  */}
        <h1 className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-foreground text-xl font-bold text-foreground">
          Z
        </h1>
        {/* 타이틀 */}
        <h2 className="ml-2 text-lg font-semibold">db.log</h2>
      </div>
      {/* 검색바 */}
      <div className="relative mx-8">
        {/* TODO: 검색바 포커스 시 테두리 없애기 */}
        <Input
          type="text"
          placeholder="친구를 찾으시나요?"
          className="w-[300px] h-[36px] rounded-full border border-foreground bg-primary-foreground"
        />
        <Button
          type="button"
          className="absolute right-1 top-1 w-[28px] h-[28px] rounded-full bg-primary-foreground hover:bg-foreground/5 transition-all-300"
        >
          <Search strokeWidth={3} className="text-foreground" />
        </Button>
      </div>
      {/* 로그인/로그아웃 */}
      <Button
        variant="outline"
        className="px-3 bg-primary rounded-full border-2 border-transparent font-semibold hover:bg-primary-foreground hover:border-foreground hover:text-foreground transition-all-300"
      >
        로그인
      </Button>
    </header>
  );
}
