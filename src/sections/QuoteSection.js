import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const QuoteSection = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // --- IMPORTANT ---
    // Replace these placeholders with your actual credentials from EmailJS!
    const serviceID = 'service_qjez9hf';
    const templateID = 'template_lqlgi6n'; // To you
    const autoReplyTemplateID = 'template_r98aphg'; // To the user
    const publicKey = '70ENe4xUaB0qzRxIz';
    // -----------------

    // Send the notification email to yourself
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log('Notification email sent:', result.text);
        setSent(true);

        // After sending the notification, send the auto-reply to the user
        // We use .send here because we are not sending the entire form, 
        // but just the parameters the template needs.
        const templateParams = {
          name: form.current.name.value,
          email: form.current.email.value,
          service: form.current.service.value,
          message: form.current.message.value,
        };

        emailjs.send(serviceID, autoReplyTemplateID, templateParams, publicKey)
          .then((result) => {
            console.log('Auto-reply email sent:', result.text);
          }, (error) => {
            console.log('Failed to send auto-reply:', error.text);
            // We don't alert the user here as their main request was sent.
          });

      }, (error) => {
        console.log('Failed to send notification email:', error.text);
        alert('Failed to send the message, please try again.');
      });
  };

  return (
    <section id="quote" className="py-16 md:py-24 bg-gradient-to-br from-secondary/10 via-white to-primary/10 flex justify-center items-center min-h-[60vh]">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto p-6 sm:p-8 md:p-12 rounded-3xl shadow-elevated bg-white/40 backdrop-blur-lg border-2 border-white/60 relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4 sm:mb-6 md:mb-8 text-center">Request a Quote</h2>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          <input required name="name" type="text" placeholder="Name" className="rounded-xl px-4 py-3 sm:px-5 sm:py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none text-sm sm:text-base md:text-lg transition-all" />
          <input required name="email" type="email" placeholder="Email" className="rounded-lg px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 bg-white/60 border border-gray-200 focus:ring-2 focus:ring-primary outline-none text-xs sm:text-sm md:text-base lg:text-lg" />
          <input required name="phone" type="tel" placeholder="Phone" className="rounded-xl px-4 py-3 sm:px-5 sm:py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none text-sm sm:text-base md:text-lg transition-all" />
          <select required name="service" className="rounded-lg px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 bg-white/60 border border-gray-200 focus:ring-2 focus:ring-primary outline-none text-xs sm:text-sm md:text-base lg:text-lg">
            <option value="">Select Service</option>
            <option>Toilet Installation</option>
            <option>Shower Fitting</option>
            <option>Leak Repairs</option>
            <option>Water Tank Cleaning</option>
            <option>Sanitary Fittings</option>
            <option>General Plumbing</option>
          </select>
          <textarea required name="message" rows={4} placeholder="Message" className="rounded-xl px-4 py-3 sm:px-5 sm:py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none text-sm sm:text-base md:text-lg transition-all resize-none" />
          <button type="submit" className="mt-3 py-3 sm:py-4 md:py-5 rounded-xl bg-gradient-to-r from-accent to-accent-dark text-white font-bold text-base sm:text-lg md:text-xl shadow-elevated transition-all duration-300 hover:scale-105 hover:shadow-elevated-hover focus:outline-none focus:ring-4 focus:ring-accent/50">
            {sent ? 'Sent!' : 'Submit Request'}
          </button>
        </form>
        {sent && <div className="text-green-600 text-center mt-6 font-bold text-base md:text-lg bg-green-50 py-3 px-4 rounded-xl border-2 border-green-200">Thank you! We will contact you soon.</div>}
      </div>
    </section>
  );
};

export default QuoteSection; 