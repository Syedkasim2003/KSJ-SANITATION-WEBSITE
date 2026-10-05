import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Sparkles, X } from 'lucide-react';

export default function KSJEnterprisesButton() {
  const [showTip, setShowTip] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => setShowTip(false), 12000);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="fixed z-50 left-4 bottom-4 sm:left-6 sm:bottom-6">
      <div className="relative group">
        {/* Floating Tooltip Bubble */}
        <div
          className={`absolute bottom-full left-0 mb-3 w-64 sm:w-72 p-4 rounded-2xl border border-secondary/30 bg-primary/95 text-white shadow-2xl backdrop-blur-md transition-all duration-500 ${showTip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTip(false);
            }}
            className="absolute top-2.5 right-2.5 text-gray-400 hover:text-white transition-colors"
            aria-label="Close tooltip"
          >
            <X size={16} />
          </button>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-secondary/20 border border-secondary/40 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
            </div>
            <div className="leading-snug pr-4">
              <div className="font-bold text-xs uppercase tracking-wider text-secondary">Discover Corporate</div>
              <div className="font-bold text-sm text-white mt-0.5">KSJ Enterprises</div>
              <p className="text-xs text-gray-300 font-body mt-1">
                Explore B2B wholesale supply, water treatment & commercial contracting.
              </p>
            </div>
          </div>

          {/* Tail Arrow */}
          <div className="absolute -bottom-2 left-6 h-3 w-3 rotate-45 bg-primary border-b border-r border-secondary/30"></div>
        </div>

        {/* Floating Action Button */}
        <a
          href="/enterprises"
          aria-label="KSJ Enterprises Corporate Division"
          className="relative block"
        >
          <div className="relative bg-gradient-to-tr from-primary via-primary-dark to-secondary p-0.5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group-hover:shadow-glow-secondary">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center border border-white/20 relative overflow-hidden">
              {/* Background shine animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="flex flex-col items-center justify-center text-white">
                <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-secondary group-hover:scale-110 transition-transform" />
                <span className="text-[9px] font-black tracking-tighter text-white uppercase -mt-0.5">KSJ</span>
              </div>
            </div>

            {/* Glowing badge indicator */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary border-2 border-primary"></span>
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
