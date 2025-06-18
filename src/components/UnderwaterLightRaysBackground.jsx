import React, { useEffect, useRef } from 'react';

const UnderwaterLightRaysBackground = () => {
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

    // Light ray parameters
    const rays = [];
    const rayCount = 8;
    let time = 0;

    // Create light rays
    for (let i = 0; i < rayCount; i++) {
      rays.push({
        x: Math.random() * canvas.width,
        y: -100,
        width: Math.random() * 80 + 40,
        speed: Math.random() * 0.5 + 0.3,
        opacity: Math.random() * 0.4 + 0.1,
        color: ['#58b1f6', '#91c4ff', '#a855f7', '#ffffff', '#94a3b8'][Math.floor(Math.random() * 5)],
        angle: Math.random() * 0.3 - 0.15, // Slight angle variation
        waveOffset: Math.random() * Math.PI * 2
      });
    }

    // Draw underwater light rays
    const drawLightRays = () => {
      // Clear canvas with underwater fade effect
      ctx.fillStyle = 'rgba(12, 26, 36, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rays.forEach((ray, index) => {
        ctx.save();
        
        // Move ray down
        ray.y += ray.speed;
        
        // Reset ray when it goes off screen
        if (ray.y > canvas.height + 200) {
          ray.y = -100;
          ray.x = Math.random() * canvas.width;
          ray.color = ['#58b1f6', '#91c4ff', '#a855f7', '#ffffff', '#94a3b8'][Math.floor(Math.random() * 5)];
        }

        // Add wave motion
        const waveX = Math.sin(time * 0.002 + ray.waveOffset) * 20;
        const currentX = ray.x + waveX;
        
        // Create gradient for light ray
        const gradient = ctx.createLinearGradient(
          currentX - ray.width/2, ray.y,
          currentX + ray.width/2, ray.y + canvas.height
        );
        
        gradient.addColorStop(0, `${ray.color}00`); // Transparent at top
        gradient.addColorStop(0.1, `${ray.color}${Math.floor(ray.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${ray.color}${Math.floor(ray.opacity * 0.7 * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${ray.color}00`); // Transparent at bottom

        // Draw light ray with slight angle
        ctx.translate(currentX, ray.y);
        ctx.rotate(ray.angle);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(-ray.width/2, 0, ray.width, canvas.height + 200);
        
        // Add subtle glow effect
        ctx.shadowColor = ray.color;
        ctx.shadowBlur = 20;
        ctx.globalAlpha = 0.3;
        ctx.fillRect(-ray.width/2, 0, ray.width, canvas.height + 200);
        
        ctx.restore();
      });

      // Add floating particles for underwater effect
      for (let i = 0; i < 15; i++) {
        const x = (time * 0.1 + i * 100) % canvas.width;
        const y = (time * 0.05 + i * 50) % canvas.height;
        const size = Math.sin(time * 0.01 + i) * 2 + 3;
        const opacity = Math.sin(time * 0.02 + i * 0.5) * 0.3 + 0.1;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      }
    };

    // Animation loop
    const animate = () => {
      drawLightRays();
      time += 1;
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

export default UnderwaterLightRaysBackground; 