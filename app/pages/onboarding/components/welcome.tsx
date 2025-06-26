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
    <>
      <h2 className="text-2xl md:text-3xl font-bold">{currentInfo.title}</h2>
      <div className="text-center md:text-lg">{currentInfo.description}</div>
      <div className="size-full border-2">대충 인사하는 이미지</div>
      <OnboardingButton title="시작할래요" onClick={handleStepChange} />
    </>
  );
}
