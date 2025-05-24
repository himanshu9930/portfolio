import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaThLarge, FaRobot, FaChartBar, FaTable, FaPython } from 'react-icons/fa';

const categories = [
  { name: 'All Projects', icon: <FaThLarge /> },
  { name: 'Data Science and ML', icon: <FaRobot /> },
  { name: 'Business Intelligence', icon: <FaChartBar /> },
  { name: 'Healthcare Analytics', icon: <FaTable /> },
  { name: 'Corporate Strategy', icon: <FaPython /> },
];

const projects = [
  // Data Science and ML
  {
    title: 'Airbnb Host Segmentation & Superhost Prediction',
    overview: 'Clustered Airbnb hosts and predicted superhost status using ML.',
    bullets: [
      'Used K-Means to segment 13,000+ hosts by behavior',
      'Built predictive models for superhost classification',
      'Deployed modular ML pipeline',
    ],
    skills: ['Python', 'K-Means', 'Logistic Regression', 'ML'],
    category: 'Data Science and ML',
    link: '#',
    img: 'https://placehold.co/400x240?text=Project+Image',
  },
  {
    title: 'Disaster Tweet Classification',
    overview: 'Classified disaster-related tweets with high accuracy.',
    bullets: [
      'Built NLP pipeline with BERT',
      'Achieved F1 score of 0.844 on Kaggle',
      'Preprocessing + fine-tuning for optimal results',
    ],
    skills: ['Python', 'BERT', 'NLP', 'Kaggle'],
    category: 'Data Science and ML',
    link: '#',
    img: 'https://placehold.co/400x240?text=Project+Image',
  },
  {
    title: 'Supply Chain Optimization – Future Edelman Award',
    overview: 'Reduced excess shipments and transfers for AgReliant.',
    bullets: [
      'Built LP models to optimize logistics',
      '5% shipment and 4.5% transfer reduction',
      'Winner of Future Edelman Award',
    ],
    skills: ['Python', 'LP', 'Tableau', 'Supply Chain'],
    category: 'Data Science and ML',
    link: '#',
    img: 'https://placehold.co/400x240?text=Project+Image',
  },
  // Business Intelligence
  {
    title: 'NCAA Bracket Analytics – CCAC Challenge',
    overview: 'Analyzed NCAA fan behavior and bracket bias.',
    bullets: [
      'Modeled loyalty vs. performance in picks',
      'Built XGBoost predictive models',
      'Winner of 1st Place + Best Visualization',
    ],
    skills: ['Python', 'XGBoost', 'Behavioral Analytics'],
    category: 'Business Intelligence',
    link: '#',
    img: 'https://placehold.co/400x240?text=Project+Image',
  },
  {
    title: 'Renewable Energy & Carbon Emissions Dashboard',
    overview: 'Visualized fossil fuel trends and renewable shifts.',
    bullets: [
      'Built Tableau dashboard on emissions data',
      'Focused on U.S. policy and energy transitions',
    ],
    skills: ['Tableau', 'Environmental Analytics'],
    category: 'Business Intelligence',
    link: '#',
    img: 'https://placehold.co/400x240?text=Project+Image',
  },
  // Healthcare Analytics
  {
    title: 'Diabetic Hospital Readmission Analysis',
    overview: 'Modeled readmission likelihood and hospital pathways.',
    bullets: [
      'Logistic regression and graph algorithms',
      'Integrated LP for care optimization',
    ],
    skills: ['Python', 'Graph Algorithms', 'LP'],
    category: 'Healthcare Analytics',
    link: '#',
    img: 'https://placehold.co/400x240?text=Project+Image',
  },
  // Corporate Strategy
  {
    title: 'Union Pacific Tech Transformation Strategy',
    overview: 'Created digital transformation strategy for UP.',
    bullets: [
      'Assessed gaps in freight rail tech adoption',
      'Proposed automation and data integration roadmap',
    ],
    skills: ['Strategy Consulting', 'Ops Management'],
    category: 'Corporate Strategy',
    link: '#',
    img: 'https://placehold.co/400x240?text=Project+Image',
  },
];

const sectionDescription = "A selection of my most impactful analytics, BI, and strategy projects. Filter by category to explore my work.";

const ProjectsSection = () => {
  const [active, setActive] = useState(categories[0].name);
  const filteredProjects =
    active === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <motion.section id="projects"
      className="w-full py-24 px-4 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-12 transition-shadow hover:shadow-[0_0_40px_0_rgba(59,130,246,0.4)]">
        <h2 className="text-6xl md:text-8xl mb-4 text-center font-sfpro bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">My Work</h2>
        <p className="text-lg text-center mb-10 text-blue-100 max-w-2xl mx-auto font-helvetica">{sectionDescription}</p>
        {/* Toggle/Filter Bar */}
        <div className="flex justify-center mb-12 w-full">
          <div className="flex bg-white/10 rounded-full shadow-sm px-2 py-2 gap-2 w-full max-w-6xl">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className={`relative flex items-center gap-3 px-8 py-3 rounded-full font-semibold transition focus:outline-none text-lg md:text-xl ${active === cat.name ? 'z-20' : 'z-10'}`}
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
                <span className={`relative z-10 text-xl md:text-2xl ${active === cat.name ? 'text-blue-900 font-bold' : 'text-cyan-200 font-medium'}`}>{cat.icon}</span>
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
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-white/50 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.025] transition-transform border border-white/10 text-white/90 hover:shadow-[0_0_40px_0_rgba(59,130,246,0.4)]"
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-blue-100 mb-2 font-sfpro">{p.title}</h3>
                <p className="text-blue-100 mb-2 text-base font-helvetica">{p.overview}</p>
                <ul className="list-disc ml-6 text-blue-100 text-sm mb-3">
                  {p.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto mb-2">
                  {p.skills.map((s) => (
                    <span key={s} className="inline-block rounded-full bg-blue-400/10 border border-blue-300/20 text-xs text-blue-100 px-3 py-1 font-medium whitespace-nowrap shadow-sm hover:bg-blue-400/20 transition">{s}</span>
                  ))}
                </div>
                <a href={p.link} className="text-cyan-200 underline text-xs font-semibold mt-2" target="_blank" rel="noopener noreferrer">Link – Placeholder</a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection; 