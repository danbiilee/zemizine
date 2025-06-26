import Stepper from "./stepper";
import OnboardingUser from "./form/user";
import OnboardingSpace from "./form/space";
import OnboardingVisibility from "./form/visibility";
import { FUNNEL_STEPS } from "../constants";

import type { OnboardingState } from "../index";

interface FunnelProps {
  state: OnboardingState;
  handleStepChange: () => void;
  handleDataUpdate: (data: Partial<OnboardingState["data"]>) => void;
  handleSubmit: (data: Partial<OnboardingState["data"]>) => void;
}

export default function Funnel({
  state,
  handleStepChange,
  handleDataUpdate,
  handleSubmit,
}: FunnelProps) {
  const currentInfo = FUNNEL_STEPS[state.step];

  const handleClick = (data: Partial<OnboardingState["data"]>) => {
    handleDataUpdate(data);
    handleStepChange();
  };

  const handleLastClick = (data: Partial<OnboardingState["data"]>) => {
    handleSubmit(data);
  };

  return (
    <>
      <Stepper step={state.step} />
      <div className="flex-1 flex-center flex-col gap-10">
        {/* 타이틀 및 설명 */}
        <h2 className="text-2xl md:text-3xl font-bold">{currentInfo.title}</h2>
        <div className="text-center text-sm md:text-lg">
          {currentInfo.description}
        </div>
        {/* 폼 */}
        {state.step === 1 && (
          <OnboardingUser
            myNickname={state.data.myNickname}
            myProfileImage={state.data.myProfileImage}
            handleClick={handleClick}
          />
        )}
        {state.step === 2 && (
          <OnboardingSpace
            zemTitle={state.data.zemTitle}
            zemDescription={state.data.zemDescription}
            handleClick={handleClick}
          />
        )}
        {state.step === 3 && (
          <OnboardingVisibility
            zemVisibility={state.data.zemVisibility}
            handleLastClick={handleLastClick}
          />
        )}
      </div>
    </>
  );
}
