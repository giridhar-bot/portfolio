import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';
import AnimatedCounter from '../components/AnimatedCounter';
import { Project, projects } from '../data/projects';
import { openProject } from '../store/projectSlice';

function ProjectVisual({ project }: { project: Project }) {
  if (project.visualType === 'analytics') {
    return (
      <div className="mb-8 rounded-xl bg-white/[0.02] border border-white/5 p-4">
        <div className="relative h-44 rounded-lg overflow-hidden bg-gradient-to-br from-[#09111f] via-[#190f31] to-[#090914]">
          <div className="absolute inset-6 border border-white/10 rounded-full" />
          <div className="absolute inset-12 border border-white/10 rounded-full" />
          {[{ left: '28%', top: '35%' }, { left: '45%', top: '48%' }, { left: '62%', top: '42%' }].map((tower, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: tower.left, top: tower.top }}
              initial={{ scale: 0.9, opacity: 0.7 }}
              animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0.15, 0.6] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.35 }}
            >
              <span className="absolute -inset-3 rounded-full bg-neon-purple/30" />
              <span className="relative block w-2.5 h-2.5 rounded-full bg-neon-blue" />
            </motion.div>
          ))}
          <div className="absolute bottom-4 left-4 right-4 flex gap-1.5">
            {[45, 56, 51, 70, 63, 72, 80, 69, 88, 91, 85, 93].map((value, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t"
                style={{ height: `${value * 0.34}px`, background: 'linear-gradient(to top, #00d4ff55, #7c3aedcc)' }}
                animate={{ opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.08 }}
              />
            ))}
          </div>
          <span className="absolute right-3 top-3 text-[10px] px-2 py-1 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30">
            GIS + Heatmaps
          </span>
        </div>
      </div>
    );
  }

  if (project.visualType === 'drone') {
    return (
      <div className="mb-8 rounded-xl bg-white/[0.02] border border-white/5 p-4">
        <div className="relative h-44 rounded-lg overflow-hidden bg-gradient-to-br from-[#130d14] via-[#1f1319] to-[#0f1218]">
          <motion.span
            className="absolute top-3 left-3 text-[10px] px-2 py-1 rounded bg-red-500/20 text-red-300 border border-red-400/30"
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ALERT MODE
          </motion.span>
          <motion.div
            className="absolute left-4 right-4 top-10 h-20 rounded-md border border-white/10 bg-black/35"
            animate={{ boxShadow: ['0 0 0 rgba(224,64,251,0)', '0 0 24px rgba(224,64,251,0.35)', '0 0 0 rgba(224,64,251,0)'] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          >
            <div className="w-full h-full bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02)_2px,transparent_2px,transparent_6px)]" />
          </motion.div>
          <motion.span
            className="absolute top-[44%] text-xl"
            animate={{ x: ['8%', '80%', '8%'], y: ['0%', '-8%', '0%'] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            🚁
          </motion.span>
          <div className="absolute bottom-3 left-3 right-3 grid grid-cols-4 gap-2">
            {['FFmpeg', 'OpenCV', 'WebSocket', 'Alert API'].map((item) => (
              <span key={item} className="text-[10px] text-center rounded bg-white/5 border border-white/10 py-1 text-gray-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (project.visualType === 'itc') {
    return (
      <div className="mb-8 rounded-xl bg-white/[0.02] border border-white/5 p-4">
        <div className="h-44 rounded-lg bg-gradient-to-br from-[#07151a] via-[#071028] to-[#121022] p-4">
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[['Plan', '82%'], ['Forecast', '76%'], ['Actuals', '88%']].map((card) => (
              <div key={card[0]} className="rounded-md bg-white/5 border border-white/10 p-2 text-center">
                <p className="text-[10px] text-gray-400">{card[0]}</p>
                <p className="text-sm font-semibold text-neon-blue">{card[1]}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {[62, 74, 58, 86].map((bar, i) => (
              <div key={i} className="h-2 rounded bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#22d3ee] to-[#7c3aed]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${bar}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.12 }}
                />
              </div>
            ))}
          </div>
          <p className="text-[11px] text-gray-400 mt-4">Billing4IT monthly run: Automated</p>
        </div>
      </div>
    );
  }

  if (project.visualType === 'hierarchy') {
    return (
      <div className="mb-8 rounded-xl bg-white/[0.02] border border-white/5 p-4">
        <div className="h-44 rounded-lg bg-gradient-to-br from-[#1a0e1e] via-[#101127] to-[#12101c] p-4">
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] mb-4">
            {['Source', 'Work', 'Target'].map((node, i) => (
              <motion.div
                key={node}
                className="rounded-md py-2 border border-white/15 text-gray-200"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
              >
                {node}
              </motion.div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 mb-4 text-gray-400 text-xs">
            <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
              Source
            </motion.span>
            <span>→</span>
            <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity, delay: 0.25 }}>
              Work
            </motion.span>
            <span>→</span>
            <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity, delay: 0.5 }}>
              Target
            </motion.span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <span className="px-2 py-1 rounded bg-rose-500/15 border border-rose-400/30 text-rose-300">Diff Node A</span>
            <span className="px-2 py-1 rounded bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">Inherited Node B</span>
            <span className="px-2 py-1 rounded bg-fuchsia-500/15 border border-fuchsia-400/30 text-fuchsia-300">Drag-drop Move</span>
            <span className="px-2 py-1 rounded bg-white/10 border border-white/15 text-gray-300">Auto Update Job</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8 rounded-xl bg-white/[0.02] border border-white/5 p-4">
      <div className="h-44 rounded-lg bg-gradient-to-br from-[#081320] via-[#0d1330] to-[#120f24] p-4">
        <div className="grid grid-cols-3 gap-2 mb-4 text-[10px]">
          {['Admin', 'Enterprise', 'Wholesale'].map((role) => (
            <span key={role} className="px-2 py-1 rounded text-center bg-white/10 border border-white/15 text-gray-300">
              {role}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-[11px] text-gray-400 mb-2">
          <span>Live Order Tracking</span>
          <span className="text-neon-blue">WebSockets</span>
        </div>
        <div className="h-2 rounded bg-white/10 overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <div className="grid grid-cols-3 gap-2 text-[10px]">
          {['Stripe', 'PayPal', 'Razorpay'].map((pay) => (
            <span key={pay} className="px-2 py-1 rounded text-center border border-white/15 text-gray-300 bg-white/5">
              {pay}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const dispatch = useDispatch();

  return (
    <section id="projects" className="relative py-32">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-neon-blue font-mono text-sm tracking-wider uppercase">Projects</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
              Featured{' '}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Enterprise applications I've built that drive real business impact
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-24">
          {projects.map((project) => (
            <ScrollReveal key={project.id} delay={0.1}>
              <TiltCard glowColor={project.color}>
                <div
                  className="rounded-2xl bg-dark-800/60 backdrop-blur-xl border border-white/5 overflow-hidden cursor-pointer"
                  onClick={() => dispatch(openProject(project.id))}
                >
                  <div className="p-8 md:p-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl">{project.icon}</span>
                          <span
                            className="text-sm font-semibold uppercase tracking-wider"
                            style={{ color: project.color }}
                          >
                            {project.company}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">{project.engagement}</p>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-400 max-w-2xl">{project.subtitle}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.badges.map((badge) => (
                            <span
                              key={badge}
                              className="px-2.5 py-1 rounded-full text-xs font-semibold border"
                              style={{
                                borderColor: `${project.color}40`,
                                color: project.color,
                                backgroundColor: `${project.color}12`,
                              }}
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-medium border transition-all"
                        style={{
                          borderColor: `${project.color}40`,
                          color: project.color,
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(openProject(project.id));
                        }}
                      >
                        View Details →
                      </motion.button>
                    </div>

                    <ProjectVisual project={project} />

                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-6 rounded-xl bg-white/[0.02] border border-white/5">
                      {project.metrics.map((metric) => (
                        <AnimatedCounter
                          key={metric.label}
                          value={metric.value}
                          suffix={metric.suffix}
                          label={metric.label}
                          color={project.color}
                        />
                      ))}
                    </div>

                    {/* Key features preview */}
                    <div className="grid md:grid-cols-2 gap-3 mb-8">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02]"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: project.color }}
                          />
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 10).map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.05] text-gray-400 border border-white/5 hover:border-white/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.techStack.length > 10 && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium text-gray-500">
                          +{project.techStack.length - 10} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom gradient bar */}
                  <div
                    className="h-1 w-full"
                    style={{
                      background: `linear-gradient(90deg, ${project.color}, transparent)`,
                    }}
                  />
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
