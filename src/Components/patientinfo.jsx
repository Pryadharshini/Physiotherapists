import { useState } from "react";
import { C } from "../theme";
import { useReveal, rv } from "../hooks";

const FAQ_DATA = [
  { q: "Do I need a doctor's referral to visit?",   a: "No, you can walk in or book directly. However, if you have a referral letter or medical reports, please bring them along as they help our physiotherapists design a more accurate treatment plan." },
  { q: "What should I wear to my appointment?",     a: "Wear loose, comfortable clothing that allows easy movement. For lower limb conditions, shorts are ideal. For shoulder/upper body issues, sleeveless or loose tops work best." },
  { q: "How long is a typical session?",            a: "Initial assessment sessions are usually 45–60 minutes. Follow-up treatment sessions are typically 30–45 minutes, depending on the treatment plan." },
  { q: "Will physiotherapy be painful?",            a: "Some techniques may cause mild discomfort, particularly during deep tissue work or when treating an acute injury. Our therapists always work within your comfort level and communicate throughout." },
  { q: "How many sessions will I need?",            a: "This varies based on your condition and severity. Your physiotherapist will give you an estimated treatment plan after the initial assessment — most patients see significant improvement in 6–12 sessions." },
  { q: "Do you offer home visit physiotherapy?",    a: "Yes! We have a dedicated home care program for patients who cannot travel. Call us or book online to schedule a home visit with one of our certified physiotherapists." },
  { q: "Is insurance accepted?",                    a: "We work with most major health insurance providers. Please bring your insurance card and policy details. Our front desk team will verify your coverage prior to treatment." },
];

