import React from 'react';
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
  <section id="services" className="py-20 bg-grayish">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-8 lg:mb-10 text-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8 lg:gap-10">
        {services.map((service, idx) => (
          <div key={service.title} className="bg-white rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            {service.icon}
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-dark mb-1 md:mb-2">{service.title}</h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-dark/70">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection; 