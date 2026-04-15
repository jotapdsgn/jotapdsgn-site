import { motion } from "framer-motion";

const AnimatedDivider = () => {
  return (
    <div className="w-full h-0.5 relative overflow-hidden opacity-50">
      <motion.div
        className="absolute inset-0 w-[200%] h-full"
        style={{
          background: "linear-gradient(90deg, transparent, var(--indigo-main), var(--indigo-light), transparent, var(--indigo-main), transparent)",
        }}
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default AnimatedDivider;
