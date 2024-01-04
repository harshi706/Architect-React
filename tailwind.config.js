// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "451px", //modify the screen width
      md: "800px",
      lg: "1000px",
    },

    extend: {
      fontSize: {
        xl: "1.5rem", // Modify the font size for text-xl
        lg: "1rem",
      },
      borderWidth: {
        22: "22px",
      },
      width: {
        70: "70%",
      },
    },
  },
  plugins: [],
};
