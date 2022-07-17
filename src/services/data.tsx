export type { UseQueryResult } from 'react-query'
export {
	QueryClient as DataClient,
	QueryClientProvider as DataProvider,
} from 'react-query'
export { ReactQueryDevtools as DataDevtools } from 'react-query/devtools'

let endpointUrl: string

if (typeof import.meta.env.VITE_API_ENDPOINT === 'undefined') {
	throw new Error('VITE_API_ENDPOINT is required!')
} else {
	endpointUrl = import.meta.env.VITE_API_ENDPOINT as string
}

const ACCESS_TOKEN_KEY = 'access_token'

/**
 * @name fetcher
 * @param query The GraphQL Query/Mutation.
 * @param variables The arguments passed/required by the Query/Mutation.
 * @description This function is only used in the codegen.yml.
 * It should not be used manually elsewhere.
 * @returns Promise<TData>
 */
export const fetcher = <TData, TVariables>(
	query: string,
	variables?: TVariables
): (() => Promise<TData>) => {
	return async () => {
		let headers: HeadersInit | undefined

		const token = localStorage.getItem(ACCESS_TOKEN_KEY)
		if (token) {
			headers = {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		} else {
			headers = { 'Content-Type': 'application/json' }
		}

		const res = await fetch(endpointUrl, {
			body: JSON.stringify({ query, variables }),
			headers,
			method: 'POST',
		})

		const { errors, data } = await res.json()

		if (errors) {
			const { message } = errors[0] || 'Error: ./src/services/data.tsx'
			throw new Error(message)
		}

		return data as TData
	}
}
