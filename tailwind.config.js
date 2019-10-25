const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    fontFamily: {
      sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
    },
  },
  variants: {},
  plugins: [],
}
