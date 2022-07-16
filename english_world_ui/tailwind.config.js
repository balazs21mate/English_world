/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primery: 'rgb(240,200,175)',
        secondary_color: '#7c1b1b',
      },
      boxShadow: {
        card: '5px 5px 15px #7c1b1b',
        card_negative: '-5px 5px 15px #7c1b1b',
        button: '5px 5px 10px rgba(163,133,158,0.7)'
      },
      width: {
        hr_width: '8rem'
      }
    },
  },
  plugins: [],
}
