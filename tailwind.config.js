/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        royalblue: "#367cff",
        tomato: "#ff725e",
        gainsboro: "#d9d9d9",
        darkslateblue: "#4d2c5e",
        lightskyblue: "#a9c7ff",
        gray: "#8c8b8b",
        black: "#000",
        floralwhite: "#fdf8ee",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        lgi: "19px",
        "2xl": "21px",
      },
    },
    fontSize: {
      xl: "20px",
      "15xl": "34px",
      "5xl": "24px",
      "3xl": "22px",
      base: "16px",
      "17xl": "36px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
