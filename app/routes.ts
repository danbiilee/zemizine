import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./pages/public/landing.tsx"),
  route("sign-in", "./pages/public/users/sign-in.tsx"),
  route("sign-up", "./pages/public/users/sign-up.tsx"),
  route("/:userId/home", "./pages/home/index.tsx"),
  route("/:userId/diaries", "./pages/diaries/index.tsx"),
  route("/:userId/diaries/create", "./pages/diaries/create/index.tsx"),
  route("/:userId/diaries/:diaryId", "./pages/diaries/[id]/index.tsx"),
  route("/:userId/diaries/:diaryId/edit", "./pages/diaries/create/index.tsx"),
] satisfies RouteConfig;
