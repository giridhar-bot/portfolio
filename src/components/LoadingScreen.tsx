import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  'Initializing JVM...',
  'Loading Spring Context...',
  'Connecting Microservices...',
  'Deploying to Cloud...',
  'Compiling Portfolio...',
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => {
        if (prev >= phrases.length - 1) {
          clearInterval(phraseInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(phraseInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark-900"
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1 }}
          className="mb-8"
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-4xl font-bold font-mono shadow-lg shadow-neon-blue/30">
              &lt;/&gt;
            </div>
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple opacity-50 blur-xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-2"
        >
          Java Full Stack Developer
        </motion.h1>

        {/* Loading phrase */}
        <motion.p
          key={currentPhrase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-gray-400 font-mono text-sm mb-8 h-5"
        >
          {phrases[currentPhrase]}
        </motion.p>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-dark-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <p className="text-gray-500 text-xs mt-2 font-mono">{progress}%</p>
      </motion.div>
    </AnimatePresence>
  );
}
