import LocalNavigation from "~/components/navigations/local-navigation";
import PublicLayout from "./public-layout";
import ScrollContainer from "./scroll-container";

interface PrivateLayoutProps {
  children: React.ReactNode;
  scrollable?: boolean;
}

export default function PrivateLayout({
  children,
  scrollable,
}: PrivateLayoutProps) {
  return (
    <PublicLayout isLoggedIn>
      <LocalNavigation />
      <ScrollContainer
        scrollable={scrollable}
        className="bg-primary-foreground"
      >
        {children}
      </ScrollContainer>
    </PublicLayout>
  );
}
