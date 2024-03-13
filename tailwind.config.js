/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    /*     fontFamily: {
      sans : ["Inter", "mono"],
      serif: ["Parisienne", "mono"],
      garamond: ["EB Garamond", "mono"],
    }, */

    extend: {
      colors: {
        primary: "#BC6C25",
        primaryLight: "#DDA15E",
        secondary: "#283618",
        secondaryLight: "#606C38",
        neutral: "#FEFAE0",
        aside: "#fffdf3",
    
        westar: "#E0DBD3",    
        napa: "#AC9C8C",
      },
      screens: {
        xs: "464px",
        md: "810px",
        lg: "1025px",
      },
    },
  },
  plugins: [require("daisyui")],
};
