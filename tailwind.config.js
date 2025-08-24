/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: 'hsl(221, 83%, 53%)', // Primary blue
          600: 'hsl(221, 83%, 45%)', // Darker blue for hover
          400: 'hsl(221, 83%, 60%)', // Lighter blue for accents
        },
      },
    },
  },
  plugins: [],
};