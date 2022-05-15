module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'airhouse': {
          '50': '#f9f8ff', 
          '100': '#f3f1ff', 
          '200': '#e1dbff', 
          '300': '#cfc5ff', 
          '400': '#ac9aff', 
          '500': '#886eff', 
          '600': '#7a63e6', 
          '700': '#6653bf', 
          '800': '#524299', 
          '900': '#43367d'
      }
      }
    },
  },
  plugins: [],
}