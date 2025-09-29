const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
        testReport({ testName, status, duration, metrics }) {
          console.log(`
📋 TEST REPORT: ${testName}
⏱️  Duration: ${duration}s
✅ Status: ${status}
📊 Metrics: ${JSON.stringify(metrics, null, 2)}
          `);
          return null;
        }
      });
    },
    pageLoadTimeout: 120000, // Increase to 45 seconds for CNN
    defaultCommandTimeout: 15000,
    execTimeout: 30000,
    taskTimeout: 30000,
  },
});