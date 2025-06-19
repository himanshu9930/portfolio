import React, { useState } from 'react';
import { motion } from 'framer-motion';
import amazonLogo from '../assets/Logos/amazon.png';
import microsoftLogo from '../assets/Logos/microsoft.png';
import tableauLogo from '../assets/Logos/tableau.png';
import ccacImage from '../assets/ccac.jpeg';
import zsImage from '../assets/zs.png';
import { FaExternalLinkAlt } from 'react-icons/fa';

const certifications = [
  {
    name: 'Tableau Desktop Specialist',
    issuer: 'Tableau',
    type: 'Certified Specialist',
    year: '2025',
    logo: tableauLogo,
  },
  {
    name: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    type: 'AI-900',
    year: '2025',
    logo: microsoftLogo,
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    type: 'Certified Practitioner',
    year: '2025',
    logo: amazonLogo,
  },
];

const certDescription = "Certifications that recognize my expertise in analytics, cloud, and data visualization.";

const SvgPlaceholder = ({ className = "" }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="4" y="6" width="24" height="20" rx="4" fill="#64748b" />
    <rect x="8" y="10" width="16" height="2.5" rx="1.2" fill="#cbd5e1" />
    <rect x="8" y="15" width="10" height="2" rx="1" fill="#cbd5e1" />
    <rect x="8" y="19" width="7" height="1.5" rx="0.75" fill="#cbd5e1" />
  </svg>
);

