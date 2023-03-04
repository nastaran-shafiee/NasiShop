module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      // => @media (min-width: 960px) { ... }
      lg: "960px",
    },
    extend: {
      colors: {
        header: "#2d2d2d",
        White: "#ffffff",
        black: "#000000",
        gray: "#525050",
        back: "rgb(226 232 240)",
      },
    },
  },

  plugins: [],
};
