import type { RenderOptions } from '@testing-library/react'
import { cleanup, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { afterEach } from 'vitest'

afterEach(() => cleanup())

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
	render(ui, {
		wrapper: ({ children }) => <Router>{children}</Router>,
		...options,
	})

export { default as userEvent } from '@testing-library/user-event'
// eslint-disable-next-line import/export
export * from '@testing-library/react'
// eslint-disable-next-line import/export
export { customRender as render }
