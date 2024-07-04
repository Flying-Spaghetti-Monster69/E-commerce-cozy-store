import { night } from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        nord: {
          ...require("daisyui/src/theming/themes")["nord"],
          ".highlighted-text": {
            color: "#4565a2",
          },
        },
      },
      {
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          ".highlighted-text": {
            color: "#818cf8",
          },
        },
      },
    ],
  },
};
