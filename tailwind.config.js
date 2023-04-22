/** @type {import('tailwindcss').Config} */

let rc =Math.floor(Math.random() * 16777215).toString(16)
console.log(rc)

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        dynamicHeader: "clamp(1.5rem, 1.1359rem + 1.5534vw, 3rem);",
        dynamicP: "clamp(1rem, 0.9454rem + 0.233vw, 1.225rem);",
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
        '6000': '6000ms',
        '7000': '7000ms',
        '8000': '8000ms',
        '9000': '9000ms',
        '10000': '10000ms',
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
    colors: {
      black: "#000000ff",
      blue: "#14213dff",
      accent: "#db11a9ff",
      accent2: "#5a67ecff",
      accent3: "#0489b2ff",
      platinum: "#e5e5e5ff",
      white: "#ffffffff",
      lcyellow: "#f79f1bff",
    },
  },
  plugins: [],
};
