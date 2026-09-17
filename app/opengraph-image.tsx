import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt =
  "ReadPace — Find your pace. Remember more. Reading speed and comprehension for physical books.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#faf9f5",
        padding: "58px 62px",
        color: "#25291e",
        fontFamily: "sans-serif",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            display: "flex",
            width: 39,
            height: 45,
            border: "3px solid #b84922",
            borderRadius: 4,
            transform: "rotate(-8deg)",
          }}
        />
        <div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>
          {site.name}
          <span style={{ color: "#b84922" }}>.</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 55, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              fontSize: 63,
              fontWeight: 700,
              letterSpacing: -3,
            }}
          >
            Find your pace.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 63,
              fontWeight: 700,
              letterSpacing: -3,
              color: "#b84922",
            }}
          >
            Remember more.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 23,
              lineHeight: 1.5,
              color: "#62665a",
              marginTop: 24,
              maxWidth: 560,
            }}
          >
            Track reading speed and comprehension with the physical books you
            love.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 342,
            height: 275,
            flexDirection: "column",
            background: "#2c352a",
            borderRadius: 20,
            padding: "27px 27px 23px",
            color: "#f9f9ee",
            transform: "rotate(3deg)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 13,
              letterSpacing: 2,
              color: "#c8d5af",
            }}
          >
            YOUR READING SWEET SPOT
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 43,
              marginTop: 18,
              letterSpacing: -2,
            }}
          >
            250–275 WPM
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 17,
              height: 90,
              marginTop: 17,
            }}
          >
            {[48, 80, 40].map((height, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  height,
                  flex: 1,
                  background: index === 1 ? "#cadca8" : "#667752",
                  borderRadius: "6px 6px 0 0",
                }}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 12,
              color: "#bdc9ad",
              marginTop: 15,
            }}
          >
            Example from one reader’s app data.
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 18,
          color: "#62665a",
          borderTop: "1px solid #e4e5dc",
          paddingTop: 20,
        }}
      >
        <div style={{ display: "flex" }}>Try the free reading speed test</div>
        <div style={{ display: "flex" }}>{site.domain}</div>
      </div>
    </div>,
    size,
  );
}
