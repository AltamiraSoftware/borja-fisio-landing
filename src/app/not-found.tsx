import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return <main className="premium-dark-bg grid min-h-screen place-items-center px-4 py-20 text-center text-white"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8cf3ef]">Error 404</p><h1 className="mt-4 text-4xl font-semibold md:text-6xl">Esta página no existe</h1><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/70">Puedes volver al inicio o consultar los tratamientos disponibles.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Button href="/" size="lg">Volver al inicio</Button><Button href="/tratamientos" size="lg" variant="secondary">Ver tratamientos</Button></div></div></main>;
}
