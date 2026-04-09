import { LoginForm } from "@/components/login-form";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const { callbackUrl } = await searchParams;

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-white">
      <LoginForm initialCallbackUrl={callbackUrl ?? "/"} />
    </div>
  );
}
