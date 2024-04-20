/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#f5f5f7",
        balck: "#000000",
        white: "#ffffff",
        transparent: "transparent",
        dark: { 100: "#2e384d", 200: "#1d1d1f", 300: "#28293d" },
        blue: { 100: "#edf1fd", 200: "#4c6fff", 300: "#2e5bff" },
        green: { 100: "#ddfff2", 200: "#00ae69" },
        red: { 100: "#ff92ae", 200: "#e94a47" },
        yellow: { 100: "#edc700" },
        orange: { 100: "#ed7200" },
        gray: { 100: "#e8e8e8" },
        slate: { 100: "#7a7a9d" },
      },
    },
  },
  plugins: [],
};
