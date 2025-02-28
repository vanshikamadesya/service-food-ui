
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '108': '27rem', // You can adjust the value as needed
      },
     
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      height: {
        '0.7': '0.175rem',
      },
    },
  },
  plugins: [],
};
