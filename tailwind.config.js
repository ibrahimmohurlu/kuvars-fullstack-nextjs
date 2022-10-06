/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        'lightWhite':'#E5DCC3',
        'darkerWhite':'#C7BEA2',
        'grayish':'#AAA492',
        'darkerGrayish':'#2C3639',
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
