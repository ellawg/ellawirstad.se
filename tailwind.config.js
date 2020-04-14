module.exports = {
  theme: {
    plugins: ["tailwindcss", "postcss-preset-env"],
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        "2xs": ".7rem",
        "7xl": "5rem",
      },
      colors: {
        shell: "#FCFCFA",
        white: "#FFFFFF",
        dark: "#090A10",
        "dark-400": "#4C4C51",
        black: "#000000",
        blue: "#52629A",
        orange: "#f93700",
        "blue-400": "#717EAC",
        "blue-600": "#2D3654",
        "orange-400": "#D96745",
        "orange-600": "#821E00",
        beige: "#DBD5C9",
      },
    },
  },
  variants: {},
};
