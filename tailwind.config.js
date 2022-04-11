module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mob: "340px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
