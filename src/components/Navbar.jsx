import React, { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Certifications', to: 'certifications' },
  { name: 'Contact', to: 'contact' },
  { name: 'Resume', to: 'resume', external: true },
];

const Navbar = () => {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'certifications', 'contact'];
      let found = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 80 >= el.offsetTop) {
          found = id;
        }
      }
      setActive(found);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (to, external) => (e) => {
    if (external) return;
    e.preventDefault();
    const el = document.getElementById(to);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-md shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        <span className="text-2xl tracking-tight bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">Himanshu Sharma</span>
        <div className="flex-1"></div>
        <ul className="flex gap-8 text-base items-center">
          {navLinks.filter(link => !link.external).map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.to}`}
                onClick={handleNavClick(link.to, false)}
                className={`px-3 py-2 rounded font-medium transition ${active === link.to ? 'bg-[#4b2178] text-white' : 'text-white hover:bg-[#4b2178]'}`}
                aria-current={active === link.to ? 'page' : undefined}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={process.env.PUBLIC_URL + '/Himanshu_Sharma_Resume.pdf'}
          className="ml-8 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 bg-gradient-to-r from-pink-400 to-yellow-400 text-white shadow hover:from-pink-300 hover:to-yellow-300 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiDownload className="text-lg" />
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar; 