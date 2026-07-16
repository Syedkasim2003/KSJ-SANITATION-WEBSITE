module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // slate-900 (deep navy)
          light: '#1e293b',   // slate-800
          dark: '#020617',    // slate-950
          50: '#f8fafc',
          100: '#f1f5f9',
          900: '#0f172a',
        },
        secondary: {
          DEFAULT: '#0ea5e9', // sky-500 (vibrant aqua)
          light: '#38bdf8',   // sky-400
          dark: '#0284c7',    // sky-600
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          700: '#0369a1',
        },
        accent: {
          DEFAULT: '#f59e0b', // amber-500 (glowing amber)
          light: '#fbbf24',   // amber-400
          dark: '#d97706',    // amber-600
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
        },
        grayish: '#f8fafc',
        dark: '#020617',
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.1)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'card': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'card-hover': '0 20px 40px -5px rgba(14, 165, 233, 0.15)',
        'glow-secondary': '0 0 20px rgba(14, 165, 233, 0.5)',
        'glow-accent': '0 0 20px rgba(245, 158, 11, 0.5)',
      },
      backgroundImage: {
        'mesh-light': 'radial-gradient(at 40% 20%, hsla(199,98%,48%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(41,96%,50%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(213,47%,21%,0.05) 0px, transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)' },
          '50%': { opacity: '0.7', boxShadow: '0 0 10px rgba(14, 165, 233, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
