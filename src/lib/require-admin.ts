import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type BlogAdmin = { userId: string; nombre: string };

export async function requireAdmin(): Promise<{ supabase: Awaited<ReturnType<typeof createClient>>; admin: BlogAdmin }> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/acceso");

  const { data: admin } = await supabase
    .from("blog_admins")
    .select("user_id, nombre, activo")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!admin?.activo) redirect("/admin/acceso?error=sin-permiso");
  return { supabase, admin: { userId: user.id, nombre: admin.nombre } };
}
