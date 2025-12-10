/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Blue
        secondary: "#9333EA", // Purple
        accent: "#F43F5E", // Red
        darkBg: "#0F172A",
        lightBg: "#F8FAFC",
      },
      boxShadow: {
        card: "0 8px 24px rgba(124,58,237,0.2)",
      },
    },
  },
  plugins: [],
};
