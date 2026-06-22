import { C } from "../theme";
import { useReveal, rv } from "../hooks";

const TEAM = [
  { name: "Dr. Aravind Kumar",   role: "Senior Physiotherapist",   exp: "12 Years", spec: "Orthopaedic & Sports Rehab",    icon: "👨‍⚕️" },
  { name: "Dr. Kavitha Rajan",   role: "Neurological Physio",      exp: "9 Years",  spec: "Stroke & Neurological Rehab",   icon: "👩‍⚕️" },
  { name: "Dr. Senthil Murugan", role: "Pediatric Physio",         exp: "7 Years",  spec: "Child Development & Rehab",     icon: "👨‍⚕️" },
  { name: "Dr. Meena Devi",      role: "Fitness & Wellness Coach", exp: "10 Years", spec: "Aerobics, Yoga & Weight Loss",  icon: "👩‍⚕️" },
];
const AWARDS = [
  { year: "2023", title: "Best Physiotherapy Clinic",     org: "Virudhunagar Healthcare Awards" },
  { year: "2022", title: "Excellence in Patient Care",    org: "Tamil Nadu Medical Association" },
  { year: "2021", title: "Top Rehabilitation Centre",     org: "South India Health Summit" },
  { year: "2020", title: "Community Health Champion",     org: "Virudhunagar District Council" },
];

export default function Aboutus() {
  const [heroRef,    heroV]  = useReveal(0.01);
  const [missionRef, msnV]   = useReveal();
  const [teamRef,    teamV]  = useReveal();
  const [awardsRef,  awdV]   = useReveal();

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} style={{ background: `linear-gradient(135deg,${C.green},${C.greenMid})`, padding: "96px 48px 76px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -60, width: 380, height: 380, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 680, ...rv(heroV) }}>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.14)", color: "white", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 50, marginBottom: 18 }}>Our Story</div>
          <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.4rem)", fontWeight: 800, color: "white", lineHeight: 1.1, marginBottom: 22 }}>
            Healing Virudhunagar,<br /><span style={{ color: "#86EFAC" }}>One Patient at a Time</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.75, maxWidth: 560 }}>
            Since 2009, Shree Ohm Physiotherapy Centre has been the trusted name in rehabilitation and pain management for thousands of families across Virudhunagar and Tamil Nadu.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section ref={missionRef} style={{ padding: "88px 48px", background: C.white }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>
          <div style={{ ...rv(msnV, 0, "left") }}>
            <div style={{ display: "inline-block", background: C.green, color: "white", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 50, marginBottom: 18 }}>Our Mission</div>
            <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.4rem)", fontWeight: 800, color: C.text, marginBottom: 18, lineHeight: 1.2 }}>Evidence-Based Care, Always</h2>
            <p style={{ color: C.textMid, lineHeight: 1.8, fontSize: "0.92rem", marginBottom: 18 }}>
              Our mission is to deliver the highest standard of physiotherapy through evidence-based practice, compassionate care, and continuous innovation. Every patient deserves a personalized recovery plan that addresses the root cause — not just the symptoms.
            </p>
            <p style={{ color: C.textMid, lineHeight: 1.8, fontSize: "0.92rem" }}>
              We integrate advanced technology with hands-on expertise to ensure measurable, lasting results — so our patients can return to the lives they love, faster.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, ...rv(msnV, 0.15, "right") }}>
            {[
              { icon: "🎯", title: "Precision Care",      desc: "Root-cause diagnosis before any treatment plan begins" },
              { icon: "💚", title: "Patient First",       desc: "Every decision centers on your recovery and comfort" },
              { icon: "🔬", title: "Science-Backed",      desc: "Treatments grounded in latest clinical research" },
              { icon: "📈", title: "Measurable Results",  desc: "Progress tracked at every milestone with data" },
            ].map(v => (
              <div key={v.title} style={{ background: C.mintLight, borderRadius: 14, padding: "22px 18px", border: `1px solid ${C.border}` }}>
                <div style={{ fontSize: "1.9rem", marginBottom: 10 }}>{v.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "0.92rem", color: C.text, marginBottom: 7 }}>{v.title}</div>
                <div style={{ fontSize: "0.8rem", color: C.textLight, lineHeight: 1.6 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section style={{ background: C.green, padding: "52px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
          {[["15+","Years in Practice"],["5,000+","Patients Treated"],["98%","Satisfaction Rate"],["3","Clinic Locations"]].map(([v, l], i) => (
            <div key={l} style={{ textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none", padding: "0 18px" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "#86EFAC" }}>{v}</div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", marginTop: 7, letterSpacing: "0.05em" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section ref={teamRef} style={{ padding: "88px 48px", background: C.mintLight }}>
        <div style={{ textAlign: "center", marginBottom: 52, ...rv(teamV) }}>
          <h2 style={{ fontSize: "clamp(1.7rem,3.2vw,2.3rem)", fontWeight: 800, color: C.text, marginBottom: 10 }}>Meet Our Experts</h2>
          <p style={{ color: C.textLight, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>Our multidisciplinary team brings decades of combined experience across all areas of physiotherapy.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
          {TEAM.map((m, i) => (
            <div key={m.name} style={{ background: C.white, borderRadius: 16, padding: "28px 22px", textAlign: "center", boxShadow: "0 4px 18px rgba(0,0,0,0.06)", ...rv(teamV, i * 0.1) }}>
              <div style={{ width: 76, height: 76, borderRadius: "50%", background: `linear-gradient(135deg,${C.green},${C.greenMid})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", fontSize: "2.2rem" }}>{m.icon}</div>
              <div style={{ fontWeight: 700, fontSize: "0.96rem", color: C.text, marginBottom: 4 }}>{m.name}</div>
              <div style={{ fontSize: "0.78rem", color: C.greenMid, fontWeight: 600, marginBottom: 10 }}>{m.role}</div>
              <div style={{ background: C.mintLight, borderRadius: 8, padding: "8px 12px", marginBottom: 7 }}>
                <div style={{ fontSize: "0.73rem", color: C.textLight }}>{m.exp} Experience</div>
              </div>
              <div style={{ fontSize: "0.76rem", color: C.textMid, lineHeight: 1.5 }}>{m.spec}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Awards ── */}
      <section ref={awardsRef} style={{ padding: "72px 48px", background: C.white }}>
        <div style={{ textAlign: "center", marginBottom: 44, ...rv(awdV) }}>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.1rem)", fontWeight: 800, color: C.text, marginBottom: 10 }}>Recognition & Awards</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14, maxWidth: 760, margin: "0 auto" }}>
          {AWARDS.map((a, i) => (
            <div key={a.title} style={{ display: "flex", gap: 18, background: C.mintLight, borderRadius: 14, padding: "22px", border: `1px solid ${C.border}`, ...rv(awdV, i * 0.1) }}>
              <div style={{ width: 52, height: 52, background: C.green, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#86EFAC", fontWeight: 800, fontSize: "0.85rem" }}>{a.year}</span>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: C.text, fontSize: "0.92rem", marginBottom: 3 }}>{a.title}</div>
                <div style={{ fontSize: "0.78rem", color: C.textLight }}>{a.org}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}