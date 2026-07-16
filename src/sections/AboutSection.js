import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaUserCheck, FaBriefcase, FaUsers, FaTrophy, FaCalendarAlt, FaFaucet, FaTools, FaShower, FaWrench, FaToilet } from 'react-icons/fa';

const stats = [
  { icon: <FaUserCheck className="text-secondary" />, label: 'Happy Clients', end: 200, suffix: '+' },
  { icon: <FaBriefcase className="text-secondary" />, label: 'Projects', end: 200, suffix: '+' },
  { icon: <FaUsers className="text-secondary" />, label: 'Expert Staff', end: 90, suffix: '+' },
  { icon: <FaTrophy className="text-secondary" />, label: 'Awards Won', end: 50, suffix: '+' },
  { icon: <FaCalendarAlt className="text-secondary" />, label: 'Years Exp', end: 30, suffix: '+' },
];

const features = [
  'Expert and certified professionals',
  'Prompt and reliable service',
  'Transparent and honest pricing',
  'Modern tools and technology',
  'Customer-first approach',
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative Background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 mix-blend-multiply"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text & Features */}
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block"
            >
              Discover KSJ Sanitation
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6 leading-tight"
            >
              Setting the Standard in <span className="text-gradient">Plumbing.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 font-body leading-relaxed mb-10"
            >
              KSJ Sanitation is a leading provider of premium plumbing and sanitary solutions. With decades of rigorous engineering experience, we ensure every project is executed to absolute perfection, utilizing modern tools and a deeply customer-centric approach.
            </motion.p>

            <div className="space-y-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 text-secondary">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-lg text-primary font-semibold">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <a href="#services" className="btn-secondary inline-flex">Explore Our Services</a>
            </motion.div>
          </div>

          {/* Right Column: Premium Stats Grid */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-gray-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${idx === 4 ? 'col-span-2 text-center flex flex-col items-center justify-center' : ''}`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl mb-4 text-secondary ${idx === 4 ? 'mx-auto' : ''}`}>
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black text-primary mb-1">
                    <CountUp end={stat.end} duration={2.5} enableScrollSpy />{stat.suffix}
                  </div>
                  <div className="text-gray-500 font-bold uppercase tracking-wide text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection; 