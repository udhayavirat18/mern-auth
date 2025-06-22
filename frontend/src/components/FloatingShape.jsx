import { motion } from "framer-motion";

const FloatingShape = ({ color, size, top, left, delay }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} ${size} opacity-10 blur-sm`}
      style={{ top, left }}
      animate={{
        y: [0, -20, 0],
        x: [0, 20, 0],
        rotate: [0, 15, 0],
      }}
      transition={{
        duration: 35,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
      aria-hidden="true"
    />
  );
};

export default FloatingShape;
