import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-neon-blue font-mono text-sm tracking-wider uppercase">Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
              Professional{' '}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink md:hidden" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`relative flex items-start gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 w-4 h-4 rounded-full border-2 z-10"
                    style={{ borderColor: i === 0 ? '#00d4ff' : i === 1 ? '#7c3aed' : '#e040fb' }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, type: 'spring' }}
                  >
                    <div
                      className="w-full h-full rounded-full animate-pulse"
                      style={{
                        backgroundColor: i === 0 ? '#00d4ff' : i === 1 ? '#7c3aed' : '#e040fb',
                        opacity: 0.5,
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'} pl-14 md:pl-0`}>
                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all group">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-mono text-neon-blue">{exp.period}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-sm text-gray-500">{exp.location}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className="text-neon-purple font-semibold mt-1">{exp.company}</h4>
                      {exp.client && <p className="text-xs text-gray-500 mt-1">Client: {exp.client}</p>}
                      <p className="text-gray-400 text-sm mt-3 mb-4">{exp.description}</p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="text-neon-blue mt-0.5">▹</span>
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Tech */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-xs font-mono text-gray-500 bg-white/[0.03] border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
