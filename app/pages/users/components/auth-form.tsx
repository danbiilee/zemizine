import { Link } from "react-router";
import AuthProvider from "./auth-provider";

interface AuthFormProps {
  isSignUp?: boolean;
}

const LABEL_MAP = {
  signUp: {
    title: (
      <>
        <p className="block sm:inline">처음 오셨군요!</p>
        <p className="block sm:inline sm:ml-1">
          zemizine에 오신 걸 환영해요 🎉
        </p>
      </>
    ),
    footerNav: "이미 계정이 있으신가요?",
    footerNavLinkText: "로그인하고 오늘을 기록해보세요!",
  },
  signIn: {
    title: (
      <>
        <p className="block sm:inline">반가워요!</p>
        <p className="block sm:inline sm:ml-1">zemizine에 로그인해 주세요 👋</p>
      </>
    ),
    footerNav: "아직 회원이 아니신가요?",
    footerNavLinkText: "회원가입하고 zemizine을 즐겨보세요!",
  },
};

export default function AuthForm({ isSignUp = false }: AuthFormProps) {
  const key = isSignUp ? "signUp" : "signIn";
  const footerNavLink = isSignUp ? "/sign-in" : "/sign-up";

  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full py-15 lg:flex-none lg:px-25">
      <h1 className="text-xl font-bold text-center">{LABEL_MAP[key].title}</h1>
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
