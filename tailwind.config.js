/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      logo: ["Princess Sofia"],
      texts: ["Oswald"],
    },
  },

  plugins: [require("daisyui")],
};
