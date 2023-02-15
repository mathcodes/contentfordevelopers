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
