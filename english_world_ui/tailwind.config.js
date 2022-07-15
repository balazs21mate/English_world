/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primery': 'rgb(240,200,175)',
        'secondary_color': '#7c1b1b',
      },
      margin: {
        '6rem': '6rem',
        '11rem': '11rem',
      }
    },
  },
  plugins: [],
}
