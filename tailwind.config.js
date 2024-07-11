/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0B0C10",
        secondary: "#757B83",
        tertiary: "#22252A",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#b3adad",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg2.jpg')",
        "body-pattern": "url('/src/assets/body.jpg')",
      },
    },
  },
  plugins: [],
};
