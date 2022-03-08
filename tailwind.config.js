module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        drawers: "url('/src/assets/images/drawers.jpg')",
      },
    },
    colors: {
      'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
      'desaturated-dark-blue': 'hsl(214, 17%, 51%)',
      'grayish-blue': 'hsl(212, 23%, 69%)',
      'light-grayish-blue': 'hsl(210, 46%, 95%)',
    },
  },
  plugins: [],
};
