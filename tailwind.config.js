/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#2f4858",
      },
      fontFamily: {
        code: ["code", "sans-serif"],
        oliver: ["oliver", "serif"],
      },
    },
  },
  plugins: [],
};
