import React from 'react';
import { motion } from 'framer-motion';

const profileImg = process.env.PUBLIC_URL + '/assets/profile.jpg';

const HeroSection = () => (
  <section id="home" className="w-full min-h-[90vh] flex flex-col justify-center items-center relative">
    <div className="backdrop-blur-md rounded-xl shadow-lg p-8 md:p-16 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
      {/* Left: Text & Buttons */}
      <motion.div
        className="flex-1 flex flex-col items-start justify-center text-left md:items-start md:text-left w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="text-xl md:text-2xl text-cyan-200 font-light mb-2 tracking-wide font-sfpro">Hello, I&apos;m</span>
        <h1 className="text-6xl md:text-8xl font-sfpro mb-4 leading-tight bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>Himanshu Sharma</h1>
        <h2 className="text-2xl md:text-4xl font-medium text-blue-100 mb-8 font-sfpro">Transforming analytics into business impact</h2>
        <motion.div
          className="flex gap-4 mb-10 font-helvetica"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
        >
          <a href="#projects" className="px-7 py-4 rounded-lg bg-white text-[#0a0a23] font-semibold shadow transition text-lg">View My Work</a>
          <a href="#contact" className="px-7 py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 text-[#0a0a23] font-semibold shadow hover:from-cyan-300 hover:to-blue-300 transition text-lg">Let's Collaborate</a>
        </motion.div>
      </motion.div>
      {/* Right: Photo with static glow */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end items-center relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
      >
        <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-400 to-purple-400 blur-2xl opacity-60 z-0"></div>
        <img src={profileImg} alt="Himanshu Sharma professional portrait" loading="lazy" className="w-56 h-56 md:w-80 md:h-80 rounded-full object-cover shadow-2xl bg-white relative z-10" />
      </motion.div>
    </div>
    {/* Scroll Down Cue */}
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center font-helvetica"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.7, ease: 'easeOut' }}
    >
      <span className="animate-bounce text-cyan-300 text-3xl">↓</span>
      <span className="text-xs text-cyan-200 mt-1">Scroll Down</span>
    </motion.div>
  </section>
);

export default HeroSection; 