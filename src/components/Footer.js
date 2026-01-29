import React from 'react';
import logo from '../assets/ksjlogo-navbar.png';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const infoCards = [
  {
    icon: <FaMapMarkerAlt size={32} className="text-white" />,
    title: 'Head Office:',
    content: (
      <>
        S Alangulam, Madurai
      </>
    ),
    href: 'https://www.google.com/maps/search/?api=1&query=X449%2BFJ7%2C%20S%20Alangulam%2C%20Madurai%2C%20Tamil%20Nadu%20625017',
  },
  {
    icon: <FaPhoneAlt size={32} className="text-white" />,
    title: 'Contact Details:',
    content: (
      <>
        <a
          href="tel:7708235555"
          className="text-accent font-bold text-xl hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded"
        >
          7708235555
        </a>
      </>
    ),
  },
  {
    icon: <FaEnvelope size={32} className="text-white" />,
    title: 'Email Us:',
    content: (
      <>
        <a href="mailto:ksjsanitation06@gmail.com" className="text-accent font-bold text-lg hover:underline">ksjsanitation06@gmail.com</a>
      </>
    ),
  },
];

const Footer = () => (
  <footer id="footer" className="bg-gradient-to-br from-primary to-primary-dark pt-8 pb-6 mt-16 md:mt-24 text-white overflow-hidden">
    {/* Info Cards */}
    <div className="w-full flex justify-center z-10 mb-6 md:mb-10">
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-6 w-full max-w-5xl px-1 sm:px-2 md:px-4">
        {infoCards.map((card, idx) => {
          const Container = card.href ? 'a' : 'div';
          return (
            <Container
              key={idx}
              href={card.href}
              target={card.href ? '_blank' : undefined}
              rel={card.href ? 'noopener noreferrer' : undefined}
              className="flex-1 bg-white rounded-2xl shadow-elevated flex flex-col items-center py-4 sm:py-6 md:py-8 px-3 sm:px-5 md:px-8 text-center border-t-4 border-secondary min-w-[140px] sm:min-w-[180px] md:min-w-[240px] max-w-xs sm:max-w-sm mx-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated-hover"
            >
              <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-full p-3 sm:p-4 md:p-5 shadow-card mb-2 sm:mb-3">
                {card.icon}
              </div>
              <div className="mt-1 sm:mt-2">
                <h4 className="font-bold text-sm sm:text-base md:text-xl text-primary mb-2 sm:mb-3">{card.title}</h4>
                <div className="text-dark text-xs sm:text-sm md:text-base">{card.content}</div>
              </div>
            </Container>
          );
        })}
      </div>
    </div>

    {/* Main Footer Content */}
    <div className="flex flex-col items-center justify-center mt-2">
      <div className="flex items-center justify-center mb-1 sm:mb-2 gap-1 sm:gap-2 md:gap-3">
        <img src={logo} alt="KSJ Sanitation Logo" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-white object-contain shadow-card" />
        <h2 className="font-extrabold text-base sm:text-xl md:text-3xl tracking-wide flex items-center">
          KSJ <span className="text-accent-light ml-1">SANITATION</span>
        </h2>
      </div>
      <p className="max-w-xs sm:max-w-md md:max-w-xl text-center text-xs sm:text-base md:text-lg mb-1 sm:mb-2 md:mb-4 opacity-90">
        Our plumbing contractors provide courteous, friendly, affordable, and effective residential plumbing services.
      </p>
      <div className="flex gap-2 sm:gap-4 md:gap-6 mb-1 sm:mb-2 md:mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><FaFacebook size={20} className="sm:size-6 md:size-8" /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><FaInstagram size={20} className="sm:size-6 md:size-8" /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><FaTwitter size={20} className="sm:size-6 md:size-8" /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><FaLinkedin size={20} className="sm:size-6 md:size-8" /></a>
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm text-white/70 opacity-80 mt-1 sm:mt-2">
        &copy; {new Date().getFullYear()} KSJ Sanitation. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer; 