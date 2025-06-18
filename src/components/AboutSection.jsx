import React, { useState } from 'react';
import { FaCode, FaServer, FaChartBar, FaIndustry, FaCogs, FaBrain, FaDatabase, FaRobot } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';
import purdueLogo from '../assets/purdue.png';
import pesuLogo from '../assets/pesu.png';

const skillCategories = [
  {
    title: 'Domain Expertise',
    icon: <FaIndustry className="text-cyan-400" />,
    skills: ['Healthcare Analytics', 'Marketing Analytics', 'Strategy Consulting', 'Supply Chain Optimization', 'Customer Journeys', 'Sports Analytics', 'A/B Testing', 'GTM Strategy']
  },
  {
    title: 'Business Intelligence',
    icon: <FaChartBar className="text-cyan-400" />,
    skills: ['EDA', 'Excel', 'Microsoft Suite', 'Tableau', 'PowerBI', 'Matplotlib', 'GGPlot', 'Dashboard Design', 'KPI Reporting', 'Data Storytelling']
  },
  {
    title: 'Programming',
    icon: <FaCode className="text-cyan-400" />,
    skills: ['Python', 'R', 'MySQL', 'PostgreSQL', 'PySpark', 'Git', 'Jupyter']
  },
  {
    title: 'Data Analytics',
    icon: <FaBrain className="text-cyan-400" />,
    skills: ['EDA', 'Data Wrangling', 'Statistical Analysis', 'Pandas', 'NumPy', 'Data Modeling', 'Feature Engineering']
  },
  {
    title: 'Data Engineering & DB Infrastructure',
    icon: <FaDatabase className="text-cyan-400" />,
    skills: ['ETL/ELT Pipelining', 'RapidMiner', 'Databricks', 'Spark', 'AWS S3', 'AWS Redshift', 'Snowflake', 'GCP', 'Azure']
  },
  {
    title: 'AI & Machine Learning',
    icon: <FaRobot className="text-cyan-400" />,
    skills: ['Prompt Engineering', 'RAGs', 'LangChain', 'Agentic AI', 'Machine Learning', 'Neural Networks', 'Predictive Modelling', 'Time Series Analysis', 'Tree-Based Models', 'NLP', 'BERT']
  }
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('journey');

  return (
    <motion.section id="about"
      className="w-full py-24 bg-[#1a1a1a]/30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl md:text-8xl mb-4 text-center font-sfpro bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent leading-[1.3] pb-2">About Me</h2>
        
        {/* By-line */}
        <p className="text-slate-300 text-base md:text-lg text-center mt-4 mb-6">
          Here's a glimpse into where I've been, what I've learned, and the tools I bring to the table.
        </p>

        {/* Toggle UI */}
        <div className="flex justify-center mb-12">
          <div className="flex rounded-full overflow-hidden border border-cyan-700 transition-all">
            <button
              onClick={() => setActiveTab('journey')}
              className={`px-8 py-3 text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === 'journey'
                  ? 'bg-cyan-700 text-white'
                  : 'bg-transparent text-cyan-400 hover:bg-cyan-700/10'
              }`}
            >
              My Journey
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-8 py-3 text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === 'skills'
                  ? 'bg-cyan-700 text-white'
                  : 'bg-transparent text-cyan-400 hover:bg-cyan-700/10'
              }`}
            >
              My Skills
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        <AnimatePresence mode="wait">
          {activeTab === 'journey' ? (
            <motion.div
              key="journey"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* My Journey Content */}
              <div className="max-w-6xl mx-auto text-left mb-16">
                <div className="text-slate-200 space-y-6 text-lg leading-relaxed">
                  <p>
                    I'm a data analyst who brings strategy and storytelling to the world of analytics. At ZS Associates, I spent over three years helping pharmaceutical clients solve high-stakes business problems, from optimizing Salesforce size to mapping customer journeys and launching go-to-market strategies. Whether I was analyzing promotional data or building dashboards, I focused on helping teams make faster, smarter decisions rooted in data.
                  </p>
                  <p>
                    To deepen my technical foundation, I joined Purdue University's Daniels School of Business to pursue a Master's in Business Analytics and Information Management. Here, I've explored everything from machine learning to data visualization to marketing analytics. Along the way, I've been fortunate to win the Crossroads Classic Analytics Challenge and the Future Edelman Impact Award, both recognizing my ability to turn complex datasets into meaningful business actions for real-world partners.
                  </p>
                  <p>
                    I believe great analytics doesn't stop at insight, it inspires action. To me, data storytelling is about finding meaning in chaos, shaping it into a narrative that decision-makers can believe in, and creating lasting impact. I'm passionate about using analytics to bridge the gap between what we know and what we can do and I'm always excited to connect with others who see data not just as numbers, but as opportunity.
                  </p>
                </div>
              </div>

              {/* Education Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Purdue University Card */}
                <motion.div
                  className="bg-[#121212]/30 rounded-xl p-6 border border-slate-700/50 h-full flex flex-col justify-between"
                  variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0, 180, 255, 0.15)' }}
                  initial="hidden"
                  animate="visible"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <img src={purdueLogo} alt="Purdue University Logo" className="w-10 h-10 object-contain rounded bg-white p-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-100">Purdue University</h3>
                        <p className="text-sm text-slate-400">Daniels School of Business</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <FaGraduationCap className="text-cyan-400" />
                        <span>Master of Science in Business Analytics and Information Management</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <FaCalendarAlt className="text-cyan-400" />
                        <span>August 2025</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <FaMapMarkerAlt className="text-cyan-400" />
                        <span>West Lafayette, IN</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-slate-200 mb-2">Highlights</h4>
                      <ul className="text-xs text-slate-400 space-y-1">
                        <li>• Student consultant for Big-Tech and Agri-Tech industry partners</li>
                        <li>• Winner of 2025 Crossroads Classic Analytics Challenge and Future Edelman Impact Award</li>
                        <li>• Recipient of merit-based tuition scholarship for international business students</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-slate-200 mb-2">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-1">
                      {['Data Mining', 'AI for Business Decisions', 'Machine Learning', 'Data Visualization', 'Advanced Business Analytics', 'Strategic Management'].map(course => (
                        <span key={course} className="inline-block bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded-full border border-cyan-500/30">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* PES University Card */}
                <motion.div
                  className="bg-[#121212]/30 rounded-xl p-6 border border-slate-700/50 h-full flex flex-col justify-between"
                  variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0, 180, 255, 0.15)' }}
                  initial="hidden"
                  animate="visible"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <img src={pesuLogo} alt="PES University Logo" className="w-10 h-10 object-contain rounded bg-white p-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-100">PES University</h3>
                        <p className="text-sm text-slate-400">School of Engineering</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <FaGraduationCap className="text-cyan-400" />
                        <span>Bachelor of Technology in Electronics and Communication Engineering</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <FaCalendarAlt className="text-cyan-400" />
                        <span>August 2021</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <FaMapMarkerAlt className="text-cyan-400" />
                        <span>Bangalore, India</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-slate-200 mb-2">Highlights</h4>
                      <ul className="text-xs text-slate-400 space-y-1">
                        <li>• Member of Organizing Committee for two national STEM college fests — The Amateur Scientist and Epsilon</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-slate-200 mb-2">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-1">
                      {['Machine Learning', 'Digital Image Processing', 'Artificial Neural Networks', 'Introduction to Data Science'].map(course => (
                        <span key={course} className="inline-block bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded-full border border-cyan-500/30">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* My Skills Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category) => (
                  <motion.div
                    key={category.title}
                    className="bg-[#121212]/30 rounded-xl p-6 border border-slate-700/50 h-full flex flex-col justify-between"
                    variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0, 180, 255, 0.15)' }}
                    initial="hidden"
                    animate="visible"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xl">{category.icon}</span>
                        <h4 className="text-lg font-semibold text-slate-100">{category.title}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map(skill => (
                          <span
                            key={skill}
                            className="inline-block bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded-full border border-cyan-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default AboutSection; 