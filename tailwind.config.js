/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lightCyan": "#9FEDEA",
        "mainCyan": "#19ADA8",
        "mainBlack": "#141414",
        "mainGray": "#DCDCDC",
        "lightGray": "#ECEFF0",
        "textColor": "#5A5A5A"
      },
      screens: {
        xs: "390px",
        md: "834px",
        xl: "1500px"
      },
      fontSize: {
        "22px": "22px",
        "28px": "28px",
        "32px": "32px",
        "40px": "40px",
        "64px": "64px",
      },
      height: {
        300: "300px",
        "600px": "600px",
      },
      width: {
        530: "530px",
        612: "612px",
        730: "730px",
      }
    },
  },
  plugins: [],
}