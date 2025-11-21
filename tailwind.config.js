/** @type {import('tailwindcss').Config} */
export default {
  // CORREÇÃO DEFINITIVA:
  // Agora estamos a escanear a pasta 'src/' E
  // todos os arquivos .jsx na pasta principal (root).
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Escaneia dentro de 'src'
    "./*.{js,ts,jsx,tsx}" // NOVO: Escaneia os arquivos na pasta principal
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-bege': '#FFFBF5',   // Fundo do header
        'brand-light': '#F7F9F8',  // Fundo claro de seções
        'brand-base': '#A0C1B8',   // Cor de destaque, bordas
        'brand-medium': '#5A8F7B', // Textos secundários, links
        'brand-dark': '#3D5B59',   // Textos principais, botões
      }
    },
  },
  plugins: [],
}
