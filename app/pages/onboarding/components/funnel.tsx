import Stepper from "./stepper";
import OnboardingUser from "./form/user";
import OnboardingSpace from "./form/space";
import OnboardingTheme from "./form/theme";
import { FUNNEL_STEPS } from "../constants";
import FormButton from "./form/button";

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
    <div className="flex-1">
      <Stepper step={state.step} />
      {/* TODO: 폼을 여기로 옮겨야 함. 그리고 상세 폼을 children으로 넣게하고 각 페이지에서 funnel을 불러오게 */}
      <div className="flex-center flex-col gap-10 mt-10 mb-15">
        {/* 타이틀 및 설명 */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            {currentInfo.title}
          </h2>
          {currentInfo.description && (
            <div className="md:text-lg text-zinc-600">
              {currentInfo.description}
            </div>
          )}
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
          <OnboardingTheme
            monthlyTitle={state.data.monthlyTitle}
            monthlyDescription={state.data.monthlyDescription}
            monthlyCoverImage={state.data.monthlyCoverImage}
            handleLastClick={handleLastClick}
          />
        )}
      </div>
      <FormButton title={currentInfo.button} onClick={handleStepChange} />
    </div>
  );
}
