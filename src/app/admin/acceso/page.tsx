import { LoginForm } from "./LoginForm";
export const dynamic = "force-dynamic";
export default async function AdminLoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  return <LoginForm initialError={error === "sin-permiso" ? "Esta cuenta no está autorizada para acceder al panel." : undefined} />;
}
