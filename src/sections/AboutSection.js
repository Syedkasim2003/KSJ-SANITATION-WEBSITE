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
    <section id="about" className="py-10 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-primary/10">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 lg:px-12">
        {/* Creative Icon Row */}
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mb-4 animate-fade-in flex-wrap">
          <FaFaucet className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-accent drop-shadow" />
          <FaTools className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-primary drop-shadow" />
          <FaShower className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-accent drop-shadow" />
          <FaWrench className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-primary drop-shadow" />
          <FaToilet className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-accent drop-shadow" />
        </div>
        {/* About Us Heading and Description */}
        <div className="mb-6 md:mb-10 lg:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-2 md:mb-4 tracking-tight drop-shadow-lg">About Us</h2>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-700 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto font-medium bg-white/60 rounded-xl px-2 sm:px-4 md:px-8 py-2 sm:py-3 md:py-4 shadow-md border border-primary/10">
            KSJ Sanitation is a leading provider of plumbing and sanitary solutions, dedicated to delivering quality, reliability, and customer satisfaction. With decades of experience, our expert team ensures every project is completed to the highest standards, using modern tools and a customer-first approach.
          </p>
        </div>
        {/* Decorative SVG Accent (optional, keep for extra creativity) */}
        <div className="relative overflow-x-hidden">
          <svg className="hidden md:block absolute -top-10 -right-10 w-32 md:w-40 h-32 md:h-40 lg:w-56 lg:h-56 opacity-10 text-accent pointer-events-none" fill="currentColor" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" /></svg>
          {/* Left: Why Choose Us List */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16 items-center relative overflow-hidden bg-white/70 rounded-3xl shadow-2xl p-3 sm:p-6 md:p-12 lg:p-16">
            <div className="flex-1 min-w-[140px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[260px]">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-2 md:mb-6">Why Choose Us?</h3>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                {features.map((feature, idx) => (
                  <motion.li
                    key={feature}
                    className="flex items-center text-lg text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <svg className="w-5 h-5 mr-3 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            {/* Right: Stats with 2-2-1 Card Layout */}
            <div className="flex-1 w-full flex flex-col items-center justify-center">
              <div className="w-full max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-xl p-6 md:p-10 flex flex-col gap-4">
                {/* First row: 2 cards */}
                <div className="flex flex-row gap-4 justify-center">
                  {firstRow.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      className="flex-1 min-w-[120px] flex flex-col items-center py-4"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.15 }}
                      viewport={{ once: false }}
                    >
                      <div className="text-4xl mb-2">{stat.icon}</div>
                      <span className="text-3xl font-extrabold text-primary">
                        <CountUp end={stat.end} duration={2} enableScrollSpy />{stat.suffix}
                      </span>
                      <span className="text-base text-gray-600 text-center mt-1 font-medium">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
                {/* Second row: 2 cards */}
                <div className="flex flex-row gap-4 justify-center">
                  {secondRow.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      className="flex-1 min-w-[120px] flex flex-col items-center py-4"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.15 }}
                      viewport={{ once: false }}
                    >
                      <div className="text-4xl mb-2">{stat.icon}</div>
                      <span className="text-3xl font-extrabold text-primary">
                        <CountUp end={stat.end} duration={2} enableScrollSpy />{stat.suffix}
                      </span>
                      <span className="text-base text-gray-600 text-center mt-1 font-medium">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
                {/* Third row: 1 card centered */}
                <div className="flex flex-row justify-center">
                  {lastRow.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      className="flex-1 min-w-[120px] flex flex-col items-center py-4"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.15 }}
                      viewport={{ once: false }}
                    >
                      <div className="text-4xl mb-2">{stat.icon}</div>
                      <span className="text-3xl font-extrabold text-primary">
                        <CountUp end={stat.end} duration={2} enableScrollSpy />{stat.suffix}
                      </span>
                      <span className="text-base text-gray-600 text-center mt-1 font-medium">{stat.label}</span>
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