const CertificationsSection = () => {
  const [activeTab, setActiveTab] = useState('achievements');
  return (
    <motion.section id="certifications"
      className="w-full py-16 sm:py-24 bg-[#121212]/30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl sm:text-6xl md:text-8xl mb-4 text-center font-sfpro bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent leading-[1.3] pb-2">Certifications & Achievements</h2>
        <p className="text-base sm:text-lg text-center mb-8 sm:mb-10 text-blue-100 max-w-2xl mx-auto font-helvetica">{certDescription}</p>
        {/* Toggle UI */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex rounded-full overflow-hidden border border-cyan-700 transition-all w-full max-w-md">
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex-1 px-4 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === 'certifications'
                  ? 'bg-cyan-700 text-white'
                  : 'bg-transparent text-cyan-400 hover:bg-cyan-700/10'
              }`}
            >
              Certifications
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`flex-1 px-4 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === 'achievements'
                  ? 'bg-cyan-700 text-white'
                  : 'bg-transparent text-cyan-400 hover:bg-cyan-700/10'
              }`}
            >
              Achievements
            </button>
          </div>
        </div>
        {/* Content based on active tab */}
        {activeTab === 'certifications' ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } }
            }}
          >
            {certifications.map(cert => (
              <motion.div
                key={cert.name}
                className="bg-[#121212]/30 rounded-xl p-4 sm:p-6 border border-slate-700/50 min-h-[240px] sm:min-h-[270px] h-full flex flex-col justify-between"
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                tabIndex={0}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0, 180, 255, 0.15)' }}
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  {/* Logo */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded flex items-center justify-center">
                    {cert.logo ? (
                      cert.issuer === 'Tableau' ? (
                        <img src={cert.logo} alt={cert.issuer + ' logo'} style={{ height: '36px', maxWidth: '60px', width: 'auto', borderRadius: '0.375rem', paddingLeft: 4, paddingRight: 4 }} />
                      ) : (
                        <img src={cert.logo} alt={cert.issuer + ' logo'} className="h-9 w-9 sm:h-11 sm:w-11 object-contain rounded" />
                      )
                    ) : (
                      <SvgPlaceholder className="w-9 h-9 sm:w-11 sm:h-11" />
                    )}
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  {/* Title */}
                  <div className="font-bold text-white text-lg sm:text-xl mb-2 sm:mb-3 mt-1 leading-tight">{cert.name}</div>
                  {/* Issuer */}
                  <div className="font-semibold text-cyan-300 text-sm sm:text-base mb-1">{cert.issuer}</div>
                  {/* Type */}
                  <div className="text-slate-200 text-sm sm:text-base mb-1">{cert.type}</div>
                </div>
                <div className="flex items-end justify-end mt-3 sm:mt-4">
                  <span className="text-slate-400 text-sm sm:text-base font-medium">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } }
            }}
          >
            {/* Achievement 1: Future Edelman Impact Award */}
            <motion.div
              className="bg-[#121212]/30 rounded-xl border border-slate-700/50 min-h-[300px] sm:min-h-[340px] h-full flex flex-col justify-between shadow-lg"
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              tabIndex={0}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0, 180, 255, 0.15)' }}
            >
              {/* Embedded Video */}
              <div className="w-full aspect-video rounded-t-xl overflow-hidden bg-black flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/llBVkrbu4IE?mute=1&autoplay=1"
                  title="Streamlining Supply Chain Dynamics — Empowering Agriculture, Empowering Efficiency"
                  frameBorder="0"
                  allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              {/* Card Content */}
              <div className="flex-1 flex flex-col justify-between bg-transparent p-4 sm:p-6">
                <div>
                  <div className="font-bold text-white text-xl sm:text-2xl mb-2 mt-2 leading-tight">Future Edelman Impact Award</div>
                  <div className="text-slate-300 text-sm sm:text-base mb-4">Won the prestigious Future Edelman Impact award for best Industry Practicum project of 2025 MS BAIM cohort.</div>
                </div>
                <div className="flex items-end justify-between mt-2">
                  <span className="text-cyan-300 text-base sm:text-lg font-medium">2025</span>
                  <a
                    href="https://business.purdue.edu/masters/programs/ms-business-analytics-and-information-management/experience/future-edelman.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all text-xs sm:text-sm font-semibold shadow"
                  >
                    <FaExternalLinkAlt className="text-sm sm:text-base" />
                    Award Website
                  </a>
                </div>
              </div>
            </motion.div>
            {/* Achievement 2: Crossroads Classic Analytics Challenge */}
            <motion.div
              className="bg-[#121212]/30 rounded-xl border border-slate-700/50 min-h-[300px] sm:min-h-[340px] h-full flex flex-col justify-between shadow-lg"
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              tabIndex={0}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0, 180, 255, 0.15)' }}
            >
              {/* CCAC Image */}
              <div className="w-full aspect-video rounded-t-xl overflow-hidden bg-slate-800">
                <img 
                  src={ccacImage} 
                  alt="Crossroads Classic Analytics Challenge" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Card Content */}
              <div className="flex-1 flex flex-col justify-between bg-transparent p-4 sm:p-6">
                <div>
                  <div className="font-bold text-white text-xl sm:text-2xl mb-2 mt-2 leading-tight">Winner - Crossroads Classic Analytics Challenge</div>
                  <div className="text-slate-300 text-sm sm:text-base mb-4">Won 1st place and best visualization in the graduate division of the 2025 CCAC challenge hosted by NCAA.</div>
                </div>
                <div className="flex items-end justify-between mt-2">
                  <span className="text-cyan-300 text-base sm:text-lg font-medium">2025</span>
                  <a
                    href="https://crossroadsclassicanalyticschallenge.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all text-xs sm:text-sm font-semibold shadow"
                  >
                    <FaExternalLinkAlt className="text-sm sm:text-base" />
                    Award Website
                  </a>
                </div>
              </div>
            </motion.div>
            {/* Achievement 3: ZS Outstanding Performer Award */}
            <motion.div
              className="bg-[#121212]/30 rounded-xl border border-slate-700/50 min-h-[300px] sm:min-h-[340px] h-full flex flex-col justify-between shadow-lg"
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              tabIndex={0}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0, 180, 255, 0.15)' }}
            >
              {/* ZS Image with White Background */}
              <div className="w-full aspect-video rounded-t-xl overflow-hidden bg-white flex items-center justify-center">
                <img 
                  src={zsImage} 
                  alt="ZS Associates" 
                  className="w-full h-full object-contain p-4"
                />
              </div>
              {/* Card Content */}
              <div className="flex-1 flex flex-col justify-between bg-transparent p-4 sm:p-6">
                <div>
                  <div className="font-bold text-white text-xl sm:text-2xl mb-2 mt-2 leading-tight">Outstanding Performer Appreciation Award</div>
                  <div className="text-slate-300 text-sm sm:text-base mb-4">Won multiple Outstanding Performer awards at ZS for mentorship of 5+ associates along with exemplary project delivery.</div>
                </div>
                <div className="flex items-end justify-between mt-2">
                  <span className="text-cyan-300 text-base sm:text-lg font-medium">2023</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default CertificationsSection; 