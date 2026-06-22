import { C } from "../theme";
import { useReveal, rv } from "../hooks";

const SERVICES_DETAIL = [
  { icon: "🏥", title: "Advanced Clinic Care",     tagline: "State-of-the-art in-clinic physiotherapy",  desc: "Our clinic is equipped with the latest physiotherapy technologies including electrotherapy, ultrasound, and laser therapy devices. Certified physiotherapists use precision assessment tools to diagnose and treat musculoskeletal, neurological, and sports injuries.", features: ["Advanced electrotherapy equipment","Real-time movement analysis","Hydrotherapy pool access","Private treatment rooms"] },
  { icon: "🏠", title: "Professional Home Care",   tagline: "Expert therapy, delivered to your door",    desc: "Our home care program brings clinical-grade physiotherapy to your home, ideal for post-surgical patients, elderly, or those with mobility challenges. A dedicated physiotherapist visits on a fixed schedule with all necessary equipment.", features: ["Certified home visit therapists","Portable therapy equipment","Weekly progress reports","Emergency support line"] },
  { icon: "💻", title: "Tele / Remote Rehab",      tagline: "Recover anywhere, with expert guidance",    desc: "Our digital rehab platform connects you with your physiotherapist via video consultations. Receive live-guided exercise sessions, real-time form correction, and an app-based home exercise program with adherence tracking.", features: ["HD video consultations","AI-powered exercise tracking","Instant messaging with therapist","Progress dashboards"] },
  { icon: "🧘", title: "Aerobics & Yoga",          tagline: "Structured fitness for total wellbeing",    desc: "Our morning aerobics and yoga classes are designed for all fitness levels. Led by certified instructors, these sessions improve flexibility, cardiovascular health, and mental wellness — open to both patients and the general public.", features: ["Daily morning sessions","All fitness levels welcome","Certified instructors","Indoor & outdoor formats"] },
  { icon: "🦺", title: "Sports Physiotherapy",     tagline: "Performance recovery for athletes",         desc: "Specialized sports rehab for amateur and professional athletes. We handle acute sports injuries, chronic overuse conditions, and pre/post-competition physiotherapy to get you back to peak performance quickly and safely.", features: ["Sports injury assessment","RTP (Return to Play) protocol","Biomechanical analysis","Performance optimization"] },
  { icon: "👶", title: "Pediatric Physio",         tagline: "Gentle, specialized care for children",     desc: "Our pediatric physiotherapy addresses developmental delays, congenital conditions, and childhood injuries in a child-friendly environment. Our specialists are trained to make therapy engaging and effective for children of all ages.", features: ["Child-friendly environment","Developmental assessments","Parent involvement","Play-based therapy"] },
];

export default function Ourservice() {
  const [heroRef, heroV] = useReveal(0.01);
  const [servRef, servV] = useReveal();

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} style={{ background: `linear-gradient(135deg,${C.green},${C.greenMid})`, padding: "96px 48px 76px", position: "relative", overflow: "hidden" }}>
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {SERVICES_DETAIL.map((svc, i) => (
            <div key={svc.title} style={{ background: C.mintLight, borderRadius: 20, padding: "32px", border: `1px solid ${C.border}`, ...rv(servV, i * 0.07) }}>
              <div style={{ display: "flex", gap: 18, alignItems: "flex-start", marginBottom: 18 }}>
                <div style={{ width: 60, height: 60, borderRadius: 13, background: C.green, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.7rem", flexShrink: 0 }}>{svc.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: C.text, marginBottom: 3 }}>{svc.title}</h3>
                  <div style={{ fontSize: "0.8rem", color: C.greenMid, fontWeight: 600 }}>{svc.tagline}</div>
                </div>
              </div>
              <p style={{ fontSize: "0.86rem", color: C.textMid, lineHeight: 1.75, marginBottom: 18 }}>{svc.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {svc.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: C.green, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "white", fontSize: "0.6rem" }}>✓</span>
                    </div>
                    <span style={{ fontSize: "0.8rem", color: C.textMid }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "72px 48px", background: C.green, textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.7rem,3.2vw,2.4rem)", fontWeight: 800, color: "white", marginBottom: 14, lineHeight: 1.2 }}>Book Your First Consultation</h2>
        <p style={{ color: "rgba(255,255,255,0.68)", maxWidth: 460, margin: "0 auto 32px", lineHeight: 1.75 }}>Our physiotherapists will assess you thoroughly and design a plan built around your specific needs.</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
          <button style={{ background: "white", color: C.green, padding: "14px 32px", borderRadius: 50, fontWeight: 700, fontSize: "0.92rem", border: "none", cursor: "pointer", fontFamily: "inherit" }}>Book Appointment →</button>
          <button style={{ background: "transparent", color: "white", padding: "14px 32px", borderRadius: 50, fontWeight: 700, fontSize: "0.92rem", border: "2px solid rgba(255,255,255,0.38)", cursor: "pointer", fontFamily: "inherit" }}>Call: 04562-244228</button>
        </div>
      </section>
    </>
  );
}