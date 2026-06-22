import { C } from "../theme";
import { useReveal, rv } from "../hooks";

const SCHEDULE = [
  { day: "Monday",    morning: "9:30 AM – 1:30 PM", evening: "5:00 PM – 8:30 PM", aerobics: "6:00 AM – 7:30 AM", open: true },
  { day: "Tuesday",   morning: "9:30 AM – 1:30 PM", evening: "5:00 PM – 8:30 PM", aerobics: "6:00 AM – 7:30 AM", open: true },
  { day: "Wednesday", morning: "9:30 AM – 1:30 PM", evening: "5:00 PM – 8:30 PM", aerobics: "6:00 AM – 7:30 AM", open: true },
  { day: "Thursday",  morning: "9:30 AM – 1:30 PM", evening: "5:00 PM – 8:30 PM", aerobics: "6:00 AM – 7:30 AM", open: true },
  { day: "Friday",    morning: "9:30 AM – 1:30 PM", evening: "5:00 PM – 8:30 PM", aerobics: "6:00 AM – 7:30 AM", open: true },
  { day: "Saturday",  morning: "9:30 AM – 1:30 PM", evening: "5:00 PM – 7:00 PM", aerobics: "6:00 AM – 7:30 AM", open: true },
  { day: "Sunday",    morning: "Closed",             evening: "Closed",             aerobics: "Closed",            open: false },
];

export default function Hours() {
  const [heroRef,  heroV]  = useReveal(0.01);
  const [schedRef, schedV] = useReveal();
  const [formRef,  formV]  = useReveal();
  const today = new Date().toLocaleDateString("en-IN", { weekday: "long" });

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} style={{ background: `linear-gradient(135deg,${C.green},${C.greenMid})`, padding: "96px 48px 76px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -60, width: 380, height: 380, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ position: "relative", zIndex: 1, ...rv(heroV) }}>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.14)", color: "white", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 50, marginBottom: 18 }}>When We're Open</div>
          <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.4rem)", fontWeight: 800, color: "white", lineHeight: 1.1, marginBottom: 22 }}>
            Clinic <span style={{ color: "#86EFAC" }}>Hours</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.75, maxWidth: 520 }}>Walk in or book ahead. We operate two daily sessions — morning consultations and evening therapy.</p>
        </div>
      </section>

      {/* ── Session summary strip ── */}
      <section style={{ background: C.green, padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0 }}>
          {[
            { icon: "🌅", label: "Morning Session", time: "9:30 AM – 1:30 PM",  note: "Mon–Sat" },
            { icon: "🌆", label: "Evening Session", time: "5:00 PM – 8:30 PM",  note: "Mon–Fri · Sat till 7PM" },
            { icon: "🧘", label: "Aerobics & Yoga", time: "6:00 AM – 7:30 AM",  note: "Mon–Sat" },
          ].map((s, i) => (
            <div key={s.label} style={{ padding: "36px 32px", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none", textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", marginBottom: 14 }}>{s.icon}</div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 7 }}>{s.label}</div>
              <div style={{ color: "white", fontWeight: 800, fontSize: "1.1rem", marginBottom: 7 }}>{s.time}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>{s.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Weekly schedule table ── */}
      <section ref={schedRef} style={{ padding: "72px 48px", background: C.white }}>
        <div style={{ textAlign: "center", marginBottom: 44, ...rv(schedV) }}>
          <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.3rem)", fontWeight: 800, color: C.text, marginBottom: 10 }}>Weekly Schedule</h2>
          <p style={{ color: C.textLight }}>Today is highlighted for quick reference.</p>
        </div>
        <div style={{ maxWidth: 880, margin: "0 auto", borderRadius: 16, overflow: "hidden", border: `1px solid ${C.border}`, ...rv(schedV, 0.1) }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.5fr 1.5fr 1.5fr", background: C.green }}>
            {["Day","Morning Session","Evening Session","Aerobics / Yoga"].map(h => (
              <div key={h} style={{ padding: "14px 18px", color: "rgba(255,255,255,0.78)", fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{h}</div>
            ))}
          </div>
          {SCHEDULE.map(row => {
            const isToday = row.day === today;
            return (
              <div key={row.day} style={{ display: "grid", gridTemplateColumns: "1.2fr 1.5fr 1.5fr 1.5fr", background: isToday ? C.mintLight : C.white, borderBottom: `1px solid ${C.border}` }}>
                <div style={{ padding: "16px 18px", display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ fontWeight: 700, fontSize: "0.88rem", color: isToday ? C.green : C.text }}>{row.day}</span>
                  {isToday && <span style={{ background: C.green, color: "white", fontSize: "0.58rem", padding: "2px 7px", borderRadius: 20, fontWeight: 700 }}>TODAY</span>}
                </div>
                {[row.morning, row.evening, row.aerobics].map((val, ci) => (
                  <div key={ci} style={{ padding: "16px 18px" }}>
                    <span style={{ fontSize: "0.86rem", color: val === "Closed" ? "#E5534B" : C.textMid, fontWeight: val === "Closed" ? 600 : 400 }}>{val}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Find Us + Booking form ── */}
      <section ref={formRef} style={{ padding: "72px 48px", background: C.mintLight }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start", ...rv(formV) }}>
          <div>
            <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.3rem)", fontWeight: 800, color: C.text, marginBottom: 22 }}>Find Us</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: "📍", label: "Main Clinic",      val: "Virudhunagar, Tamil Nadu" },
                { icon: "🏥", label: "Inpatient Branch", val: "5/2AB Bharathi Nagar NGO Colony, Madurai Road, Virudhunagar – 626001" },
                { icon: "📞", label: "Phone",            val: "04562-244228 · 88706 16184" },
                { icon: "🕐", label: "Walk-in Welcome",  val: "No appointment needed for first consultation" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: 14, background: C.white, borderRadius: 12, padding: "16px 18px", border: `1px solid ${C.border}` }}>
                  <span style={{ fontSize: "1.35rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: C.textLight, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 3 }}>{item.label}</div>
                    <div style={{ fontSize: "0.88rem", color: C.text, fontWeight: 500 }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.3rem)", fontWeight: 800, color: C.text, marginBottom: 22 }}>Book Your Visit</h2>
            <div style={{ background: C.white, borderRadius: 16, padding: "28px", border: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 18 }}>
                {["Full Name","Phone Number","Preferred Date"].map(p => (
                  <input key={p} placeholder={p}
                    style={{ padding: "11px 15px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontSize: "0.88rem", fontFamily: "inherit", color: C.text, outline: "none", width: "100%", boxSizing: "border-box" }} />
                ))}
                <select style={{ padding: "11px 15px", borderRadius: 8, border: `1.5px solid ${C.border}`, fontSize: "0.88rem", fontFamily: "inherit", color: C.textMid }}>
                  <option>Morning Session (9:30AM–1:30PM)</option>
                  <option>Evening Session (5PM–8:30PM)</option>
                  <option>Aerobics / Yoga (6AM–7:30AM)</option>
                </select>
              </div>
              <button style={{ width: "100%", background: C.green, color: "white", padding: "13px", borderRadius: 50, fontWeight: 700, fontSize: "0.92rem", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                Confirm Booking →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}