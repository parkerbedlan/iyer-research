module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goodgray: "rgb(55 65 81 / 0.5)", // gray-700/50
      },
      backgroundImage: {
        cell1: "url('/cell1.jpg')",
        cell2: "url('/cell2.jpg')",
        cell3: "url('/cell3.jpg')",
        cell4: "url('/cell4.jpg')",
        cell5: "url('/cell5.jpg')",
      },
      keyframes: {
        slideFromLeft: {
          "0%": {
            transform: "translateX(-500px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
        slideFromRight: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
      },
      animation: {
        slideFromLeft: "slideFromLeft 1s ease-in-out 1",
        slideFromRight: "slideFromRight 500ms ease-in-out 1",
      },
    },
  },
  plugins: [],
};