export default function Patientinfo() {
  const [heroRef, heroV] = useReveal(0.01);
  const [prepRef, prepV] = useReveal();
  const [faqRef,  faqV]  = useReveal();
  const [open, setOpen]  = useState(null);

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} style={{ background: `linear-gradient(135deg,${C.green},${C.greenMid})`, padding: "96px 48px 76px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -60, width: 380, height: 380, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ position: "relative", zIndex: 1, ...rv(heroV) }}>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.14)", color: "white", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 50, marginBottom: 18 }}>For Our Patients</div>
          <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.4rem)", fontWeight: 800, color: "white", lineHeight: 1.1, marginBottom: 22 }}>
            Patient <span style={{ color: "#86EFAC" }}>Information</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.75, maxWidth: 560 }}>Everything you need to know before, during, and after your visit to Shree Ohm Physiotherapy Centre.</p>
        </div>
      </section>

      {/* ── First visit steps ── */}
      <section style={{ padding: "80px 48px", background: C.white }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.3rem)", fontWeight: 800, color: C.text, marginBottom: 10 }}>Your First Visit</h2>
          <p style={{ color: C.textLight, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>We've made the process as simple and comfortable as possible.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22 }}>
          {[
            { step: "01", icon: "📝", title: "Register", desc: "Fill a short intake form at reception or online before arrival." },
            { step: "02", icon: "🔍", title: "Assessment", desc: "Your physiotherapist performs a comprehensive root-cause evaluation." },
            { step: "03", icon: "📋", title: "Plan",       desc: "Receive a personalized treatment plan with clear goals and milestones." },
            { step: "04", icon: "💪", title: "Begin Care", desc: "Start your first treatment session immediately, or schedule it." },
          ].map(s => (
            <div key={s.step} style={{ textAlign: "center", padding: "0 10px" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 800, color: C.textLight, letterSpacing: "0.2em", marginBottom: 14 }}>{s.step}</div>
              <div style={{ width: 68, height: 68, borderRadius: "50%", background: C.green, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", fontSize: "1.7rem" }}>{s.icon}</div>
              <div style={{ fontWeight: 700, fontSize: "0.96rem", color: C.text, marginBottom: 7 }}>{s.title}</div>
              <div style={{ fontSize: "0.82rem", color: C.textLight, lineHeight: 1.65 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── What to bring + Patient rights ── */}
      <section ref={prepRef} style={{ padding: "72px 48px", background: C.mintLight }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start", ...rv(prepV) }}>
          <div>
            <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.3rem)", fontWeight: 800, color: C.text, marginBottom: 10 }}>What to Bring</h2>
            <p style={{ color: C.textLight, lineHeight: 1.7, marginBottom: 28 }}>Having these ready ensures your first session is as productive as possible.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: "📋", item: "Doctor's referral or medical reports (if available)" },
                { icon: "🆔", item: "Government-issued photo ID" },
                { icon: "💊", item: "List of current medications" },
                { icon: "📸", item: "X-rays, MRI, or scan reports if applicable" },
                { icon: "🏥", item: "Previous physiotherapy or treatment records" },
                { icon: "👟", item: "Comfortable, loose clothing and supportive footwear" },
              ].map(item => (
                <div key={item.item} style={{ display: "flex", gap: 14, background: C.white, borderRadius: 12, padding: "14px 18px", border: `1px solid ${C.border}` }}>
                  <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ fontSize: "0.86rem", color: C.textMid, alignSelf: "center", lineHeight: 1.5 }}>{item.item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.3rem)", fontWeight: 800, color: C.text, marginBottom: 10 }}>Patient Rights</h2>
            <p style={{ color: C.textLight, lineHeight: 1.7, marginBottom: 28 }}>As our patient, you are entitled to the following at all times.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Be treated with dignity, respect, and without discrimination",
                "Receive a clear explanation of your diagnosis and treatment plan",
                "Ask questions and receive honest, complete answers",
                "Consent to or refuse any treatment at any time",
                "Privacy and confidentiality of all medical records",
                "Request a second opinion at any time",
              ].map(right => (
                <div key={right} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: C.green, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <span style={{ color: "white", fontSize: "0.65rem" }}>✓</span>
                  </div>
                  <span style={{ fontSize: "0.86rem", color: C.textMid, lineHeight: 1.6 }}>{right}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section ref={faqRef} style={{ padding: "72px 48px", background: C.white }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44, ...rv(faqV) }}>
            <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.3rem)", fontWeight: 800, color: C.text, marginBottom: 10 }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {FAQ_DATA.map((item, i) => (
              <div key={i} style={{ background: C.mintLight, borderRadius: 12, border: `1px solid ${C.border}`, overflow: "hidden", ...rv(faqV, i * 0.06) }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: "100%", padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "transparent", border: "none", cursor: "pointer", fontFamily: "inherit", textAlign: "left" }}>
                  <span style={{ fontWeight: 600, fontSize: "0.9rem", color: C.text }}>{item.q}</span>
                  <span style={{ color: C.green, fontSize: "1.1rem", transform: open === i ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.3s", flexShrink: 0, marginLeft: 14 }}>+</span>
                </button>
                {open === i && (
                  <div style={{ padding: "0 22px 18px" }}>
                    <p style={{ fontSize: "0.86rem", color: C.textMid, lineHeight: 1.75 }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact strip ── */}
      <section style={{ padding: "56px 48px", background: C.green }}>
        <div style={{ display: "flex", gap: 44, alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#86EFAC", marginBottom: 7 }}>Need Immediate Help?</div>
            <div style={{ color: "white", fontWeight: 800, fontSize: "1.35rem" }}>Call us now: 04562-244228</div>
          </div>
          <div style={{ width: 1, height: 56, background: "rgba(255,255,255,0.14)" }} />
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#86EFAC", marginBottom: 7 }}>WhatsApp Support</div>
            <div style={{ color: "white", fontWeight: 800, fontSize: "1.35rem" }}>88706 16184</div>
          </div>
          <button style={{ background: "white", color: C.green, padding: "14px 32px", borderRadius: 50, fontWeight: 700, fontSize: "0.92rem", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
            Book Appointment →
          </button>
        </div>
      </section>
    </>
  );
}