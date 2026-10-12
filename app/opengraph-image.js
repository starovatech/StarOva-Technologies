import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Share image used when the site is posted on WhatsApp, LinkedIn, X, Slack, etc.
export const alt = `${site.name} | ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/images/logo/starova-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#e1d4c2",
          background: "radial-gradient(circle at 80% 20%, #6e473b 0%, #291c0e 55%, #140d06 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={330} height={120} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, letterSpacing: -2 }}>
            We build digital experiences that matter.
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: "#a78d78" }}>
            Websites · Logos · Catalogues · Data analysis · Dashboards · BI · CRM
          </div>
        </div>
      </div>
    ),
    size
  );
}
