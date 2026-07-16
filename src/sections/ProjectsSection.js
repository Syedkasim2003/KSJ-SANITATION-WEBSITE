import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Hotel North Gate',
    images: [
      require('../assets/hotel-northgate.jpg'),
      require('../assets/hotel-north-gate-madurai-pic-61.jpg'),
      require('../assets/northgate-toilet.webp'),
    ],
    location: 'Madurai',
    desc: 'Installation of 32 premium toilets with full sanitary works, ensuring luxury hygiene standards for superior guest experiences.',
  },
  {
    title: 'Pryme Arc Apartment',
    images: [
      require('../assets/prime-arc-1.png'),
      require('../assets/prime-arc-2.png'),
      'https://images.jdmagicbox.com/comp/madurai/k9/0452px452.x452.220306213613.i4k9/catalogue/pryme-ark-surya-nagar-madurai-residential-buildings-9rx4vmhp40.jpg',
    ],
    location: 'Madurai',
    desc: 'Complete installation of 24 toilets with state-of-the-art sanitary works, bringing modern plumbing to residential spaces.',
  },
  {
    title: 'NPM Mahal',
    images: [
      require('../assets/npm-mahal-1.jpg'),
      require('../assets/npm-mahal-2.jpg'),
      require('../assets/npm-mahal-3.jpg'),
    ],
    location: 'Theni',
    desc: 'Comprehensive sanitary and plumbing overhaul for a large-scale event venue, optimizing water flow and waste management.',
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-grayish relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Our Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-primary"
          >
            Featured Projects
          </motion.h2>
        </div>
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
        >
          <a href="/projects" className="btn-secondary group">
            View All Work
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="group relative h-[450px] rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer"
          >
            <Swiper
              modules={[Navigation, Autoplay, EffectFade]}
              effect="fade"
              navigation={{
                nextEl: `.swiper-button-next-${idx}`,
                prevEl: `.swiper-button-prev-${idx}`,
              }}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="w-full h-full absolute inset-0"
            >
              {project.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`${project.title} - view ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                </SwiperSlide>
              ))}
              
              {/* Image Navigation Controls */}
              <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                <div className={`swiper-button-prev-${idx} w-10 h-10 rounded-full glass-premium flex items-center justify-center text-white hover:text-secondary hover:bg-white transition-all`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </div>
                <div className={`swiper-button-next-${idx} w-10 h-10 rounded-full glass-premium flex items-center justify-center text-white hover:text-secondary hover:bg-white transition-all`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </Swiper>
            
            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex flex-col justify-end h-full">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="inline-block px-3 py-1 rounded-full bg-secondary/20 backdrop-blur-md border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-wider mb-3">
                  {project.location}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-500 overflow-hidden font-body leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection; 