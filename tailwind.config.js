module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        large: "2500px",
        tablet: "850px",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        mygreen: "#007A7E",
      },
    },
  },
  plugins: [],
};
