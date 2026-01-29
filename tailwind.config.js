module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Deep Blue/Navy - trust, reliability, water
        primary: {
          DEFAULT: '#1e3a8a', // blue-900
          light: '#3b82f6',   // blue-500
          dark: '#1e40af',    // blue-800
          50: '#eff6ff',
          100: '#dbeafe',
          900: '#1e3a8a',
        },
        // Secondary: Teal/Aqua - cleanliness, sanitation, flow
        secondary: {
          DEFAULT: '#14b8a6', // teal-500
          light: '#5eead4',   // teal-300
          dark: '#0f766e',    // teal-700
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          700: '#0f766e',
        },
        // Accent: Orange - CTA, highlights, actions
        accent: {
          DEFAULT: '#f97316', // orange-500
          light: '#fb923c',   // orange-400
          dark: '#ea580c',    // orange-600
          50: '#fff7ed',
          500: '#f97316',
          600: '#ea580c',
        },
        // Neutral colors
        grayish: '#f3f4f6',
        dark: '#111827',
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        signature: ['"Dancing Script"', 'cursive'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elevated-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
