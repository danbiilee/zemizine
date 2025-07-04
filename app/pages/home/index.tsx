import { useState } from "react";

import Drawer from "~/pages/home/components/drawer";
import WeeklyOverview from "./components/weekly-overview";
import MonthlyOverview from "./components/monthly-overview";
import PrivateLayout from "~/components/layouts/private-layout";

export default function Homepi() {
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
    <PrivateLayout>
      <div className="flex flex-1 h-full">
        <div className="flex-1 h-full">
          <WeeklyOverview />
          <MonthlyOverview />
        </div>
        <div className="flex">
          <Drawer isOpen={open.social} handleOpen={() => handleOpen("social")}>
            social area
          </Drawer>
          <Drawer
            isOpen={open.profile}
            handleOpen={() => handleOpen("profile")}
          >
            profile area
          </Drawer>
        </div>
      </div>
    </PrivateLayout>
  );
}
