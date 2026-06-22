import { motion } from "framer-motion";

interface FlyingBirdProps {
  top: number;
  duration: number;
  delay?: number;
  size?: number;
  reverse?: boolean;
  opacity?: number;
  /** Tailwind text-color class, e.g. "text-clay" or "text-mist/70" */
  color?: string;
  /** Wing-flap speed in seconds */
  flapSpeed?: number;
}

export default function FlyingBird({
  top,
  duration,
  delay = 0,
  size = 36,
  reverse = false,
  opacity = 1,
  color = "text-mist",
  flapSpeed = 0.55,
}: FlyingBirdProps) {
  return (
    <motion.div
      className={`absolute ${color}`}
      style={{ top: `${top}%`, opacity }}
      initial={{ x: reverse ? "110vw" : "-10vw" }}
      animate={{ x: reverse ? "-10vw" : "110vw" }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    >
      {/* Gentle bob layered on the horizontal path */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        style={{ transform: reverse ? "scaleX(-1)" : undefined }}
      >
        <svg
          width={size}
          height={size * 0.65}
          viewBox="0 0 120 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left wing */}
          <motion.path
            fill="currentColor"
            animate={{
              d: [
                "M60 38 C 44 18, 18 8, 2 22 C 18 26, 40 32, 60 38 Z",
                "M60 38 C 44 50, 18 58, 2 46 C 18 42, 40 40, 60 38 Z",
                "M60 38 C 44 18, 18 8, 2 22 C 18 26, 40 32, 60 38 Z",
              ],
            }}
            transition={{ duration: flapSpeed, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Right wing */}
          <motion.path
            fill="currentColor"
            animate={{
              d: [
                "M60 38 C 76 18, 102 8, 118 22 C 102 26, 80 32, 60 38 Z",
                "M60 38 C 76 50, 102 58, 118 46 C 102 42, 80 40, 60 38 Z",
                "M60 38 C 76 18, 102 8, 118 22 C 102 26, 80 32, 60 38 Z",
              ],
            }}
            transition={{ duration: flapSpeed, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Body */}
          <ellipse cx="60" cy="38" rx="7" ry="4.5" fill="currentColor" />
          {/* Head */}
          <ellipse cx="72" cy="34" rx="4" ry="3" fill="currentColor" />
          {/* Tail */}
          <path d="M53 39 C 46 42, 40 46, 36 44 C 40 40, 48 38, 53 39 Z" fill="currentColor" />
        </svg>
      </motion.div>
    </motion.div>
  );
}