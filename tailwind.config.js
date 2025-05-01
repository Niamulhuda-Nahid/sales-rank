/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        questrial: ['Questrial', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        beVietnamPro: ['Be Vietnam Pro', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        plusJakartaSans: ['Plus Jakarta Sans', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

