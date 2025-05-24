import React from 'react';
import { FaAward, FaCertificate, FaTrophy, FaCloud, FaTable } from 'react-icons/fa';
import { motion } from 'framer-motion';

const certifications = [
  { name: 'AI-900 (Microsoft Certified)', icon: <FaCertificate className="text-blue-400" /> },
  { name: 'Tableau Desktop Specialist', icon: <FaTable className="text-purple-400" /> },
  { name: 'AWS Certified Cloud Practitioner', icon: <FaCloud className="text-yellow-300" /> },
];

const achievements = [
  { name: 'Winner + Best Visualization – Crossroads Classic Analytics Challenge', icon: <FaTrophy className="text-pink-400" /> },
  { name: 'Future Edelman Award – Purdue University', icon: <FaAward className="text-green-400" /> },
];

const certDescription = "Certifications and awards that recognize my expertise in analytics, cloud, and data visualization.";

const CertificationsSection = () => (
  <motion.section id="certifications"
    className="w-full py-24 px-4 mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-12 transition-shadow hover:shadow-[0_0_40px_0_rgba(59,130,246,0.4)]">
      <h2 className="text-6xl md:text-8xl mb-4 text-center font-sfpro bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">Certifications & Achievements</h2>
      <p className="text-lg text-center mb-10 text-blue-100 max-w-2xl mx-auto font-helvetica">{certDescription}</p>
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-cyan-300 mb-4 text-center">Certifications</h3>
        <motion.div
          className="flex flex-wrap gap-6 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          {certifications.map(cert => (
            <motion.div
              key={cert.name}
              className="flex items-center gap-3 bg-black/30 rounded-xl px-6 py-4 shadow hover:scale-105 hover:bg-cyan-50/10 hover:shadow-[0_0_40px_0_rgba(59,130,246,0.4)] transition-transform cursor-pointer min-w-[220px] border border-white/10 text-white/90"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <span className="text-2xl">{cert.icon}</span>
              <span className="font-medium text-blue-100 text-base">{cert.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-cyan-300 mb-4 text-center">Achievements</h3>
        <motion.div
          className="flex flex-wrap gap-6 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          {achievements.map(ach => (
            <motion.div
              key={ach.name}
              className="flex items-center gap-3 bg-black/30 rounded-xl px-6 py-4 shadow hover:scale-105 hover:bg-cyan-50/10 hover:shadow-[0_0_40px_0_rgba(59,130,246,0.4)] transition-transform cursor-pointer min-w-[220px] border border-white/10 text-white/90"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <span className="text-2xl">{ach.icon}</span>
              <span className="font-medium text-blue-100 text-base">{ach.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default CertificationsSection; 