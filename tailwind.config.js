/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#2f4858",
      },
      boxShadow: {
        mainshadow: "20px 20px 0px 0px #fff, -20px -20px 0 0 #fff",
      },
    },
  },
  plugins: [],
};
