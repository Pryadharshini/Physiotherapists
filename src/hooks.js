import { useState, useEffect, useRef } from "react";

export function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { 
        if (e.isIntersecting) {
          // Delay slightly to ensure the browser paints the opacity:0 state first
          setTimeout(() => setVisible(true), 50);
        } 
      },
      { threshold, rootMargin: "0px 0px -150px 0px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export const rv = (v, delay = 0, dir = "up") => ({
  opacity: v ? 1 : 0,
  transform: v
    ? "translate(0,0) scale(1)"
    : dir === "up"   ? "translateY(40px) scale(1)"
    : dir === "left" ? "translateX(-300px) scale(1)"
    : dir === "right"? "translateX(300px) scale(1)"
    : dir === "zoom" ? "translateY(50px) scale(0.85)"
    : "translateX(300px) scale(1)",
  transition: `opacity 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s, transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s`,
});