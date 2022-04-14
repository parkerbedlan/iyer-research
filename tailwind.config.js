module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        cell1: "url('/cell1.jpg')",
        cell2: "url('/cell2.jpg')",
        cell3: "url('/cell3.jpg')",
        cell4: "url('/cell4.jpg')",
        cell5: "url('/cell5.jpg')",
      },
    },
  },
  plugins: [],
};
