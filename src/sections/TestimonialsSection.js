import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Vivek Panayan',
    date: '3 weeks ago',
    rating: 5,
    review: 'Excellent service! The plumbing and sanitary work was completed right on schedule with exceptional attention to detail and flawless finishing. The team demonstrated a high level of professionalism throughout the project — from planning to execution.',
  },
  {
    name: 'Syed Kasim',
    date: '11 months ago',
    rating: 5,
    review: 'I had a wonderful experience with KSJ Sanitation. They delivered everything on schedule without compromising on quality. Their team was friendly, knowledgeable, and ensured every detail was completed perfectly. Great customer service!',
  },
  {
    name: 'Kannan',
    date: '1 year ago',
    rating: 4.5,
    review: "KSJ Sanitation is one of the most trustworthy companies I've worked with. They maintained clear communication throughout the project and completed the installation before the deadline. The pricing was fair, and the work was neat and professional.",
  },
  {
    name: 'Roshan',
    date: '1 year ago',
    rating: 4,
    review: 'I highly recommend KSJ Sanitation for all plumbing and sanitary needs. Their professionalism, attention to detail, and on-time project completion made the entire process smooth and stress-free. I will definitely choose them again.',
  }
];

const getInitials = (fullName) => {
  const parts = fullName.trim().split(' ');
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase();
};

const avatarColors = [
  'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-emerald-500',
];

const getAvatarColor = (name) => {
  const sum = name.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return avatarColors[sum % avatarColors.length];
};


const StarRow = ({ count = 5 }) => {
  const fullStars = Math.floor(count);
  const hasHalfStar = count % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-accent" aria-label={`${count} star rating`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={`full-${i}`} className="w-5 h-5 drop-shadow-sm" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="w-5 h-5 drop-shadow-sm" />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="w-5 h-5 drop-shadow-sm" />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-grayish" id="testimonials">
      <div className="absolute top-0 right-0 w-full h-full bg-mesh-light opacity-30 mix-blend-multiply z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Client Success
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-primary"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.article 
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-premium p-8 relative overflow-hidden group"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-4 right-6 text-6xl text-gray-100 font-serif opacity-50 group-hover:text-secondary/10 transition-colors duration-500">
                "
              </div>

              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className={`flex items-center justify-center w-14 h-14 rounded-2xl text-white font-bold text-xl shadow-md ${getAvatarColor(t.name)}`}>
                  {getInitials(t.name)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-primary">{t.name}</h3>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <StarRow count={t.rating} />
                    <span className="text-sm font-medium text-gray-400">{t.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 font-body leading-relaxed text-lg relative z-10">
                "{t.review}"
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
