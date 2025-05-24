import React from 'react';
import { motion } from 'framer-motion';

const profileImg = 'https://ui-avatars.com/api/?name=Himanshu+Sharma&background=0D8ABC&color=fff&size=256';

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative flex items-center justify-center min-h-[80vh] py-16 text-center overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl mx-auto">
        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt="Himanshu Sharma profile"
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover bg-white"
            style={{ boxShadow: '0 8px 32px 0 rgba(13,138,188,0.10)' }}
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Himanshu Sharma</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#a18cd1] mb-4">Turning Data Into Strategy</h2>
          <p className="max-w-xl text-white/90 mb-8">
            Innovative data-driven storyteller with 4+ years experience in analytics consulting and data science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="px-6 py-2 bg-[#6a82fb] text-white rounded shadow hover:bg-[#a18cd1] transition font-semibold" onClick={e => {e.preventDefault(); document.getElementById('projects').scrollIntoView({behavior:'smooth'});}}>View Projects</a>
            <a href="#contact" className="px-6 py-2 bg-white/10 border border-[#a18cd1] text-[#a18cd1] rounded shadow hover:bg-[#a18cd1]/20 transition font-semibold" onClick={e => {e.preventDefault(); document.getElementById('contact').scrollIntoView({behavior:'smooth'});}}>Contact Me</a>
            <a href={process.env.PUBLIC_URL + '/Himanshu_Sharma_Resume.pdf'} download className="px-6 py-2 bg-black text-white rounded shadow hover:bg-gray-800 transition font-semibold">Download Resume</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero; 