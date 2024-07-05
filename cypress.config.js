import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://quiz-mania-sigma.vercel.app/#",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
