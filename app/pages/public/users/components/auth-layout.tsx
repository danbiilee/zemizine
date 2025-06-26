import PublicLayout from "~/components/layouts/public-layout";
import AuthForm from "./auth-form";
import AuthSidePanel from "./auth-side-panel";

interface AuthLayoutProps {
  isSignUp?: boolean;
}

export default function AuthLayout({ isSignUp = false }: AuthLayoutProps) {
  return (
    <PublicLayout>
      <div className="flex h-full">
        <AuthForm isSignUp={isSignUp} />
        <AuthSidePanel />
      </div>
    </PublicLayout>
  );
}
