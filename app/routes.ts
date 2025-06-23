import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./pages/public/landing.tsx"),
  route("sign-in", "./pages/public/users/sign-in.tsx"),
  route("sign-up", "./pages/public/users/sign-up.tsx"),
  route("/homepi", "./pages/homepi/index.tsx"),
  route("/diaries", "./pages/diaries/index.tsx"),
  route("/diaries/:id", "./pages/diaries/[id]/index.tsx"),
  route("/diaries/write", "./pages/diaries/write/index.tsx"),
] satisfies RouteConfig;
