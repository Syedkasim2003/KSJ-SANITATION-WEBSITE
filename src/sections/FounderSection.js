import React from 'react';
import founderImg from '../assets/founder.jpeg';

const FounderSection = () => (
  <section className="py-20 bg-grayish" id="founder">
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-xl p-3 sm:p-4 md:p-8 lg:p-12 flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-12">
        <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-primary flex-shrink-0 mx-auto md:mx-0">
          <img src={founderImg} alt="Founder" className="w-full h-full object-cover object-[50%_60%]" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1 md:mb-2">A Message from Our Founder</h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-dark/80 mb-1 md:mb-4">"At KSJ Sanitation, our mission is to provide reliable, high-quality plumbing and sanitary solutions with a customer-first approach. Thank you for trusting us with your needs."</p>
          <span className="font-signature text-base sm:text-lg md:text-2xl lg:text-3xl text-accent block">- MJF Lion.K.Syed Jafar</span>
          <span className="text-dark/60 text-xs md:text-sm lg:text-base">Founder & CEO</span>
        </div>
      </div>
    </div>
  </section>
);

export default FounderSection; 