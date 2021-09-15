  // tailwind.config.js
  module.exports = {
    purge: ["./src/*.js", "./src/**/*.js"],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
           colors:{
               mainPink: "#FF817E",
               customGray: "#30383B"
           },
           fontFamily:{
               "themify": ["themify"]
           }
       },
     },
     variants: {
       extend: {
           height: ["hover"],
           visibility: ["hover"]
       },
     },
     plugins: [],
   }