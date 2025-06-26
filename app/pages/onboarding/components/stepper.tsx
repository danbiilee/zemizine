import { cn } from "~/lib/utils";

interface StepperProps {
  step: number;
  currentStep?: number;
}

function Step({ step, currentStep }: StepperProps) {
  return (
    <span
      className={cn([
        "flex-center size-10 md:size-12 rounded-full border-2 text-lg font-bold transition-all-300",
        step === currentStep && "bg-accent",
      ])}
    >
      {step}
    </span>
  );
}

export default function Stepper({ step }: StepperProps) {
  return (
    <div className="flex-center">
      <Step step={1} currentStep={step} />
      <span className="w-6 md:w-10 h-0.5 bg-foreground" />
      <Step step={2} currentStep={step} />
      <span className="w-6 md:w-10 h-0.5 bg-foreground" />
      <Step step={3} currentStep={step} />
    </div>
  );
}
