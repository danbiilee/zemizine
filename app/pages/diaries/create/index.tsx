import { lazy, Suspense } from "react";
import PrivateLayout from "~/components/layouts/private-layout";
import { Button } from "~/components/ui/button";

const Editor = lazy(() => import("./components/editor"));

export default function DiaryCreate() {
  return (
    <PrivateLayout>
      <Suspense
        fallback={<div className="flex-center h-full">에디터 로딩 중...</div>}
      >
        <Editor />
        <div className="">
          <Button className="btn-accent px-5 py-1">등록</Button>
          <div>2025.06.28 토요일</div>
          <div>다른 날짜 선택하기</div>
          <div>상태 고르기</div>
          <div>제목을 입력하세요</div>
        </div>
      </Suspense>
    </PrivateLayout>
  );
}
