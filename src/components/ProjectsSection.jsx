import React, { useState } from 'react';
import { FaPython, FaTable, FaChartBar, FaRobot } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { name: 'Data Science & ML', icon: <FaRobot /> },
  { name: 'Business Intelligence', icon: <FaChartBar /> },
  { name: 'Healthcare Analytics', icon: <FaTable /> },
  { name: 'Corporate Strategy', icon: <FaPython /> },
];

const projects = [
  {
    title: 'Bankruptcy Prediction Modeling',
    desc: 'Built ensemble models (Neural Networks, XGBoost) for credit risk, achieving 93% accuracy.',
    skills: [ { name: 'Python', color: 'bg-[#6a82fb]' }, { name: 'XGBoost', color: 'bg-[#a18cd1]' }, { name: 'Neural Networks', color: 'bg-[#6a82fb]' } ],
    category: 'Data Science & ML',
    img: 'https://placehold.co/400x240?text=Project+1',
  },
  {
    title: 'March Madness Bracket Pick Prediction',
    desc: '1st place in national competition with predictive modeling and visual storytelling (Python, Tableau).',
    skills: [ { name: 'Python', color: 'bg-[#6a82fb]' }, { name: 'Tableau', color: 'bg-[#a18cd1]' } ],
    category: 'Data Science & ML',
    img: 'https://placehold.co/400x240?text=Project+2',
  },
  {
    title: 'Executive BI Dashboard',
    desc: 'Designed an interactive Tableau dashboard for C-level business insights.',
    skills: [ { name: 'Tableau', color: 'bg-[#a18cd1]' }, { name: 'SQL', color: 'bg-[#6a82fb]' } ],
    category: 'Business Intelligence',
    img: 'https://placehold.co/400x240?text=Project+3',
  },
  {
    title: 'AgReliant Genetics Internship',
    desc: 'Led a team of 7 to optimize fulfillment using linear programming, improving efficiency by 20%.',
    skills: [ { name: 'Python', color: 'bg-[#6a82fb]' }, { name: 'Excel', color: 'bg-[#a18cd1]' }, { name: 'Tableau', color: 'bg-[#a18cd1]' } ],
    category: 'Business Intelligence',
    img: 'https://placehold.co/400x240?text=Project+4',
  },
  {
    title: 'ZS Associates Patient Journey',
    desc: 'Executed patient journey analysis across 3B+ records; led to a 5% QoQ sales increase.',
    skills: [ { name: 'SQL', color: 'bg-[#6a82fb]' }, { name: 'Snowflake', color: 'bg-[#a18cd1]' }, { name: 'Python', color: 'bg-[#6a82fb]' }, { name: 'Tableau', color: 'bg-[#a18cd1]' } ],
    category: 'Healthcare Analytics',
    img: 'https://placehold.co/400x240?text=Project+5',
  },
  {
    title: 'Go-to-Market Analytics (ZS)',
    desc: 'Revamped sales force strategy for $4B market, delivering $5M in operational savings.',
    skills: [ { name: 'SQL', color: 'bg-[#6a82fb]' }, { name: 'Excel', color: 'bg-[#a18cd1]' }, { name: 'Strategy', color: 'bg-[#6a82fb]' } ],
    category: 'Corporate Strategy',
    img: 'https://placehold.co/400x240?text=Project+6',
  },
  {
    title: 'Airbnb Customer Segmentation',
    desc: 'Clustering + predictive modeling for 13K+ hosts to support targeted pricing strategies.',
    skills: [ { name: 'Python', color: 'bg-[#6a82fb]' }, { name: 'Clustering', color: 'bg-[#a18cd1]' }, { name: 'Predictive Modeling', color: 'bg-[#6a82fb]' } ],
    category: 'Corporate Strategy',
    img: 'https://placehold.co/400x240?text=Project+7',
  },
];

const sectionDescription = "A selection of my most impactful analytics, BI, and strategy projects. Filter by category to explore my work.";

const ProjectsSection = () => {
  const [active, setActive] = useState(categories[0].name);
  return (
    <motion.section id="projects"
      className="w-full py-24 px-4 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="bg-black/20 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-12 transition-shadow hover:shadow-[0_0_40px_0_rgba(59,130,246,0.4)]">
        <h2 className="text-6xl md:text-8xl mb-4 text-center font-sfpro bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">My Work</h2>
        <p className="text-lg text-center mb-10 text-blue-100 max-w-2xl mx-auto font-helvetica">{sectionDescription}</p>
        {/* Toggle/Filter Bar */}
        <div className="flex justify-center mb-12 w-full">
          <div className="flex bg-white/10 rounded-full shadow-sm px-2 py-2 gap-2 w-full max-w-6xl">
            {categories.map((cat, idx) => (
              <button
                key={cat.name}
                className="relative flex items-center gap-3 px-8 py-3 rounded-full font-semibold transition focus:outline-none text-lg md:text-xl"
                style={{ zIndex: active === cat.name ? 2 : 1 }}
                onClick={() => setActive(cat.name)}
              >
                <AnimatePresence>
                  {active === cat.name && (
                    <motion.div
                      layoutId="toggleHighlight"
                      className="absolute inset-0 bg-white shadow-md rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      style={{ zIndex: 0 }}
                    />
                  )}
                </AnimatePresence>
                <span className={`relative z-10 ${active === cat.name ? 'text-blue-900 font-bold' : 'text-cyan-200 font-medium'}`}>{cat.icon}</span>
                <span className={`relative z-10 font-sfpro ${active === cat.name ? 'text-blue-900 font-bold' : 'text-cyan-200 font-medium'}`}>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
        {/* Project Cards */}
        <motion.div
          key={active}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {projects.filter(p => p.category === active).map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-white/5 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.025] transition-transform border border-white/10 text-white/90 hover:shadow-[0_0_40px_0_rgba(59,130,246,0.4)]"
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-blue-100 mb-2 font-sfpro">{p.title}</h3>
                <p className="text-blue-100 mb-4 text-base font-helvetica">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.skills.map(s => (
                    <span key={s.name} className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-cyan-200 font-helvetica">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection; 