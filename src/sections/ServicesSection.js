import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaWater, FaBath, FaRecycle, FaFireExtinguisher, FaCogs } from 'react-icons/fa';

const services = [
  { icon: <FaCheckCircle className="text-4xl text-secondary" />, title: 'Plumbing & Sanitary Installations', desc: 'Complete plumbing and sanitary installation for all types of commercial and residential buildings with guaranteed precision.' },
  { icon: <FaWater className="text-4xl text-secondary" />, title: 'Water Supply & Drainage', desc: 'State-of-the-art design and implementation of highly efficient, leak-proof water supply and drainage systems.' },
  { icon: <FaBath className="text-4xl text-secondary" />, title: 'Premium Bathroom Fittings', desc: 'Expert fitting of luxury bathroom and kitchen fixtures, elevating the aesthetic and functionality of your space.' },
  { icon: <FaRecycle className="text-4xl text-secondary" />, title: 'Sewage & Waste Management', desc: 'Advanced sewage treatment plant setup and eco-friendly waste management solutions for modern infrastructure.' },
  { icon: <FaFireExtinguisher className="text-4xl text-secondary" />, title: 'Firefighting & Harvesting', desc: 'Robust installation of critical firefighting systems and sustainable rainwater harvesting setups.' },
  { icon: <FaCogs className="text-4xl text-secondary" />, title: 'Customized Solutions', desc: 'Tailored, innovative plumbing solutions engineered specifically to meet your unique architectural requirements.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const ServicesSection = () => (
  <section id="services" className="py-24 relative overflow-hidden bg-white">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block"
        >
          What We Do Best
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6"
        >
          Our Premium Services
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 font-body"
        >
          Delivering unparalleled quality and engineering excellence across every sanitation and plumbing project we undertake.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-card-hover transition-all duration-500 overflow-hidden"
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-secondary/10 group-hover:scale-110 transition-all duration-500 ease-out transform origin-left shadow-sm">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">{service.title}</h3>
              
              <p className="text-gray-600 font-body leading-relaxed flex-grow">
                {service.desc}
              </p>
              
              <div className="mt-6 flex items-center text-primary font-bold group-hover:text-secondary transition-colors">
                <span className="mr-2 text-sm uppercase tracking-wider">Learn More</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection; 