import React from 'react';
import { FaPython, FaDatabase, FaTable, FaAws, FaRProject, FaFlask, FaChartBar, FaCloud, FaRobot, FaBolt, FaBrain } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'Tableau', icon: <FaTable /> },
  { name: 'Excel', icon: <FaTable /> },
  { name: 'R', icon: <FaRProject /> },
  { name: 'A/B Testing', icon: <FaFlask /> },
  { name: 'Agentic AI', icon: <FaRobot /> },
  { name: 'Power BI', icon: <FaChartBar /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Spark', icon: <FaBolt /> },
  { name: 'Databricks', icon: <FaCloud /> },
  { name: 'Data Modeling', icon: <FaBrain /> },
];

const aboutDescription = "Data & strategy professional passionate about transforming analytics into business impact. Experienced in predictive modeling, BI, and consulting.";

const AboutSection = () => (
  <motion.section id="about"
    className="w-full py-24 px-4 mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className="bg-black/20 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-12 transition-shadow hover:shadow-[0_0_40px_0_rgba(59,130,246,0.4)]">
      <h2 className="text-6xl md:text-8xl mb-4 text-center font-sfpro bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">About Me</h2>
      <p className="text-lg text-center mb-10 text-blue-100 max-w-2xl mx-auto font-helvetica">{aboutDescription}</p>
      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } }
        }}
      >
        {skills.map(skill => (
          <motion.span
            key={skill.name}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-cyan-300 font-semibold text-base shadow hover:bg-cyan-50 border border-cyan-100 transition cursor-pointer"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <span className="text-lg">{skill.icon}</span>
            {skill.name}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default AboutSection; 