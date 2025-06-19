import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaThLarge, FaRobot, FaChartBar, FaTable, FaPython, FaHeartbeat, FaLightbulb, FaExternalLinkAlt, FaGithub, FaFilePowerpoint, FaChevronDown } from 'react-icons/fa';

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
    overview: 'Analyzed Airbnb host data to segment users and predict Superhost status using machine learning. Delivered a modular pipeline for clustering and classification, with insights to inform host strategies and platform engagement.',
    bullets: [
      'Built KMeans clusters to segment 13,000+ hosts by behavioral attributes',
      'Trained ML models to predict Superhost status with interpretability by cluster',
      'Developed reusable modules for data prep, modeling, and reporting',
    ],
    skills: ['Python', 'K-Means', 'Segmentation', 'Regression', 'ML'],
    category: 'Data Science and ML',
    link: 'https://github.com/himanshu9930/airbnb-host-segmentation-analysis',
    img: '/assets/airbnb-host-segmentation.png',
  },
  {
    title: 'Disaster Tweet Classification Using NLP',
    overview: 'Built an NLP pipeline to classify disaster-related tweets using deep learning and transformer models. Evaluated multiple architectures, with BERT delivering state-of-the-art performance on Kaggle.',
    bullets: [
      'Preprocessed over 10,000 tweets from Kaggle\'s Disaster Tweets dataset',
      'Tested LSTM, GCN, and BERT embeddings for text classification',
      'Achieved 22nd place on Kaggle leaderboard with an F1 score of 0.844',
    ],
    skills: ['Python', 'BERT', 'NLP', 'Transformers', 'Kaggle'],
    category: 'Data Science and ML',
    link: 'https://github.com/himanshu9930/disaster-tweet-classification-analysis/tree/main',
    img: '/assets/disaster-tweet-classification.png',
  },
  {
    title: 'Supply Chain Optimization – Future Edelman Award',
    overview: 'Redesigned supply chain operations for a North American seed manufacturer to reduce delivery inefficiencies and logistics costs. Blended advanced analytics with optimization modeling to drive measurable operational impact.',
    bullets: [
      'Achieved ~54% reduction in intercompany transfers and ~3% in delivery distance',
      'Forecasted inventory gaps using EWMA and Tableau dashboards',
      'Built a two-stage LP model in Python (PuLP) to optimize warehouse-to-customer mapping',
      'Winner of the 2025 Future Edelman Impact Award',
    ],
    skills: ['Python', 'Linear Programming', 'Tableau', 'Optimization', 'Supply Chain'],
    category: 'Data Science and ML',
    link: 'https://github.com/himanshu9930/streamlining-supply-chain-dynamics',
    img: '/assets/supply-chain-optimization.png',
  },
  {
    title: 'Bankruptcy Prediction — MGMT 571 Kaggle Competition',
    overview: 'Developed a robust predictive model to forecast firm bankruptcy using 64 financial indicators. Leveraged ensemble modeling (Neural Networks, Gradient Boosting, LASSO) and advanced EDA to achieve 94.15% accuracy in a Purdue in-class Kaggle competition.',
    bullets: [
      'Analyzed 64 financial ratios for profitability, leverage, liquidity, efficiency, and growth',
      'Addressed outliers, skewness, and collinearity using robust models and LASSO regularization',
      'Built and tuned ensembles: Logistic Regression, Neural Networks, Gradient Boosting, Lasso Regression',
      'Final meta-ensemble achieved 94.15% accuracy on private leaderboard',
      'Implemented the full solution in SAS Enterprise Miner with node-based workflow',
    ],
    skills: ['SAS', 'Ensemble Modeling', 'Neural Networks', 'Gradient Boosting', 'LASSO', 'EDA'],
    category: 'Data Science and ML',
    link: 'https://github.com/himanshu9930/bankruptcy-prediction-analysis',
    img: '/assets/bankruptcy-prediction.png',
  },
  // Business Intelligence
  {
    title: 'NCAA Bracket Analytics – CCAC Challenge',
    overview: 'Analyzed NCAA fan behavior in March Madness bracket submissions using behavioral segmentation and predictive modeling. The project won 1st place and Best Visualization in the 2025 Crossroads Classic Analytics Challenge.',
    bullets: [
      'Modeled loyalty vs. performance in picks using XGBoost',
      'Segmented fans by region and university affinity',
      'Delivered actionable insights for NCAA marketing and sponsorship strategy',
    ],
    skills: ['Python', 'XGBoost', 'Tableau', 'Behavioral Analytics', 'Data Visualization'],
    category: 'Business Intelligence',
    link: 'https://github.com/himanshu9930/ncaa-bracket-prediction-and-modelling',
    img: '/assets/ncaa-analytics.png',
  },
  {
    title: 'Renewable Energy & Carbon Emissions Dashboard',
    overview: 'Built a Tableau dashboard analyzing the U.S. transition to renewable energy and its impact on carbon emissions, jobs, and power generation. Combined datasets from IRENA, EIA, and USEER to uncover policy-relevant energy trends.',
    bullets: [
      'Visualized state-by-state carbon intensity using LOD maps',
      'Blended time-series data to reveal the inverse trend between renewables and CO₂',
      'Highlighted renewable energy job creation across key U.S. regions',
    ],
    skills: ['Tableau', 'Data Visualization', 'Renewable Energy', 'Carbon Emissions', 'Public Data'],
    category: 'Business Intelligence',
    link: 'https://github.com/himanshu9930/renewable-energy-carbon-emissions-analysis/blob/main/README.md',
    img: '/assets/renewable-energy.png',
  },
  // Healthcare Analytics
  {
    title: 'Diabetic Hospital Readmission Analysis',
    overview: 'Analyzed diabetic patient data using predictive modeling, optimization, and graph algorithms to reduce 30-day hospital readmissions and improve care allocation.',
    bullets: [
      'Built a logistic regression model to identify high-risk patients',
      'Used integer and linear programming to optimize triage and follow-up budgets',
      'Applied graph algorithms to uncover diagnosis clusters and care pathway bottlenecks',
    ],
    skills: ['Python', 'Logistic Regression', 'Graph Algorithms', 'Healthcare Analytics'],
    category: 'Healthcare Analytics',
    link: 'https://github.com/himanshu9930/diabetic-readmission-analysis',
    img: '/assets/diabetic-readmission.png',
  },
  // Corporate Strategy
  {
    title: 'Union Pacific Tech Transformation Strategy',
    overview: 'Proposed a digital transformation roadmap for Union Pacific, focused on enhancing operational efficiency, customer experience, and long-term profitability through technology adoption.',
    bullets: [
      'Assessed UP\'s current tech stack and identified gaps across safety, logistics, and customer visibility',
      'Recommended implementation of IoT, AI/ML, and Digital Twins to reduce COGS and boost reliability',
      'Developed a digitally enhanced "virtuous cycle" model for long-term growth and reinvestment',
    ],
    skills: ['Business Strategy', 'Digital Transformation', 'Supply Chain Optimization', 'Strategic Consulting'],
    category: 'Corporate Strategy',
    link: 'https://docs.google.com/presentation/d/1iSm42GL6a9DebXnZzotGESF1Bn7djWFU/edit?usp=sharing&ouid=111532056428475002765&rtpof=true&sd=true',
    img: '/assets/union-pacific.png',
  },
  {
    title: 'CBG Demographic Analysis for Restaurant Location Planning',
    overview: 'Analyzed Census Block Group (CBG) demographic data using BigQuery to identify optimal restaurant expansion locations in Wisconsin. Combined population, housing, education, and income data to pinpoint underserved, high-potential areas.',
    bullets: [
      'Classified 242,000+ CBGs into rural, suburban, and urban using population and housing thresholds',
      'Integrated education, income, and housing data to define target market segments',
      'Benchmarked against Brookfield, WI to set location selection criteria',
      'Identified 24 high-potential CBGs across 16 counties for restaurant expansion',
      'Delivered actionable insights for market entry, competition, and demographic compatibility',
    ],
    skills: ['BigQuery', 'SQL', 'Demographic Analysis', 'Location Planning', 'Data Visualization', 'Market Research'],
    category: 'Corporate Strategy',
    link: 'https://github.com/himanshu9930/demographic-analysis-using-BigQuery',
    img: '/assets/demographic-analysis.png',
  },
];

