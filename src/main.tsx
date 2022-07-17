import './index.css'

import { DataClient, DataDevtools, DataProvider } from '@services/data'
import { Router } from '@services/router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

import('./mocks/browser').then(({ worker }) => {
	let client: DataClient
	// Utilize MSW while in development mode.
	// This will run all api calls through the MSW handlers.
	// If a handler does not exist you will need to create it.
	if (import.meta.env.DEV) {
		worker.start()
		client = new DataClient({
			defaultOptions: {
				queries: {
					retry: false,
				},
			},
		})

		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		createRoot(document.getElementById('root')!).render(
			<StrictMode>
				<DataProvider client={client}>
					<Router>
						<App />
					</Router>
					<DataDevtools />
				</DataProvider>
			</StrictMode>
		)
		return
	}

	client = new DataClient()

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<DataProvider client={client}>
				<Router>
					<App />
				</Router>
				<DataDevtools />
			</DataProvider>
		</StrictMode>
	)
})
