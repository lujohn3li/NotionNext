const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: './' })

// Data-only tests do not need the project's browser/canvas test fixtures.
module.exports = createJestConfig({
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/chipai/**/*.test.js'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' }
})
