import React, { useEffect, useRef } from 'react';

const FlowFieldBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Flow field parameters
    const particles = [];
    const particleCount = 100;
    const noiseScale = 0.005;
    let time = 0;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 0,
        vy: 0,
        life: Math.random() * 0.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    // Simple noise function (simplified perlin noise)
    const noise = (x, y, t) => {
      const n = Math.sin(x * 0.1 + t) * Math.cos(y * 0.1 + t * 0.5) * 
                Math.sin((x + y) * 0.05 + t * 0.3);
      return n * 0.5 + 0.5;
    };

    // Get flow direction at a point
    const getFlowDirection = (x, y, t) => {
      const angle = noise(x * noiseScale, y * noiseScale, t) * Math.PI * 4;
      return {
        x: Math.cos(angle) * 0.5,
        y: Math.sin(angle) * 0.5
      };
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(12, 26, 36, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        // Get flow direction
        const flow = getFlowDirection(particle.x, particle.y, time);
        
        // Update velocity with flow
        particle.vx += flow.x * 0.1;
        particle.vy += flow.y * 0.1;
        
        // Apply friction
        particle.vx *= 0.98;
        particle.vy *= 0.98;
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(88, 177, 246, ${particle.opacity * particle.life})`;
        ctx.fill();
        
        // Draw subtle trail
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x - particle.vx * 3, particle.y - particle.vy * 3);
        ctx.strokeStyle = `rgba(145, 196, 255, ${particle.opacity * particle.life * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      time += 0.01;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -10 }}
    />
  );
};

export default FlowFieldBackground; 