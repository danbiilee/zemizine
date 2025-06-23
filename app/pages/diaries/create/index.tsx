import { lazy, Suspense } from "react";
import PrivateLayout from "~/components/layouts/private-layout";

const Editor = lazy(() => import("./components/editor"));

export default function DiaryCreate() {
  return (
    <PrivateLayout>
      <div className="flex-1 flex flex-col min-h-0 bg-primary-foreground">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-full">
              에디터 로딩 중...
            </div>
          }
        >
          <Editor />
        </Suspense>
      </div>
    </PrivateLayout>
  );
}
