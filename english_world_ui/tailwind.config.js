/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primery: 'rgb(240,200,175)',
        secondary_color: 'rgb(124,27,27)',
        nav_menu: 'rgba(124,27,27,0.7)',
        nav_menu_hover: 'rgb(124,27,27)',
        button: 'rgba(163,133,158,0.5)'
      },
      boxShadow: {
        card: '5px 5px 15px #7c1b1b',
        card_negative: '-5px 5px 15px #7c1b1b',
        button: '5px 5px 10px rgba(163,133,158,0.7)'
      }
    },
  },
  plugins: [],
}
