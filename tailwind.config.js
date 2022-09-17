/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1340px",
    },
    colors: {
      dark_Mode_Background: "hsl(207, 26%, 17%)",
      light_Mode_Background: "hsl(0, 0%, 98%)",
      dark_Mode_Elements: "hsl(209, 23%, 22%)",
      light_Mode_Elements: "hsl(0, 0%, 100%)",
      dark_Mode_Text: "hsl(0, 0%, 100%)",
      light_Mode_Text: "hsl(200, 15%, 8%)",
      light_Mode_Input: "hsl(0, 0%, 52%)",
    },
    container: {
      center: true,
    },
    fontFamily: {
      nunito: ["Nunito Sans", " sans-serif"],
    },
    extend: {
      animation: {
        skeleton: "skel 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        skel: {
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
}
