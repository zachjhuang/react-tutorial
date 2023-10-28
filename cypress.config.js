const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5174',
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});

