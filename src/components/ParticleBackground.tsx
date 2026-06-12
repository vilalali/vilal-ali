import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Adjust these for the desired density and speed
    const particleCount = Math.floor((width * height) / 12000); 
    const connectionDistance = 150;
    const speedMultiplier = 0.5;

    // Define colors based on theme. Increased opacity to make them stand out more.
    const isDark = theme === 'dark';
    const particleColor = isDark ? 'rgba(239, 210, 54, 0.8)' : 'rgba(161, 98, 7, 0.6)';
    const lineColorBase = isDark ? '239, 210, 54' : '161, 98, 7';

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.floor((width * height) / 12000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speedMultiplier,
          vy: (Math.random() - 0.5) * speedMultiplier,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      // Update positions
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particleColor;
        ctx.fill();
        
        // Reset shadow for lines to avoid performance hit
        ctx.shadowBlur = 0;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Opacity based on distance
            const opacity = 1 - distance / connectionDistance;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${lineColorBase}, ${opacity * 0.5})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initialize
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // Re-run effect when theme changes to update colors

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1] transition-opacity duration-1000"
      style={{ opacity: 0.8 }}
    />
  );
};

export default ParticleBackground;
