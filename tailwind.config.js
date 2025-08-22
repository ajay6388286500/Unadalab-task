// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line
  ],
 theme: {
  extend: {
    fontFamily: {
      epilogue: ["Epilogue", "sans-serif"],
      inter: ['Inter', 'sans-serif'],
    },
  },
},
  plugins: [],
};

