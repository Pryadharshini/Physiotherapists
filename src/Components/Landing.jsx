import { useState } from "react";
import { C } from "../theme";
import { useReveal, rv } from "../hooks";

/* ── Shared sub-components ── */
function Stars({ count }) {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 10 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{ color: i <= count ? C.amber : "#DDD", fontSize: "0.95rem" }}>★</span>
      ))}
    </div>
  );
}

function TreatmentCard({ title, items }) {
  return (
    <div style={{ background: C.mintLight, borderRadius: 16, padding: "28px 32px", border: `1px solid ${C.border}` }}>
      <h4 style={{ fontWeight: 700, fontSize: "1.05rem", color: C.text, marginBottom: 18, textAlign: "center" }}>{title}</h4>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map(item => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 26, height: 26, borderRadius: "50%", background: C.green, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "white", fontSize: "0.7rem" }}>→</span>
            </div>
            <span style={{ fontSize: "0.875rem", color: C.textMid, fontWeight: 500 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Data ── */
const SERVICES_STRIPS = [
  { icon: "🏥", title: "Advanced Clinics",       desc: "Modern Infrastructure, Latest Technology & Top Physiotherapy Experts" },
  { icon: "🏠", title: "Professional Home Care", desc: "Physiotherapy at home with expert oversight & Strong quality checks" },
  { icon: "💻", title: "Tele / Remote Rehab",    desc: "Personalized Physio exercises at home with Continuous guidance & mentoring" },
];
const PROCESS = [
  { icon: "🔍", step: "ASSESS",  sub: "(ROOT-CAUSE)", label: "AI + Physio Precision",     desc: "Our Physios uncover the root cause of your problem through advanced AI assessments — delivering long-lasting relief." },
  { icon: "📋", step: "PLAN",    sub: "(SMART-GOALS)", label: "Personalized Recovery Map", desc: "Your recovery roadmap aligned with your health needs, structured around SMART Goals & Milestones." },
  { icon: "📊", step: "TRACK",   sub: "(PROGRESS)",    label: "Proof of Recovery",         desc: "A data-driven system that measures progress at every milestone — optimizing treatment and keeping you motivated." },
  { icon: "🚀", step: "ADVANCE", sub: "(RECOVERY)",    label: "Care Beyond Clinic",        desc: "With guided exercise programs, adherence tracking and expert follow-ups, maintain progress and prevent relapse." },
];
const CONDITIONS = ["Lumbar Spondylosis","Pes Anserine Bursitis","Quadriceps Muscle Strain","Herniated Disk / Slipped Disc","Clubfoot / Congenital Talipes","Frozen Shoulder","Knee Osteoarthritis"];
const SYMPTOMS   = ["Neck Pain","Foot Pain","Tremors","Back Pain","Myalgia (Muscle Pain)","Sciatica","Joint Stiffness"];
const THERAPIES  = ["Interferential Therapy (IFT)","Ultrasound Therapy","TENS Therapy","Manual Therapy","Dry Needling","Kinesio Taping"];
const SVCS       = ["Chiropractor Treatment","Sports Physiotherapy","Post-Surgery Rehab","Geriatric Care","Pediatric Physio","Ergonomics Consulting"];
const TESTIMONIALS = [
  { name: "Priya S.",   stars: 5, text: "The team at Shree Ohm is exceptional. My chronic back pain of 3 years is finally under control after just 8 sessions. Highly recommend!" },
  { name: "Ramesh K.",  stars: 5, text: "Professional staff, modern equipment, and a genuine care for patient recovery. Best physiotherapy centre in Virudhunagar by far." },
  { name: "Anitha M.",  stars: 5, text: "The aerobics and yoga classes helped me lose 8 kg while recovering from a knee injury. Incredible results, wonderful doctors." },
  { name: "Suresh V.",  stars: 4, text: "Very systematic approach to treatment. They explained every step of my recovery plan. Felt completely supported throughout." },
];

export default function Landing() {
  const [hov, setHov] = useState(null);
  const [heroRef,  heroV]  = useReveal(0.01);
  const [servRef,  servV]  = useReveal();
  const [procRef,  procV]  = useReveal();
  const [aboutRef, aboutV] = useReveal();
  const [treatRef, treatV] = useReveal();
  const [testiRef, testiV] = useReveal();
  const [ctaRef,   ctaV]   = useReveal();

  return (
    <>
      {/* ── Hero ── */}
    {/* ── Hero ── */}
<section
  ref={heroRef}
  style={{
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  }}
>
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: `linear-gradient(180deg,${C.green} 0%,${C.greenMid} 40%,${C.greenLight} 100%)`,
      zIndex: 0,
    }}
  />

  <div
    style={{
      position: "absolute",
      right: "-5%",
      top: "10%",
      width: 480,
      height: 480,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.04)",
      zIndex: 1,
    }}
  />

  <div
    style={{
      position: "absolute",
      right: "5%",
      top: "22%",
      width: 320,
      height: 320,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.06)",
      zIndex: 1,
    }}
  />

  <div
    style={{
      position: "relative",
      zIndex: 2,
      maxWidth: 1000,
      width: "100%",
      padding: "0 48px",
      margin: "0 auto",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      ...rv(heroV),
    }}
  >
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(255,255,255,0.14)",
        backdropFilter: "blur(8px)",
        padding: "7px 18px",
        borderRadius: 50,
        marginTop: 10, 
        marginBottom: 26,
        border: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      <Stars count={5} />
      <span
        style={{
          color: "white",
          fontSize: "0.83rem",
          fontWeight: 600,
        }}
      >
        4.9 (264 Reviews)
      </span>
    </div>

    <h1
      style={{
        fontSize: "clamp(2.8rem,6vw,5rem)",
        fontWeight: 800,
        color: "white",
        lineHeight: 1.1,
        marginBottom: 24,
      }}
    >
      Virudhunagar's Best
      <br />
      <span style={{ color: "#86EFAC" }}>
        Physiotherapists
      </span>
      <br />
      Near You
    </h1>

    <p
      style={{
        fontSize: "1.1rem",
        color: "rgba(255,255,255,0.78)",
        lineHeight: 1.8,
        maxWidth: 700,
        marginBottom: 40,
      }}
    >
      Advanced Physiotherapy Centre with Hi-Tech Therapies &
      Certified Physiotherapists for Precision Recovery.
    </p>

    <div
      style={{
        display: "flex",
        gap: 14,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <button
        style={{
          background: C.greenLight,
          color: "white",
          padding: "14px 30px",
          borderRadius: 50,
          fontWeight: 700,
          fontSize: "0.92rem",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        Request Callback →
      </button>

      <button
        style={{
          background: "white",
          color: C.green,
          padding: "14px 30px",
          borderRadius: 50,
          fontWeight: 700,
          fontSize: "0.92rem",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        Book Appointment →
      </button>
    </div>

   <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: 50,
    flexWrap: "wrap",
    marginTop: 40,
    paddingTop: 25,
    borderTop: "1px solid rgba(255,255,255,0.14)",
    width: "100%",
    maxWidth: 850,
    marginBottom: 40, // add this
  }}
>
      {[
        ["15+", "Years Experience"],
        ["5,000+", "Patients Healed"],
        ["4", "Core Services"],
        ["9:30AM", "Opens Daily"],
      ].map(([v, l]) => (
        <div key={l}>
          <div
            style={{
              fontSize: "1.9rem",
              fontWeight: 800,
              color: "#86EFAC",
            }}
          >
            {v}
          </div>

          <div
            style={{
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.55)",
              marginTop: 3,
              letterSpacing: "0.05em",
            }}
          >
            {l}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── Service strips ── */}
      <section ref={servRef} style={{ background: C.green, padding: "44px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
          {SERVICES_STRIPS.map((sv, i) => (
            <div
              key={sv.title}
              onMouseEnter={() => setHov(`sv${i}`)}
              onMouseLeave={() => setHov(null)}
              style={{ display: "flex", alignItems: "flex-start", gap: 18, padding: "30px 32px", background: hov === `sv${i}` ? "rgba(255,255,255,0.08)" : "transparent", transition: "background 0.3s", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none", ...rv(servV, i * 0.14) }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>{sv.icon}</div>
              <div>
                <div style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: 7 }}>{sv.title}</div>
                <div style={{ color: "rgba(255,255,255,0.62)", fontSize: "0.83rem", lineHeight: 1.6 }}>{sv.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section ref={procRef} style={{ padding: "88px 48px", background: C.white }}>
        <div style={{ textAlign: "center", marginBottom: 60, ...rv(procV) }}>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: C.text, marginBottom: 14 }}>AI Precision Recovery</h2>
          <p style={{ color: C.textLight, maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>Our scientifically backed 4-step process ensures you receive the most effective, personalised physiotherapy treatment.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, position: "relative" }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ position: "absolute", top: "20%", left: `${25 * (i + 1) - 2}%`, width: "4%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ borderTop: `2px dashed ${C.border}`, width: "100%", position: "relative" }}>
                <span style={{ position: "absolute", right: -8, top: -10, color: C.greenMid, fontSize: "1rem" }}>→</span>
              </div>
            </div>
          ))}
          {PROCESS.map((p, i) => (
            <div key={p.step} style={{ textAlign: "center", padding: "0 22px", ...rv(procV, i * 0.12) }}>
              <div style={{ width: 84, height: 84, borderRadius: "50%", background: C.green, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", fontSize: "1.9rem", boxShadow: "0 8px 24px rgba(26,74,58,0.24)" }}>{p.icon}</div>
              <div style={{ fontWeight: 800, fontSize: "0.9rem", color: C.text, letterSpacing: "0.05em" }}>{p.step}</div>
              <div style={{ fontWeight: 700, fontSize: "0.82rem", color: C.greenMid, marginBottom: 14, letterSpacing: "0.03em" }}>{p.sub}</div>
              <div style={{ fontSize: "0.78rem", fontWeight: 600, color: C.textLight, marginBottom: 7 }}>{p.label}</div>
              <p style={{ fontSize: "0.8rem", color: C.textLight, lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section ref={aboutRef} style={{ padding: "88px 48px", background: C.mintLight }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div style={{ position: "relative", ...rv(aboutV, 0, "left") }}>
            <div style={{ borderRadius: 20, overflow: "hidden", background: `linear-gradient(135deg,${C.green},${C.greenMid})`, height: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center", padding: 40 }}>
                <div style={{ fontSize: "5.5rem", marginBottom: 14 }}>🧘‍♀️</div>
                <div style={{ color: "white", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "0.05em" }}>Physical Therapy</div>
                <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.83rem", marginTop: 7 }}>Expert hands-on care</div>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: -16, right: -16, background: C.green, color: "white", padding: "14px 22px", borderRadius: 12, fontWeight: 700, fontSize: "0.8rem", boxShadow: "0 8px 24px rgba(26,74,58,0.3)" }}>✓ Certified Experts</div>
          </div>
          <div style={{ ...rv(aboutV, 0.15, "right") }}>
            <div style={{ display: "inline-block", background: C.green, color: "white", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 50, marginBottom: 18 }}>Evidence-Based Care</div>
            <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.4rem)", fontWeight: 800, color: C.text, marginBottom: 18, lineHeight: 1.2 }}>Physiotherapy – Reduce Pain & Improve Function</h2>
            <p style={{ color: C.textMid, lineHeight: 1.8, marginBottom: 18, fontSize: "0.92rem" }}>
              Physiotherapy is an evidence-based approach to restore movement, reduce pain, and improve function. Expert physiotherapists assess the root cause and design a personalized plan using exercise therapy, manual techniques, and clinically validated modalities.
            </p>
            <p style={{ color: C.textMid, lineHeight: 1.8, fontSize: "0.92rem" }}>
              At <strong style={{ color: C.green }}>Shree Ohm Physiotherapy</strong>, our clinicians combine hands-on care with advanced supportive technologies to create a results-driven program tailored to your goals.
            </p>
            <div style={{ display: "flex", gap: 22, marginTop: 28 }}>
              {[["✓ Pain Relief","Targeted therapy"],["✓ Fast Recovery","Evidence-based"],["✓ Home Care","Expert oversight"]].map(([t, s]) => (
                <div key={t} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 700, color: C.green, fontSize: "0.83rem" }}>{t}</div>
                  <div style={{ fontSize: "0.73rem", color: C.textLight, marginTop: 3 }}>{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Treatments ── */}
      <section ref={treatRef} style={{ padding: "88px 48px", background: C.white }}>
        <div style={{ textAlign: "center", marginBottom: 52, ...rv(treatV) }}>
          <h2 style={{ fontSize: "clamp(1.7rem,3.2vw,2.4rem)", fontWeight: 800, color: C.text, marginBottom: 10 }}>Physiotherapy Treatments in Virudhunagar</h2>
          <p style={{ color: C.textLight, maxWidth: 680, margin: "0 auto", lineHeight: 1.7 }}>Precision Care approach to deliver pain-free mobility through personalized physiotherapy treatments for a wide range of conditions.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, ...rv(treatV, 0.1) }}>
          <TreatmentCard title="Conditions"        items={CONDITIONS} />
          <TreatmentCard title="Symptoms"          items={SYMPTOMS} />
          <TreatmentCard title="Therapies Offered" items={THERAPIES} />
          <TreatmentCard title="Services Offered"  items={SVCS} />
        </div>
      </section>

      {/* ── Hours strip ── */}
      <section style={{ padding: "72px 48px", background: C.green }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <div style={{ color: "#86EFAC", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 12 }}>Consulting Hours</div>
            <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.3rem)", fontWeight: 800, color: "white", marginBottom: 18 }}>Walk-in or Book Ahead</h2>
            <p style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.75, maxWidth: 380 }}>Our expert therapists are available across two sessions daily — mornings for consultations, evenings for hands-on therapy.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[
              { label: "Morning Session", time: "9:30 AM – 1:30 PM", icon: "🌅" },
              { label: "Evening Session", time: "5:00 PM – 8:30 PM", icon: "🌆" },
              { label: "Aerobics & Yoga", time: "6:00 AM – 7:30 AM", icon: "🧘" },
              { label: "Days Open",       time: "Monday – Saturday",  icon: "📅" },
            ].map(item => (
              <div key={item.label} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "22px 18px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: "1.7rem", marginBottom: 9 }}>{item.icon}</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>{item.label}</div>
                <div style={{ color: "white", fontWeight: 700, fontSize: "0.92rem" }}>{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section ref={testiRef} style={{ padding: "88px 48px", background: C.mintLight, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.04, fontSize: "18rem", pointerEvents: "none" }}>🌍</div>
        <div style={{ textAlign: "center", marginBottom: 52, position: "relative", zIndex: 1, ...rv(testiV) }}>
          <h2 style={{ fontSize: "clamp(1.7rem,3.2vw,2.3rem)", fontWeight: 800, color: C.text, letterSpacing: "0.02em", marginBottom: 10 }}>PATIENT TESTIMONIALS</h2>
          <p style={{ color: C.textLight, maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>Reviews from patients across clinic care, home care & digital rehab settings.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, position: "relative", zIndex: 1 }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              onMouseEnter={() => setHov(`t${i}`)}
              onMouseLeave={() => setHov(null)}
              style={{ background: C.white, borderRadius: 16, padding: "26px 22px", boxShadow: hov === `t${i}` ? "0 12px 40px rgba(26,74,58,0.15)" : "0 4px 14px rgba(0,0,0,0.06)", transition: "all 0.3s", transform: hov === `t${i}` ? "translateY(-4px)" : "translateY(0)", ...rv(testiV, i * 0.1) }}>
              <Stars count={t.stars} />
              <p style={{ fontSize: "0.86rem", color: C.textMid, lineHeight: 1.75, marginBottom: 18 }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 11, borderTop: `1px solid ${C.border}`, paddingTop: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: C.green, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "white", fontSize: "0.95rem" }}>👤</span>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.86rem", color: C.text }}>{t.name}</div>
                  <div style={{ fontSize: "0.73rem", color: C.textLight }}>Patient</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <button style={{ background: C.green, color: "white", padding: "13px 30px", borderRadius: 50, fontWeight: 700, fontSize: "0.88rem", border: "none", cursor: "pointer", fontFamily: "inherit" }}>All Reviews →</button>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} style={{ padding: "88px 48px", background: `linear-gradient(135deg,${C.green},${C.greenMid})`, textAlign: "center" }}>
        <div style={{ ...rv(ctaV) }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#86EFAC", marginBottom: 12 }}>Start Your Recovery Today</div>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, color: "white", marginBottom: 14, lineHeight: 1.2 }}>Your Pain Has a Solution.<br />Let's Find It Together.</h2>
          <p style={{ color: "rgba(255,255,255,0.68)", maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.75 }}>Walk in or book ahead. Our team is ready to assess, treat, and restore you to full function.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ background: "white", color: C.green, padding: "15px 34px", borderRadius: 50, fontWeight: 700, fontSize: "0.92rem", border: "none", cursor: "pointer", fontFamily: "inherit" }}>Book Appointment →</button>
            <button style={{ background: "transparent", color: "white", padding: "15px 34px", borderRadius: 50, fontWeight: 700, fontSize: "0.92rem", border: "2px solid rgba(255,255,255,0.38)", cursor: "pointer", fontFamily: "inherit" }}>Call Us: 04562-244228</button>
          </div>
        </div>
      </section>
    </>
  );
}