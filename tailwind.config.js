/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#34334d",
          "primary-focus": "202033",
          "secondary": "#fd7a3c",
          "secondary-focus": "#ea7036",
          "accent": "#2d2d47",
          "ghost": "#202033"

        },
      },
      "light",
      "dark"
    ],
  },
}

