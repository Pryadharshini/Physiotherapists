import { C, FOOTER_COLS } from "../theme";

export default function Footer() {
  return (
    <footer style={{ background: "#0D2B20", padding: "52px 48px 28px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 44, marginBottom: 44 }}>
        <div>
          <div style={{ fontWeight: 800, fontSize: "1.15rem", color: "white", marginBottom: 6 }}>
            Shree <span style={{ color: "#86EFAC" }}>Ohm</span>
          </div>
          <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
            Physiotherapy Centre
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.83rem", lineHeight: 1.7, marginBottom: 18 }}>
            Expert physiotherapy, orthotic solutions, and fitness guidance in Virudhunagar, Tamil Nadu.
          </p>
          <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "14px 18px" }}>
            <div style={{ color: "#86EFAC", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 5 }}>Our Branch</div>
            <div style={{ color: "white", fontWeight: 700, fontSize: "0.83rem", marginBottom: 4 }}>Shree Ohm Inpatient Centre</div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.76rem" }}>
              5/2AB Bharathi Nagar NGO Colony,<br />Madurai Road, Virudhunagar – 626001
            </div>
          </div>
        </div>

        {FOOTER_COLS.map(col => (
          <div key={col.title}>
            <div style={{ color: "white", fontWeight: 700, fontSize: "0.88rem", marginBottom: 14, letterSpacing: "0.04em" }}>{col.title}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {col.links.map(l => (
                <span
                  key={l}
                  style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", cursor: "pointer", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.82)"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.45)"}>
                  {l}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.76rem" }}>© 2025 Shree Ohm Physiotherapy Centre. All rights reserved.</span>
        <div style={{ display: "flex", gap: 18 }}>
          {["Privacy Policy", "Terms of Service", "Sitemap"].map(l => (
            <span
              key={l}
              style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.76rem", cursor: "pointer" }}
              onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.6)"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.28)"}>
              {l}
            </span>
          ))}
        </div>
        <span style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.76rem" }}>Virudhunagar, Tamil Nadu</span>
      </div>
    </footer>
  );
}