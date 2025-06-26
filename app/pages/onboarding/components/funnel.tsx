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
  handleSubmit: () => void;
}

export default function Funnel({
  state,
  handleStepChange,
  handleDataUpdate,
  handleSubmit,
}: FunnelProps) {
  const currentInfo = FUNNEL_STEPS[state.step];

  // 각 스텝별 props 생성
  const getStepProps = () => {
    switch (state.step) {
      case 1:
        return {
          myNickname: state.data.myNickname,
          myProfileImage: state.data.myProfileImage,
          handleClick: (data: Partial<OnboardingState["data"]>) => {
            handleDataUpdate(data);
            handleStepChange();
          },
        };
      case 2:
        return {
          zemTitle: state.data.zemTitle,
          zemDescription: state.data.zemDescription,
          handleClick: (data: Partial<OnboardingState["data"]>) => {
            handleDataUpdate(data);
            handleStepChange();
          },
        };
      case 3:
        return {
          zemVisibility: state.data.zemVisibility,
          handleClick: (data: Partial<OnboardingState["data"]>) => {
            handleDataUpdate(data);
            handleSubmit();
          },
        };
      default:
        return {};
    }
  };

  return (
    <>
      <Stepper step={state.step} />
      <div className="flex-1 flex-center flex-col gap-10">
        {/* 타이틀 및 설명 */}
        <h2 className="text-2xl md:text-3xl font-bold">{currentInfo.title}</h2>
        <div className="text-center text-sm lg:text-lg">
          {currentInfo.description}
        </div>
        {/* 폼 */}
        {state.step === 1 && <OnboardingUser {...getStepProps()} />}
        {state.step === 2 && <OnboardingSpace {...getStepProps()} />}
        {state.step === 3 && <OnboardingVisibility {...getStepProps()} />}
      </div>
    </>
  );
}
