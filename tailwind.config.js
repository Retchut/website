/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  safelist: [
    "text-base",
    "text-xl",
    "aspect-square"
  ],
  theme: {
    extend: {
      maxWidth: {
        "3/5vw" : "60vw",
        "proj-img-xs" : "70%"
      },
      width: {
        "1/3vw" : "33.333333vw",
        "proj-img-md" : "30%",
        "proj-desc-md" : "70%",
        "proj-tags-xs" : "60%",
        "proj-tags-md" : "70%",
        "proj-btn-xs" : "40%",
        "proj-btn-md" : "30%"
      },
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
      aspectRatio: {
        'poster': '2 / 3',
        'youtube-embed': '5 / 3'
      }
    }
  },
  plugins: [],
}
