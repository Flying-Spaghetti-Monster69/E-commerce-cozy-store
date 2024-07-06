/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 40s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-104.45%)" },
        },
      },
    },
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
          ".waves-svg": {
            "background-image": "url('./src/assets/layered-waves-light.svg')",
          },
          ".background-cards": {
            "background-color": "#eceff4",
          },
        },
      },
      {
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          ".highlighted-text": {
            color: "#818cf8",
          },
          ".waves-svg": {
            "background-image": "url('./src/assets/layered-waves-dark.svg')",
          },
          ".background-cards": {
            "background-color": "#c8cbd0",
          },
        },
      },
    ],
  },
};
