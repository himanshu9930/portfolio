import React, { useEffect, useRef } from 'react';

const GeometricPatternBackground = () => {
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

    let time = 0;

    // Draw geometric pattern
    const drawPattern = () => {
      const patternSize = 120;
      const cols = Math.ceil(canvas.width / patternSize) + 2;
      const rows = Math.ceil(canvas.height / patternSize) + 2;

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(12, 26, 36, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw geometric shapes
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * patternSize;
          const y = j * patternSize;
          
          // Alternate between different shapes
          const shapeType = (i + j) % 3;
          const opacity = 0.03 + Math.sin(time * 0.001 + i * 0.5 + j * 0.3) * 0.02;
          
          ctx.save();
          ctx.globalAlpha = opacity;
          
          switch (shapeType) {
            case 0:
              // Draw circles
              ctx.beginPath();
              ctx.arc(x + patternSize/2, y + patternSize/2, patternSize/4, 0, Math.PI * 2);
              ctx.fillStyle = '#58b1f6';
              ctx.fill();
              break;
              
            case 1:
              // Draw squares
              ctx.fillStyle = '#91c4ff';
              ctx.fillRect(x + patternSize/4, y + patternSize/4, patternSize/2, patternSize/2);
              break;
              
            case 2:
              // Draw triangles
              ctx.beginPath();
              ctx.moveTo(x + patternSize/2, y + patternSize/4);
              ctx.lineTo(x + patternSize/4, y + patternSize * 3/4);
              ctx.lineTo(x + patternSize * 3/4, y + patternSize * 3/4);
              ctx.closePath();
              ctx.fillStyle = '#4f46e5';
              ctx.fill();
              break;
          }
          
          ctx.restore();
        }
      }
    };

    // Animation loop
    const animate = () => {
      drawPattern();
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

export default GeometricPatternBackground; 