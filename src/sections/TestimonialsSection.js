import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Vivek Panayan',
    date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000), // 3 weeks ago
    rating: 5,
    review:
      'Excellent service! The plumbing and sanitary work was completed right on schedule with exceptional attention to detail and flawless finishing. The team demonstrated a high level of professionalism throughout the project — from planning to execution — ensuring that every aspect was handled efficiently and neatly. Their expertise and commitment to quality truly stood out. In addition, the pricing was very reasonable and transparent, offering great value for the level of service provided. Overall, a reliable and trustworthy team — highly recommended for anyone looking for top-notch plumbing and sanitary work!',
  },
  {
    name: "Steve O'Brien",
    date: new Date(Date.now() - 11 * 30 * 24 * 60 * 60 * 1000), // 11 months ago
    rating: 5,
    review: 'Exceptional service!',
  },
  {
    name: 'Conrad Lewandowski',
    date: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000), // 1 year ago
    rating: 5,
    review: 'Excellent fast service at great price!',
  },
  {
    name: 'Cari Braun',
    date: new Date(Date.now() - 380 * 24 * 60 * 60 * 1000), // ~1 year ago
    rating: 5,
    review:
      'Friendly technician. Very thorough and he took the time to explain my…',
  },
  {
    name: 'Marian Wyatt',
    date: new Date(Date.now() - 400 * 24 * 60 * 60 * 1000), // ~1 year ago
    rating: 5,
    review:
      'Tony was the most efficient, knowledgeable plumber. He explained so…',
  },
  {
    name: 'Manuel Barrios',
    date: new Date(Date.now() - 420 * 24 * 60 * 60 * 1000), // ~1 year ago
    rating: 5,
    review:
      'The plumber, Tony, who completed the faucet installations (one kitchen,…',
  },
  {
    name: 'Jim Littlejohn',
    date: new Date(Date.now() - 450 * 24 * 60 * 60 * 1000), // ~1 year ago
    rating: 5,
    review:
      'Jimmy Joe is very accessible via text. I kept updating jobs to do. He…',
  },
  {
    name: 'Clark Wallace',
    date: new Date(Date.now() - 480 * 24 * 60 * 60 * 1000), // ~1 year ago
    rating: 5,
    review:
      'I gave them a call, and Jimmy Joe arrived very quickly. Got to the drain…',
  },
];

const getInitials = (fullName) => {
  const parts = fullName.trim().split(' ');
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase();
};

const avatarColors = [
  'bg-blue-600',
  'bg-indigo-600',
  'bg-purple-600',
  'bg-emerald-600',
  'bg-rose-600',
  'bg-amber-600',
  'bg-sky-600',
];

const getAvatarColor = (name) => {
  const sum = name.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return avatarColors[sum % avatarColors.length];
};

const getTimeAgo = (date) => {
  const now = new Date();
  const diffInMs = now - date;
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInYears > 0) {
    return diffInYears === 1 ? '1 year ago' : `${diffInYears} years ago`;
  } else if (diffInMonths > 0) {
    return diffInMonths === 1 ? '1 month ago' : `${diffInMonths} months ago`;
  } else if (diffInWeeks > 0) {
    return diffInWeeks === 1 ? '1 week ago' : `${diffInWeeks} weeks ago`;
  } else if (diffInDays > 0) {
    return diffInDays === 1 ? '1 day ago' : `${diffInDays} days ago`;
  } else if (diffInHours > 0) {
    return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`;
  } else if (diffInMinutes > 0) {
    return diffInMinutes === 1 ? '1 minute ago' : `${diffInMinutes} minutes ago`;
  } else {
    return 'Just now';
  }
};

const StarRow = ({ count = 5 }) => (
  <div className="flex items-center gap-1 text-amber-500" aria-label={`${count} star rating`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const GoogleBadge = () => (
  <div className="flex items-center gap-2 text-sm text-slate-600">
    <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.8 0 6.4 1.6 7.9 3l5.8-5.7C34.5 3.3 29.7 1.5 24 1.5 14.6 1.5 6.6 6.9 2.9 14.7l6.9 5.3C11.6 14 17.3 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-2.7-.4-3.8H24v7.1h12.9c-.3 2.3-1.9 5.7-5.5 8l8.5 6.6c5-4.6 6.2-11.5 6.2-17.9z" />
      <path fill="#FBBC05" d="M9.8 20l-6.9-5.3C.9 17.7 0 20.7 0 24c0 3.2.9 6.3 2.9 9.3l6.9-5.3C9 26.3 8.7 25.2 8.7 24s.3-2.3 1.1-4z" />
      <path fill="#34A853" d="M24 46.5c6.5 0 12-2.1 16-5.9l-8.5-6.6c-2.3 1.6-5.4 2.6-7.5 2.6-6.8 0-12.5-4.5-14.3-10.6l-6.9 5.3C6.6 41.1 14.6 46.5 24 46.5z" />
    </svg>
    <div className="leading-tight">
      <div className="text-xs text-slate-500">Posted on</div>
      <div className="font-medium">Google</div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [expandedReviews, setExpandedReviews] = useState(new Set());

  const toggleReview = (name) => {
    setExpandedReviews((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(name)) {
        newSet.delete(name);
      } else {
        newSet.add(name);
      }
      return newSet;
    });
  };

  const isExpanded = (name) => expandedReviews.has(name);

  // Check if review text is likely to be truncated (rough estimate: more than ~150 characters)
  const needsTruncation = (review) => review.length > 150;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-secondary-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-8 md:mb-14 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => {
            const expanded = isExpanded(t.name);
            const shouldShowButton = needsTruncation(t.review);

            return (
              <article key={t.name} className="rounded-2xl border-2 border-secondary/20 bg-white p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-semibold ${getAvatarColor(t.name)}`}>
                    {getInitials(t.name)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900 truncate pr-2">{t.name}</h3>
                      <span className="text-xs text-slate-500 whitespace-nowrap">{getTimeAgo(t.date)}</span>
                    </div>
                    <div className="mt-1">
                      <StarRow count={t.rating} />
                    </div>
                  </div>
                </div>

                <p className={`mt-3 text-slate-700 text-sm ${expanded ? '' : 'line-clamp-3'}`}>{t.review}</p>
                {shouldShowButton && (
                  <button
                    type="button"
                    onClick={() => toggleReview(t.name)}
                    className="mt-2 text-blue-600 text-sm font-medium hover:underline"
                  >
                    {expanded ? 'Read less' : 'Read more'}
                  </button>
                )}

                <div className="mt-4">
                  <GoogleBadge />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 