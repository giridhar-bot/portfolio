import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiChevronDown } from 'react-icons/fi';
import { downloadResumePdf } from '../utils/downloadResumePdf';

const typingPhrases = [
  'Building Scalable Systems 🚀',
  'Microservices Expert ⚡',
  'React + Spring Boot 💻',
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = async () => {
    const staticResumeUrl = '/Giridhar_Kumar_Resume.pdf';
    try {
      const response = await fetch(staticResumeUrl, { method: 'HEAD' });
      if (response.ok) {
        const anchor = document.createElement('a');
        anchor.href = staticResumeUrl;
        anchor.download = 'Giridhar_Kumar_Resume.pdf';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        return;
      }
    } catch {
      // If static file is unavailable, fallback to runtime-generated PDF.
    }
    downloadResumePdf();
  };

  useEffect(() => {
    const current = typingPhrases[phraseIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = current.slice(0, displayText.length + 1);
        setDisplayText(nextText);
        if (nextText === current) {
          setTimeout(() => setIsDeleting(true), 800);
        }
      } else {
        const nextText = current.slice(0, Math.max(0, displayText.length - 1));
        setDisplayText(nextText);
        if (nextText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-blue/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: '3s' }} />
      <motion.div
        className="absolute -bottom-12 left-0 right-0 h-48 opacity-50"
        animate={{ backgroundPositionX: ['0%', '100%', '0%'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(0,212,255,0.1), rgba(124,58,237,0.18), rgba(0,212,255,0.1))',
          backgroundSize: '250% 100%',
          filter: 'blur(42px)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-300">Available for opportunities</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="block text-white text-3xl md:text-4xl lg:text-5xl mb-2">Giridhar Kumar</span>
          <span className="block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
            Java Full Stack Developer
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-6"
        >
          <p className="text-base md:text-lg text-gray-300 font-mono">
            {displayText}
            <span className="inline-block w-2 h-5 ml-1 bg-neon-blue align-middle animate-pulse" />
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building enterprise-grade applications with{' '}
          <span className="text-neon-blue font-medium">React</span>,{' '}
          <span className="text-neon-purple font-medium">Spring Boot</span>, and{' '}
          <span className="text-neon-pink font-medium">Cloud Architecture</span>.
          Passionate about scalable microservices and pixel-perfect UIs.
        </motion.p>

        {/* Terminal-style snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-block mb-10"
        >
          <div className="bg-dark-800/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 px-6 font-mono text-sm text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.8, ease: 'easeInOut' }}
              className="overflow-hidden whitespace-nowrap"
            >
              <span className="text-neon-purple">const</span>{' '}
              <span className="text-neon-blue">developer</span>{' '}
              <span className="text-white">=</span>{' '}
              <span className="text-green-400">{'{'}</span>{' '}
              <span className="text-yellow-300">passion</span>
              <span className="text-white">:</span>{' '}
              <span className="text-green-400">"∞"</span>
              <span className="text-white">,</span>{' '}
              <span className="text-yellow-300">coffee</span>
              <span className="text-white">:</span>{' '}
              <span className="text-neon-pink">true</span>{' '}
              <span className="text-green-400">{'}'}</span>
              <span className="text-white">;</span>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold text-sm shadow-lg shadow-neon-blue/20 hover:shadow-neon-blue/40 transition-shadow"
          >
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleResumeDownload}
            className="px-8 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] text-white font-semibold text-sm flex items-center gap-2 transition-colors"
          >
            <FiDownload className="w-4 h-4" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.a
            href="https://github.com/giridhar-bot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-blue hover:border-neon-blue/30 transition-colors"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/kumar-giridhar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-blue hover:border-neon-blue/30 transition-colors"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-neon-blue transition-colors"
        aria-label="Scroll down"
      >
        <FiChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
