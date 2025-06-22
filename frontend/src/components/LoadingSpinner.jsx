import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-200 to-fuchsia-100 flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute w-36 h-36 rounded-full bg-fuchsia-200 blur-3xl opacity-30 animate-pulse"
        initial={{ scale: 0.9 }}
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute w-1/2 h-full left-0 top-0 rounded-l-full bg-fuchsia-400" />
        <div className="absolute w-1/2 h-full right-0 top-0 rounded-r-full bg-purple-300" />
        <div className="absolute inset-2 bg-indigo-100 rounded-full" />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
