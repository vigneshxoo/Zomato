/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   './index.css'
  ],
  theme: {
    extend: {
      colors: {
        customGray: 'rgb(54, 54, 54)',
      },
      boxShadow: {
        customShadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
      },
      fontFamily: {
        fam: ["Poppins", "sans-serif"],
        rail: ["Raleway", "sans-serif"]
        
       },
     
    },
  },
  plugins: [],
}


//
