import React, { useState } from 'react';
import { usePopup } from '../PopupContext';
import { C } from '../theme';
import { SERVICES_DETAIL } from '../data';

export default function PopupForm() {
  const { isOpen, popupType, closePopup } = usePopup();
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      closePopup();
    }, 2500);
  };

  const isCallback = popupType === 'callback';

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 99999, padding: '20px', boxSizing: 'border-box'
    }}>
      <div style={{
        background: C.white, borderRadius: 24, width: '100%', maxWidth: 500,
        boxShadow: '0 24px 60px rgba(0,0,0,0.2)', overflow: 'hidden', position: 'relative',
        animation: 'fadeInUp 0.3s ease-out'
      }}>
        {/* Header */}
        <div style={{ background: C.green, padding: '32px', color: 'white', position: 'relative' }}>
          <button onClick={closePopup} style={{
            position: 'absolute', top: 16, right: 20, background: 'none', border: 'none',
            color: 'white', fontSize: '1.5rem', cursor: 'pointer', opacity: 0.8
          }}>✕</button>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 8 }}>
            {isCallback ? 'Request a Callback' : 'Book Appointment'}
          </h2>
          <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>
            {isCallback ? 'Leave your details and we will call you back shortly.' : 'Schedule your session with our expert physiotherapists.'}
          </p>
        </div>

        {/* Form */}
        {isSubmitted ? (
          <div style={{ padding: '60px 40px', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
            <h3 style={{ fontSize: '1.4rem', color: C.green, fontWeight: 800, marginBottom: 8 }}>Request Received!</h3>
            <p style={{ color: C.textMid }}>We will be in touch with you very soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding: '32px' }}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: C.text, marginBottom: 6 }}>Full Name</label>
              <input required type="text" placeholder="John Doe" style={inputStyle} />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: C.text, marginBottom: 6 }}>Phone Number</label>
              <input required type="tel" placeholder="+1 (555) 000-0000" style={inputStyle} />
            </div>

            {!isCallback && (
              <>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: C.text, marginBottom: 6 }}>Service Needed</label>
                  <select style={inputStyle}>
                    <option value="">Select a service...</option>
                    {SERVICES_DETAIL.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: C.text, marginBottom: 6 }}>Preferred Date</label>
                  <input type="date" style={inputStyle} />
                </div>
              </>
            )}

            {isCallback && (
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: C.text, marginBottom: 6 }}>Brief Message (Optional)</label>
                <textarea placeholder="How can we help you?" rows={3} style={{ ...inputStyle, resize: 'none' }} />
              </div>
            )}

            <button type="submit" style={{
              width: '100%', background: C.green, color: 'white', padding: '16px',
              borderRadius: 12, border: 'none', fontWeight: 700, fontSize: '1rem',
              cursor: 'pointer', transition: 'background 0.2s'
            }} onMouseEnter={(e)=>e.currentTarget.style.background=C.greenDark} onMouseLeave={(e)=>e.currentTarget.style.background=C.green}>
              {isCallback ? 'Request Callback' : 'Confirm Booking Request'}
            </button>
          </form>
        )}
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const inputStyle = {
  width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #E2E8F0',
  fontSize: '0.95rem', fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box',
  background: '#F8FAFC'
};
