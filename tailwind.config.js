/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',   // ajuste se você guardar código em outra pasta
  ],
  theme: {
    extend: {
      fontFamily: {
        saira: ['"Saira"', 'sans-serif'],
        sairaStencil: ['"Saira Stencil One"', 'cursive'],
      },
    },
  },
  plugins: [],
}