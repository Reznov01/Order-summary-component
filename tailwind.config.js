/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "Pale-blue": " hsl(225, 100%, 94%)",
        "Bright-blue": "hsl(245, 75%, 52%)",
        "Very-pale-blue": "hsl(225, 100%, 98%)",
        "Desaturated-blue": "hsl(224, 23%, 55%)",
        "Dark-blue": "hsl(223, 47%, 23%)",
        "Change-Color": "hsl(246, 56%, 54%)",
        "Change-color-hover": "hsl(245, 54%, 67%)",
        "Buton-hover": "hsl(245, 83%, 68%)",
      },
      fontFamily: {
        "Red-hot": '"Red Hat Display", sans-serif',
      },
    },
  },
  plugins: [],
};
