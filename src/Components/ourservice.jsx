import { C } from "../theme";
import { useReveal, rv } from "../hooks";
import { SERVICES_DETAIL } from "../data";
import { Link } from "react-router-dom";
import { usePopup } from "../PopupContext";

export default function Ourservice() {
  const { openPopup } = usePopup();
  const [heroRef, heroV] = useReveal(0.01);
  const [servRef, servV] = useReveal();

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} style={{ background: `linear-gradient(rgba(10, 50, 30, 0.7), rgba(5, 35, 20, 0.85)), url('/services-hero-bg.png') center/cover no-repeat`, padding: "180px 48px 160px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -60, width: 380, height: 380, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ position: "relative", zIndex: 1, ...rv(heroV) }}>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.14)", color: "white", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 50, marginBottom: 18 }}>What We Offer</div>
          <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.4rem)", fontWeight: 800, color: "white", lineHeight: 1.1, marginBottom: 22 }}>
            Our <span style={{ color: "#86EFAC" }}>Services</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.75, maxWidth: 560 }}>Comprehensive physiotherapy services for every stage of your recovery — from acute injury to long-term wellness.</p>
        </div>
      </section>

      {/* ── Service cards ── */}
      <section ref={servRef} style={{ padding: "88px 48px", background: C.white }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {SERVICES_DETAIL.map((svc, i) => (
            <Link to={`/services/${svc.slug}`} key={svc.title} style={{ textDecoration: "none", display: "block", ...rv(servV, i * 0.07) }}>
              <div style={{ background: C.mintLight, borderRadius: 20, padding: "32px", border: `1px solid ${C.border}`, height: "100%", transition: "all 0.3s ease", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.08)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.04)"; }}>
                <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div style={{ width: 60, height: 60, borderRadius: 13, background: C.green, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.7rem", flexShrink: 0 }}>{svc.icon}</div>
                  <div>
                    <h3 style={{ fontWeight: 800, fontSize: "1.2rem", color: C.text, marginBottom: 5 }}>{svc.title}</h3>
                    <div style={{ fontSize: "0.85rem", color: C.greenMid, fontWeight: 600, lineHeight: 1.4 }}>{svc.tagline}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "72px 48px", background: C.green, textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.7rem,3.2vw,2.4rem)", fontWeight: 800, color: "white", marginBottom: 14, lineHeight: 1.2 }}>Book Your First Consultation</h2>
        <p style={{ color: "rgba(255,255,255,0.68)", maxWidth: 460, margin: "0 auto 32px", lineHeight: 1.75 }}>Our physiotherapists will assess you thoroughly and design a plan built around your specific needs.</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
          <button onClick={() => openPopup('appointment')} style={{ background: "white", color: C.green, padding: "14px 32px", borderRadius: 50, fontWeight: 700, fontSize: "0.92rem", border: "none", cursor: "pointer", fontFamily: "inherit" }}>Book Appointment →</button>
          <button onClick={() => openPopup('callback')} style={{ background: "transparent", color: "white", padding: "14px 32px", borderRadius: 50, fontWeight: 700, fontSize: "0.92rem", border: "2px solid rgba(255,255,255,0.38)", cursor: "pointer", fontFamily: "inherit" }}>Request Callback →</button>
        </div>
      </section>
    </>
  );
}