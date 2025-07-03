import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("./pages/public/landing.tsx"),
  route("sign-in", "./pages/public/users/sign-in.tsx"),
  route("sign-up", "./pages/public/users/sign-up.tsx"),

  ...prefix(":slug", [
    route("onboarding", "./pages/onboarding/index.tsx"),
    route("home", "./pages/home/index.tsx"),
    route("diaries", "./pages/diaries/index.tsx"),
    route("diaries/create", "./pages/diaries/create/index.tsx"),
    route("diaries/:date", "./pages/diaries/[date]/index.tsx"),
    route("guestbooks", "./pages/guestbooks/index.tsx"),
    route("settings", "./pages/settings/index.tsx"),
  ]),
] satisfies RouteConfig;
