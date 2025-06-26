import { Button } from "~/components/ui/button";

interface OnboardingButtonProps {
  title: string;
  onClick: () => void;
}

export default function OnboardingButton({
  title,
  onClick,
}: OnboardingButtonProps) {
  return (
    <Button className="w-full py-1 btn-accent md:text-lg" onClick={onClick}>
      {title}
    </Button>
  );
}
