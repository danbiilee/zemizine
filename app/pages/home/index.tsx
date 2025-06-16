import { useState } from "react";
import Drawer from "~/pages/home/components/drawer";
import WeeklyOverview from "./components/weekly-overview";
import MonthlyOverview from "./components/monthly-overview";

export default function Space() {
  const [open, setOpen] = useState({
    social: false,
    profile: true,
  });

  const handleOpen = (key: keyof typeof open) => {
    setOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <article className="flex flex-1 bg-primary-foreground">
      <section className="flex-1 h-full">
        <WeeklyOverview />
        <MonthlyOverview />
      </section>
      <section className="flex">
        <Drawer isOpen={open.social} handleOpen={() => handleOpen("social")}>
          social area
        </Drawer>
        <Drawer isOpen={open.profile} handleOpen={() => handleOpen("profile")}>
          profile area
        </Drawer>
      </section>
    </article>
  );
}
