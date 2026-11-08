import { permanentRedirect } from "next/navigation";

// Enlace histórico: el índice público está ahora en /patologias.
// Conservamos la ruta antigua para transferir señales y enlaces existentes.
export default function OldTreatmentsPage() {
  permanentRedirect("/patologias");
}
