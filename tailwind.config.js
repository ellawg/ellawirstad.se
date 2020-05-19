module.exports = {
  theme: {
    plugins: ["tailwindcss", "postcss-preset-env"],
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
    },
    extend: {
      transitionProperty: {
        height: "height",
        width: "width",
      },
      width: {
        "3px": "3px",
        "24px": "24px",
      },
      fontSize: {
        "2xs": ".7rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      colors: {
        shell: "#FCFCFA",
        mint: "#ECEDE8",
        white: "#FFFFFF",
        dark: "#090A10",
        "dark-400": "#4C4C51",
        black: "#000000",
        blue: "#52629A",
        orange: "#f93700",
        "blue-400": "#717EAC",
        "blue-600": "#2D3654",
        "orange-400": "#FF8967",
        "orange-600": "#821E00",
        beige: "#DBD5C9",
      },
    },
  },
  variants: {},
};
