/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  safelist: [
    "text-base",
    "text-xl"
  ],
  theme: {
    extend: {
      colors: {
        "section-color" : "#60ffd9"
      },
      backgroundColor: {
        "primary": "#081426",
        "section": "#0e1b33",
        "btn-hover": "#60ffd9",
        "tag": "#085a4f",
        "tech": "#4B0082",
      },
      textColor: {
        "primary": "#FFFFFF",
        "secondary": "#60ffd9",
        "btn-hover" : "#0e1b33"
      },
      boxShadow: {
        'section': '0px 0px 10px',
        'dropdown-item': '0px 0px 1px',
      },
      spacing: {
        'thumb': '10rem'
      }
    }
  },
  plugins: [],
}
