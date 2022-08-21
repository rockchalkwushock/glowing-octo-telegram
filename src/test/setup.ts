import '@testing-library/jest-dom'

import { beforeAll } from 'vitest'

import { server } from '../mocks/server'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
