import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import logo from '../assets/ksjlogo-navbar.png';

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About Us' },
  { to: 'services', label: 'Services' },
  { to: 'projects', label: 'Projects' },
  { to: 'footer', label: 'Contact Us' },
  { to: 'quote', label: 'Get a Quote' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-lg shadow-elevated border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4 md:px-8 py-3">
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
          <img src={logo} alt="KSJ Sanitation Logo" className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14 rounded-full bg-white object-contain ring-2 ring-primary/10 shadow-sm" />
          <span className="text-primary font-bold text-base sm:text-lg md:text-2xl tracking-wide flex items-center" style={{ lineHeight: 1 }}>
            KSJ <span className="text-accent ml-1">SANITATION</span>
          </span>
        </div>
        <div className="hidden lg:flex gap-2 sm:gap-4 md:gap-6">
          {navLinks.map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={link.to === 'footer' ? 0 : -70}
              activeClass="text-accent font-semibold border-b-2 border-accent"
              className="cursor-pointer text-dark hover:text-primary transition-all duration-300 px-3 py-2 rounded-lg hover:bg-primary-50 text-sm md:text-base lg:text-lg font-medium"
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} className="text-primary" /> : <Menu size={28} className="text-primary" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md shadow-elevated border-t border-gray-100 px-4 py-6 flex flex-col gap-3">
          {navLinks.map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={link.to === 'footer' ? 0 : -70}
              activeClass="text-accent font-semibold bg-accent-50"
              className="cursor-pointer text-dark hover:text-primary transition-all duration-300 px-4 py-3 rounded-lg hover:bg-primary-50 font-medium border-l-4 border-transparent hover:border-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 