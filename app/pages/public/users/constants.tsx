import { SiGoogle, SiKakao, SiGithub } from "react-icons/si";

export const LABEL_MAP = {
  signUp: {
    title: (
      <>
        <p className="block md:inline">처음 오셨군요!</p>
        <p className="block md:inline md:ml-1">
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
        <p className="block md:inline">반가워요!</p>
        <p className="block md:inline md:ml-1">zemizine에 로그인해 주세요 👋</p>
      </>
    ),
    footerNav: "아직 회원이 아니신가요?",
    footerNavLinkText: "회원가입하고 zemizine을 즐겨보세요!",
  },
};

export const PROVIDER_MAP = {
  label: {
    GOOGLE: "Google",
    GITHUB: "Github",
    KAKAO: "Kakao",
  },
  icon: {
    GOOGLE: <SiGoogle className="size-5" />,
    GITHUB: <SiGithub className="size-5" />,
    KAKAO: <SiKakao className="size-8" />,
  },
};
