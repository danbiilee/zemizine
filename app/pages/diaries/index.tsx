import MonthlyCalendar from "./components/monthly-calendar";
import PrivateLayout from "~/components/layouts/private-layout";

export default function Diary() {
  return (
    <PrivateLayout>
      <MonthlyCalendar />
    </PrivateLayout>
  );
}
