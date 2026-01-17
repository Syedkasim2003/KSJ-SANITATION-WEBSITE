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
  <section id="projects" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-8 lg:mb-10 text-center">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-10 mb-4 md:mb-6 lg:mb-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="bg-grayish rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={true}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="h-40 sm:h-48 md:h-64 lg:h-80 w-full transition-all duration-300"
            >
              {project.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={project.title}
                    className="h-40 sm:h-48 md:h-64 lg:h-80 w-full object-cover object-center rounded-t-2xl border-b-4 border-primary/10 shadow-md transition-all duration-300"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="p-2 sm:p-3 md:p-5 lg:p-7 flex-1 flex flex-col">
              <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-dark mb-1">{project.title}</h3>
              <span className="text-xs md:text-sm lg:text-base text-primary mb-1 md:mb-2">{project.location}</span>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-dark/70 flex-1">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <a href="/projects" className="inline-block px-3 sm:px-4 md:px-6 lg:px-8 py-2 rounded-full bg-primary text-white font-semibold shadow hover:bg-accent transition-colors text-xs sm:text-sm md:text-base lg:text-lg">More Projects</a>
      </div>
    </div>
  </section>
);

export default ProjectsSection; 