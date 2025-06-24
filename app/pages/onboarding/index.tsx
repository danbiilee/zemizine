import PublicLayout from "~/components/layouts/public-layout";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import GetStarted from "./components/get-started";
import OnboardingProfile from "./components/profile";
import OnboardingHomepi from "./components/hompi";
import OnboardingSocial from "./components/social";

export default function Onboarding() {
  return (
    <PublicLayout>
      <div className="flex-1 flex flex-col min-h-0">
        <ScrollArea type="auto" className="h-full">
          <div className="flex flex-col items-center justify-center gap-10 px-10 md:px-40 lg:px-70 py-15 md:py-20">
            <div className="flex items-center justify-center">
              <Button className="size-10 lg:size-12 rounded-full border-2 border-foreground text-lg font-bold transition-all-300 hover:bg-accent">
                1
              </Button>
              <div className="w-10 h-0.5 bg-foreground" />
              <Button className="size-10 lg:size-12 rounded-full border-2 border-foreground text-lg font-bold transition-all-300 hover:bg-accent">
                2
              </Button>
              <div className="w-10 h-0.5 bg-foreground" />
              <Button className="size-10 lg:size-12 rounded-full border-2 border-foreground text-lg font-bold transition-all-300 hover:bg-accent">
                3
              </Button>
            </div>
            <OnboardingProfile />
            {/* <OnboardingHomepi /> */}
            {/* <OnboardingSocial /> */}
          </div>
        </ScrollArea>
      </div>
    </PublicLayout>
  );
}
