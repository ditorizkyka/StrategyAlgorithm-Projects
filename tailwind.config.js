/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', "./node_modules/flowbite/**/*.js"],
  
  theme: {
    extend: {
      fontFamily : {
        Inter : ['Inter'],
        tittle : ['Syne']
      },
      colors : {
        greenL : ['#C0FF00']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

