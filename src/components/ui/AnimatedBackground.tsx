import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-primary-500/20 dark:bg-primary-500/15 blur-[120px]"
        animate={{ x: [0, 100, 0], y: [0, 80, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] rounded-full bg-accent-indigo/20 dark:bg-accent-indigo/15 blur-[120px]"
        animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] rounded-full bg-accent-sky/15 dark:bg-accent-purple/15 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
