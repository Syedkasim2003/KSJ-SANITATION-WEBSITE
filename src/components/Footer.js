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
  },
  {
    icon: <FaPhoneAlt size={32} className="text-white" />,
    title: 'Phone Numbers:',
    content: (
      <>
        <span className="text-accent font-bold text-xl">7708235555</span><br />Emergency
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
  <footer className="bg-primary pt-4 pb-4 mt-10 md:mt-16 lg:mt-24 text-white overflow-hidden">
    {/* Info Cards */}
    <div className="w-full flex justify-center z-10 mb-4 md:mb-6 lg:mb-8">
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-6 w-full max-w-5xl px-1 sm:px-2 md:px-4">
        {infoCards.map((card, idx) => (
          <div
            key={idx}
            className="flex-1 bg-white rounded-xl shadow-lg flex flex-col items-center py-2 sm:py-4 md:py-6 px-2 sm:px-4 md:px-6 text-center border-t-4 border-primary min-w-[120px] sm:min-w-[160px] md:min-w-[220px] max-w-xs sm:max-w-sm mx-auto"
          >
            <div className="bg-primary rounded-full p-2 sm:p-3 md:p-4 shadow-md mb-1 sm:mb-2">
              {card.icon}
            </div>
            <div className="mt-1 sm:mt-2">
              <h4 className="font-bold text-xs sm:text-base md:text-lg text-primary mb-1 sm:mb-2">{card.title}</h4>
              <div className="text-dark text-xs sm:text-sm md:text-base">{card.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Main Footer Content */}
    <div className="flex flex-col items-center justify-center mt-2">
      <div className="flex items-center justify-center mb-1 sm:mb-2 gap-1 sm:gap-2 md:gap-3">
        <img src={logo} alt="KSJ Sanitation Logo" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full bg-white object-contain" />
        <h2 className="font-extrabold text-base sm:text-xl md:text-3xl tracking-wide flex items-center">
          KSJ <span className="text-accent ml-1">SANITATION</span>
        </h2>
      </div>
      <p className="max-w-xs sm:max-w-md md:max-w-xl text-center text-xs sm:text-base md:text-lg mb-1 sm:mb-2 md:mb-4 opacity-90">
        Our plumbing contractors provide courteous, friendly, affordable, and effective residential plumbing services.
      </p>
      <div className="flex gap-2 sm:gap-4 md:gap-6 mb-1 sm:mb-2 md:mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><FaFacebook size={20} className="sm:size-6 md:size-8"/></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><FaInstagram size={20} className="sm:size-6 md:size-8"/></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><FaTwitter size={20} className="sm:size-6 md:size-8"/></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><FaLinkedin size={20} className="sm:size-6 md:size-8"/></a>
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm text-white/70 opacity-80 mt-1 sm:mt-2">
        &copy; {new Date().getFullYear()} KSJ Sanitation. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer; 