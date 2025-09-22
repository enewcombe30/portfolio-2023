/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./src/PageComponents/**/*.{js,ts,jsx,tsx}",
  ],
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
    backgroundImage: {
      "fern-image": "url('/src/Images/fernHomepage.png')",
      "footer-texture": "url('/img/footer-texture.png')",
    },
    extend: {},
  },
  plugins: [],
};
