import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { closeProject } from '../store/projectSlice';
import { projects } from '../data/projects';
import AnimatedCounter from './AnimatedCounter';

export default function ProjectModal() {
  const { isModalOpen, selectedProjectId } = useSelector((state: RootState) => state.project);
  const dispatch = useDispatch();

  const project = projects.find((p) => p.id === selectedProjectId);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(closeProject())}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-[101] overflow-y-auto rounded-2xl"
          >
            <div
              className="min-h-full bg-dark-800/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10"
              style={{
                boxShadow: `0 0 60px ${project.color}20, 0 0 120px ${project.color}10`,
              }}
            >
              {/* Close button */}
              <button
                onClick={() => dispatch(closeProject())}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all z-10"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Header */}
              <div className="mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="text-4xl mb-4 block">{project.icon}</span>
                  <span
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: project.color }}
                  >
                    {project.company}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{project.engagement}</p>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3">{project.title}</h2>
                  <p className="text-gray-400 text-lg max-w-3xl">{project.subtitle}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 rounded-full text-xs font-semibold border"
                        style={{
                          borderColor: `${project.color}45`,
                          color: project.color,
                          backgroundColor: `${project.color}12`,
                        }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-10"
              >
                <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
              </motion.div>

              {/* Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 p-6 rounded-xl bg-white/[0.03] border border-white/5"
              >
                {project.metrics.map((metric) => (
                  <AnimatedCounter
                    key={metric.label}
                    value={metric.value}
                    suffix={metric.suffix}
                    label={metric.label}
                    color={project.color}
                  />
                ))}
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mb-10"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span style={{ color: project.color }}>▸</span> Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: project.color }}
                      />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-10"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span style={{ color: project.color }}>▸</span> Challenges & Solutions
                </h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 + i * 0.1 }}
                      className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <h4 className="font-semibold text-white mb-2">{challenge.title}</h4>
                      <p className="text-gray-400 text-sm mb-3">
                        <strong className="text-gray-300">Challenge:</strong> {challenge.description}
                      </p>
                      <p className="text-gray-400 text-sm">
                        <strong style={{ color: project.color }}>Solution:</strong> {challenge.solution}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Architecture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-10"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span style={{ color: project.color }}>▸</span> Architecture
                </h3>
                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                  <p className="text-gray-300 leading-relaxed">{project.architecture}</p>
                  <div className="mt-5 p-4 rounded-lg bg-black/20 border border-white/10">
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Architecture Diagram</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      {['Client', 'Gateway', 'Services', 'Data', 'Observability'].map((node, i) => (
                        <div key={node} className="flex items-center gap-2">
                          <span
                            className="px-2.5 py-1 rounded border"
                            style={{ borderColor: `${project.color}40`, color: project.color }}
                          >
                            {node}
                          </span>
                          {i < 4 && <span className="text-gray-500">→</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span style={{ color: project.color }}>▸</span> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full text-sm font-medium border transition-all hover:scale-105"
                      style={{
                        borderColor: `${project.color}40`,
                        color: project.color,
                        backgroundColor: `${project.color}10`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
