import React from 'react';
import { motion } from 'framer-motion';
import agreliantLogo from '../assets/agreliant.png';
import zsLogo from '../assets/zs.png';

const experienceData = [
  {
    title: 'Data Science Intern',
    company: 'AgReliant Genetics',
    logo: agreliantLogo,
    duration: "January 2025 – March 2025",
    bullets: [
      'Led a cross-functional initiative to optimize supply chain fulfillment using linear programming techniques in Python, resulting in a 20% improvement in distribution efficiency across key regions.',
      'Designed and implemented automated data pipelines and operational dashboards in Tableau to streamline reporting and drive visibility across logistics and business operations.'
    ],
    skills: ['Python', 'Linear Programming', 'Tableau', 'Supply Chain Analytics', 'Data Pipelines', 'Excel']
  },
  {
    title: 'Analytics Associate Consultant',
    company: 'ZS Associates',
    logo: zsLogo,
    duration: "July 2023 – July 2024",
    bullets: [
      'Spearheaded Go-to-Market analytics for a leading pharmaceutical product launch, modeling market potential at $4B and delivering strategic insights that drove $5M in operational savings.',
      'Developed data-driven customer targeting strategies across three therapeutic markets, resulting in an estimated $10M uplift in annual sales.',
      'Engineered and visualized comprehensive patient journeys using SQL, Python, and Tableau on datasets exceeding 3 billion records, enhancing client understanding of treatment paths and channel performance.'
    ],
    skills: ['SQL', 'Python', 'Tableau', 'Market Sizing', 'Patient Journey Analysis', 'Go-to-Market Strategy', 'Data Visualization']
  },
  {
    title: 'Analytics Associate',
    company: 'ZS Associates',
    logo: zsLogo,
    duration: "July 2021 – June 2023",
    bullets: [
      'Built automated KPI dashboards in Tableau and Alteryx, reducing turnaround time for executive reporting by over 50% and enhancing data accessibility for stakeholders.',
      'Conducted deep-dive performance analytics and market acceleration assessments that contributed to $10M in incremental revenue for a top-tier pharmaceutical client.',
      'Designed a scalable integrated database of academic medical centers using Spark and AWS S3, streamlining targeting strategy across business units and aligning stakeholders on unified data views.'
    ],
    skills: ['Tableau', 'Alteryx', 'Spark', 'AWS S3', 'KPI Automation', 'Market Analytics', 'Data Architecture', 'Python']
  },
  {
    title: 'Analytics Intern',
    company: 'ZS Associates',
    logo: zsLogo,
    duration: "January 2021 – June 2021",
    bullets: [
      'Analyzed five cross-functional datasets to uncover pricing inefficiencies and segmentation opportunities, influencing marketing decisions that led to $1M in revenue growth within six months.',
      'Developed Python scripts for automating data preprocessing tasks, increasing the efficiency of the analytics pipeline and reducing manual effort by 30%.'
    ],
    skills: ['Python', 'Data Cleaning', 'Pricing Analytics', 'Segmentation', 'Pandas', 'Data Automation']
  }
];

const expDescription = "A closer look at the roles I've taken on and the value I've helped deliver.";

const ExperienceSection = () => (
  <motion.section id="experience"
    className="w-full py-24 bg-[#121212]/30"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className="max-w-6xl mx-auto">
      <h2 className="text-6xl md:text-8xl mb-4 text-center font-sfpro bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent leading-[1.3] pb-2">Experience</h2>
      <p className="text-slate-300 text-base md:text-lg text-center mt-4 mb-8">{expDescription}</p>
      <div className="relative flex flex-col space-y-6 md:space-y-8">
        {/* Timeline vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400/80 to-blue-200/40 rounded-full z-0" style={{ minHeight: '100%' }}></div>
        <div className="flex flex-col gap-6 relative z-10">
          {experienceData.map((role, i) => (
            <motion.div
              key={role.title + role.company + role.duration}
              className="relative flex items-start gap-6 md:gap-10 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.035, zIndex: 2 }}
              style={{ zIndex: 1 }}
            >
              {/* Timeline marker with logo */}
              <div className="flex flex-col items-center min-w-[48px]">
                <motion.div
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center border-2 border-blue-200 shadow-sm mb-2 transition-transform duration-300"
                  whileHover={{ scale: 1.18 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <img src={role.logo} alt={role.company + ' logo'} className="w-8 h-8 object-contain" />
                </motion.div>
              </div>
              {/* Experience Content */}
              <div className="flex-1 ml-2">
                <div className="mb-1 flex flex-col sm:flex-row sm:items-center gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl font-bold text-slate-100 font-sfpro">{role.title}</span>
                    <span className="text-blue-400 font-semibold text-base font-sfpro">{role.company}</span>
                  </div>
                  <span className="text-white text-base font-helvetica sm:ml-auto font-bold">{role.duration}</span>
                </div>
                <ul className="list-disc ml-6 text-slate-300 text-base font-helvetica mt-1 space-y-1">
                  {role.bullets.map((b, k) => <li key={k}>{b}</li>)}
                </ul>
                {/* Skills Used */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {role.skills && role.skills.map(skill => (
                    <span key={skill} className="inline-block bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded-full border border-cyan-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

export default ExperienceSection; 