import LocalNavigation from "~/components/navigations/local-navigation";
import MainLayout from "./public-layout";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout isLoggedIn>
      <LocalNavigation />
      {children}
    </MainLayout>
  );
}
