import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/ksjlogo-navbar.png';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const infoCards = [
  {
    icon: <FaMapMarkerAlt size={24} className="text-secondary" />,
    title: 'Head Office',
    content: 'S Alangulam, Madurai',
    href: 'https://www.google.com/maps/search/?api=1&query=X449%2BFJ7%2C%20S%20Alangulam%2C%20Madurai%2C%20Tamil%20Nadu%20625017',
  },
  {
    icon: <FaPhoneAlt size={24} className="text-secondary" />,
    title: 'Contact Details',
    content: '+91 7708235555',
    href: 'tel:7708235555'
  },
  {
    icon: <FaEnvelope size={24} className="text-secondary" />,
    title: 'Email Us',
    content: 'ksjsanitation06@gmail.com',
    href: 'mailto:ksjsanitation06@gmail.com'
  },
];

const Footer = () => (
  <footer id="footer" className="bg-primary text-white pt-24 pb-8 relative overflow-hidden">
    {/* Abstract background */}
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary pointer-events-none z-0"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 -mt-32">
        {infoCards.map((card, idx) => {
          const Container = card.href ? 'a' : 'div';
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
            >
              <Container
                href={card.href}
                target={card.href ? '_blank' : undefined}
                rel={card.href ? 'noopener noreferrer' : undefined}
                className="glass-premium block rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h4 className="font-bold text-xl text-primary mb-2">{card.title}</h4>
                <p className="text-gray-600 font-body font-medium">{card.content}</p>
              </Container>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10 pt-16 pb-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-6">
            <img src={logo} alt="KSJ Sanitation Logo" className="h-14 w-14 rounded-full bg-white object-contain shadow-lg" />
            <h2 className="font-black text-3xl tracking-wide">
              KSJ <span className="text-secondary">SANITATION</span>
            </h2>
          </div>
          <p className="text-gray-400 font-body leading-relaxed max-w-md mb-8">
            Setting the industry standard for premium plumbing and sanitary solutions. We build lasting infrastructure with precision and excellence.
          </p>
          <div className="flex gap-4">
            {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 text-gray-400">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4 font-body text-gray-400">
              <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-secondary transition-colors">Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4 font-body text-gray-400">
              <li><a href="#" className="hover:text-secondary transition-colors">Plumbing</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Sanitary Setup</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Drainage</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Maintenance</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-4 font-body text-gray-400">
              <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-white/10 text-gray-500 font-body text-sm">
        &copy; {new Date().getFullYear()} KSJ Sanitation. All rights reserved. Designed for Excellence.
      </div>
    </div>
  </footer>
);

export default Footer; 