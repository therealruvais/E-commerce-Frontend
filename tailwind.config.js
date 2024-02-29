/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-black": "#131921",
        "color-gray": "#3b4149",
        "color-yellow": "#febd69",
        "color-dgray": "#232f3e",
        "color-orange": "#bf4800",
      },
    },
  },
  plugins: [],
};
