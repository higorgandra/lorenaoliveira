/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./index.html", // Para o seu arquivo HTML principal
    "./src/**/*.{js,ts,jsx,tsx}", // Para todos os arquivos JavaScript/React na pasta src
  ],
  theme: {
    extend: {
      // Nossas cores personalizadas para a Lorenna
      colors: {
        'pastel-creme': '#FFFBF5',
        'pastel-verde': '#3D5B59',
        'pastel-verde-botao': '#5A8F7B',
        'pastel-verde-botao-hover': '#4A7A6A',
        'pastel-verde-claro': '#A0C1B8',
      }
    },
  },
  plugins: [],
}
