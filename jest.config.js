module.exports = {
  testEnvironment: "node",
  setupFilesAfterEnv: [`${__dirname}/jest.setup.js`],
  testMatch: ["**/(*.)+(spec|test).ts?(x)"],
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  coveragePathIgnorePatterns: ["/__tests__/", "/__fixtures__/", "/bin/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
