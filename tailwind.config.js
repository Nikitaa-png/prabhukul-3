/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f5f7fa',
          100: '#e4ebf2',
          200: '#c5d5e5',
          300: '#96b6d4',
          400: '#5e8fbe',
          500: '#3f73a3',
          600: '#315b85',
          700: '#294b6d',
          800: '#25415c',
          900: '#22384e',
          950: '#172434',
        },
      },
      maxWidth: {
        '7xl': '1400px',
      },
    },
  },
  plugins: [],
}
