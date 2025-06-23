import { Button } from "~/components/ui/button";
import { SiGithub, SiGoogle, SiKakao } from "react-icons/si";

interface AuthProviderProps {
  type: "google" | "github" | "kakao";
}

const PROVIDER_MAP = {
  label: {
    google: "Google",
    github: "Github",
    kakao: "Kakao",
  },
  icon: {
    google: <SiGoogle className="size-5" />,
    github: <SiGithub className="size-5" />,
    kakao: <SiKakao className="size-8" />,
  },
};

export default function AuthProvider({ type }: AuthProviderProps) {
  return (
    <Button
      type="button"
      className="flex items-center justify-center gap-2 w-70 h-12 border-2 border-foreground rounded-full text-foreground hover:bg-accent transition-all-300"
    >
      {PROVIDER_MAP.icon[type]} Continue with {PROVIDER_MAP.label[type]}
    </Button>
  );
}
