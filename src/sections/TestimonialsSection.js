import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    name: 'Alice Smith',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    review: 'KSJ Sanitation provided excellent service and fixed our plumbing issues quickly. Highly recommended!',
  },
  {
    name: 'Bob Johnson',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    review: 'Professional and friendly team. The quality of work was top-notch!',
  },
  {
    name: 'Priya Patel',
    image: 'https://randomuser.me/api/portraits/women/46.jpg',
    review: 'Very satisfied with the sanitary fittings and prompt response. Will use again!',
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-white" id="testimonials">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">What Our Clients Say</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="pb-8"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={t.name}>
            <div className="bg-grayish rounded-2xl shadow-lg p-2 sm:p-4 md:p-8 lg:p-12 flex flex-col items-center text-center max-w-xs sm:max-w-md md:max-w-xl mx-auto">
              <img src={t.image} alt={t.name} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-primary mb-2 sm:mb-3 md:mb-4" />
              <p className="text-xs sm:text-base md:text-lg lg:text-xl text-dark/80 mb-1 sm:mb-2 md:mb-4">"{t.review}"</p>
              <span className="font-semibold text-primary text-xs sm:text-sm md:text-base lg:text-lg">{t.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default TestimonialsSection; 