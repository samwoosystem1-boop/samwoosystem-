import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  history: { x: number; y: number }[];
  size: number;
  color: string;
}

export default function FiberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const particles: Particle[] = [];
    const particleCount = 120; // Increased density
    const historyLength = 60; // Longer trails

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        history: [],
        size: Math.random() * 1.5 + 0.5,
        color: `hsla(${230 + Math.random() * 30}, 80%, 70%, ${0.2 + Math.random() * 0.3})`,
      });
    }

    const draw = () => {
      // Very slight fade for extra smoothness
      ctx.fillStyle = 'rgba(10, 25, 47, 0.15)';
      ctx.fillRect(0, 0, width, height);
      
      particles.forEach((p, index) => {
        // Organic movement using time and index
        const time = Date.now() * 0.0005;
        const noiseX = Math.sin(time + index) * 0.05;
        const noiseY = Math.cos(time * 0.8 + index) * 0.05;

        // Mouse interaction
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 400) {
          const force = (400 - dist) / 400;
          p.vx += dx * force * 0.0002;
          p.vy += dy * force * 0.0002;
        }

        p.vx += noiseX;
        p.vy += noiseY;

        p.x += p.vx;
        p.y += p.vy;

        // Friction
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Wrap around screen
        if (p.x < -50) p.x = width + 50;
        if (p.x > width + 50) p.x = -50;
        if (p.y < -50) p.y = height + 50;
        if (p.y > height + 50) p.y = -50;

        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > historyLength) {
          p.history.shift();
        }

        // Draw trail (the "fiber")
        if (p.history.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.history[0].x, p.history[0].y);
          
          for (let i = 1; i < p.history.length; i++) {
            const xc = (p.history[i].x + p.history[i - 1].x) / 2;
            const yc = (p.history[i].y + p.history[i - 1].y) / 2;
            ctx.quadraticCurveTo(p.history[i - 1].x, p.history[i - 1].y, xc, yc);
          }

          ctx.strokeStyle = p.color;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        // Draw glowing head
        if (index % 3 === 0) { // Only some have glowing heads for cleaner look
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = '#fff';
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full bg-[#0A192F] z-[-1]"
      style={{ pointerEvents: 'none' }}
    />
  );
}
