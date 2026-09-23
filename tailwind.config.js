/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFFF0',
        beige: {
          50: '#FEFDFB',
          100: '#F5F0E8',
          200: '#EBE3D5',
          300: '#DDD2BE',
          400: '#C9B99A',
        },
        'dusty-pink': {
          50: '#FDF2F2',
          100: '#F5E0E0',
          200: '#EBCCCC',
          300: '#D4A5A5',
          400: '#C48B8B',
          500: '#B07070',
        },
        sage: {
          50: '#F4F7F2',
          100: '#E5EDE1',
          200: '#CEDCC6',
          300: '#9CAF88',
          400: '#7A9468',
          500: '#5E7A4E',
        },
        gold: {
          50: '#FFF9E6',
          100: '#FFEFC2',
          200: '#FFE08A',
          300: '#D4A853',
          400: '#C49A38',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
