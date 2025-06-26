import PrivateLayout from "~/components/layouts/private-layout";
import SideMenu from "./components/side-menu";

export default function Settings() {
  return (
    <PrivateLayout>
      <div className="flex-1 flex flex-col min-h-0 bg-primary-foreground">
        <div className="flex gap-10 h-full">
          <SideMenu />
        </div>
      </div>
    </PrivateLayout>
  );
}
