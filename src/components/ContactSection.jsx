import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contactCards = [
  {
    icon: <FaLinkedin className="text-5xl mb-4 text-white" />,
    title: 'LinkedIn',
    description: 'Connect with me on LinkedIn',
    button: 'Connect',
    link: 'https://www.linkedin.com/in/himanshu-sharma9930/',
    buttonType: 'link',
  },
  {
    icon: <FaEnvelope className="text-5xl mb-4 text-white" />,
    title: 'Email',
    description: 'Get in touch via email',
    button: 'Send Email',
    link: 'mailto:himanshu.sharma9930@gmail.com',
    buttonType: 'email',
  },
  {
    icon: <FaGithub className="text-5xl mb-4 text-white" />,
    title: 'GitHub',
    description: 'Explore my code and projects',
    button: 'Connect',
    link: 'https://github.com/himanshu9930',
    buttonType: 'link',
  },
];

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const ContactSection = () => (
  <motion.section id="contact"
    className="w-full py-24 bg-[#1a1a1a]/30"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className="max-w-6xl mx-auto">
      <h2 className="text-6xl md:text-8xl mb-4 text-center font-sfpro bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent leading-[1.3] pb-2">Get In Touch</h2>
      <p className="text-lg text-center mb-10 text-blue-100 max-w-2xl mx-auto font-helvetica">Let's connect! Reach out for collaborations, opportunities, or just to say hello.</p>
      <motion.div
        key="contact-cards"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {contactCards.map((card) => (
          <motion.div
            key={card.title}
            className="bg-[#121212]/60 rounded-2xl p-10 flex flex-col items-center shadow-xl border border-white/10 backdrop-blur-md hover:shadow-2xl transition-all min-w-[320px] md:min-w-[340px] lg:min-w-[370px] max-w-full"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ boxShadow: '0 8px 32px 0 rgba(0, 180, 255, 0.15)' }}
            tabIndex={0}
          >
            {card.icon}
            <div className="text-2xl font-bold text-white mb-2">{card.title}</div>
            <div className="text-gray-300 text-lg mb-6 text-center">{card.description}</div>
            {card.button && card.link && (
              <a
                href={card.link}
                target={card.buttonType === 'link' ? '_blank' : undefined}
                rel={card.buttonType === 'link' ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-700 to-blue-500 text-white font-semibold shadow hover:from-cyan-600 hover:to-blue-400 transition text-lg border border-white/20"
              >
                <FaExternalLinkAlt className="text-base" />
                {card.button}
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default ContactSection; 