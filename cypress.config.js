const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://tutor.enyata.com/",
    pageLoadTimeout: 60000,
    viewportHeight: 800,
    viewportWidth: 1500,
   

  
  },
 
});