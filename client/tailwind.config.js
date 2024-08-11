/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ["Poppins", "sans-serif"]
      },
      colors:{
        'primary':"#0E416D",
        "primary-light":"#337AB7"
      }
    },
  },
  plugins: [],
}