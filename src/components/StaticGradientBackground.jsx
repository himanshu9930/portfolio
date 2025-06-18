import React from 'react';

const StaticGradientBackground = () => (
  <div
    className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    style={{
      background: `
        linear-gradient(180deg,
          #181c2b 0%,
          #1a2340 35%,
          #22305a 65%,
          #2a3c6e 85%,
          #31467e 100%
        ),
        radial-gradient(ellipse at 60% 100%, rgba(60,120,255,0.28) 0%, rgba(0,0,0,0) 80%)
      `,
      boxShadow: 'inset 0 0 220px 40px #000',
      transition: 'background 0.5s',
    }}
  />
);

export default StaticGradientBackground; 