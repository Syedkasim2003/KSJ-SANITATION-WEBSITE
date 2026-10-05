import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/ksjlogo-navbar.png';

const navLinks = [
  { to: 'home', label: 'Home', isScroll: true },
  { to: 'about', label: 'About Us', isScroll: true },
  { to: 'services', label: 'Services', isScroll: true },
  { to: 'projects', label: 'Completed Work', isScroll: true },
  { path: '/ongoing-projects', label: 'Ongoing Projects', isScroll: false },
  { to: 'footer', label: 'Contact Us', isScroll: true },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled || !isHomePage ? 'py-2 bg-primary/95 backdrop-blur-md shadow-lg' : 'py-6 bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 rounded-full px-6 py-3 ${scrolled || !isHomePage ? 'glass-premium shadow-glass' : 'bg-transparent'}`}>

          {/* Logo Brand */}
          <RouterLink to="/" className="flex items-center gap-3">
            <motion.img
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
              src={logo} alt="KSJ Sanitation Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white object-contain shadow-md"
            />
            <span className={`font-bold text-xl md:text-2xl tracking-wide flex items-center ${scrolled || !isHomePage ? 'text-primary' : 'text-white drop-shadow-md'}`} style={{ lineHeight: 1 }}>
              KSJ <span className="text-secondary ml-1">SANITATION</span>
            </span>
          </RouterLink>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              if (link.isScroll && isHomePage) {
                return (
                  <ScrollLink
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={800}
                    spy={true}
                    offset={-100}
                    activeClass="text-secondary font-bold"
                    className={`cursor-pointer transition-all duration-300 font-medium hover:text-secondary relative group ${scrolled || !isHomePage ? 'text-primary' : 'text-white'}`}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </ScrollLink>
                );
              } else if (link.isScroll && !isHomePage) {
                return (
                  <RouterLink
                    key={link.to}
                    to="/"
                    className={`cursor-pointer transition-all duration-300 font-medium hover:text-secondary relative group ${scrolled || !isHomePage ? 'text-primary' : 'text-white'}`}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </RouterLink>
                );
              } else {
                const isActive = location.pathname === link.path;
                return (
                  <RouterLink
                    key={link.path}
                    to={link.path}
                    className={`transition-all duration-300 font-semibold relative group ${isActive ? 'text-secondary font-bold' : scrolled || !isHomePage ? 'text-primary' : 'text-white hover:text-secondary'
                      }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {link.label}
                      <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse"></span>
                    </span>
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </RouterLink>
                );
              }
            })}

            {isHomePage ? (
              <ScrollLink
                to="quote"
                smooth={true}
                duration={800}
                offset={-100}
                className="cursor-pointer btn-secondary !py-2 !px-6 !text-sm"
              >
                Get a Quote
              </ScrollLink>
            ) : (
              <RouterLink
                to="/#quote"
                className="cursor-pointer btn-secondary !py-2 !px-6 !text-sm"
              >
                Get a Quote
              </RouterLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full glass-premium"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-20 left-4 right-4 glass-premium rounded-3xl p-6 flex flex-col gap-3 shadow-elevated border border-white/50"
          >
            {navLinks.map((link) => {
              if (link.isScroll && isHomePage) {
                return (
                  <ScrollLink
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={800}
                    spy={true}
                    offset={-100}
                    activeClass="text-secondary font-bold bg-secondary/10"
                    className="cursor-pointer text-primary hover:text-secondary transition-all duration-300 px-4 py-3 rounded-2xl hover:bg-secondary/5 font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </ScrollLink>
                );
              } else if (link.isScroll && !isHomePage) {
                return (
                  <RouterLink
                    key={link.to}
                    to="/"
                    className="cursor-pointer text-primary hover:text-secondary transition-all duration-300 px-4 py-3 rounded-2xl hover:bg-secondary/5 font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </RouterLink>
                );
              } else {
                return (
                  <RouterLink
                    key={link.path}
                    to={link.path}
                    className="cursor-pointer text-primary font-bold hover:text-secondary transition-all duration-300 px-4 py-3 rounded-2xl bg-secondary/10 flex items-center justify-between"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs bg-secondary text-white px-2 py-0.5 rounded-full">ACTIVE</span>
                  </RouterLink>
                );
              }
            })}

            <RouterLink
              to="/#quote"
              className="cursor-pointer btn-primary text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Get a Quote
            </RouterLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;