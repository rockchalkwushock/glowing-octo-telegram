import react from '@vitejs/plugin-react'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import aliases from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		// Reads "paths" in tsconfig.json and adds aliases.
		{
			...aliases(),
			enforce: 'pre',
		},
		react(),
		{
			// Vite no longer by default does vendor chunk splitting.
			...splitVendorChunkPlugin(),
			apply: 'build',
			enforce: 'post',
		},
	],
	server: {
		open: true,
		port: 4000,
	},
})
