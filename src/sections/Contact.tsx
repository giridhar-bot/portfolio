import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-32">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-neon-blue font-mono text-sm tracking-wider uppercase">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
              Let's{' '}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Have a project in mind or want to discuss opportunities? Let's talk!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-4 hover:border-neon-blue/20 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-300 font-medium">giridhar.sharma.web@gmail.com</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-4 hover:border-neon-blue/20 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
                  <span className="text-lg">☎</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-300 font-medium">+91 8969485658</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-4 hover:border-neon-purple/20 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-300 font-medium">Bangalore, India</p>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/giridhar-bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex-1 p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center gap-2 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                >
                  <FiGithub className="w-5 h-5" />
                  <span className="text-sm font-medium">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/kumar-giridhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex-1 p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center gap-2 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                >
                  <FiLinkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm"
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-neon-blue/50 focus:outline-none focus:ring-1 focus:ring-neon-blue/20 text-white placeholder-gray-600 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-neon-blue/50 focus:outline-none focus:ring-1 focus:ring-neon-blue/20 text-white placeholder-gray-600 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-neon-blue/50 focus:outline-none focus:ring-1 focus:ring-neon-blue/20 text-white placeholder-gray-600 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,212,255,0.2)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-neon-blue/20"
                >
                  {isSubmitted ? (
                    <>
                      <span>✓</span> Message Sent!
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" /> Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-gray-600 text-sm">
            Designed & Built with{' '}
            <span className="text-neon-pink">♥</span> using React, TypeScript & Tailwind CSS
          </p>
          <p className="text-gray-700 text-xs mt-2">© 2026 All rights reserved</p>
        </motion.div>
      </div>
    </section>
  );
}
