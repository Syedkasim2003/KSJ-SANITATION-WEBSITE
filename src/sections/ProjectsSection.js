import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
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
    desc: 'Successfully completed the installation of 32 toilets along with full sanitary works at Hotel North Gate, ensuring premium hygiene and plumbing standards for a superior guest experience.',
  },
  {
    title: 'Pryme Arc Apartment',
    images: [
      require('../assets/prime-arc-1.png'),
      require('../assets/prime-arc-2.png'),
      'https://images.jdmagicbox.com/comp/madurai/k9/0452px452.x452.220306213613.i4k9/catalogue/pryme-ark-surya-nagar-madurai-residential-buildings-9rx4vmhp40.jpg',
    ],
    location: 'Madurai',
    desc: 'Successfully completed the installation of 24 toilets along with full sanitary works, ensuring high-quality plumbing and modern hygiene standards.',
  },
  {
    title: 'NPM Mahal',
    images: [
      require('../assets/npm-mahal-1.jpg'),
      require('../assets/npm-mahal-2.jpg'),
      require('../assets/npm-mahal-3.jpg'),
    ],
    location: 'Theni',
    desc: 'Completed comprehensive sanitary and plumbing works at NPM Mahal, Theni, ensuring high-quality installations for a seamless and efficient facility.',
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-8 md:mb-14 text-center">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="bg-white rounded-3xl shadow-card overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 border-2 border-gray-100 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={true}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="h-48 sm:h-56 md:h-72 w-full transition-all duration-300"
            >
              {project.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={project.title}
                    className="h-48 sm:h-56 md:h-72 w-full object-cover object-center border-b-4 border-secondary/20 transition-all duration-300 group-hover:scale-105"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-dark mb-2">{project.title}</h3>
              <span className="text-sm md:text-base text-secondary font-semibold mb-3">{project.location}</span>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 flex-1 leading-relaxed">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <a href="/projects" className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold shadow-elevated hover:shadow-elevated-hover transition-all duration-300 hover:scale-105 text-base md:text-lg">View All Projects</a>
      </div>
    </div>
  </section>
);

export default ProjectsSection; 