import { useCallback, useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  const initParticles = useCallback(() => {
    const p: Particle[] = [];
    const count = Math.min(60, Math.floor(window.innerWidth / 25));
    for (let i = 0; i < count; i++) {
      p.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
    setParticles(p);
  }, []);

  useEffect(() => {
    initParticles();
    window.addEventListener('resize', initParticles);
    return () => window.removeEventListener('resize', initParticles);
  }, [initParticles]);

  useEffect(() => {
    let animFrame: number;
    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: p.x + p.speedX < 0 || p.x + p.speedX > window.innerWidth ? { ...p, speedX: -p.speedX }.x : p.x + p.speedX,
          y: p.y + p.speedY < 0 || p.y + p.speedY > window.innerHeight ? { ...p, speedY: -p.speedY }.y : p.y + p.speedY,
          speedX: p.x + p.speedX < 0 || p.x + p.speedX > window.innerWidth ? -p.speedX : p.speedX,
          speedY: p.y + p.speedY < 0 || p.y + p.speedY > window.innerHeight ? -p.speedY : p.speedY,
        }))
      );
      animFrame = requestAnimationFrame(animate);
    };
    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg className="w-full h-full">
        {particles.map((p) => (
          <circle
            key={p.id}
            cx={p.x}
            cy={p.y}
            r={p.size}
            fill={p.id % 3 === 0 ? '#00d4ff' : p.id % 3 === 1 ? '#7c3aed' : '#e040fb'}
            opacity={p.opacity}
          />
        ))}
        {/* Connection lines between nearby particles */}
        {particles.map((p1, i) =>
          particles.slice(i + 1).map((p2) => {
            const dist = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
            if (dist < 150) {
              return (
                <line
                  key={`${p1.id}-${p2.id}`}
                  x1={p1.x}
                  y1={p1.y}
                  x2={p2.x}
                  y2={p2.y}
                  stroke="#00d4ff"
                  strokeOpacity={0.08 * (1 - dist / 150)}
                  strokeWidth={0.5}
                />
              );
            }
            return null;
          })
        )}
      </svg>
    </div>
  );
}
