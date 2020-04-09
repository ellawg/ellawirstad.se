module.exports = {
  theme: {
    plugins: ["tailwindcss", "postcss-preset-env"],
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        "7xl": "5rem",
      },
      colors: {
        shell: "#FCFCFA",
        white: "#FFFFFF",
        dark: "#121212",
        black: "#000000",
        blue: "#52629A",
        beige: "#DBD5C9",
        orange: "#f93700",
      },
    },
  },
  variants: {},
};
