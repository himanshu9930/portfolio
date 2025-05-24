import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: 'Programming', items: ['Python', 'SQL', 'R'] },
  { category: 'Analytics', items: ['A/B Testing', 'Data Modeling', 'Agentic AI'] },
  { category: 'BI Tools', items: ['Tableau', 'Power BI', 'Excel', 'Alteryx'] },
  { category: 'Big Data', items: ['AWS', 'GCP', 'Snowflake', 'Spark', 'Databricks'] },
];

const About = () => (
  <motion.section
    id="about"
    className="flex justify-center items-center py-20 px-4"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: 'easeOut' }}
    viewport={{ once: true }}
  >
    <div className="w-full max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">About Me</h2>
      <p className="text-white/90 mb-8">
        I'm a data science and strategy enthusiast with experience delivering $20M+ in revenue and $5M+ in cost savings. My background spans predictive modeling, business intelligence, and strategic consulting at ZS Associates and AgReliant Genetics. I combine technical expertise (Python, SQL, Tableau) with business acumen to uncover insights that drive impact.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.category}>
            <h3 className="font-semibold text-[#a18cd1] mb-2">{skill.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <li key={item} className="bg-[#a18cd1]/20 text-[#a18cd1] px-3 py-1 rounded text-sm font-medium">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default About; 