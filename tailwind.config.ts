import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#0D0F12", deep: "#080A0C", panel: "#1A1D24", edge: "#2A2F3A", volt: "#FF5500", flare: "#FF8A4D", mist: "#CBD5E1" },
      fontFamily: { display: ["Impact", "Haettenschweiler", "Arial Narrow Bold", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
