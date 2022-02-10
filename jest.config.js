module.exports = {
  bail: false,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**"],
  coverageDirectory: "test/coverage",
  coveragePathIgnorePatterns: ["src/config/env-config.js"],
  testEnvironment: "node",
  testMatch: ["**/test/**/*.test.js?(x)"],
};
