/* eslint-disable @typescript-eslint/ban-ts-comment */
import react from '@vitejs/plugin-react'
import aliases from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

// @ts-ignore
export default defineConfig({
	// @ts-ignore
	plugins: [aliases(), react()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./src/test/setup.ts'],
	},
})
