import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const profileImg = process.env.PUBLIC_URL + '/assets/profile.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="w-full h-screen bg-[#121212]/50 relative flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full px-4">
        {/* Left: Photo with static glow */}
        <motion.div
          className="flex-1 flex flex-col items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-400 to-purple-400 blur-2xl opacity-60 z-0"></div>
          <img src={profileImg} alt="Himanshu Sharma professional portrait" loading="lazy" className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full object-cover shadow-2xl bg-white relative z-10" />
          {/* Social Media Icons - now directly below the image */}
          <div className="flex gap-3 sm:gap-4 justify-center mt-4 sm:mt-6 z-20">
            <motion.a
              href="https://www.linkedin.com/in/himanshu-sharma9930/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-cyan-400 bg-transparent flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="text-lg sm:text-xl" />
            </motion.a>
            <motion.a
              href="https://github.com/himanshu9930"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-cyan-400 bg-transparent flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-lg sm:text-xl" />
            </motion.a>
            <motion.a
              href="mailto:himanshu.sharma9930@gmail.com"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-cyan-400 bg-transparent flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="text-lg sm:text-xl" />
            </motion.a>
          </div>
        </motion.div>
        {/* Right: Text & Buttons */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left w-full md:pl-0 md:pr-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-sfpro mb-2 leading-tight bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>
            Himanshu Sharma
          </h1>
          {/* New By-line */}
          <h2 className="text-lg sm:text-2xl md:text-4xl font-medium text-blue-100 mb-4 font-sfpro text-center md:text-left">
            Turning information into insight, and insight into action.
          </h2>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 font-helvetica mt-2 w-full sm:w-auto">
            <a href="#projects" className="px-6 sm:px-7 py-3 sm:py-4 rounded-lg bg-white text-[#0a0a23] font-semibold shadow transition text-base sm:text-lg min-w-[160px] sm:min-w-[180px] text-center">View My Work</a>
            <a href="#contact" className="px-6 sm:px-7 py-3 sm:py-4 rounded-lg bg-white text-[#0a0a23] font-semibold shadow hover:bg-blue-50 transition text-base sm:text-lg border border-blue-200 min-w-[160px] sm:min-w-[180px] text-center">Let's Talk</a>
            <a href="https://drive.google.com/file/d/1vTIPxtVyDOQnfDZDdBNpaGABHsO5CtQG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-6 sm:px-7 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 text-[#0a0a23] font-semibold shadow hover:from-cyan-300 hover:to-blue-300 transition text-base sm:text-lg min-w-[160px] sm:min-w-[180px] text-center">My Resume</a>
          </div>
        </motion.div>
      </div>
      {/* Scroll Down Cue */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-16 sm:bottom-24 flex flex-col items-center font-helvetica"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7, ease: 'easeOut' }}
      >
        <span className="animate-bounce text-cyan-300 text-2xl sm:text-3xl">↓</span>
      </motion.div>
    </section>
  );
};

export default HeroSection; 