import { Link } from "react-router";

import AuthProvider from "./auth-provider";
import { LABEL_MAP } from "../constants";

interface AuthFormProps {
  isSignUp?: boolean;
}

export default function AuthForm({ isSignUp = false }: AuthFormProps) {
  const key = isSignUp ? "signUp" : "signIn";
  const footerNavLink = isSignUp ? "/sign-in" : "/sign-up";

  return (
    <div className="flex-1 flex-center flex-col lg:flex-none h-full py-15 lg:px-25 ">
      <h1 className="text-xl font-bold text-center">{LABEL_MAP[key].title}</h1>
      <div className="flex flex-col gap-4 my-15">
        <AuthProvider type="GOOGLE" />
        <AuthProvider type="GITHUB" />
        <AuthProvider type="KAKAO" />
      </div>
      <div className="flex-center-y flex-col gap-0.5 text-sm">
        <span>{LABEL_MAP[key].footerNav}</span>
        <Link to={footerNavLink} className="btn-text">
          {LABEL_MAP[key].footerNavLinkText}
        </Link>
      </div>
    </div>
  );
}
