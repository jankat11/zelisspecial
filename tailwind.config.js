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
        hillary: "#283618",
        napa: "#AC9C8C",
        napaDarker: "#9b8c7e",
        napaDark: "#786d62",
        napaDarkest: "#675e54",
        dallas: {
          50: "#faf9ec",
          100: "#f2f1cf",
          200: "#e7e2a1",
          300: "#d8cd6c",
          400: "#ccb743",
          500: "#bca336",
          600: "#a2822c",
          700: "#826126",
          800: "#674b24",
          900: "#5e4325",
          950: "#362412",
          DEFAULT: "#674b24",
        },
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
