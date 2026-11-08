"use client";

import Image from "next/image";
import { useActionState, useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { KeyRound, LoaderCircle, LockKeyhole, Mail, X } from "lucide-react";
import { requestPasswordReset, signInAdmin, type AuthState } from "@/app/admin/auth-actions";

const initialState: AuthState = {};

export function AdminLoginModal() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [openedManually, setOpenedManually] = useState(false);
  const [email, setEmail] = useState("");
  const [loginState, loginAction, loginPending] = useActionState(signInAdmin, initialState);
  const [resetState, resetAction, resetPending] = useActionState(requestPasswordReset, initialState);

  const openedFromRedirect = searchParams.get("adminLogin") === "1";
  const open = openedManually || openedFromRedirect;
  const close = useCallback(() => {
    setOpenedManually(false);
    if (openedFromRedirect) router.replace(pathname, { scroll: false });
  }, [openedFromRedirect, pathname, router]);

  useEffect(() => {
    if (loginState.notice === "ok") router.replace("/admin");
  }, [loginState.notice, router]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [close, open]);

  const message = loginState.error || resetState.error || (resetState.notice !== "ok" ? resetState.notice : undefined) || (searchParams.get("error") === "sin-permiso" ? "Esta cuenta no está autorizada para acceder al panel." : undefined);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenedManually(true)}
        className="group flex items-center gap-3 rounded-xl text-left outline-none focus-visible:ring-2 focus-visible:ring-[#8cf3ef] focus-visible:ring-offset-4 focus-visible:ring-offset-[#052E3A]"
        aria-label="Abrir acceso de administración"
      >
        <Image src="/logo.png" alt="" width={64} height={64} className="size-16 rounded-full object-cover transition duration-200 group-hover:brightness-110" />
        <span className="font-semibold leading-tight">Borja Estarellas<span className="mt-1 block text-sm font-medium text-white/70">Fisioterapia en Madrid</span></span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#052E3A]/55 px-4 py-6 backdrop-blur-[2px]" role="presentation" onMouseDown={close}>
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="admin-login-title"
            className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_28px_80px_rgba(0,28,36,0.32)]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="bg-[linear-gradient(120deg,#052E3A_0%,#0F5366_58%,#2EC4C6_155%)] px-7 py-7 text-white">
              <span className="grid size-11 place-items-center rounded-2xl border border-white/20 bg-white/10"><LockKeyhole className="size-5" aria-hidden="true" /></span>
              <p className="mt-5 text-xs font-bold uppercase tracking-[.16em] text-[#b7f7f2]">Área privada</p>
              <h2 id="admin-login-title" className="mt-2 text-3xl font-bold">Iniciar sesión</h2>
              <p className="mt-2 text-sm leading-6 text-white/75">Acceso reservado a administradores autorizados de Fisio Estarellas.</p>
            </div>

            <button type="button" onClick={close} className="absolute right-4 top-4 grid size-10 place-items-center rounded-xl text-white/80 transition hover:bg-white/15 hover:text-white focus-visible:ring-2 focus-visible:ring-white" aria-label="Cerrar acceso">
              <X className="size-5" aria-hidden="true" />
            </button>

            <div className="p-7">
              <form className="grid gap-5" action={loginAction}>
                <label className="grid gap-2 text-sm font-bold text-[var(--color-night)]">Correo electrónico
                  <span className="relative"><Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--color-steel)]" aria-hidden="true" /><input name="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required className="h-12 w-full rounded-xl border border-[#cbded9] pl-11 pr-4 font-normal outline-none transition focus:border-[var(--color-cyan)] focus:ring-2 focus:ring-[#2EC4C6]/20" /></span>
                </label>
                <label className="grid gap-2 text-sm font-bold text-[var(--color-night)]">Contraseña
                  <span className="relative"><KeyRound className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--color-steel)]" aria-hidden="true" /><input name="password" type="password" autoComplete="current-password" required className="h-12 w-full rounded-xl border border-[#cbded9] pl-11 pr-4 font-normal outline-none transition focus:border-[var(--color-cyan)] focus:ring-2 focus:ring-[#2EC4C6]/20" /></span>
                </label>
                {message && <p role={loginState.error || resetState.error ? "alert" : "status"} className="rounded-xl border border-[#b9ded5] bg-[#eef8f5] px-4 py-3 text-sm text-[var(--color-petrol)]">{message}</p>}
                <button className="btn btn--primary h-12 w-full disabled:opacity-60" disabled={loginPending || resetPending}>
                  {loginPending ? <LoaderCircle className="size-5 animate-spin" /> : <LockKeyhole className="size-5" />} Entrar al panel
                </button>
              </form>

              <form action={resetAction} className="mt-5 text-center">
                <input type="hidden" name="email" value={email} />
                <p className="text-xs leading-5 text-[var(--color-muted)]">Escribe antes tu correo y solicita un enlace si necesitas restablecer la contraseña.</p>
                <button className="mt-2 text-sm font-bold text-[var(--color-steel)] underline underline-offset-4 disabled:opacity-60" disabled={loginPending || resetPending}>
                  {resetPending ? "Enviando enlace…" : "He olvidado mi contraseña"}
                </button>
              </form>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
