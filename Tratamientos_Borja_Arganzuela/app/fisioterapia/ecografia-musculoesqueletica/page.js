import TreatmentPage from "../_components/TreatmentPage";
import { getTreatment } from "../_data/tratamientos";
import { buildMetadata } from "@/lib/seo";

const treatment = getTreatment("ecografia-musculoesqueletica");

export const metadata = buildMetadata({
  title: `${treatment.metaTitle} | Bivalente Salud`,
  description: treatment.metaDescription,
  path: treatment.path,
});

export default function EcografiaMusculoesqueleticaPage() {
  return <TreatmentPage treatment={treatment} />;
}
