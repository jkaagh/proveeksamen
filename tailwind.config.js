  // tailwind.config.js
  module.exports = {
    
    purge: ["./src/*.js", "./src/**/*.js"],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
           colors:{
               mainPink: "#FF817E",
               customGray: "#30383B",
               textGray: "#1e2528",
               thinGray: "#6c6c6f",
               lightPink: "#fff9f8",
           },
           fontFamily:{
               "themify": ["themify"]
           }
       },
     },
     variants: {
       extend: {
           height: ["hover"],
           visibility: ["hover"],
           border: ["focus"],
           borderWidth: ["focus"]
          
       },
     },
     plugins: [],
   }