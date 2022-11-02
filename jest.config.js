module.exports = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.(ts|tsx)",
    "!src/**/*.stories.tsx",
    "!src/types/*.d.ts",
    "!src/index.tsx",
  ],
  moduleFileExtensions: ["js", "json", "ts", "tsx"],
  testMatch: ["**/src/**/*.test.(ts|tsx)?(x)"],
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
};
