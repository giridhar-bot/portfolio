import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { skills, skillCategories } from '../data/skills';

const coreSkills = [
  { name: 'Java', level: 90, icon: '☕' },
  { name: 'Spring Boot', level: 85, icon: '🍃' },
  { name: 'React', level: 85, icon: '⚛️' },
  { name: 'Microservices', level: 80, icon: '🔗' },
];

function SkillBar({ skill, delay }: { skill: (typeof skills)[0]; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-mono text-neon-blue">{skill.level}%</span>
      </div>
      <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: delay + 0.2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-32">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-neon-blue font-mono text-sm tracking-wider uppercase">Skills</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
              Technical{' '}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Arsenal
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Technologies I use to bring ideas to life
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-10 p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <p className="text-sm text-gray-400 mb-5 text-center">Core Skills</p>
            <div className="space-y-5">
              {coreSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  skill={{ ...skill, category: 'Core' }}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Category tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {skillCategories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/20'
                    : 'bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/[0.1] border border-white/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <div className="space-y-6">
              {filteredSkills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom tech cloud */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-4">Also experienced with</p>
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              {['Caching', 'DB Indexing', 'System Design (HLD/LLD)', 'OOP', 'DSA', 'Postman', 'JWT Security', 'Async Processing'].map(
                (tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 rounded-full text-xs font-medium text-gray-500 bg-white/[0.03] border border-white/5 hover:border-neon-blue/20 hover:text-neon-blue transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
