import { ImageResponse } from "next/og";

export const alt = "Fisioterapia en Chamberí y Madrid con Borja Estarellas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "linear-gradient(135deg,#052E3A,#0F5366)", color: "white", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80 }}>
      <div style={{ color: "#8cf3ef", fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>BORJA ESTARELLAS</div>
      <div style={{ display: "flex", fontSize: 68, lineHeight: 1.08, fontWeight: 700, marginTop: 28, maxWidth: 980 }}>Fisioterapia en Chamberí y Madrid</div>
      <div style={{ display: "flex", fontSize: 30, marginTop: 30, color: "rgba(255,255,255,.76)" }}>Borja Estarellas · Valoración, tratamiento y ejercicio</div>
    </div>,
    size,
  );
}
