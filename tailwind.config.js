module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', // soft blue
        secondary: '#38bdf8', // aqua
        accent: '#f97316', // orange
        grayish: '#f3f4f6', // light gray
        dark: '#111827', // dark gray
        white: '#ffffff',
  },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        signature: ['"Dancing Script"', 'cursive'], // for signature style
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
