/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      dark_Mode_Background: "hsl(207, 26%, 17%)",
      light_Mode_Background: "hsl(0, 0%, 98%)",
      dark_Mode_Elements: "hsl(209, 23%, 22%)",
      light_Mode_Elements: "hsl(0, 0%, 100%)",
      dark_Mode_Text: "hsl(0, 0%, 100%)",
      light_Mode_Text: "hsl(200, 15%, 8%)",
      light_Mode_Input: "hsl(0, 0%, 52%)",
    },
    extend: {},
  },
  plugins: [],
}
