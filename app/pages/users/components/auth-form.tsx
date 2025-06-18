import { Link } from "react-router";
import AuthProvider from "./auth-provider";

interface AuthFormProps {
  isSignUp?: boolean;
}

const LABEL_MAP = {
  signUp: {
    title: "처음 오셨군요! zemizine에 오신 걸 환영해요 🎉",
    footerNav: "이미 계정이 있으신가요?",
    footerNavLinkText: "로그인하고 오늘을 기록해보세요!",
  },
  signIn: {
    title: "반가워요! zemizine에 로그인해 주세요 👋",
    footerNav: "아직 회원이 아니신가요?",
    footerNavLinkText: "회원가입하고 zemizine을 즐겨보세요!",
  },
};

export default function AuthForm({ isSignUp = false }: AuthFormProps) {
  const key = isSignUp ? "signUp" : "signIn";
  const footerNavLink = isSignUp ? "/sign-in" : "/sign-up";

  return (
    <div className="flex flex-col items-center justify-center h-full px-25 py-15">
      <h1 className="text-xl font-bold">{LABEL_MAP[key].title}</h1>
      <div className="flex flex-col gap-4 my-15">
        <AuthProvider type="google" />
        <AuthProvider type="github" />
        <AuthProvider type="kakao" />
      </div>
      <div className="flex flex-col items-center gap-0.5 text-sm">
        <span>{LABEL_MAP[key].footerNav}</span>
        <Link
          to={footerNavLink}
          className="ml-1 font-semibold underline hover:text-secondary transition-all-300"
        >
          {LABEL_MAP[key].footerNavLinkText}
        </Link>
      </div>
    </div>
  );
}
