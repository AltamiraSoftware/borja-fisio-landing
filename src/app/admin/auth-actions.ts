"use server";

import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";

export type AuthState = { error?: string; notice?: string };

export async function signInAdmin(_: AuthState, formData: FormData): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  if (!email || !password) return { error: "Indica el correo y la contraseña." };

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.user) return { error: "El correo o la contraseña no son correctos." };

    const { data: admin } = await supabase
      .from("blog_admins")
      .select("activo")
      .eq("user_id", data.user.id)
      .maybeSingle();

    if (!admin?.activo) {
      await supabase.auth.signOut();
      return { error: "Esta cuenta no está autorizada para acceder al panel." };
    }

    return { notice: "ok" };
  } catch {
    return { error: "La configuración de Supabase no está disponible todavía." };
  }
}

export async function requestPasswordReset(_: AuthState, formData: FormData): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim();
  if (!email) return { error: "Indica tu correo electrónico." };

  try {
    const supabase = await createClient();
    const origin = (await headers()).get("origin") ?? "http://localhost:3000";
    await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${origin}/admin/restablecer` });
    return { notice: "Si existe una cuenta con ese correo, recibirás un enlace para restablecer la contraseña." };
  } catch {
    return { error: "No se ha podido solicitar el enlace. Inténtalo de nuevo." };
  }
}

export async function updatePassword(_: AuthState, formData: FormData): Promise<AuthState> {
  const password = String(formData.get("password") ?? "");
  if (password.length < 8) return { error: "La contraseña debe tener al menos 8 caracteres." };

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.updateUser({ password });
    return error ? { error: "No se ha podido actualizar la contraseña." } : { notice: "Contraseña actualizada. Ya puedes iniciar sesión." };
  } catch {
    return { error: "La configuración de Supabase no está disponible todavía." };
  }
}
