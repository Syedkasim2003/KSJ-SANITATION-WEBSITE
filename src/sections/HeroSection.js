import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import main1 from '../assets/main-1.webp';
import main2 from '../assets/main-2.jpg';
import main3 from '../assets/main-3.jpg';

const sliderImages = [main1, main2, main3];

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] overflow-hidden bg-primary">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 bg-mesh-light opacity-30 mix-blend-screen z-0"></div>

      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
        className="w-full h-full z-10"
      >
        {sliderImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                className="w-full h-full"
              >
                <img
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-start z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="inline-block px-4 py-1.5 rounded-full glass-premium border border-secondary/50 text-secondary font-semibold text-sm mb-6 shadow-glow-secondary animate-float"
                    >
                      ✨ Premium Sanitation & Plumbing Services
                    </motion.div>
                    
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 drop-shadow-xl"
                    >
                      <span className="block">Flowing with</span>
                      <span className="text-gradient-light">Excellence.</span>
                    </motion.h1>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl font-body font-medium leading-relaxed drop-shadow-md"
                    >
                      Professional, prompt, and trusted solutions for all your plumbing and modern sanitation needs. We set the standard for hygiene.
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <a href="#quote" className="btn-primary">
                        Get a Free Quote
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </a>
                      <a href="#about" className="btn-secondary !bg-white/10 !border-white/20 !text-white hover:!bg-white/20 backdrop-blur-md">
                        Explore Our Services
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation */}
        <div className="absolute bottom-10 right-10 z-30 flex gap-4 hidden md:flex">
          <div className="swiper-button-prev-custom w-14 h-14 rounded-full glass-premium flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all text-white border border-white/20 hover:border-secondary hover:text-secondary group">
            <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </div>
          <div className="swiper-button-next-custom w-14 h-14 rounded-full glass-premium flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all text-white border border-white/20 hover:border-secondary hover:text-secondary group">
            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
        
        {/* Custom Pagination */}
        <div className="swiper-pagination-custom absolute bottom-10 left-0 w-full flex justify-center gap-2 z-30"></div>
      </Swiper>
    </section>
  );
};

export default HeroSection; 