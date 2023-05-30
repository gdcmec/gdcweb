/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary": "#ffbe1c",
        "secondary": "#fff3d5",
        "landback": "#111611"
      }
    },
  },
  plugins: [],
};
