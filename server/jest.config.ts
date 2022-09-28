/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	setupFiles: ['./jest.setup.ts'],
	clearMocks: true,

	// Indicates whether the coverage information should be collected while executing the test
	// collectCoverage: true,
	// collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.test.{ts,tsx}'],
	// coverageProvider: 'babel',
	// coverageReporters: ['html', 'text'],
	// coverageThreshold: {
	// 	global: { branches: 100, functions: 100, lines: 100, statements: 100 },
	// },

	// An array of glob patterns indicating a set of files for which coverage information should be collected
	// collectCoverageFrom: undefined,

	// The directory where Jest should output its coverage files
	coverageDirectory: 'coverage',
	moduleFileExtensions: ['js', 'ts', 'json'],
	testMatch: ['**/?(*.)+(test).[tj]s?(x)'],
	watchPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/db/db.test.json'],
	testPathIgnorePatterns: ['/node_modules/', '/db/db.test.json'],
	transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
}
