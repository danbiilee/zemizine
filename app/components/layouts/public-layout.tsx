import GlobalNavigation from "~/components/navigations/global-navigation";
import AutoScrollContainer from "./auto-scroll-container";

interface MainLayoutProps {
  children: React.ReactNode;
  isLoggedIn?: boolean;
}

export default function PublicLayout({
  children,
  isLoggedIn,
}: MainLayoutProps) {
  return (
    <main className="flex min-w-[375px] h-screen pt-12 px-3 pb-3">
      <GlobalNavigation isLoggedIn={isLoggedIn} />
      <div className="flex-1 flex flex-col border-2">
        <AutoScrollContainer>{children}</AutoScrollContainer>
      </div>
    </main>
  );
}
