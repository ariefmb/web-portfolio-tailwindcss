/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      screens: {
        "2xl": "1320px",
      },
      colors: {
        primary: "#0d9488",
        secondary: "#f1f5f9",
        dark: "#475569",
      },
    },
  },
  plugins: [],
};
