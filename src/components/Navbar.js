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
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4 md:px-8 py-2">
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
          <img src={logo} alt="KSJ Sanitation Logo" className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14 rounded-full bg-white object-contain" />
          <span className="text-primary font-bold text-base sm:text-lg md:text-2xl tracking-wide flex items-center" style={{lineHeight: 1}}>
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
              activeClass="text-accent font-semibold"
              className="cursor-pointer text-dark hover:text-primary transition-colors px-2 py-1 rounded text-sm md:text-base lg:text-lg"
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 shadow-lg px-4 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={link.to === 'footer' ? 0 : -70}
              activeClass="text-accent font-semibold"
              className="cursor-pointer text-dark hover:text-primary transition-colors px-2 py-1 rounded"
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