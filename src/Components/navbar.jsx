import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { C, NAV_LINKS } from "../theme";
import logo from "../assets/logo.png";
import { usePopup } from "../PopupContext";

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [btnHov, setBtnHov] = useState(null);
  const location = useLocation();
  const path = location.pathname;
  const { openPopup } = usePopup();

  return (
    <>
      {/* Top bar */}
      <div
        style={{
          background: C.green,
          padding: "10px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: 28 }}>
          <span style={{ color: "white", fontSize: "0.88rem" }}>
            📞 04562-244228
          </span>
          <span style={{ color: "white", fontSize: "0.88rem" }}>
            💬 88706 16184
          </span>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["f", "𝕏", "in", "📷"].map((icon) => (
            <span
              key={icon}
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "color 0.2s, transform 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-2px) scale(1.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
              }}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav
        style={{
          background: C.white,
          padding: "1px 38px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            textDecoration: "none",
          }}
        >
          <img
            src={logo}
            alt="Shree Ohm Physiotherapy"
            style={{
              width: 90,
              height: 90,
              objectFit: "contain",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(-4deg) scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "rotate(0deg) scale(1)")}
          />

          <div>
            <div
              style={{
                fontWeight: 1500,
                fontSize: "1.09rem",
                color: C.text,
                letterSpacing: "0.02em",
              }}
            >
              Shree Ohm
            </div>

            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 1500,
                color: C.green,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Physiotherapy Centre
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <ul
          style={{
            display: "flex",
            gap: 28,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {NAV_LINKS.map((link) => {
            const active = path === link.href;

            return (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onMouseEnter={() => setHovered(link.label)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    color:
                      active || hovered === link.label
                        ? C.green
                        : C.textMid,
                    fontSize: "0.92rem",
                    fontWeight: active ? 700 : 500,
                    textDecoration: "none",
                    borderBottom: active
                      ? `2px solid ${C.green}`
                      : "2px solid transparent",
                    paddingBottom: 3,
                    transition: "color 0.2s, border-color 0.2s, transform 0.2s",
                    display: "inline-block",
                    transform: hovered === link.label ? "translateY(-2px)" : "translateY(0)",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={() => openPopup('callback')}
            onMouseEnter={() => setBtnHov("outline")}
            onMouseLeave={() => setBtnHov(null)}
            style={{
              background: btnHov === "outline" ? C.green : "transparent",
              border: `2px solid ${C.green}`,
              color: btnHov === "outline" ? "white" : C.green,
              padding: "9px 20px",
              borderRadius: 50,
              fontWeight: 600,
              fontSize: "0.86rem",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background 0.25s, color 0.25s, transform 0.25s",
              transform: btnHov === "outline" ? "translateY(-2px)" : "translateY(0)",
            }}
          >
            Request Callback →
          </button>

          <button
            onClick={() => openPopup('appointment')}
            onMouseEnter={() => setBtnHov("solid")}
            onMouseLeave={() => setBtnHov(null)}
            style={{
              background: C.green,
              color: "white",
              padding: "9px 20px",
              borderRadius: 50,
              fontWeight: 600,
              fontSize: "0.86rem",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "transform 0.25s, box-shadow 0.25s",
              transform: btnHov === "solid" ? "translateY(-2px)" : "translateY(0)",
              boxShadow: btnHov === "solid" ? "0 8px 20px rgba(26,74,58,0.35)" : "none",
            }}
          >
            Book Appointment →
          </button>
        </div>
      </nav>
    </>
  );
}