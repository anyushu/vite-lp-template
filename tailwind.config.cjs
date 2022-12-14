/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/**/*.{js,ts,html}", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Noto Sans JP", "sans-serif"] },
    },
  },
  plugins: [],
}
