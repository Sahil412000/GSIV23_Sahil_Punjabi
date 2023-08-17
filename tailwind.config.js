/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        disabled: "#dfdfdf",
        lightGray: "#9b9b9b",
        darkGray: "#4A4A4A",
      },
      placeholderColor: {
        primary: "#4A4A4A",
      },
    },
  },
  plugins: [],
};
