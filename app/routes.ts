import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./pages/portal.tsx"),
  route("space/:userId", "./pages/space/home/index.tsx"),
  route("space/:userId/diary", "./pages/space/diary/index.tsx"),
] satisfies RouteConfig;
