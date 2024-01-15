// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B2D42",
        secondary: "#EE3E38",
        default: "#263238",
      },
    },
  },
  darkMode: "class",

  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#2B2D42",
            secondary: "#EE3E38",
            default: "#263238",
          },
        },
        dark: {
          colors: {
            primary: "#2B2D42",
            secondary: "#EE3E38",
            default: "#263238",
          },
        },
      },
    }),
  ],
};
