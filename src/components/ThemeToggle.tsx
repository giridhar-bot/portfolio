import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { toggleTheme } from '../store/themeSlice';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const dispatch = useDispatch();

  return (
    <motion.button
      onClick={() => dispatch(toggleTheme())}
      className="relative w-14 h-7 rounded-full bg-dark-600 border border-white/10 flex items-center px-1 cursor-pointer"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-5 h-5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-xs"
        animate={{ x: isDark ? 0 : 26 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark ? '🌙' : '☀️'}
      </motion.div>
    </motion.button>
  );
}
