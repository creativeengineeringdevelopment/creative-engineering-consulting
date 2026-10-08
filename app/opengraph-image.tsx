import { ImageResponse } from "next/og";
export const alt = "Creative Engineering — Your operations. Engineered.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f6f5ef",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "64px 72px",
          color: "#15241e",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 3 }}>
          CREATIVE ENGINEERING / CONSULTING
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 100,
            lineHeight: 1.05,
            marginTop: 74,
          }}
        >
          <span>Your operations.</span>
          <span style={{ color: "#214bed" }}>Engineered.</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, marginTop: 48 }}>
          Your accounts. Your workflows. A system your team can run.
        </div>
        <div
          style={{
            position: "absolute",
            right: 70,
            bottom: 65,
            display: "flex",
            fontSize: 72,
            color: "#214bed",
          }}
        >
          ↗
        </div>
      </div>
    ),
    size,
  );
}
