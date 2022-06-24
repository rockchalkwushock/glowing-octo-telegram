import { DataClient, DataProvider } from '@services/data'
import { Router } from '@services/router'
import type { RenderOptions } from '@testing-library/react'
import { cleanup, render } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => cleanup())

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
	render(ui, {
		wrapper: ({ children }) => (
			<DataProvider client={new DataClient()}>
				<Router>{children}</Router>
			</DataProvider>
		),
		...options,
	})

export { default as userEvent } from '@testing-library/user-event'
// eslint-disable-next-line import/export
export * from '@testing-library/react'
// eslint-disable-next-line import/export
export { customRender as render }
