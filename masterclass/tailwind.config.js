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
      borderRadius:{
        '75px': '75px',
      },
      fontSize: {
        '40px': '40px',
        '62px': '62px',
        '80px': '80px',
        '32px': '32px',
        '17px': '17px',
        '10px': '10px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        colorBackground: '#E5E5E5',
        colorBackgroundCards: '#F0F4FF',
        colorNavbar: '#F0F4FF',
        colorTextNavbar: '#1D1E1C',
        colorTextSubtitulo: '#4451FF',
        customBlue: '#3366FF',
        colorsIcon: '#1C1B1F',
        colorText: '#1E1E1C',
        colorCards: '#7AD421',
        colorsCards2: '#2C5BE8',
        colorsButton: '#99FF33',
        colorsTestimonial: '#F0F4FF',
      },
      fontFamily: {
        // Añade ' ' a la configuración de fuentes
        timeburner: ['TimeBurner'],
        timeburnerbold: ['TimeBurnerBold'],
        poppins: ['Poppins'],
        poppinsbold: ['PoppinsBold'],
        fuentetitulo: ['FuenteTitulo'],
        fuentetitulo2: ['FuenteTitulo2'],
        poppinsregular: ['PoppinsRegular'],
        poppinssemibold: ['PoppinsSemiBold'],
      },
      width: {
        '7/10': '70%',
        '85': '85%',
        '2/5': '40%',
      }
    },
  },
  plugins: [addDynamicIconSelectors()],
};
