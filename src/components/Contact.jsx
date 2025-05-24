import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => (
  <motion.section
    id="contact"
    className="flex justify-center items-center py-20 px-4 text-center"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: 'easeOut' }}
    viewport={{ once: true }}
  >
    <div className="w-full max-w-xl">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Contact</h2>
      <p className="text-white/90 mb-6">Let's connect and collaborate.</p>
      <div className="flex flex-col gap-4 items-center">
        <a href="mailto:sharm991@purdue.edu" className="text-[#a18cd1] font-semibold hover:underline">sharm991@purdue.edu</a>
        <a href="https://www.linkedin.com/in/himanshu-sharma9930" target="_blank" rel="noopener noreferrer" className="text-[#a18cd1] font-semibold hover:underline">LinkedIn</a>
      </div>
    </div>
  </motion.section>
);

export default Contact; 