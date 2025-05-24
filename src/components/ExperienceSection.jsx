import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding } from 'react-icons/fa';

const experienceData = [
  {
    period: '2021–2023',
    roles: [
      {
        title: 'Data Science Intern',
        company: 'AgReliant Genetics',
        duration: '2021',
        bullets: [
          'Optimized supply chain fulfillment using linear programming, improving efficiency by 20%.',
          'Developed data pipelines and automated reporting for business operations.'
        ]
      },
      {
        title: 'MS Student, Business Analytics',
        company: 'Purdue University',
        duration: '2020–2022',
        bullets: [
          'Graduated with distinction, GPA: 3.9/4.0.',
          'Relevant coursework: Machine Learning, Data Visualization, Advanced Analytics.'
        ]
      }
    ]
  },
  {
    period: '2023–2024',
    roles: [
      {
        title: 'Senior Data Science Analyst',
        company: 'ZS Associates',
        duration: '2022–2024',
        bullets: [
          'Led analytics consulting for Fortune 500 healthcare clients, delivering $20M+ in revenue impact.',
          'Built predictive models and dashboards (Python, SQL, Tableau) to optimize sales and marketing strategies.',
          'Mentored junior analysts and managed cross-functional project teams.'
        ]
      }
    ]
  },
  {
    period: '2025–Present',
    roles: [
      {
        title: 'Data & Strategy Leader',
        company: 'Your Next Company',
        duration: '2025–Present',
        bullets: [
          'Driving business transformation through advanced analytics and strategic initiatives.',
          'Leading teams to deliver measurable business impact.'
        ]
      }
    ]
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
          {experienceData.map((section, i) => (
            <motion.div
              key={section.period}
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
                {section.roles.map((role, j) => (
                  <div key={role.title + role.company} className="bg-black/30 rounded-xl border border-white/10 p-8 mb-6 shadow-md hover:shadow-[0_0_40px_0_rgba(59,130,246,0.4)] transition duration-300 ease-in-out text-white/90">
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
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default ExperienceSection; 