import { FUNNEL_STEPS } from "../constants";
import OnboardingButton from "./form/button";

interface OnboardingWelcomeProps {
  handleStepChange: () => void;
}

export default function OnboardingWelcome({
  handleStepChange,
}: OnboardingWelcomeProps) {
  const currentInfo = FUNNEL_STEPS[0];

  return (
    <div className="flex-1 flex-center flex-col gap-10">
      {/* 타이틀 */}
      <h2 className="text-2xl md:text-3xl font-bold">{currentInfo.title}</h2>
      {/* 설명 */}
      <div className="flex flex-col gap-8 text-zinc-600 text-center md:text-lg">
        {currentInfo.description}
      </div>
      {/* 버튼 */}
      <OnboardingButton title={currentInfo.button} onClick={handleStepChange} />
    </div>
  );
}
