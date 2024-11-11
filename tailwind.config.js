/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter :["Inter"],
        sans: ["Poppins", "sans-serif"],
      },
    },
    keyframes: {
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      fadeInUp: 'fadeInUp 0.7s ease-out',
    },
    
  },
  plugins: [],
}