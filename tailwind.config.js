/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslateblue: "#1c1e53",
        hotpink: "#e4538c",
        blueviolet: "#5e3bee",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        khmer: "Khmer",
        italiana: "Italiana",
      },
    },
    fontSize: {
      xl: "20px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
