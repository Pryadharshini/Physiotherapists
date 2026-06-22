import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { C } from "../theme";
import { SERVICES_DETAIL } from "../data";
import { usePopup } from "../PopupContext";

export default function ServiceDetail() {
  const { openPopup } = usePopup();
  const { slug } = useParams();
  const service = SERVICES_DETAIL.find(s => s.slug === slug);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      {/* ── Clean Header ── */}
      <section style={{ padding: "88px 48px 40px", background: C.mintLight }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Link to="/services" style={{ display: "inline-block", color: C.greenMid, textDecoration: "none", fontSize: "0.9rem", fontWeight: 700, marginBottom: 24, transition: "color 0.2s" }} onMouseEnter={(e)=>e.currentTarget.style.color=C.green} onMouseLeave={(e)=>e.currentTarget.style.color=C.greenMid}>
            ← Back to Services
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ fontSize: "3.5rem" }}>{service.icon}</div>
            <div>
              <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: C.text, lineHeight: 1.1, marginBottom: 8 }}>{service.title}</h1>
              <p style={{ fontSize: "1.15rem", color: C.greenMid, fontWeight: 600 }}>{service.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content & Gallery ── */}
      <section style={{ padding: "48px 48px 88px", background: C.white }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 64, alignItems: "flex-start" }}>
          
          {/* Main Text Content */}
          <div style={{ flex: "1 1 500px" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: C.text, marginBottom: 20 }}>About this Service</h2>
            <div style={{ width: 40, height: 4, background: C.green, borderRadius: 2, marginBottom: 24 }}></div>
            <p style={{ fontSize: "1.05rem", color: C.textMid, lineHeight: 1.8, marginBottom: 44, whiteSpace: "pre-wrap" }}>
              {service.desc}
            </p>

            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: C.text, marginBottom: 20 }}>Key Features</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {service.features.map(f => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: C.mintLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <span style={{ color: C.green, fontSize: "0.8rem", fontWeight: "bold" }}>✓</span>
                  </div>
                  <span style={{ fontSize: "0.98rem", color: C.textMid, lineHeight: 1.5 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: 20 }}>
            {service.images.map((img, idx) => (
              <img 
                key={idx} 
                src={img} 
                alt={`${service.title} ${idx+1}`} 
                style={{ 
                  width: "100%", 
                  height: "auto",
                  borderRadius: 20, 
                  boxShadow: "0 12px 32px rgba(0,0,0,0.06)", 
                  border: `1px solid ${C.border}`
                }} 
              />
            ))}
          </div>

        </div>
      </section>
      
      {/* ── CTA ── */}
      <section style={{ padding: "60px 48px", background: C.green, textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "white", marginBottom: 14 }}>Ready to start your recovery?</h2>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 24 }}>
          <button onClick={() => openPopup('appointment')} style={{ background: "white", color: C.green, padding: "14px 32px", borderRadius: 50, fontWeight: 700, fontSize: "0.92rem", border: "none", cursor: "pointer", fontFamily: "inherit", transition: "transform 0.2s" }} onMouseEnter={(e)=>e.currentTarget.style.transform="scale(1.05)"} onMouseLeave={(e)=>e.currentTarget.style.transform="scale(1)"}>Book Appointment</button>
        </div>
      </section>
    </>
  );
}
