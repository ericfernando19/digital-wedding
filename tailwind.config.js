/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F5EFE3',
        cream: {
          50: '#FBF7EF',
          100: '#F5EFE3',
          200: '#EDE4D3',
          300: '#E2D5BE',
        },
        beige: {
          50: '#FBF7EF',
          100: '#F5EFE3',
          200: '#EDE4D3',
          300: '#DFD3BC',
          400: '#C9B99A',
        },
        bronze: {
          50: '#F7F1E6',
          100: '#EDE2CE',
          200: '#D9C6A8',
          300: '#BFA57F',
          400: '#A0826D',
          500: '#8B6F52',
          600: '#755A3E',
          700: '#5E4A34',
        },
        taupe: {
          100: '#E8E0D5',
          200: '#C9BCA9',
          300: '#A2937F',
          400: '#7D6E5C',
          500: '#655647',
          600: '#574B43',
          700: '#4A403A',
          800: '#3D342E',
          900: '#2F2823',
        },
        'dusty-pink': {
          50: '#F7F1E6',
          100: '#EDE2CE',
          200: '#D9C6A8',
          300: '#A0826D',
          400: '#8B6F52',
          500: '#6B5744',
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
