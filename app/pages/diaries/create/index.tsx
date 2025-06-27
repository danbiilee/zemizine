import { lazy, Suspense } from "react";
import PrivateLayout from "~/components/layouts/private-layout";

const Editor = lazy(() => import("./components/editor"));

export default function DiaryCreate() {
  return (
    <PrivateLayout>
      <Suspense
        fallback={<div className="flex-center h-full">에디터 로딩 중...</div>}
      >
        <Editor />
      </Suspense>
    </PrivateLayout>
  );
}
