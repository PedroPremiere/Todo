//const isolatedModules = process.env.ISOLATED_MODULES === 'true';

import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
    verbose: true,
    testEnvironment: 'jest-environment-node',
    collectCoverageFrom: ['**/*.(t|j)s'],
    moduleFileExtensions: ['js', 'json', 'ts'],
    testRegex: '.*\\.spec\\.ts$',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest'
    },
    coverageDirectory: '../coverage',
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
        '@test/(.*)': '<rootDir>/test/$1'
    },
    runner: 'groups',
    roots: ['./src/', './test/'],
    globalSetup: './test/bootstrap.ts',
    setupFilesAfterEnv: ['./test/setup.ts']
};

export default config;
