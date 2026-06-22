import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { C, NAV_LINKS } from "../theme";
import logo from "../assets/logo.png";
import { usePopup } from "../PopupContext";

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
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
          <span style={{ color: "white", fontSize: "0.8rem" }}>
            📞 04562-244228
          </span>
          <span style={{ color: "white", fontSize: "0.8rem" }}>
            💬 88706 16184
          </span>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["f", "𝕏", "in", "📷"].map((icon) => (
            <span
              key={icon}
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.88rem",
                cursor: "pointer",
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
          padding: "14px 48px",
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
            gap: 12,
            textDecoration: "none",
          }}
        >
          <img
            src={logo}
            alt="Shree Ohm Physiotherapy"
            style={{
              width: 70,
              height: 70,
              objectFit: "contain",
            }}
          />

          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: "1.05rem",
                color: C.green,
                letterSpacing: "0.02em",
              }}
            >
              Shree Ohm
            </div>

            <div
              style={{
                fontSize: "0.62rem",
                color: C.textLight,
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
                    fontSize: "0.88rem",
                    fontWeight: active ? 700 : 500,
                    textDecoration: "none",
                    borderBottom: active
                      ? `2px solid ${C.green}`
                      : "2px solid transparent",
                    paddingBottom: 3,
                    transition: "all 0.2s",
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
            style={{
              background: "transparent",
              border: `2px solid ${C.green}`,
              color: C.green,
              padding: "9px 20px",
              borderRadius: 50,
              fontWeight: 600,
              fontSize: "0.82rem",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Request Callback →
          </button>

          <button
            onClick={() => openPopup('appointment')}
            style={{
              background: C.green,
              color: "white",
              padding: "9px 20px",
              borderRadius: 50,
              fontWeight: 600,
              fontSize: "0.82rem",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Book Appointment →
          </button>
        </div>
      </nav>
    </>
  );
}