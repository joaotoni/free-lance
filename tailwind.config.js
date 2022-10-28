/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        azul_fundo:'rgba(25,182,229,0.5)',
        azul_letras: '#19B6E5',
        branco: '#FFFFFF'
      },
      fontFamily: {
        montserrat: 'Montserrat'
      },
      backgroundImage: {
        'menu': "url('/assets/icons/menu.png')",
      }
    },
  },
  plugins: [],
}
