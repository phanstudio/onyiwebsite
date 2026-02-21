/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'Helvetica', 'Sans-Serif'],
      },
      colors: {
        'custom-purple': {
          // DEFAULT: 'rgb(14 21 38 / <alpha-value>)',
          DEFAULT: 'rgb(14 21 38)',
        },
        'custom-orange': 'rgb(213 122 102)',
      },
      boxShadow: {
        card: "0 2px 11px 2px rgba(0,0,0,.1)",
      },
    },
  },
  plugins: [],
};
