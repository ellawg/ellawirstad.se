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
        dark: "#121212",
        black: "#000000",
        blue: "#52629A",
        "blue-50": "#A8B0CD",
        beige: "#DBD5C9",
        orange: "#f93700",
        "orange-50": "#FE9A7C",
      },
    },
  },
  variants: {},
};
