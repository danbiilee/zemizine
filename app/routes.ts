import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./pages/portal.tsx"),
  route("sign-in", "./pages/users/sign-in.tsx"),
  route("sign-up", "./pages/users/sign-up.tsx"),
  route(":userId", "./pages/home/index.tsx"),
  route(":userId/diaries", "./pages/diaries/index.tsx"),
] satisfies RouteConfig;
