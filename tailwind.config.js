/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F2A44",
        accent: "#2E4057",
        muted: "#5C7A8A",
        highlight: "#A3B18A",
        background: "#F4F1EA",
      },
    },
  },
  plugins: [],
}