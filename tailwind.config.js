/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: { 
    extend: {
      colors:{
        'navy': '#38628C',
        'greyRose': '#E7DCF2',
        'rouge': '#A6918D',
        'brick': '#8C4D16',
        'cold': '#D9D9D9',
        'moss': '#8C8C80',
        'eggshell': '#EBEEF2',
        'moon':'#C7D1D9',
        'dirt': '#402F21'
      },
      fontFamily:{
        'quicksand': ['quicksand', 'sans-serif'],
      },
      margin:{
        '580px': '580px',
      },
    },
  },
  plugins: [],
}