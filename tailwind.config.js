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
        primary: "#d4216c",
        primaryLight: "#ffadc6",
        secondary: "#3f2613",
        secondaryLight: "#a98360",
        neutral: "#fdeed9",

        
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
