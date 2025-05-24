import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding } from 'react-icons/fa';

const experienceData = [
  {
    title: 'Data Science Intern',
    company: 'AgReliant Genetics',
    duration: '2025',
    bullets: [
      'Led a cross-functional initiative to optimize supply chain fulfillment using linear programming techniques in Python, resulting in a 20% improvement in distribution efficiency across key regions.',
      'Designed and implemented automated data pipelines and operational dashboards in Tableau to streamline reporting and drive visibility across logistics and business operations.'
    ],
    skills: ['Python', 'Linear Programming', 'Tableau', 'Supply Chain Analytics', 'Data Pipelines', 'Excel']
  },
  {
    title: 'Senior Data Analyst',
    company: 'ZS Associates',
    duration: '2023–2024',
    bullets: [
      'Spearheaded Go-to-Market analytics for a leading pharmaceutical product launch, modeling market potential at $4B and delivering strategic insights that drove $5M in operational savings.',
      'Developed data-driven customer targeting strategies across three therapeutic markets, resulting in an estimated $10M uplift in annual sales.',
      'Engineered and visualized comprehensive patient journeys using SQL, Python, and Tableau on datasets exceeding 3 billion records, enhancing client understanding of treatment paths and channel performance.'
    ],
    skills: ['SQL', 'Python', 'Tableau', 'Market Sizing', 'Patient Journey Analysis', 'Go-to-Market Strategy', 'Data Visualization']
  },
  {
    title: 'Data Analyst',
    company: 'ZS Associates',
    duration: '2021–2023',
    bullets: [
      'Built automated KPI dashboards in Tableau and Alteryx, reducing turnaround time for executive reporting by over 50% and enhancing data accessibility for stakeholders.',
      'Conducted deep-dive performance analytics and market acceleration assessments that contributed to $10M in incremental revenue for a top-tier pharmaceutical client.',
      'Designed a scalable integrated database of academic medical centers using Spark and AWS S3, streamlining targeting strategy across business units and aligning stakeholders on unified data views.'
    ],
    skills: ['Tableau', 'Alteryx', 'Spark', 'AWS S3', 'KPI Automation', 'Market Analytics', 'Data Architecture', 'Python']
  },
  {
    title: 'Data Analyst Intern',
    company: 'ZS Associates',
    duration: '2021',
    bullets: [
      'Analyzed five cross-functional datasets to uncover pricing inefficiencies and segmentation opportunities, influencing marketing decisions that led to $1M in revenue growth within six months.',
      'Developed Python scripts for automating data preprocessing tasks, increasing the efficiency of the analytics pipeline and reducing manual effort by 30%.'
    ],
    skills: ['Python', 'Data Cleaning', 'Pricing Analytics', 'Segmentation', 'Pandas', 'Data Automation']
  }
];

const expDescription = "My professional journey across analytics, consulting, and strategy roles.";

const ExperienceSection = () => (
  <motion.section id="experience"
    className="w-full py-24 px-4 mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-12 transition-shadow hover:shadow-[0_0_40px_0_rgba(59,130,246,0.4)]">
      <h2 className="text-6xl md:text-8xl mb-4 text-center font-sfpro bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">Experience</h2>
      <p className="text-lg text-center mb-10 text-blue-100 max-w-2xl mx-auto font-helvetica">{expDescription}</p>
      <div className="relative flex flex-col gap-12">
        {/* Timeline content */}
        <motion.div
          className="flex flex-col gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } }
          }}
        >
          {experienceData.map((role, i) => (
            <motion.div
              key={role.title + role.company + role.duration}
              className="relative flex gap-8 items-start"
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Timeline vertical line and dot */}
              <div className="flex flex-col items-center mr-2">
                <div className="w-4 h-4 rounded-full bg-cyan-300 border-4 border-cyan-100 z-10 mb-2"></div>
                {i < experienceData.length - 1 && (
                  <div className="w-1 flex-1 bg-gradient-to-b from-cyan-300 to-cyan-100 rounded-full" style={{ minHeight: '60px' }}></div>
                )}
              </div>
              {/* Experience Card */}
              <div className="flex-1">
                <div className="bg-black/30 rounded-xl border border-white/10 p-8 mb-6 shadow-md hover:shadow-[0_0_40px_0_rgba(59,130,246,0.4)] transition duration-300 ease-in-out text-white/90">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-cyan-100">
                        <FaBuilding className="text-cyan-300 text-2xl" />
                      </div>
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-blue-100 font-sfpro">{role.title}</div>
                        <div className="text-cyan-300 font-semibold text-base font-sfpro">{role.company}</div>
                      </div>
                    </div>
                    <div className="text-blue-100 text-base font-helvetica md:text-right">{role.duration}</div>
                  </div>
                  <ul className="list-disc ml-8 text-blue-100 text-base font-helvetica mt-2">
                    {role.bullets.map((b, k) => <li key={k}>{b}</li>)}
                  </ul>
                  {/* Skills Used */}
                  <div className="mt-4 flex flex-wrap gap-2 items-center">
                    <span className="text-xs text-slate-300 mr-2 font-semibold">Skills Used:</span>
                    {role.skills && role.skills.map(skill => (
                      <span key={skill} className="inline-block rounded-full bg-blue-400/10 border border-blue-300/20 text-xs text-blue-100 px-3 py-1 font-medium whitespace-nowrap shadow-sm hover:bg-blue-400/20 transition">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default ExperienceSection; 