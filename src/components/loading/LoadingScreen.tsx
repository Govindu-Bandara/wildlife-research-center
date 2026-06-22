import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
  duration?: number;
}

const loadingMessages = [
  "Scanning the canopy…",
  "Tracking field signals…",
  "Cataloguing today's sightings…",
  "Almost there…",
];

// Stable random particles generated once at module load
const particles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  startY: 55 + Math.random() * 40,
  drift: (Math.random() - 0.5) * 60,
  size: Math.random() * 3 + 1.5,
  duration: Math.random() * 5 + 4,
  delay: Math.random() * 4,
}));

export default function LoadingScreen({ onComplete, duration = 3200 }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setMessageIndex((i) => (i + 1) % loadingMessages.length);
    }, 800);

    const exitTimer = setTimeout(() => setVisible(false), duration);
    const completeTimer = setTimeout(onComplete, duration + 600);

    return () => {
      clearInterval(messageTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] bg-canopy overflow-hidden flex flex-col items-center justify-center"
        >
          {/* Floating pollen / firefly particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-clay"
              style={{
                left: `${p.x}%`,
                top: `${p.startY}%`,
                width: p.size,
                height: p.size,
              }}
              animate={{
                y: [0, -200, -380],
                x: [0, p.drift],
                opacity: [0, 0.55, 0],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Radial vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_center,transparent_25%,rgba(20,48,31,0.9)_100%)]" />

          {/* Gray Seagulls — full-screen layer, white-tinted */}
          <img
            src="/Gray Seagulls.svg"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ filter: "brightness(0) invert(1)", opacity: 0.55 }}
          />

          {/* Birds — upper portion, warm clay tint for depth contrast */}
          <img
            src="/Birds.svg"
            aria-hidden="true"
            className="absolute top-0 left-0 w-full pointer-events-none"
            style={{
              height: "45%",
              filter: "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(325deg)",
              opacity: 0.45,
            }}
          />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center px-6 text-center">

            {/* Sonar rings + logo */}
            <div className="relative flex items-center justify-center">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-clay/25"
                  initial={{ width: 90, height: 90, opacity: 0.8 }}
                  animate={{ width: 290, height: 290, opacity: 0 }}
                  transition={{
                    duration: 2.8,
                    delay: i * 0.7,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Soft glow behind logo */}
              <motion.div
                className="absolute rounded-full bg-clay/15 blur-2xl"
                animate={{ scale: [1, 1.35, 1], opacity: [0.35, 0.65, 0.35] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: 130, height: 130 }}
              />

              {/* Logo — spring entrance, then breathes */}
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <motion.img
                  src="/481287716_122112551678740090_4828705952528943661_n.png"
                  alt="Wildlife Research & Study Center"
                  className="w-24 h-24 object-contain invert mix-blend-screen"
                  animate={{ scale: [1, 1.07, 1] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>

            {/* Title — staggered lines */}
            <motion.div
              className="mt-7"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.18, delayChildren: 0.5 } },
                hidden: {},
              }}
            >
              {["Wildlife Research", "& Study Center"].map((line) => (
                <motion.p
                  key={line}
                  className="font-display text-2xl md:text-3xl text-mist leading-snug"
                  variants={{
                    hidden:  { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
                  }}
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>

            {/* Expanding divider line */}
            <motion.div
              className="mt-5 h-px bg-gradient-to-r from-transparent via-clay/55 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 160, opacity: 1 }}
              transition={{ duration: 1.1, delay: 1, ease: "easeOut" }}
            />

            {/* Rotating status message */}
            <div className="mt-4 h-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={messageIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs text-mist/45 tracking-widest uppercase"
                >
                  {loadingMessages[messageIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
