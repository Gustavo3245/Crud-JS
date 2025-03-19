module.exports = {
    testEnvironment: 'node',
    verbose: true,
    testMatch: [
        "**/Tests/**/*.test.js"
    ],
    forceExit: true,
    globalSetup: "<rootDir>/test/globalSetup.js",
    globalTeardown: "<rootDir>/test/globalTeardown.js",
    setupFilesAfterEnv: [
      "<rootDir>/test/setupFile.ts"
    ]
      
}