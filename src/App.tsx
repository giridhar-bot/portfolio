import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { RootState } from './store';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import ParticlesBackground from './components/ParticlesBackground';
import CursorGlow from './components/CursorGlow';
import ProjectModal from './components/ProjectModal';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import SystemDesign from './sections/SystemDesign';
import Contact from './sections/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-dark-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <ParticlesBackground />
              <CursorGlow />
              <Navbar />
              <ProjectModal />

              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <SystemDesign />
                <Contact />
              </main>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
