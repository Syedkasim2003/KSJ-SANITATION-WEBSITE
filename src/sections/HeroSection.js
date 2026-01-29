import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import main1 from '../assets/main-1.webp';
import main2 from '../assets/main-2.jpg';
import main3 from '../assets/main-3.jpg';

const sliderImages = [
  main1,
  main2,
  main3,
];

const HeroSection = () => (
  <section id="home" className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] scroll-mt-20">
    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      navigation={true}
      slidesPerView={1}
      className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh]"
    >
      {sliderImages.map((img, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
            <img
              src={img}
              alt="Plumbing Landscape"
              className={`w-full h-full object-cover ${idx === 1 ? 'object-bottom' : 'object-center'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
            {/* Overlayed Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2 sm:px-4 md:px-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-2xl mb-3 md:mb-6 leading-tight"
              >
                Reliable Plumbing & Sanitary Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto mb-6 md:mb-10 drop-shadow-lg font-medium"
              >
                Professional, prompt, and trusted service for all your plumbing and sanitation needs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center w-full max-w-xs sm:max-w-none"
              >
                <motion.a
                  href="#quote"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(249, 115, 22, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 md:px-10 md:py-4 rounded-xl bg-gradient-to-r from-accent to-accent-dark text-white font-bold text-base md:text-lg lg:text-xl shadow-2xl transition-all duration-300 hover:from-accent-dark hover:to-accent focus:outline-none focus:ring-4 focus:ring-accent/50 w-full sm:w-auto border-2 border-white/20"
                >
                  Get a Free Quote
                </motion.a>
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 md:px-10 md:py-4 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/40 text-white font-bold text-base md:text-lg lg:text-xl shadow-2xl transition-all duration-300 hover:bg-white/20 hover:border-white/60 focus:outline-none focus:ring-4 focus:ring-white/30 w-full sm:w-auto"
                >
                  Learn More
                </motion.a>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default HeroSection; 