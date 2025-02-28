/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '108': '27rem', // You can adjust the value as needed
      },
     
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Set Inter as the default sans-serif font
      },
    },
  },
  plugins: [],
};
