import PrivateLayout from "~/components/layouts/private-layout";
import DiaryHeaderNavigation from "./components/header-navigation";
import DiaryFooterNavigation from "./components/footer-navigation";
import DiaryContent from "./components/content";
import { ScrollArea } from "~/components/ui/scroll-area";

export default function Diary() {
  return (
    <PrivateLayout>
      <div className="flex-1 flex flex-col min-h-0 bg-primary-foreground">
        <ScrollArea type="always" className="h-full pr-3.5">
          <div className="m-4">
            <DiaryHeaderNavigation />
            <DiaryContent />
            <DiaryFooterNavigation />
          </div>
        </ScrollArea>
      </div>
    </PrivateLayout>
  );
}
