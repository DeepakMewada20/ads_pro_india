import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Ads Pro India"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0c14 0%, #1a6fff 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-2px",
          }}
        >
          Ads Pro India
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
            marginTop: 16,
          }}
        >
          ROI-Focused Performance Marketing
        </div>
      </div>
    ),
    { ...size },
  )
}
