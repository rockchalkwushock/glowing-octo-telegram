import '../src/index.css'
import { QueryClient, QueryClientProvider, setLogger } from 'react-query'
import type { DecoratorFn, Parameters } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

// Disable `react-query` error logging
setLogger({
	error: () => {},
	log: (...params) => console.log(...params),
	warn: (...params) => console.warn(...params),
})

export const decorators: Array<DecoratorFn> = [
	withRouter,
	story => {
		const queryClient = new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
					refetchIntervalInBackground: false,
					retry: false,
				},
			},
		})

		return (
			<QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
		)
	},
]

export const parameters: Parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}
