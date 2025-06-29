import GlobalNavigation from "~/components/navigations/global-navigation";
import ScrollContainer from "./scroll-container";

interface MainLayoutProps {
  children: React.ReactNode;
  isLoggedIn?: boolean; // TODO: 제거
  withAutoScroll?: boolean;
}

export default function PublicLayout({
  children,
  isLoggedIn,
  withAutoScroll = false,
}: MainLayoutProps) {
  return (
    <main className="flex min-w-[375px] h-screen pt-12 px-3 pb-3">
      <GlobalNavigation isLoggedIn={isLoggedIn} />
      <div className="flex-1 flex flex-col border-2">
        {withAutoScroll ? (
          <ScrollContainer>{children}</ScrollContainer>
        ) : (
          children
        )}
      </div>
    </main>
  );
}
