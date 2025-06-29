import { useState } from "react";

import PublicLayout from "~/components/layouts/public-layout";
import Funnel from "./components/funnel";
import OnboardingWelcome from "./components/welcome";

export interface OnboardingState {
  step: number;
  data: {
    myNickname: string;
    myProfileImage?: File;

    zemTitle: string;
    zemDescription?: string;

    monthlyTitle?: string;
    monthlyDescription?: string;
    monthlyCoverImage?: File;
  };
}

export default function Onboarding() {
  const [state, setState] = useState<OnboardingState>({
    step: 0,
    data: {
      myNickname: "",
      myProfileImage: undefined,
      zemTitle: "",
      zemDescription: "",
      monthlyTitle: "",
      monthlyDescription: "",
      monthlyCoverImage: undefined,
    },
  });

  const showFunnel = state.step > 0;

  const handleStepChange = () => {
    setState((prev) => ({
      ...prev,
      step: prev.step + 1,
    }));
  };

  const handleDataUpdate = (data: Partial<OnboardingState["data"]>) => {
    setState((prev) => ({
      ...prev,
      data: { ...prev.data, ...data },
    }));
  };

  const handleSubmit = (data: Partial<OnboardingState["data"]>) => {
    console.log({ ...state.data, ...data });
  };

  return (
    <PublicLayout withAutoScroll>
      <div className="flex-center-y max-w-120 min-h-full px-10 mx-auto py-15 md:py-20">
        {showFunnel ? (
          <Funnel
            state={state}
            handleStepChange={handleStepChange}
            handleDataUpdate={handleDataUpdate}
            handleSubmit={handleSubmit}
          />
        ) : (
          <OnboardingWelcome handleStepChange={handleStepChange} />
        )}
      </div>
    </PublicLayout>
  );
}
