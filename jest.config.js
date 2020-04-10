module.exports = {
  testResultsProcessor: "./node_modules/jest-junit-reporter",
    collectCoverageFrom: [
        "**/*.{js,ts}",
        "!**/*.config.{js,ts}",
        "!**/server.{js,ts}",
        "!**/node_modules/**",
        "!**/vendor/**",
        "!**/dist/**",
        "!**/coverage/**"
      ],
    coverageThreshold: {
        "global": {
          "branches": 80,
          "functions": 80,
          "lines": 80,
          "statements": -10
        }
      },
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
  }