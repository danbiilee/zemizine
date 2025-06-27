import LocalNavigation from "~/components/navigations/local-navigation";
import PublicLayout from "./public-layout";
import AutoScrollContainer from "./auto-scroll-container";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PublicLayout isLoggedIn>
      <LocalNavigation />
      <AutoScrollContainer className="bg-primary-foreground">
        {children}
      </AutoScrollContainer>
    </PublicLayout>
  );
}
