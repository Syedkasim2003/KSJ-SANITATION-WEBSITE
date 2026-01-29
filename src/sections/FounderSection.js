import React from 'react';
import founderImg from '../assets/founder.jpeg';

const FounderSection = () => (
  <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white" id="founder">
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      <div className="bg-gradient-to-br from-white to-secondary-50 rounded-3xl shadow-elevated border-2 border-secondary/10 p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-secondary shadow-card-hover flex-shrink-0 mx-auto md:mx-0 ring-4 ring-secondary/20">
          <img src={founderImg} alt="Founder" className="w-full h-full object-cover object-[50%_60%]" />
        </div>
        <div className="text-center md:text-left flex-1">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary mb-3 md:mb-4">A Message from Our Founder</h3>
          <div className="relative">
            <svg className="absolute -left-2 -top-2 w-8 h-8 text-secondary/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed pl-6 italic">
              "At KSJ Sanitation, our mission is to provide reliable, high-quality plumbing and sanitary solutions with a customer-first approach. Thank you for trusting us with your needs."
            </p>
          </div>
          <span className="font-signature text-xl sm:text-2xl md:text-3xl lg:text-4xl text-secondary block mb-1">- MJF Lion.K.Syed Jafar</span>
          <span className="text-gray-600 text-sm md:text-base lg:text-lg font-medium">Founder & CEO</span>
        </div>
      </div>
    </div>
  </section>
);

export default FounderSection; 