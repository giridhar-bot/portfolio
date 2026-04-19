import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const architecturePatterns = [
  {
    title: 'Microservices Architecture',
    description:
      'Decomposed monoliths into independently deployable services with API Gateway, Service Discovery (Eureka), and Circuit Breaker (Resilience4j) patterns.',
    components: ['API Gateway', 'Eureka', 'Config Server', 'Resilience4j', 'Zipkin'],
    color: '#00d4ff',
  },
  {
    title: 'Event-Driven Architecture',
    description:
      'Built async communication layers using Apache Kafka and RabbitMQ for decoupled, scalable data processing pipelines.',
    components: ['Kafka', 'RabbitMQ', 'Event Sourcing', 'CQRS', 'Saga Pattern'],
    color: '#7c3aed',
  },
  {
    title: 'Cloud-Native Deployment',
    description:
      'Containerized applications with Docker, orchestrated with Kubernetes on AWS EKS, with CI/CD via Jenkins.',
    components: ['Docker', 'Kubernetes', 'AWS EKS', 'Jenkins', 'Terraform'],
    color: '#e040fb',
  },
  {
    title: 'Security Architecture',
    description:
      'Implemented OAuth2 + JWT authentication, role-based access control, and API security with Spring Security.',
    components: ['OAuth2', 'JWT', 'Spring Security', 'RBAC', 'API Keys'],
    color: '#00d4ff',
  },
];

const designDiagram = {
  layers: [
    {
      name: 'Client Layer',
      items: ['React SPA', 'Mobile App', 'Third-party APIs'],
      color: '#00d4ff',
    },
    {
      name: 'API Gateway',
      items: ['Spring Cloud Gateway', 'Rate Limiting', 'Auth Filter'],
      color: '#22d3ee',
    },
    {
      name: 'Service Layer',
      items: ['User Service', 'Order Service', 'Payment Service', 'Notification Service'],
      color: '#7c3aed',
    },
    {
      name: 'Data Layer',
      items: ['PostgreSQL', 'MongoDB', 'Redis Cache', 'Kafka Streams'],
      color: '#e040fb',
    },
    {
      name: 'Infrastructure',
      items: ['AWS EKS', 'Docker', 'Jenkins CI/CD', 'Prometheus/Grafana'],
      color: '#f472b6',
    },
  ],
};

export default function SystemDesign() {
  return (
    <section id="system-design" className="relative py-32">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-neon-blue font-mono text-sm tracking-wider uppercase">
              System Design
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
              Architecture{' '}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Showcase
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Patterns and architectures I implement in production systems
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="mb-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <h3 className="text-lg font-bold mb-5 text-center">Realtime Flow Overlay</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 rounded-xl border border-neon-blue/25 bg-neon-blue/5">
                <p className="text-neon-blue font-semibold mb-2">Load Balancing</p>
                <p className="text-gray-300 text-xs mb-3">Traffic enters through ALB/Nginx and is routed across stateless instances.</p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="px-2 py-1 rounded bg-white/10">Client</span>
                  <span>→</span>
                  <span className="px-2 py-1 rounded bg-white/10">LB</span>
                  <span>→</span>
                  <span className="px-2 py-1 rounded bg-white/10">Pods</span>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-neon-purple/25 bg-neon-purple/5">
                <p className="text-neon-purple font-semibold mb-2">Kafka Flow</p>
                <p className="text-gray-300 text-xs mb-3">Events stream from services to Kafka topics for async processing and analytics.</p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="px-2 py-1 rounded bg-white/10">Service</span>
                  <span>→</span>
                  <span className="px-2 py-1 rounded bg-white/10">Kafka</span>
                  <span>→</span>
                  <span className="px-2 py-1 rounded bg-white/10">Consumers</span>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-neon-pink/25 bg-neon-pink/5">
                <p className="text-neon-pink font-semibold mb-2">WebSocket Flow</p>
                <p className="text-gray-300 text-xs mb-3">State changes are pushed instantly from backend hubs to connected clients.</p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="px-2 py-1 rounded bg-white/10">Events</span>
                  <span>→</span>
                  <span className="px-2 py-1 rounded bg-white/10">WS Hub</span>
                  <span>→</span>
                  <span className="px-2 py-1 rounded bg-white/10">UI</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Architecture flow diagram */}
        <ScrollReveal delay={0.1}>
          <div className="mb-20 p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-8 text-center">
              Typical System Architecture
            </h3>
            <div className="space-y-4">
              {designDiagram.layers.map((layer, i) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                >
                  <div className="flex items-stretch gap-4">
                    {/* Layer label */}
                    <div
                      className="w-36 flex-shrink-0 p-3 rounded-lg flex items-center justify-center text-center text-sm font-semibold"
                      style={{
                        backgroundColor: `${layer.color}10`,
                        borderLeft: `3px solid ${layer.color}`,
                        color: layer.color,
                      }}
                    >
                      {layer.name}
                    </div>

                    {/* Items */}
                    <div className="flex-1 flex flex-wrap gap-2 items-center">
                      {layer.items.map((item, j) => (
                        <motion.span
                          key={item}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-4 py-2 rounded-lg text-sm font-medium bg-white/[0.03] border border-white/5 text-gray-300 hover:border-white/20 transition-all cursor-default"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Connector arrow */}
                  {i < designDiagram.layers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 + 0.3 }}
                        className="w-px h-4 bg-gradient-to-b from-white/20 to-transparent"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Architecture patterns grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {architecturePatterns.map((pattern, i) => (
            <ScrollReveal key={pattern.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all h-full"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold mb-4"
                  style={{ backgroundColor: `${pattern.color}15`, color: pattern.color }}
                >
                  {i === 0 ? '⚡' : i === 1 ? '📨' : i === 2 ? '☁️' : '🔒'}
                </div>
                <h3 className="text-lg font-bold mb-2">{pattern.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{pattern.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pattern.components.map((comp) => (
                    <span
                      key={comp}
                      className="px-2.5 py-1 rounded-md text-xs font-medium border"
                      style={{
                        borderColor: `${pattern.color}30`,
                        color: pattern.color,
                        backgroundColor: `${pattern.color}08`,
                      }}
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
