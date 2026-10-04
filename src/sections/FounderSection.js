import React from 'react';
import { motion } from 'framer-motion';
import founderImg from '../assets/founder.jpeg';

const FounderSection = () => (
  <section className="py-24 relative overflow-hidden bg-primary" id="founder">
    {/* Abstract Backgrounds */}
    <div className="absolute inset-0 bg-mesh-light opacity-10 mix-blend-screen z-0"></div>
    <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary rounded-full blur-[100px] opacity-20"></div>
    
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-dark rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 border border-white/10 shadow-2xl relative overflow-hidden"
      >
        {/* Glow effect behind image */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 w-48 h-48 bg-secondary rounded-full blur-3xl opacity-30"></div>
        
        <div className="relative z-10 w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 flex-shrink-0 mx-auto md:mx-0">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_40px_rgba(14,165,233,0.3)] ring-4 ring-secondary/50 p-1 bg-white/5"
          >
            <img src={founderImg} alt="Founder" className="w-full h-full object-cover object-[50%_60%] rounded-full" />
          </motion.div>
        </div>
        
        <div className="text-center md:text-left flex-1 relative z-10">
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block"
          >
            Leadership
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6"
          >
            A Message from Our Founder
          </motion.h3>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <svg className="absolute -left-6 -top-4 w-12 h-12 text-white/10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-body italic relative z-10">
              "At KSJ Sanitation, our mission is to provide reliable, high-quality plumbing and sanitary solutions with a customer-first approach. We build trust through engineering precision. Thank you for trusting us with your needs."
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span className="font-signature text-3xl md:text-4xl text-secondary block mb-2">- MJF Lion Dr K Syed Jafar</span>
            <span className="text-gray-400 text-sm md:text-base font-semibold tracking-wider uppercase">Founder & CEO</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FounderSection; 