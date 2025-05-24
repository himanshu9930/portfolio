import React from 'react';
import { FaPython, FaDatabase, FaTable, FaAws, FaRProject, FaFlask, FaCloud, FaRobot, FaBrain, FaGitAlt, FaJira, FaDocker } from 'react-icons/fa';
import { SiJupyter, SiPandas, SiNumpy, SiMysql, SiPostgresql, SiTensorflow, SiScikitlearn, SiGooglecloud, SiAlteryx, SiTableau, SiDatabricks } from 'react-icons/si';
import { motion } from 'framer-motion';
import purdueLogo from '../assets/purdue.png';
import pesuLogo from '../assets/pesu.png';

const aboutDescription = `I'm a data-driven strategist and storyteller with a passion for translating complex information into actionable insights. At Purdue's Daniels School of Business, I've sharpened my expertise in predictive analytics, business intelligence, and machine learning. Prior to grad school, I spent nearly four years at ZS Associates, where I delivered $20M in incremental revenue and $5M in cost savings through advanced analytics, scalable ETL pipelines, and interactive dashboards. Whether it's building models, mapping customer journeys, or automating insights, I bring clarity to complexity and power business decisions with precision.`;

const education = [
  {
    school: 'Purdue University',
    degree: 'MS in Business Analytics',
    details: 'Daniels School of Business – Aug 2025',
  },
  {
    school: 'PES University',
    degree: 'BTech in Electronics & Communication',
    details: 'Bangalore, India – Aug 2021',
  },
];

const skillCategories = [
  {
    label: 'Programming',
    color: 'bg-blue-400/10',
    skills: [
      { name: 'Python', icon: <FaPython className="text-yellow-300" /> },
      { name: 'R', icon: <FaRProject className="text-blue-400" /> },
      { name: 'SQL', icon: <FaDatabase className="text-blue-300" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
      { name: 'Pandas', icon: <SiPandas className="text-purple-300" /> },
      { name: 'NumPy', icon: <SiNumpy className="text-yellow-200" /> },
    ],
  },
  {
    label: 'Tools / BI',
    color: 'bg-white/10',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
      { name: 'Jupyter', icon: <SiJupyter className="text-orange-300" /> },
      { name: 'SAS EM', icon: <FaTable className="text-blue-200" /> },
      { name: 'Excel', icon: <FaTable className="text-green-300" /> },
      { name: 'Tableau', icon: <SiTableau className="text-blue-200" /> },
      { name: 'Power BI', icon: <FaTable className="text-yellow-400" /> },
      { name: 'Microsoft Office', icon: <FaTable className="text-blue-100" /> },
    ],
  },
  {
    label: 'Machine Learning',
    color: 'bg-blue-400/10',
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-300" /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn className="text-yellow-200" /> },
      { name: 'Predictive Modeling' },
      { name: 'K-means Clustering' },
      { name: 'Regression Analysis' },
      { name: 'Tree Based Models' },
      { name: 'Machine Learning' },
    ],
  },
  {
    label: 'Cloud / Infrastructure',
    color: 'bg-white/10',
    skills: [
      { name: 'AWS', icon: <FaAws className="text-yellow-200" /> },
      { name: 'GCP', icon: <SiGooglecloud className="text-blue-200" /> },
      { name: 'Cloud Computing', icon: <FaCloud className="text-blue-100" /> },
    ],
  },
  {
    label: 'Big Data',
    color: 'bg-blue-400/10',
    skills: [
      { name: 'Spark', icon: <FaTable className="text-yellow-200" /> },
      { name: 'Databricks', icon: <SiDatabricks className="text-pink-300" /> },
      { name: 'Hadoop', icon: <FaTable className="text-yellow-300" /> },
    ],
  },
  {
    label: 'Data Preparation / BI',
    color: 'bg-white/10',
    skills: [
      { name: 'Alteryx', icon: <SiAlteryx className="text-blue-200" /> },
      { name: 'ETL/ELT Pipelining' },
    ],
  },
  {
    label: 'Core Skills',
    color: 'bg-blue-400/10',
    skills: [
      { name: 'Data Analysis' },
      { name: 'Data Science' },
      { name: 'Statistical Analysis' },
      { name: 'Exploratory Data Analysis' },
      { name: 'Data Mining' },
      { name: 'Data Processing' },
      { name: 'Business Analytics' },
      { name: 'Data Modeling', icon: <FaBrain className="text-purple-200" /> },
    ],
  },
  {
    label: 'Business / Strategy',
    color: 'bg-white/10',
    skills: [
      { name: 'Marketing Analytics' },
      { name: 'Healthcare Analytics' },
      { name: 'Project Planning' },
      { name: 'Strategic Communications' },
      { name: 'Project Management' },
      { name: 'Strategy Consulting' },
      { name: 'Cost Reduction' },
    ],
  },
  {
    label: 'Supply Chain / Strategy',
    color: 'bg-blue-400/10',
    skills: [
      { name: 'Value Chain Optimization' },
    ],
  },
  {
    label: 'Applied Analytics',
    color: 'bg-white/10',
    skills: [
      { name: 'Sports Analytics' },
    ],
  },
  {
    label: 'AI / Emerging Tech',
    color: 'bg-blue-400/10',
    skills: [
      { name: 'Agentic AI', icon: <FaRobot className="text-blue-200" /> },
      { name: 'LLMs' },
      { name: 'Prompt Engineering' },
    ],
  },
  {
    label: 'Project Management',
    color: 'bg-white/10',
    skills: [
      { name: 'Agile (Scrum, Kanban)' },
      { name: 'Jira', icon: <FaJira className="text-blue-400" /> },
    ],
  },
  {
    label: 'DevOps / Deployment',
    color: 'bg-blue-400/10',
    skills: [
      { name: 'Docker', icon: <FaDocker className="text-blue-300" /> },
    ],
  },
  {
    label: 'Experimentation',
    color: 'bg-white/10',
    skills: [
      { name: 'A/B Testing', icon: <FaFlask className="text-pink-200" /> },
    ],
  },
];

