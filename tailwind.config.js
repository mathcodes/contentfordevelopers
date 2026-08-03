/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        dynamicHeader: "clamp(1.5rem, 1.1359rem + 1.5534vw, 3rem)",
        dynamicP: "clamp(1rem, 0.9454rem + 0.233vw, 1.225rem)",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      colors: {
        black: "#000000",
        blue: "#14213d",
        accent: "#db11a9",
        accent2: "#5a67ec",
        accent3: "#0489b2",
        teal: "#2dd4bf",
        platinum: "#e5e5e5",
        white: "#ffffff",
        lcyellow: "#f79f1b",
        slate: {
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};
