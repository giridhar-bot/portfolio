import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const timeline = [
  {
    year: '2025 – Present',
    title: 'Capgemini (Current Organization)',
    description:
      'Consultant - Full Stack Engineer for Mercedes-Benz MBRDI, building ITC workflows and hierarchy management systems with Spring Boot + React.',
  },
  {
    year: '2021 – 2025',
    title: 'Infinite Computer Solutions',
    description:
      'Built enterprise applications for Brightspeed, Verizon, and Qualcomm including billing, tracking, analytics, and performance optimization.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-neon-blue font-mono text-sm tracking-wider uppercase">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
              Crafting Digital{' '}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Experiences
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Full Stack Engineer with 4.8+ years of experience in Java, Spring Boot, and React.js
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About text */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                <p className="text-gray-300 leading-relaxed text-lg">
                  I specialize in building scalable, high-performance applications using{' '}
                  <span className="text-neon-blue font-medium">React.js</span> and{' '}
                  <span className="text-neon-purple font-medium">Spring Boot</span> with a strong focus on
                  microservices, caching, multithreading, and system design (HLD/LLD).
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                <p className="text-gray-300 leading-relaxed">
                  Delivered enterprise solutions across client ecosystems including{' '}
                  <span className="text-neon-pink font-medium">Brightspeed</span>,{' '}
                  <span className="text-neon-purple font-medium">Verizon</span>,{' '}
                  <span className="text-neon-blue font-medium">Qualcomm</span>, and{' '}
                  <span className="text-cyan-300 font-medium">Mercedes-Benz (MBRDI)</span>.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: '4.8+', label: 'Years Experience' },
                  { num: '5', label: 'Client Projects' },
                  {
                    num: 'Capgemini',
                    label: 'Current Org',
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5"
                  >
                    <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                      {stat.num}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="relative pl-16"
                  >
                    {/* Dot */}
                    <motion.div
                      className="absolute left-4 top-1 w-4 h-4 rounded-full border-2 border-neon-blue bg-dark-900"
                      whileInView={{ scale: [0, 1.3, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.5 }}
                    />

                    <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-neon-blue/20 transition-colors group">
                      <span className="text-neon-blue font-mono text-sm font-bold">{item.year}</span>
                      <h3 className="text-lg font-bold mt-1 group-hover:text-neon-blue transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
