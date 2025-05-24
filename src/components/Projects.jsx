import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  {
    category: 'AI/ML Projects',
    projects: [
      {
        title: 'Bankruptcy Prediction Modeling',
        desc: 'Built ensemble models (Neural Networks, XGBoost) for credit risk, achieving 93% accuracy.',
        tags: ['Python', 'XGBoost', 'Neural Networks'],
        link: '#',
      },
      {
        title: 'March Madness Bracket Pick Prediction',
        desc: '1st place in national competition with predictive modeling and visual storytelling (Python, Tableau).',
        tags: ['Python', 'Tableau'],
        link: '#',
      },
    ],
  },
  {
    category: 'Supply Chain Analytics',
    projects: [
      {
        title: 'AgReliant Genetics Internship',
        desc: 'Led a team of 7 to optimize fulfillment using linear programming, improving efficiency by 20%.',
        tags: ['Python', 'Excel', 'Tableau'],
        link: '#',
      },
    ],
  },
  {
    category: 'Healthcare Analytics',
    projects: [
      {
        title: 'ZS Associates',
        desc: 'Executed patient journey analysis across 3B+ records; led to a 5% QoQ sales increase.',
        tags: ['SQL', 'Snowflake', 'Python', 'Tableau'],
        link: '#',
      },
    ],
  },
  {
    category: 'Business Strategy',
    projects: [
      {
        title: 'Go-to-Market Analytics (ZS)',
        desc: 'Revamped sales force strategy for $4B market, delivering $5M in operational savings.',
        tags: ['SQL', 'Excel', 'Strategy'],
        link: '#',
      },
      {
        title: 'Airbnb Customer Segmentation',
        desc: 'Clustering + predictive modeling for 13K+ hosts to support targeted pricing strategies.',
        tags: ['Python', 'Clustering', 'Predictive Modeling'],
        link: '#',
      },
    ],
  },
];

const Projects = () => (
  <section id="projects" className="max-w-5xl mx-auto py-20 px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Projects</h2>
    <div className="space-y-12">
      {projectData.map((cat) => (
        <div key={cat.category}>
          <h3 className="text-xl font-semibold text-[#a18cd1] mb-4">{cat.category}</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cat.projects.map((proj, idx) => (
              <motion.div
                key={proj.title}
                className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition p-6 flex flex-col justify-between"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 + idx * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div>
                  <h4 className="font-bold text-lg text-white mb-2">{proj.title}</h4>
                  <p className="text-white/90 mb-4 text-sm">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="bg-[#a18cd1]/20 text-[#a18cd1] px-2 py-0.5 rounded text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block px-4 py-2 bg-[#6a82fb] text-white rounded hover:bg-[#a18cd1] transition text-sm font-semibold">View Report</a>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 