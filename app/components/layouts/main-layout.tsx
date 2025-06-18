import GlobalNavigation from "~/components/navigations/global-navigation";

interface MainLayoutProps {
  children: React.ReactNode;
  isLoggedIn?: boolean;
}

export default function MainLayout({ children, isLoggedIn }: MainLayoutProps) {
  return (
    <main className="flex flex-col h-screen pt-12 px-3 pb-3 bg-primary">
      <GlobalNavigation isLoggedIn={isLoggedIn} />
      <div className="overflow-y-hidden flex flex-col flex-1 border-2 border-foreground">
        {children}
      </div>
    </main>
  );
}
