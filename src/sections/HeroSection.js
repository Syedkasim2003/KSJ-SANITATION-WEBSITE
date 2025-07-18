import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import main1 from '../assets/main-1.webp';
import main2 from '../assets/main-2.jpg';
import main2jpeg from '../assets/main2.jpeg';
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
            <div className="absolute inset-0 bg-black/50" />
            {/* Overlayed Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2 sm:px-4 md:px-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-2 md:mb-4 leading-tight md:leading-tight">
                Reliable Plumbing & Sanitary Solutions
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto mb-4 md:mb-8 drop-shadow">
                Professional, prompt, and trusted service for all your plumbing and sanitation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center w-full max-w-xs sm:max-w-none">
                <motion.a
                  href="#quote"
                  whileHover={{ scale: 1.08, boxShadow: '0 4px 24px #38bdf8' }}
                  className="px-4 py-2 md:px-8 md:py-3 rounded bg-accent text-white font-semibold text-base md:text-lg lg:text-xl shadow-lg transition-all duration-300 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-accent w-full sm:w-auto"
                >
                  Get a Free Quote
                </motion.a>
                <a
                  href="#about"
                  className="px-4 py-2 md:px-8 md:py-3 rounded bg-primary text-white font-semibold text-base md:text-lg lg:text-xl shadow-lg transition-all duration-300 hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default HeroSection; 