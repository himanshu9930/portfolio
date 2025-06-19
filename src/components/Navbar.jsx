import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaBars, FaTimes } from 'react-icons/fa';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); // Close mobile menu when clicking a link
    const el = document.getElementById(to);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-md shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        <span className="text-xl md:text-2xl tracking-tight bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">Himanshu Sharma</span>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex gap-8 text-base items-center">
            {navLinks.filter(link => !link.external).map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.to}`}
                  onClick={handleNavClick(link.to, false)}
                  className={`px-3 py-2 rounded transition ${active === link.to ? 'bg-cyan-700 text-white' : 'text-white hover:bg-cyan-700'}`}
                  aria-current={active === link.to ? 'page' : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://drive.google.com/file/d/1vTIPxtVyDOQnfDZDdBNpaGABHsO5CtQG/view?usp=sharing"
            className="ml-8 px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-r from-cyan-700 to-blue-500 text-white shadow hover:from-cyan-600 hover:to-blue-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="text-lg" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1a1a1a]/95 backdrop-blur-md border-t border-white/10">
          <ul className="px-4 py-4 space-y-2">
            {navLinks.filter(link => !link.external).map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.to}`}
                  onClick={handleNavClick(link.to, false)}
                  className={`block px-4 py-3 rounded-lg transition ${
                    active === link.to 
                      ? 'bg-cyan-700 text-white' 
                      : 'text-white hover:bg-cyan-700/20'
                  }`}
                  aria-current={active === link.to ? 'page' : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://drive.google.com/file/d/1vTIPxtVyDOQnfDZDdBNpaGABHsO5CtQG/view?usp=sharing"
                className="block px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-700 to-blue-500 text-white shadow hover:from-cyan-600 hover:to-blue-400 transition flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="text-sm" />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 