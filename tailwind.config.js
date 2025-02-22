/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
};

// module.exports = {
//   content: ['./src/**/*.{js,ts,jsx,tsx}'],
//   plugins: [require("@tailwindcss/typography"), require("daisyui")],
// }