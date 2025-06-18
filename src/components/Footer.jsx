import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

const socials = [
  {
    icon: <FaLinkedin className="text-xl" />,
    link: 'https://www.linkedin.com/in/himanshu-sharma9930/',
    label: 'LinkedIn',
  },
  {
    icon: <FaGithub className="text-xl" />,
    link: 'https://github.com/himanshu9930',
    label: 'GitHub',
  },
  {
    icon: <FaEnvelope className="text-xl" />,
    link: 'mailto:himanshu.sharma9930@gmail.com',
    label: 'Email',
  },
];

const Footer = () => (
  <footer className="w-full py-8 px-6 bg-transparent flex flex-col md:flex-row justify-between items-center border-t border-white/10 mt-12">
    <div className="text-white/40 text-sm md:text-base text-left w-full md:w-auto mb-4 md:mb-0">
      &copy; All rights reserved. {currentYear} Himanshu Sharma.
    </div>
    <div className="flex gap-6 w-full md:w-auto justify-center md:justify-end">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="text-white/60 hover:text-cyan-400 transition text-xl"
        >
          {s.icon}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer; 