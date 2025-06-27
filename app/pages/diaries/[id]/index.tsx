import PrivateLayout from "~/components/layouts/private-layout";
import DiaryHeaderNavigation from "./components/header-navigation";
import DiaryFooterNavigation from "./components/footer-navigation";
import DiaryContent from "./components/content";

export default function Diary() {
  return (
    <PrivateLayout>
      <div className="m-4 border-2 rounded-md">
        <DiaryHeaderNavigation />
        <DiaryContent />
        <DiaryFooterNavigation />
      </div>
    </PrivateLayout>
  );
}
