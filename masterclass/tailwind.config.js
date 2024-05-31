/** @type {import('tailwindcss').Config} */

const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        colorBackground: '#E5E5E5',
        colorNavbar: '#F0F4FF',
        colorTextNavbar: '#1D1E1C',
        customBlue: '#3366FF',
        colorsIcon: '#1C1B1F',
        colorText: '#1E1E1C',
        colorCards: '#7AD421',
        colorsCards2: '#2C5BE8'
      },
      fontFamily: {
        // Añade ' ' a la configuración de fuentes
        timeburner: ['TimeBurner'],
        poppins: ['Poppins'],
        poppinsbold: ['PoppinsBold']
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
