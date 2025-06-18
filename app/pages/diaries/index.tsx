import { ScrollArea } from "~/components/ui/scroll-area";
import MonthlyCalendar from "./components/monthly-calendar";
import PrivateLayout from "~/components/layouts/private-layout";

export default function Diary() {
  return (
    <PrivateLayout>
      <div className="flex flex-col min-h-0 bg-primary-foreground">
        <ScrollArea type="always" className="h-full pr-3.5">
          <MonthlyCalendar />
        </ScrollArea>
      </div>
    </PrivateLayout>
  );
}
