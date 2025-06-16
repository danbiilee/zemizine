import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./pages/portal.tsx"),
  route(":userId", "./pages/home/index.tsx"),
  route(":userId/diaries", "./pages/diaries/index.tsx"),
] satisfies RouteConfig;
