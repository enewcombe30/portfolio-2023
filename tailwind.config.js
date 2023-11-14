/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "200px",
      // => @media (min-width: 200px { ... })
      sm: "576px",
      // => @media (min-width: 576px) { ... }
      md: "769px",
      // => @media (min-width: 769px) { ... }
      lg: "992px",
      // => @media (min-width: 992px) { ... }
      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