const sectionDescription = "A selection of my most impactful analytics, BI, and strategy projects. Filter by category to explore my work.";

const ProjectsSection = () => {
  const [active, setActive] = useState(categories[0].name);
  const [expandedCards, setExpandedCards] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredProjects =
    active === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === active);

  const toggleCardExpansion = (cardTitle) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardTitle]: !prev[cardTitle]
    }));
  };

  // Mobile version without whileInView animation
  if (isMobile) {
    return (
      <section id="projects"
        className="w-full py-16 sm:py-24 bg-[#1a1a1a]/30 relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl sm:text-6xl md:text-8xl mb-4 text-center font-sfpro bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent relative z-10 leading-[1.3] pb-2">Project Work</h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg text-center mt-4 mb-8 leading-relaxed">
            A collection of data-driven projects across AI, analytics and strategy that created real-world impact.
          </p>
          
          {/* Toggle/Filter Bar */}
          <div className="flex justify-center my-6 w-full">
            <div className="flex flex-wrap sm:flex-nowrap rounded-full overflow-hidden border border-cyan-700 w-full max-w-4xl">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  className={`flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 text-center ${
                    active === cat.name
                      ? 'bg-cyan-700 text-white font-semibold'
                      : 'bg-transparent text-cyan-400 hover:bg-cyan-700/10'
                  }`}
                  onClick={() => setActive(cat.name)}
                  style={{ minWidth: '120px' }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Project Cards - Mobile version without animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredProjects.map((p, i) => (
              <div
                key={p.title}
                className="bg-[#121212]/30 rounded-xl p-0 border border-slate-700/50 min-h-[400px] sm:min-h-[460px] h-full flex flex-col justify-between overflow-hidden"
              >
                {/* Project Image */}
                <div className="w-full h-40 sm:h-48 bg-slate-800 rounded-t-xl overflow-hidden flex items-center justify-center">
                  <img
                    src={p.img}
                    alt={p.title + ' image'}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-300 text-2xl font-bold" style={{ display: 'none' }}>
                    {p.title.charAt(0)}
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between">
                  {/* Project Title */}
                  <h3 className="font-semibold text-base sm:text-lg text-cyan-300 mb-1 text-center leading-tight">{p.title}</h3>
                  
                  {/* Description with expand/collapse */}
                  <div className="mb-2">
                    {expandedCards[p.title] ? (
                      <p className="text-slate-300 text-xs sm:text-sm">{p.overview}</p>
                    ) : (
                      <div className="flex justify-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCardExpansion(p.title);
                          }}
                          className="text-cyan-300 hover:text-cyan-200 transition-colors mt-1"
                        >
                          <FaChevronDown className="inline-block text-xs" />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Bulleted Key Points - only show when expanded */}
                  {expandedCards[p.title] && (
                    <ul className="list-disc ml-4 sm:ml-5 text-xs sm:text-sm text-slate-400 leading-relaxed mb-2">
                      {p.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                    </ul>
                  )}
                  
                  {/* Collapse arrow - only show when expanded */}
                  {expandedCards[p.title] && (
                    <div className="mb-3 flex justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCardExpansion(p.title);
                        }}
                        className="text-cyan-300 hover:text-cyan-200 transition-colors"
                      >
                        <FaChevronDown className="inline-block text-xs rotate-180" />
                      </button>
                    </div>
                  )}
                  
                  {/* Pills + Button fixed to bottom */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
                      {p.skills.map((s) => (
                        <span key={s} className="inline-block bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded-full border border-cyan-500/30">{s}</span>
                      ))}
                    </div>
                    <a
                      href={p.link}
                      className="mt-4 inline-flex items-center justify-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all w-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.link.includes('github.com') && <FaGithub className="mr-2" />}
                      {p.link.includes('docs.google.com') && <FaFilePowerpoint className="mr-2" />}
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop version with full animations
  return (
    <motion.section id="projects"
      className="w-full py-16 sm:py-24 bg-[#1a1a1a]/30 relative z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl sm:text-6xl md:text-8xl mb-4 text-center font-sfpro bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent relative z-10 leading-[1.3] pb-2">Project Work</h2>
        <p className="text-slate-300 text-sm sm:text-base md:text-lg text-center mt-4 mb-8 leading-relaxed">
          A collection of data-driven projects across AI, analytics and strategy that created real-world impact.
        </p>
        
        {/* Toggle/Filter Bar */}
        <div className="flex justify-center my-6 w-full">
          <div className="flex flex-wrap sm:flex-nowrap rounded-full overflow-hidden border border-cyan-700 w-full max-w-4xl">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className={`flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 text-center ${
                  active === cat.name
                    ? 'bg-cyan-700 text-white font-semibold'
                    : 'bg-transparent text-cyan-400 hover:bg-cyan-700/10'
                }`}
                onClick={() => setActive(cat.name)}
                style={{ minWidth: '120px' }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Project Cards */}
        <motion.div
          key={active}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
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
              className="bg-[#121212]/30 rounded-xl p-0 border border-slate-700/50 min-h-[400px] sm:min-h-[460px] h-full flex flex-col justify-between overflow-hidden"
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0, 180, 255, 0.15)' }}
              style={{ cursor: 'pointer' }}
            >
              {/* Project Image */}
              <div className="w-full h-40 sm:h-48 bg-slate-800 rounded-t-xl overflow-hidden flex items-center justify-center">
                <img
                  src={p.img}
                  alt={p.title + ' image'}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-300 text-2xl font-bold" style={{ display: 'none' }}>
                  {p.title.charAt(0)}
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between">
                {/* Project Title */}
                <h3 className="font-semibold text-base sm:text-lg text-cyan-300 mb-1 text-center leading-tight">{p.title}</h3>
                
                {/* Description with expand/collapse */}
                <div className="mb-2">
                  {expandedCards[p.title] ? (
                    <p className="text-slate-300 text-xs sm:text-sm">{p.overview}</p>
                  ) : (
                    <div className="flex justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCardExpansion(p.title);
                        }}
                        className="text-cyan-300 hover:text-cyan-200 transition-colors mt-1"
                      >
                        <FaChevronDown className="inline-block text-xs" />
                      </button>
                    </div>
                  )}
                </div>
                
                {/* Bulleted Key Points - only show when expanded */}
                <AnimatePresence>
                  {expandedCards[p.title] && (
                    <motion.ul 
                      className="list-disc ml-4 sm:ml-5 text-xs sm:text-sm text-slate-400 leading-relaxed mb-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {p.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                    </motion.ul>
                  )}
                </AnimatePresence>
                
                {/* Collapse arrow - only show when expanded */}
                <AnimatePresence>
                  {expandedCards[p.title] && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-3 flex justify-center"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCardExpansion(p.title);
                        }}
                        className="text-cyan-300 hover:text-cyan-200 transition-colors"
                      >
                        <FaChevronDown className="inline-block text-xs rotate-180" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Pills + Button fixed to bottom */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
                    {p.skills.map((s) => (
                      <span key={s} className="inline-block bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded-full border border-cyan-500/30">{s}</span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    className="mt-4 inline-flex items-center justify-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.link.includes('github.com') && <FaGithub className="mr-2" />}
                    {p.link.includes('docs.google.com') && <FaFilePowerpoint className="mr-2" />}
                    View Project
                  </a>
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