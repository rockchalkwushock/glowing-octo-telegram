import '../src/index.css'

import type { DecoratorFn, Parameters } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

export const decorators: Array<DecoratorFn> = [withRouter]

export const parameters: Parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}
