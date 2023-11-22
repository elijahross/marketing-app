/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        white: "#f7f7f7",
        dimWhite: "rgb(169, 169, 169, 1)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      animation: {
        spin: "spin 20s linear infinite",
        ping: "ping 15s infinite",
        bounce: "bounce 15s infinite",
        spin2: "spin 3s linear infinite"
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};