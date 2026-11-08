import Link from "next/link";
import { ArrowUpRight, FileText, PenLine, ShieldCheck, Sparkles } from "lucide-react";
import { requireAdmin } from "@/lib/require-admin";
import { signOut } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const { admin } = await requireAdmin();

  return (
    <main className="min-h-dvh bg-[#f5faf8]">
      <header className="border-b border-[#dcebe7] bg-white/90 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6"><Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-petrol)]"><span className="grid size-9 place-items-center rounded-xl bg-[var(--color-petrol)] text-white"><ShieldCheck className="size-5" /></span>Fisio Estarellas <span className="hidden text-[var(--color-muted)] sm:inline">/ Administración</span></Link><form action={signOut}><button className="btn btn--ghost h-10 px-4 text-sm">Cerrar sesión</button></form></div></header>

      <section className="premium-dark-bg relative overflow-hidden px-4 py-14 text-white sm:py-20"><div className="pointer-events-none absolute -right-24 top-0 size-80 rounded-full bg-[#2ec4c6]/15 blur-3xl" /><div className="relative mx-auto max-w-7xl sm:px-2"><p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#aaf5ef]"><Sparkles className="size-4" />Panel privado</p><h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Hola, {admin.nombre}.</h1><p className="mt-4 max-w-xl text-lg leading-8 text-white/72">Desde aquí podrás preparar, revisar y publicar los contenidos del blog.</p></div></section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14"><div className="grid max-w-4xl gap-5 md:grid-cols-2"><Link href="/admin/blog" className="group rounded-[1.75rem] border border-[#cfe3dd] bg-white p-7 shadow-[0_14px_34px_rgba(5,46,58,.07)] transition hover:-translate-y-1 hover:border-[#9ed9d0] hover:shadow-[0_24px_46px_rgba(5,46,58,.14)]"><span className="grid size-12 place-items-center rounded-2xl bg-[#e5f6f3] text-[var(--color-petrol)]"><FileText className="size-6" /></span><h2 className="mt-6 text-2xl font-bold text-[var(--color-night)]">Gestionar el blog</h2><p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">Consulta borradores, publicaciones y edita artículos existentes.</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-steel)]">Ver artículos <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span></Link><Link href="/admin/blog/nuevo" className="group rounded-[1.75rem] border border-[#cfe3dd] bg-white p-7 shadow-[0_14px_34px_rgba(5,46,58,.07)] transition hover:-translate-y-1 hover:border-[#9ed9d0] hover:shadow-[0_24px_46px_rgba(5,46,58,.14)]"><span className="grid size-12 place-items-center rounded-2xl bg-[var(--color-petrol)] text-white"><PenLine className="size-6" /></span><h2 className="mt-6 text-2xl font-bold text-[var(--color-night)]">Escribir un artículo</h2><p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">Crea un borrador con calma o prepara una nueva publicación.</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-steel)]">Nuevo artículo <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span></Link></div></section>
    </main>
  );
}
