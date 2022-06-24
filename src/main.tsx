import './index.css'

import { DataClient, DataDevtools, DataProvider } from '@services/data'
import { Router } from '@services/router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

const client = new DataClient()

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
