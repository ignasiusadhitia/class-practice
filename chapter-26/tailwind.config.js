/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-500": "#42B549",
        "secondary-500": "#4DB2EC",
        "neutral-50": "#E4EBF5",
        "neutral-100": "#EDEDED",
        "neutral-200": "#DBDEE2",
        "neutral-300": "#AAAAAA",
        "neutral-400": "#777777",
        "neutral-500": "#6D7588",
        "neutral-600": "#444444",
        "black-900": "#000000",
        "black-800": "#111111",
        "black-700": "#212121",
        "black-600": "#222222",
        "white-50": "#FFFFFF",
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1028px",
          xl: "1028px",
          "2xl": "1028px",
        },
      },
    },
  },
  plugins: [],
};
