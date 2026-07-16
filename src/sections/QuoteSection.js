import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const QuoteSection = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceID = 'service_qjez9hf';
    const templateID = 'template_lqlgi6n'; 
    const autoReplyTemplateID = 'template_r98aphg'; 
    const publicKey = '70ENe4xUaB0qzRxIz';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        setSent(true);
        const templateParams = {
          name: form.current.name.value,
          email: form.current.email.value,
          service: form.current.service.value,
          message: form.current.message.value,
        };
        emailjs.send(serviceID, autoReplyTemplateID, templateParams, publicKey);
      }, (error) => {
        alert('Failed to send the message, please try again.');
      });
  };

  return (
    <section id="quote" className="py-24 relative overflow-hidden bg-primary flex justify-center items-center min-h-[70vh]">
      <div className="absolute inset-0 bg-mesh-light opacity-20 mix-blend-screen z-0"></div>
      
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-dark p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white/10"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">Request a <span className="text-secondary">Quote</span></h2>
            <p className="text-gray-300 font-body text-lg">Tell us about your project and we'll get back to you with a free estimate.</p>
          </div>
          
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input required name="name" type="text" placeholder="Full Name" className="w-full rounded-2xl px-6 py-4 bg-white/5 border border-white/10 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none text-white placeholder-gray-400 font-body transition-all" />
              <input required name="phone" type="tel" placeholder="Phone Number" className="w-full rounded-2xl px-6 py-4 bg-white/5 border border-white/10 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none text-white placeholder-gray-400 font-body transition-all" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input required name="email" type="email" placeholder="Email Address" className="w-full rounded-2xl px-6 py-4 bg-white/5 border border-white/10 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none text-white placeholder-gray-400 font-body transition-all" />
              <div className="relative">
                <select required name="service" className="w-full rounded-2xl px-6 py-4 bg-white/5 border border-white/10 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none text-white font-body transition-all appearance-none">
                  <option value="" className="text-gray-900">Select Service Type</option>
                  <option className="text-gray-900">Premium Toilet Installation</option>
                  <option className="text-gray-900">Luxury Shower Fitting</option>
                  <option className="text-gray-900">Complete Plumbing Setup</option>
                  <option className="text-gray-900">Water Tank Cleaning</option>
                  <option className="text-gray-900">Advanced Leak Repairs</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-secondary">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>
            
            <textarea required name="message" rows={4} placeholder="Project Details" className="w-full rounded-2xl px-6 py-4 bg-white/5 border border-white/10 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none text-white placeholder-gray-400 font-body transition-all resize-none" />
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="mt-4 w-full py-5 rounded-full bg-secondary text-white font-bold text-xl shadow-glow-secondary hover:bg-secondary-dark transition-all duration-300"
            >
              {sent ? 'Message Sent Successfully!' : 'Get Free Estimate'}
            </motion.button>
            
            {sent && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-secondary text-center mt-4 font-bold text-lg font-body">
                Thank you! We will contact you soon.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection; 