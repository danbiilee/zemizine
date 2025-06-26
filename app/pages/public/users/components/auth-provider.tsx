import { Button } from "~/components/ui/button";
import { PROVIDER_MAP } from "../constants";

interface AuthProviderProps {
  type: "GOOGLE" | "GITHUB" | "KAKAO";
}

export default function AuthProvider({ type }: AuthProviderProps) {
  return (
    <Button type="button" className="flex-center gap-2 w-70 h-12 btn-outline">
      {PROVIDER_MAP.icon[type]} Continue with {PROVIDER_MAP.label[type]}
    </Button>
  );
}
