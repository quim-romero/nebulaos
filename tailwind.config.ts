import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5EEAD4",
        secondary: "#4CC9B6",
        dark: "#0E0E10",
        light: "#FAFAFA",
        muted: "#A1A1AA",
        surface: "#1A1A1D",
        border: "#2A2A2E",
      },
    },
  },
  plugins: [],
}
export default config
