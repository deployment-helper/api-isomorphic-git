module.exports = {
  testResultsProcessor: "./node_modules/jest-junit-reporter",
    collectCoverageFrom: [
        "**/*.{js,ts}",
        "!**/*.config.{js,ts}",
        "!**/server.{js,ts}",
        "!**/app.{js,ts}",
        "!**/node_modules/**",
        "!**/vendor/**",
        "!**/dist/**",
        "!**/coverage/**"
      ],
    coverageThreshold: {
        "global": {
          "branches": 20,
          "functions": 30,
          "lines": 30,
          "statements": 30
        }
      },
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
  }