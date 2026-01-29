import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaUserCheck, FaBriefcase, FaUsers, FaTrophy, FaCalendarAlt, FaFaucet, FaTools, FaShower, FaWrench, FaToilet } from 'react-icons/fa';

const stats = [
  { icon: <FaUserCheck className="text-accent" />, label: 'Happy Clients', end: 200, suffix: '+' },
  { icon: <FaBriefcase className="text-accent" />, label: 'Project', end: 200, suffix: '+' },
  { icon: <FaUsers className="text-accent" />, label: 'Expert Staffs', end: 90, suffix: '+' },
  { icon: <FaTrophy className="text-accent" />, label: 'Win Awards', end: 50, suffix: '+' },
  { icon: <FaCalendarAlt className="text-accent" />, label: 'Years of Experience', end: 30, suffix: '+' },
];

const features = [
  'Expert and certified professionals',
  'Prompt and reliable service',
  'Transparent pricing',
  'Modern tools and technology',
  'Customer-first approach',
];

const AboutSection = () => {
  // Split stats for 2-2-1 layout
  const firstRow = stats.slice(0, 2);
  const secondRow = stats.slice(2, 4);
  const lastRow = stats.slice(4);

  return (
    <section id="about" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 lg:px-12">
        {/* Creative Icon Row */}
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-6 animate-fade-in flex-wrap">
          <FaFaucet className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-secondary drop-shadow-lg" />
          <FaTools className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-primary drop-shadow-lg" />
          <FaShower className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-secondary drop-shadow-lg" />
          <FaWrench className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-primary drop-shadow-lg" />
          <FaToilet className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-secondary drop-shadow-lg" />
        </div>
        {/* About Us Heading and Description */}
        <div className="mb-8 md:mb-12 lg:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4 md:mb-6 tracking-tight drop-shadow-lg">About Us</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto font-medium bg-white/80 backdrop-blur-sm rounded-2xl px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-6 shadow-card border-2 border-secondary/10">
            KSJ Sanitation is a leading provider of plumbing and sanitary solutions, dedicated to delivering quality, reliability, and customer satisfaction. With decades of experience, our expert team ensures every project is completed to the highest standards, using modern tools and a customer-first approach.
          </p>
        </div>
        {/* Decorative SVG Accent */}
        <div className="relative overflow-x-hidden">
          <svg className="hidden md:block absolute -top-10 -right-10 w-40 h-40 lg:w-64 lg:h-64 opacity-5 text-secondary pointer-events-none" fill="currentColor" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" /></svg>
          {/* Left: Why Choose Us List */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 items-center relative overflow-hidden bg-white/90 backdrop-blur-sm rounded-3xl shadow-elevated border-2 border-secondary/10 p-6 sm:p-8 md:p-14 lg:p-20">
            <div className="flex-1 min-w-[180px] sm:min-w-[220px] md:min-w-[280px] lg:min-w-[320px]">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-8 border-b-4 border-secondary pb-3 inline-block">Why Choose Us?</h3>
              <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                {features.map((feature, idx) => (
                  <motion.li
                    key={feature}
                    className="flex items-center text-base md:text-lg lg:text-xl text-gray-700 font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <svg className="w-6 h-6 mr-4 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            {/* Right: Stats with 2-2-1 Card Layout */}
            <div className="flex-1 w-full flex flex-col items-center justify-center">
              <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-white to-secondary-50 rounded-3xl shadow-card-hover border-2 border-secondary/20 p-8 md:p-12 flex flex-col gap-6">
                {/* First row: 2 cards */}
                <div className="flex flex-row gap-6 justify-center">
                  {firstRow.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      className="flex-1 min-w-[120px] flex flex-col items-center py-5 px-3 bg-white rounded-2xl shadow-card border-l-4 border-secondary"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.15 }}
                      viewport={{ once: false }}
                    >
                      <div className="text-4xl mb-3">{stat.icon}</div>
                      <span className="text-4xl font-extrabold text-primary">
                        <CountUp end={stat.end} duration={2} enableScrollSpy />{stat.suffix}
                      </span>
                      <span className="text-sm md:text-base text-gray-600 text-center mt-2 font-semibold">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
                {/* Second row: 2 cards */}
                <div className="flex flex-row gap-6 justify-center">
                  {secondRow.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      className="flex-1 min-w-[120px] flex flex-col items-center py-5 px-3 bg-white rounded-2xl shadow-card border-l-4 border-secondary"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.15 }}
                      viewport={{ once: false }}
                    >
                      <div className="text-4xl mb-3">{stat.icon}</div>
                      <span className="text-4xl font-extrabold text-primary">
                        <CountUp end={stat.end} duration={2} enableScrollSpy />{stat.suffix}
                      </span>
                      <span className="text-sm md:text-base text-gray-600 text-center mt-2 font-semibold">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
                {/* Third row: 1 card centered */}
                <div className="flex flex-row justify-center">
                  {lastRow.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      className="flex-1 max-w-[200px] flex flex-col items-center py-5 px-3 bg-white rounded-2xl shadow-card border-l-4 border-secondary"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.15 }}
                      viewport={{ once: false }}
                    >
                      <div className="text-4xl mb-3">{stat.icon}</div>
                      <span className="text-4xl font-extrabold text-primary">
                        <CountUp end={stat.end} duration={2} enableScrollSpy />{stat.suffix}
                      </span>
                      <span className="text-sm md:text-base text-gray-600 text-center mt-2 font-semibold">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 