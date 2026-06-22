import { useState, useEffect, useRef } from "react";

export function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export const rv = (v, delay = 0, dir = "up") => ({
  opacity: v ? 1 : 0,
  transform: v
    ? "translate(0,0)"
    : dir === "up"   ? "translateY(28px)"
    : dir === "left" ? "translateX(-28px)"
    : "translateX(28px)",
  transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
});