/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B3A5C',
          light: '#2E5D8C',
        },
        accent: {
          gold: '#C5A55A',
          'gold-light': '#E8D5A3',
        },
        background: '#FAFAF8',
        surface: '#FFFFFF',
        'text-primary': '#1A1A2E',
        'text-secondary': '#4A4A6A',
        success: '#2D6A4F',
        border: '#E0DDD5',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(-90deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        flip: 'flip 0.6s ease-in-out',
        typewriter: 'typewriter 3s steps(40) forwards',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
