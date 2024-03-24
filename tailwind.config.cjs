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
    fontFamily: {
      mfont: ["Black Ops One", "system-ui"],
      navfont: ["Orbitron", "sans-serif"],
      title: ["Press Start 2P", "system-ui"],
      subtitle: ["Wallpoet", "sans-serif"]
    }
  },
  plugins: [],
};
