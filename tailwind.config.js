/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        primary: ['MyFont', 'sans-serif'],
        secondary: ['MyFont2', 'sans-serif'],
        tertiary: ['MyFont3', 'sans-serif'],
        quaternary: ['MyFont4', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
