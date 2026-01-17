import React, { useEffect, useState } from 'react';

const phoneNumber = '916381385915'; // international format without +
const message = encodeURIComponent('Hello! I would like to know more.');
const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

export default function WhatsAppButton() {
  const [showTip, setShowTip] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => setShowTip(false), 10000);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-50 right-4 bottom-4 sm:right-6 sm:bottom-6"
    >
      <div className="relative">
        {/* Chat-style bubble tooltip */}
        <div
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowTip(false); }}
          className={
            `absolute bottom-full right-0 mb-3 max-w-sm sm:max-w-md px-5 py-3 rounded-xl border border-[#25D366]/30 bg-white text-gray-900 text-sm sm:text-base shadow-xl transition-all duration-300 ${
              showTip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'
            }`
          }
        >
          <div className="flex items-start gap-2">
            <div className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-[#25D366]"></div>
            <div className="leading-snug">
              <div className="font-semibold text-gray-900">Quick assistance? Chat with our experts now.</div>
            </div>
          </div>
          {/* Tail */}
          <div className="absolute -bottom-2 right-5 h-3 w-3 rotate-45 bg-white border-b border-r border-[#25D366]/30"></div>
        </div>

        <div
          className="bg-[#25D366] hover:bg-[#1ebe57] transition-colors shadow-lg rounded-full flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16"
        >
          {/* WhatsApp SVG logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 sm:w-8 sm:h-8 fill-white"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M19.11 17.18c-.26-.13-1.53-.75-1.77-.84-.24-.09-.42-.13-.6.13-.18.26-.69.84-.84 1.02-.15.18-.31.2-.57.07-.26-.13-1.09-.4-2.08-1.27-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.11-.11.26-.29.4-.44.13-.15.18-.26.27-.44.09-.18.04-.33-.02-.46-.06-.13-.6-1.45-.82-1.99-.22-.53-.45-.46-.6-.46-.15 0-.33-.02-.51-.02s-.46.07-.69.33c-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.7c.13.18 1.84 2.81 4.47 3.94.63.27 1.13.43 1.52.55.64.2 1.22.17 1.68.1.51-.08 1.53-.62 1.75-1.22.22-.6.22-1.12.15-1.22-.06-.11-.24-.18-.49-.31z" />
            <path d="M26.7 5.3C24.1 2.7 20.7 1.3 17 1.3 9.5 1.3 3.5 7.3 3.5 14.8c0 2.4.6 4.7 1.9 6.7L3 30.7l9.4-2.5c1.9 1 4 1.5 6.1 1.5 7.5 0 13.5-6 13.5-13.5 0-3.6-1.4-7-4.3-10zm-9.6 22.4c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-5.6 1.5 1.5-5.4-.2-.4c-1.2-1.7-1.8-3.7-1.8-5.8C5.1 8.3 10.5 3 17 3c3.2 0 6.2 1.2 8.5 3.5s3.5 5.3 3.5 8.5c0 6.5-5.4 11.9-11.9 11.9z" />
          </svg>
        </div>
      </div>
    </a>
  );
}


