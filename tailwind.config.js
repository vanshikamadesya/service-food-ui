
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    
      spacing: {
        '108': '27rem', // You can adjust the value as needed
      },
      height: {
        '0.7': '0.175rem',
      },
    },
  },
  plugins: [],
};
