import React from 'react';
import { FaLinkedin, FaGithub, FaKaggle, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contactDescription = "Let's connect! Reach out for collaborations, opportunities, or just to say hello.";

const ContactSection = () => (
  <motion.section className="w-full py-24 px-4 mx-auto" id="contact">
    <div className="bg-black/20 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-12 transition-shadow hover:shadow-[0_0_40px_0_rgba(59,130,246,0.4)]">
      <h2 className="text-6xl md:text-8xl mb-4 text-center font-sfpro bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">Contact Me</h2>
      <p className="text-lg text-center mb-10 text-blue-100 max-w-2xl mx-auto font-helvetica">{contactDescription}</p>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Form */}
        <motion.form
          className="flex-1 bg-white/5 rounded-xl shadow p-8 flex flex-col gap-4 border border-white/10 text-white/90 hover:shadow-[0_0_40px_0_rgba(59,130,246,0.4)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <label htmlFor="contact-name" className="mb-1 text-base font-medium text-white">Name</label>
          <input id="contact-name" type="text" placeholder="Name" className="px-4 py-3 rounded-lg bg-white/90 text-black placeholder:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
          <label htmlFor="contact-email" className="mb-1 text-base font-medium text-white">Email</label>
          <input id="contact-email" type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-white/90 text-black placeholder:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
          <label htmlFor="contact-message" className="mb-1 text-base font-medium text-white">Message</label>
          <textarea id="contact-message" placeholder="Message" rows={5} className="px-4 py-3 rounded-lg bg-white/90 text-black placeholder:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
          <button type="submit" className="mt-2 px-6 py-3 rounded-lg bg-cyan-400 text-[#0a0a23] font-semibold shadow hover:bg-cyan-300 transition">Send Message</button>
        </motion.form>
        {/* Contact Details */}
        <motion.div
          className="flex-1 flex flex-col gap-6 justify-center text-white/90"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          {[
            <div className="flex items-center gap-5 text-blue-100 text-lg md:text-xl" key="phone"><FaPhone className="text-cyan-300 text-2xl md:text-3xl" /> (765) 767-3149</div>,
            <div className="flex items-center gap-5 text-blue-100 text-lg md:text-xl" key="address"><FaMapMarkerAlt className="text-cyan-300 text-2xl md:text-3xl" /> 120 N 3rd St, Lafayette, IN 47901</div>,
            <div className="flex items-center gap-5 text-blue-100 text-lg md:text-xl" key="email"><FaEnvelope className="text-cyan-300 text-2xl md:text-3xl" /> sharm991@purdue.edu</div>,
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >{item}</motion.div>
          ))}
          <div className="flex gap-8 mt-6">
            <a href="https://www.linkedin.com/in/himanshu-sharma9930" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-blue-100 text-3xl md:text-4xl"><FaLinkedin /></a>
            <a href="#" className="text-cyan-300 hover:text-blue-100 text-3xl md:text-4xl"><FaGithub /></a>
            <a href="#" className="text-cyan-300 hover:text-blue-100 text-3xl md:text-4xl"><FaKaggle /></a>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default ContactSection; 