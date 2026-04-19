import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, #11232D 0%, #0E3744 44%, #C57F4B 100%)",
          color: "white",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(243,189,106,0.34), transparent 28%), radial-gradient(circle at bottom left, rgba(15,102,102,0.42), transparent 34%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -60,
            top: -80,
            width: 400,
            height: 400,
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.16)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px 72px",
          }}
        >
          <div style={{ fontSize: 22, letterSpacing: 6, textTransform: "uppercase", opacity: 0.82 }}>
            Renewable Energy / Oman
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 760 }}>
            <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 0.92 }}>Awtad Energy</div>
            <div style={{ fontSize: 34, lineHeight: 1.25, opacity: 0.88 }}>
              Solar PV, wind, hybrid systems, battery storage and transition-ready energy infrastructure.
            </div>
          </div>
          <div style={{ fontSize: 24, opacity: 0.8 }}>Open Graph placeholder image</div>
        </div>
      </div>
    ),
    size,
  );
}
