import type { Config } from '@jest/types'

const BaseDir = `<rootDir>/src/app/pass_checker`
const BaseTestDir = `<rootDir>/src/test/pass_checker`

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        `${BaseDir}/**/*.ts`
    ],
    testMatch: [
        `${BaseTestDir}/**/*.ts`
    ]
}

export default config