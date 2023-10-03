import { defineConfig } from 'cypress';
import fs from 'fs';
import environments from './environments.json'

export default defineConfig({
  env: {
    baseUrl: environments.Staging
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: true,
  videoCompression: 16,
  e2e: {
    setupNodeEvents(on, config) {
      on('after:spec', (spec: Cypress.Spec, results: CypressCommandLine.RunResult) => {
        if (results?.video) {
          const failures = results.tests.some((test) => test.attempts.some((attempt) => attempt.state === 'failed'));
          if (!failures) {
            fs.unlinkSync(results.video);
          }
        }
      });
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.ts'
  }
});
