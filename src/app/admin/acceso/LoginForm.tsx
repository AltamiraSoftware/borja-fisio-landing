"use client";

import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { KeyRound, LoaderCircle, LockKeyhole, Mail } from "lucide-react";
import { requestPasswordReset, signInAdmin, type AuthState } from "./actions";

const initialState: AuthState = {};

export function LoginForm({ initialError }: { initialError?: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loginState, loginAction, loginPending] = useActionState(signInAdmin, initialState);
  const [resetState, resetAction, resetPending] = useActionState(requestPasswordReset, initialState);
  useEffect(() => { if (loginState.notice === "ok") router.replace("/admin"); }, [loginState.notice, router]);
  const message = loginState.error || resetState.error || (resetState.notice !== "ok" ? resetState.notice : undefined) || initialError;

  return <main className="min-h-dvh bg-[radial-gradient(circle_at_top_right,_rgba(46,196,198,0.18),_transparent_30rem),linear-gradient(145deg,#052e3a,#073b4c_55%,#0f5366)] px-4 py-8 sm:px-6 sm:py-12"><div className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-md items-center"><section className="w-full rounded-[2rem] border border-white/20 bg-white/[0.96] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:p-8"><Link href="/" className="text-sm font-bold text-[var(--color-steel)] hover:text-[var(--color-petrol)]">← Volver a la web</Link><div className="mt-8"><div className="grid size-12 place-items-center rounded-2xl bg-[var(--color-petrol)] text-white"><LockKeyhole className="size-6" /></div><p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-steel)]">Área privada</p><h1 className="mt-2 text-3xl font-bold text-[var(--color-night)]">Administración</h1><p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">Acceso reservado a administradores autorizados de Fisio Estarellas.</p></div><form className="mt-7 grid gap-5" action={loginAction}><label className="grid gap-2 text-sm font-bold">Correo electrónico<span className="relative"><Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--color-steel)]" /><input name="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required className="h-12 w-full rounded-xl border border-[#cbded9] pl-11 pr-4 font-normal outline-none focus:border-[var(--color-cyan)]" /></span></label><label className="grid gap-2 text-sm font-bold">Contraseña<span className="relative"><KeyRound className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--color-steel)]" /><input name="password" type="password" autoComplete="current-password" required className="h-12 w-full rounded-xl border border-[#cbded9] pl-11 pr-4 font-normal outline-none focus:border-[var(--color-cyan)]" /></span></label>{message && <p role={loginState.error || resetState.error ? "alert" : "status"} className="rounded-xl border border-[#b9ded5] bg-[#eef8f5] px-4 py-3 text-sm text-[var(--color-petrol)]">{message}</p>}<button className="btn btn--primary h-12 w-full disabled:opacity-60" disabled={loginPending || resetPending}>{loginPending ? <LoaderCircle className="size-5 animate-spin" /> : <LockKeyhole className="size-5" />}Entrar al panel</button></form><form action={resetAction} className="mt-5"><input type="hidden" name="email" value={email} /><p className="text-center text-xs text-[var(--color-muted)]">Para recuperar acceso, escribe tu correo en el campo superior y pulsa el enlace.</p><button className="mt-2 w-full text-sm font-bold text-[var(--color-steel)] underline underline-offset-4 disabled:opacity-60" disabled={loginPending || resetPending}>{resetPending ? "Enviando enlace…" : "He olvidado mi contraseña"}</button></form></section></div></main>;
}
