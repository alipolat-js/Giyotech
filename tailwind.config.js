const theme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Rubik"', ...theme.fontFamily.sans],
        notoSerif: ['"Lora"', ...theme.fontFamily.serif],
      },
      colors: {
        "primary-light": "#fcfcfc",
        "instagram-color": "#ea00d4",
        "facebook-color": "#3b5998"
      },
    },
  },
  plugins: [],
}
