import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Monogram: "dp" on slate, with a small ice-blue dot.
export function Mark({ s }: { s: number }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#2e3440", borderRadius: s * 0.22, color: "#eceff4", fontSize: s * 0.5, fontWeight: 700, letterSpacing: -s * 0.03 }}>
      dp
      <div style={{ width: s * 0.1, height: s * 0.1, borderRadius: 999, background: "#88c0d0", marginLeft: s * 0.02, marginTop: s * 0.2 }} />
    </div>
  );
}

export default function Icon() {
  return new ImageResponse(<Mark s={64} />, size);
}
