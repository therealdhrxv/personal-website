import { ImageResponse } from "next/og";
import { profile } from "./data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 96, background: "#d8dee9", color: "#2e3440", fontFamily: "Georgia, serif" }}>
        <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#4c566a" }}>{profile.location}</div>
        <div style={{ display: "flex", fontSize: 96, marginTop: 16 }}>
          {profile.name}<span style={{ color: "#4c566a" }}>.</span>
        </div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#4c566a" }}>{`Software engineer · ${profile.company}`}</div>
      </div>
    ),
    size,
  );
}
