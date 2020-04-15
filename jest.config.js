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
          "branches": 10,
          "functions": 10,
          "lines": 10,
          "statements": 10
        }
      },
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
  }