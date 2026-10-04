import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const QuoteSection = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const validateField = (name, value) => {
    let error = '';
    const val = (value || '').trim();

    switch (name) {
      case 'name':
        if (!val) {
          error = 'Full name is required';
        } else if (val.length < 2) {
          error = 'Name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s.'-]+$/.test(val)) {
          error = 'Name can only contain letters and spaces';
        }
        break;

      case 'phone':
        const digitsOnly = val.replace(/\D/g, '');
        const isFakeRepetitive = /^(\d)\1+$/.test(digitsOnly);
        const isFakeSequential = digitsOnly.length >= 10 && ('1234567890'.includes(digitsOnly) || '0987654321'.includes(digitsOnly));

        if (!val) {
          error = 'Phone number is required';
        } else if (digitsOnly.length < 7 || digitsOnly.length > 15) {
          error = 'Please enter a valid phone number (7 to 15 digits)';
        } else if (isFakeRepetitive || isFakeSequential) {
          error = 'Please enter a genuine phone number';
        } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(val)) {
          error = 'Invalid phone number format';
        }
        break;

      case 'email':
        if (!val) {
          error = 'Email address is required';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)) {
          error = 'Please enter a valid email address (e.g., example@domain.com)';
        }
        break;

      case 'service':
        if (!val || val === 'Select Service Type') {
          error = 'Please select a service type';
        }
        break;

      case 'message':
        if (!val) {
          error = 'Project details are required';
        } else if (val.length < 10) {
          error = 'Please provide more details (at least 10 characters)';
        }
        break;

      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const validateAllFields = () => {
    const newErrors = {};
    const allTouched = {};

    Object.keys(formData).forEach((field) => {
      allTouched[field] = true;
      const err = validateField(field, formData[field]);
      if (err) {
        newErrors[field] = err;
      }
    });

    setTouched(allTouched);
    setErrors(newErrors);
    return newErrors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const validationErrors = validateAllFields();
    if (Object.keys(validationErrors).length > 0) {
      // Focus the first invalid field
      const firstInvalidField = Object.keys(validationErrors)[0];
      const element = form.current?.elements[firstInvalidField];
      if (element) {
        element.focus();
      }
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    setSent(false);

    const serviceID = 'service_qjez9hf';
    const templateID = 'template_lqlgi6n'; 
    const autoReplyTemplateID = 'template_r98aphg'; 
    const publicKey = '70ENe4xUaB0qzRxIz';
    const adminEmail = 'syedkasimsiraj06@gmail.com';

    const visitorName = formData.name.trim();
    const visitorPhone = formData.phone.trim();
    const visitorEmail = formData.email.trim();
    const visitorService = formData.service.trim();
    const visitorMessage = formData.message.trim();

    try {
      await emailjs.sendForm(serviceID, templateID, form.current, publicKey);
      setSent(true);

      // Reset form on success
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      setTouched({});
      setErrors({});

      // Trigger auto-reply to the visitor
      const autoReplyParams = {
        name: visitorName,
        email: visitorEmail,
        service: visitorService,
        message: visitorMessage,
      };
      emailjs.send(serviceID, autoReplyTemplateID, autoReplyParams, publicKey).catch(err => {
        console.warn('Auto-reply email sending failed:', err);
      });

    } catch (error) {
      const detailedError = error?.text || error?.message || (typeof error === 'string' ? error : 'Unknown submission error');
      console.error('Quote submission error:', error);
      setErrorMsg(detailedError);

      // Notify administrator via EmailJS about the visitor error
      const errorReportParams = {
        to_email: adminEmail,
        reply_to: visitorEmail !== 'N/A' ? visitorEmail : adminEmail,
        name: `ERROR ALERT: ${visitorName}`,
        email: visitorEmail,
        phone: visitorPhone,
        service: visitorService,
        message: `⚠️ ATTENTION: A visitor encountered an error while requesting a quote!

--- ERROR DETAILS ---
Error Message: ${detailedError}
Timestamp: ${new Date().toLocaleString()}
Page URL: ${window.location.href}

--- VISITOR INFORMATION ---
Name: ${visitorName}
Email: ${visitorEmail}
Phone: ${visitorPhone}
Service Interested: ${visitorService}
Message Content: ${visitorMessage}`,
      };

      try {
        await emailjs.send(serviceID, templateID, errorReportParams, publicKey);
      } catch (adminMailErr) {
        console.error('Failed to dispatch error report email to admin:', adminMailErr);
      }
    } finally {
      setLoading(false);
    }
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
          
          <form ref={form} onSubmit={sendEmail} noValidate className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <input 
                  required 
                  name="name" 
                  type="text" 
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Full Name" 
                  className={`w-full rounded-2xl px-6 py-4 bg-white/5 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-secondary'} focus:ring-2 focus:border-transparent outline-none text-white placeholder-gray-400 font-body transition-all`} 
                />
                {errors.name && (
                  <p className="text-red-400 text-xs font-semibold mt-2 ml-2">{errors.name}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <input 
                  required 
                  name="phone" 
                  type="tel" 
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Phone Number (e.g. +91 9876543210)" 
                  className={`w-full rounded-2xl px-6 py-4 bg-white/5 border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-secondary'} focus:ring-2 focus:border-transparent outline-none text-white placeholder-gray-400 font-body transition-all`} 
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs font-semibold mt-2 ml-2">{errors.phone}</p>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Address */}
              <div>
                <input 
                  required 
                  name="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email Address" 
                  className={`w-full rounded-2xl px-6 py-4 bg-white/5 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-secondary'} focus:ring-2 focus:border-transparent outline-none text-white placeholder-gray-400 font-body transition-all`} 
                />
                {errors.email && (
                  <p className="text-red-400 text-xs font-semibold mt-2 ml-2">{errors.email}</p>
                )}
              </div>

              {/* Service Type */}
              <div>
                <div className="relative">
                  <select 
                    required 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full rounded-2xl px-6 py-4 bg-white/5 border ${errors.service ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-secondary'} focus:ring-2 focus:border-transparent outline-none text-white font-body transition-all appearance-none`}
                  >
                    <option value="" className="text-gray-900">Select Service Type</option>
                    <option className="text-gray-900" value="Premium Toilet Installation">Premium Toilet Installation</option>
                    <option className="text-gray-900" value="Luxury Shower Fitting">Luxury Shower Fitting</option>
                    <option className="text-gray-900" value="Complete Plumbing Setup">Complete Plumbing Setup</option>
                    <option className="text-gray-900" value="Water Tank Cleaning">Water Tank Cleaning</option>
                    <option className="text-gray-900" value="Advanced Leak Repairs">Advanced Leak Repairs</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-secondary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                {errors.service && (
                  <p className="text-red-400 text-xs font-semibold mt-2 ml-2">{errors.service}</p>
                )}
              </div>
            </div>
            
            {/* Project Details */}
            <div>
              <textarea 
                required 
                name="message" 
                rows={4} 
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Project Details (minimum 10 characters)" 
                className={`w-full rounded-2xl px-6 py-4 bg-white/5 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-secondary'} focus:ring-2 focus:border-transparent outline-none text-white placeholder-gray-400 font-body transition-all resize-none`} 
              />
              {errors.message && (
                <p className="text-red-400 text-xs font-semibold mt-2 ml-2">{errors.message}</p>
              )}
            </div>
            
            <motion.button 
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              type="submit" 
              disabled={loading}
              className={`mt-4 w-full py-5 rounded-full bg-secondary text-white font-bold text-xl shadow-glow-secondary hover:bg-secondary-dark transition-all duration-300 flex justify-center items-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending Request...</span>
                </>
              ) : sent ? (
                'Message Sent Successfully!'
              ) : (
                'Get Free Estimate'
              )}
            </motion.button>
            
            {sent && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-secondary text-center mt-4 font-bold text-lg font-body p-4 bg-secondary/10 border border-secondary/20 rounded-2xl">
                Thank you! We will contact you soon.
              </motion.div>
            )}

            {errorMsg && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-center mt-4 text-base font-body p-4 bg-red-500/10 border border-red-500/30 rounded-2xl flex flex-col gap-1">
                <span className="font-bold text-lg text-red-300">Submission Error</span>
                <span>An issue occurred while sending your request ({errorMsg}).</span>
                <span className="text-xs text-gray-300 mt-1">An automated error alert with your message details has been dispatched to <strong>syedkasimsiraj06@gmail.com</strong>.</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection; 