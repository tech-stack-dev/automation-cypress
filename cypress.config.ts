import { defineConfig } from "cypress";

const requirements = require('./environments.json');

export default defineConfig({
  env: {
    baseUrl: requirements.Staging
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
