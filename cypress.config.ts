const { defineConfig } = require('cypress');
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.airalo.com/en',
    defaultCommandTimeout: 10000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    env: {
      apiBaseUrl: 'https://sandbox-partners-api.airalo.com',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    },
    setupNodeEvents(on, config) {},
  },
});
