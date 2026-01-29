import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaWater, FaBath, FaRecycle, FaFireExtinguisher, FaCogs } from 'react-icons/fa';

const services = [
  { icon: <FaCheckCircle className="text-3xl text-accent mb-2" />, title: 'Plumbing & Sanitary Installations', desc: 'Complete plumbing and sanitary installation for all types of buildings.' },
  { icon: <FaWater className="text-3xl text-accent mb-2" />, title: 'Water Supply & Drainage Systems', desc: 'Design and implementation of efficient water supply and drainage systems.' },
  { icon: <FaBath className="text-3xl text-accent mb-2" />, title: 'Bathroom & Kitchen Fittings', desc: 'Expert fitting of bathroom and kitchen fixtures and accessories.' },
  { icon: <FaRecycle className="text-3xl text-accent mb-2" />, title: 'Sewage Treatment & Waste Management', desc: 'Sewage treatment plant setup and waste management solutions.' },
  { icon: <FaFireExtinguisher className="text-3xl text-accent mb-2" />, title: 'Firefighting & Rainwater Harvesting Systems', desc: 'Installation of firefighting and rainwater harvesting systems.' },
  { icon: <FaCogs className="text-3xl text-accent mb-2" />, title: 'Customized Plumbing Solutions', desc: 'Tailored plumbing solutions to meet your unique requirements.' },
];

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-6 md:mb-12 text-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            className="bg-white rounded-2xl shadow-card p-6 md:p-8 flex flex-col items-center text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-t-4 border-secondary group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-dark mb-3">{service.title}</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection; 