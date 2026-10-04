import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  color: string;
}

interface TrailPoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  maxAge: number;
  size: number;
}

interface CometParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  decay: number;
  size: number;
  color: string;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
}

export const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let trail: TrailPoint[] = [];
    let particles: CometParticle[] = [];
    let shockwaves: Shockwave[] = [];

    let mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      prevX: -1000,
      prevY: -1000,
      vx: 0,
      vy: 0,
      active: false,
    };

    const colors = ['#ffffff', '#bae6fd', '#fed7aa', '#f5d0fe', '#7dd3fc'];
    const cometColors = ['#e0f2fe', '#38bdf8', '#818cf8', '#c084fc', '#ffffff'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((window.innerWidth * window.innerHeight) / 1000);
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        stars.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 1.6 + 0.3,
          speed: Math.random() * 0.3 + 0.06,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: (Math.random() - 0.5) * 0.02,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    // Mouse & Touch Event Listeners
    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.active = true;
      }
    };

    const onMouseLeave = () => {
      mouse.active = false;
    };

    const onClick = (e: MouseEvent) => {
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 180,
        opacity: 0.8,
      });

      // Spawn burst of stardust
      for (let i = 0; i < 24; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1.5;
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          decay: Math.random() * 0.03 + 0.015,
          size: Math.random() * 2.5 + 1,
          color: cometColors[Math.floor(Math.random() * cometColors.length)],
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('click', onClick);
    window.addEventListener('resize', resize);

    resize();

    // Main 60 FPS Render Loop
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep space ambient radial gradient
      const bgGrad = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.5,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        Math.max(canvas.width, canvas.height) * 0.75
      );
      bgGrad.addColorStop(0, 'rgba(10, 12, 24, 0.45)');
      bgGrad.addColorStop(1, 'rgba(2, 2, 5, 0.9)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse interpolation
      if (mouse.prevX === -1000) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
        mouse.prevX = mouse.targetX;
        mouse.prevY = mouse.targetY;
      } else {
        mouse.vx = mouse.targetX - mouse.x;
        mouse.vy = mouse.targetY - mouse.y;
        mouse.x += mouse.vx * 0.45;
        mouse.y += mouse.vy * 0.45;
      }

      const mouseSpeed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);

      // Add to comet trail if mouse is active and moving
      if (mouse.active && (mouseSpeed > 0.4 || trail.length === 0)) {
        trail.unshift({
          x: mouse.x,
          y: mouse.y,
          vx: mouse.vx,
          vy: mouse.vy,
          age: 0,
          maxAge: 32,
          size: Math.min(14, Math.max(4, mouseSpeed * 0.8)),
        });

        // Spawn comet dust / ion particles streaming backwards from movement
        const spawnCount = Math.min(5, Math.floor(mouseSpeed * 0.3) + 1);
        for (let i = 0; i < spawnCount; i++) {
          const spreadAngle = (Math.random() - 0.5) * 0.9;
          const backwardAngle = Math.atan2(-mouse.vy, -mouse.vx) + spreadAngle;
          const pSpeed = Math.random() * (mouseSpeed * 0.2 + 2) + 0.5;

          particles.push({
            x: mouse.x + (Math.random() - 0.5) * 6,
            y: mouse.y + (Math.random() - 0.5) * 6,
            vx: Math.cos(backwardAngle) * pSpeed,
            vy: Math.sin(backwardAngle) * pSpeed,
            alpha: Math.random() * 0.7 + 0.3,
            decay: Math.random() * 0.035 + 0.02,
            size: Math.random() * 2.2 + 0.8,
            color: cometColors[Math.floor(Math.random() * cometColors.length)],
          });
        }
      }

      // Update trail points
      for (let i = trail.length - 1; i >= 0; i--) {
        trail[i].age++;
        if (trail[i].age > trail[i].maxAge) {
          trail.splice(i, 1);
        }
      }

      // 1. Draw Gravitational Lensing / Spacetime Warped Stars
      const warpRadius = 180;
      const warpStrength = 28;

      stars.forEach((star) => {
        // Natural upward drift
        star.baseY -= star.speed;
        star.opacity += star.twinkleSpeed;
        if (star.opacity < 0.15 || star.opacity > 0.95) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        if (star.baseY < 0) {
          star.baseY = canvas.height;
          star.baseX = Math.random() * canvas.width;
        }

        // Calculate gravitational deflection from comet cursor
        let renderX = star.baseX;
        let renderY = star.baseY;

        if (mouse.active) {
          const dx = star.baseX - mouse.x;
          const dy = star.baseY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < warpRadius && dist > 0.1) {
            // Gravitational lens deflection curve: pushing stars outward around the mass
            const factor = Math.sin((dist / warpRadius) * Math.PI);
            const deflection = (1 - dist / warpRadius) * warpStrength * factor;
            renderX += (dx / dist) * deflection;
            renderY += (dy / dist) * deflection;
          }
        }

        // Shockwaves deflection
        shockwaves.forEach((sw) => {
          const dx = star.baseX - sw.x;
          const dy = star.baseY - sw.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const diff = Math.abs(dist - sw.radius);
          if (diff < 30 && dist > 0) {
            const push = (1 - diff / 30) * 15 * sw.opacity;
            renderX += (dx / dist) * push;
            renderY += (dy / dist) * push;
          }
        });

        // Draw the warped star
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(renderX, renderY, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw Shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += 5.5;
        sw.opacity -= 0.02;

        if (sw.opacity <= 0 || sw.radius > sw.maxRadius) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = `rgba(56, 189, 248, ${sw.opacity * 0.6})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = `rgba(192, 132, 252, ${sw.opacity * 0.3})`;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, Math.max(0, sw.radius - 8), 0, Math.PI * 2);
        ctx.stroke();
      }

      // 3. Draw Comet Trail (Plasma Ribbon)
      if (trail.length > 2) {
        // Outer diffused ion glow
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 0; i < trail.length - 1; i++) {
          const p1 = trail[i];
          const p2 = trail[i + 1];
          const progress = 1 - p1.age / p1.maxAge;

          // Glowing Outer Tail
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${progress * 0.45})`;
          ctx.lineWidth = p1.size * 2.2 * progress;
          ctx.stroke();

          // Intense Core Streamer
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${progress * 0.8})`;
          ctx.lineWidth = Math.max(1, p1.size * 0.8 * progress);
          ctx.stroke();
        }
      }

      // 4. Draw Stardust / Ice Crystals Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. Draw Comet Nucleus (Comet Head)
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        // Outer halo
        const haloGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 35);
        haloGrad.addColorStop(0, 'rgba(56, 189, 248, 0.4)');
        haloGrad.addColorStop(0.5, 'rgba(129, 140, 248, 0.15)');
        haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = haloGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 35, 0, Math.PI * 2);
        ctx.fill();

        // Inner glowing coma
        const comaGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 12);
        comaGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        comaGrad.addColorStop(0.4, 'rgba(186, 230, 253, 0.7)');
        comaGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = comaGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 12, 0, Math.PI * 2);
        ctx.fill();

        // Nucleus core
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('click', onClick);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};
