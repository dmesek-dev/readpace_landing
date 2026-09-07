import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt =
  "ReadPace — find the reading speed where you actually remember. A reading-speed and comprehension tracker for physical books.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social share card, generated at build time from the same brand tokens as the
 * page. Dependency-free (no remote fonts or images) so it can never fail to
 * render because of a network hiccup.
 *
 * Satori (the renderer behind ImageResponse) requires an explicit `display` on
 * every box that has more than one child — hence the `row`/`col` helpers.
 */
const col = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  ...extra,
});
const row = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  display: "flex",
  alignItems: "center",
  ...extra,
});

export default function OpengraphImage() {
  const bands = [
    { label: "275–300", pct: 60, peak: false },
    { label: "300–325", pct: 100, peak: true },
    { label: "325–350", pct: 50, peak: false },
  ];

  return new ImageResponse(
    (
      <div
        style={col({
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
          padding: "56px 62px",
          backgroundColor: "#f5f2ed",
          backgroundImage:
            "radial-gradient(1000px 600px at 92% -12%, rgba(232,115,15,0.22), transparent 60%)",
          fontFamily: "sans-serif",
        })}
      >
        <div style={row({ gap: 16 })}>
          <div
            style={row({
              width: 52,
              height: 52,
              borderRadius: 16,
              backgroundColor: "#e8730f",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 30,
              fontWeight: 700,
            })}
          >
            R
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, color: "#1a1410" }}>
            {site.name}
          </div>
        </div>

        <div style={row({ alignItems: "flex-end", gap: 36 })}>
          <div style={col({ flex: 1 })}>
            <div
              style={col({
                fontSize: 56,
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: -1.5,
                color: "#1a1410",
              })}
            >
              {/* One box per line: satori will not wrap text it cannot fit,
                  so the breaks are chosen here rather than left to chance. */}
              <div style={{ display: "flex" }}>Find the reading speed</div>
              <div style={{ display: "flex" }}>where you actually</div>
              <div style={{ display: "flex", color: "#e8730f" }}>remember.</div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 24,
                fontSize: 26,
                lineHeight: 1.4,
                color: "#6b5f52",
                maxWidth: 600,
              }}
            >
              Time a session, scan the page to count the words on-device, and
              see the pace where your recall peaks.
            </div>
          </div>

          <div
            style={col({
              gap: 14,
              padding: "24px 24px 22px",
              backgroundColor: "#ffffff",
              borderRadius: 26,
              border: "1px solid #ece6dd",
              width: 328,
            })}
          >
            <div style={{ display: "flex", fontSize: 17, color: "#8a7d6e" }}>
              Recall by reading speed
            </div>
            {bands.map((b) => (
              <div key={b.label} style={row({ gap: 12 })}>
                <div
                  style={{
                    display: "flex",
                    width: 80,
                    fontSize: 16,
                    color: b.peak ? "#e8730f" : "#8a7d6e",
                    fontWeight: b.peak ? 700 : 400,
                  }}
                >
                  {b.label}
                </div>
                <div
                  style={{
                    display: "flex",
                    height: 20,
                    flex: 1,
                    borderRadius: 999,
                    backgroundColor: "#f0ebe3",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: `${b.pct}%`,
                      borderRadius: 999,
                      backgroundColor: b.peak ? "#e8730f" : "#f5c79c",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    width: 48,
                    fontSize: 16,
                    justifyContent: "flex-end",
                    color: b.peak ? "#e8730f" : "#8a7d6e",
                    fontWeight: b.peak ? 700 : 400,
                  }}
                >
                  {b.pct}%
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={row({ gap: 18, fontSize: 21, color: "#8a7d6e" })}>
          <div style={{ display: "flex", color: "#1a1410", fontWeight: 700 }}>
            iOS and Android
          </div>
          <div style={{ display: "flex" }}>·</div>
          <div style={{ display: "flex" }}>On-device word counting</div>
          <div style={{ display: "flex" }}>·</div>
          <div style={{ display: "flex" }}>{site.domain}</div>
        </div>
      </div>
    ),
    size,
  );
}
