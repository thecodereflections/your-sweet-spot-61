import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Lighter particle layer — fewer dots, no blur, respects reduced motion.
 */
const particles = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  size: Math.random() * 2.5 + 1.5,
  x: Math.random() * 100,
  delay: Math.random() * 12,
  duration: Math.random() * 18 + 22,
  opacity: Math.random() * 0.07 + 0.02,
}));

const FloatingBubbles = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 768;
    setEnabled(!reduced && !mobile);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            bottom: `-${p.size + 10}px`,
            background:
              p.id % 3 === 0 ? "hsl(190 80% 50%)" : "hsl(250 60% 58%)",
            willChange: "transform, opacity",
          }}
          animate={{
            y: [0, -(window.innerHeight + 100)],
            opacity: [0, p.opacity, p.opacity * 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