const AboutSection = () => (
  <motion.section id="about"
    className="w-full py-24 px-4 mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className="bg-black/20 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-12">
      <h2 className="text-6xl md:text-8xl mb-8 text-center font-sfpro bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">About Me</h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-10">
        {/* Left: About Paragraph */}
        <div className="flex-1 text-white text-lg leading-relaxed max-w-xl mb-6 md:mb-0">
          {aboutDescription}
        </div>
        {/* Right: Education Block */}
        <div className="flex-1 flex items-start justify-center">
          <div className="bg-white/5 rounded-lg p-4 text-slate-300 border border-white/10 w-full max-w-md h-full flex flex-col transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-white">Education</h3>
            <ul className="space-y-5">
              {/* Purdue University */}
              <li className="flex items-center gap-4">
                <img src={purdueLogo} alt="Purdue University Logo" className="w-12 h-12 object-contain rounded bg-white/10 p-1" />
                <div>
                  <div className="font-bold text-blue-100">Purdue University</div>
                  <div className="text-base">MS in Business Analytics</div>
                  <div className="text-xs text-slate-400 italic">Daniels School of Business – Aug 2025</div>
                </div>
              </li>
              {/* PES University */}
              <li className="flex items-center gap-4">
                <img src={pesuLogo} alt="PES University Logo" className="w-12 h-12 object-contain rounded bg-white/10 p-1" />
                <div>
                  <div className="font-bold text-blue-100">PES University</div>
                  <div className="text-base">BTech in Electronics & Communication</div>
                  <div className="text-xs text-slate-400 italic">Bangalore, India – Aug 2021</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Skills Grid */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-white mb-4">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {skillCategories.map(category => (
            <React.Fragment key={category.label}>
              {category.skills.map(skill => (
                <motion.span
                  whileHover={{ scale: 1.12, boxShadow: '0 0 32px 4px #60a5fa, 0 0 8px 2px #a5b4fc' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  key={skill.name}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium ${category.color} text-white border border-white/10 whitespace-nowrap cursor-pointer transition-shadow duration-300`}
                >
                  {skill.icon && <span className="text-lg">{skill.icon}</span>}
                  {skill.name}
                </motion.span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

export default AboutSection; 