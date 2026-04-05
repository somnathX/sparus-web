import { ImageResponse } from "next/og";

export const alt = "Sparus Technology — product engineering and platforms";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0c0b0a",
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#f2efe9",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          Sparus
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#8c8680",
          }}
        >
          Technology
        </div>
        <div
          style={{
            marginTop: 40,
            width: 120,
            height: 4,
            background: "#ff4e1f",
          }}
        />
        <div
          style={{
            marginTop: 40,
            fontSize: 28,
            color: "#a39e97",
            maxWidth: 820,
            lineHeight: 1.35,
          }}
        >
          Product engineering, applied AI, and infrastructure for teams who
          care what production feels like.
        </div>
      </div>
    ),
    { ...size }
  );
}
