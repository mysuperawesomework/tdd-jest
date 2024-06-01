import type { Config } from '@jest/types'

const BaseDir = `<rootDir>/src/app/server_app`
const BaseTestDir = `<rootDir>/src/test/server_app`

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