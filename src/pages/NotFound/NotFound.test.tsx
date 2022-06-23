/* eslint-disable import/named */
import { render, screen } from '@utils/test-utils'
import { describe, expect, test } from 'vitest'

import NotFound from './NotFound'

describe('<NotFound />', () => {
	test('should render', () => {
		render(<NotFound />)

		expect(screen.getByText('404 - Not Found')).toBeDefined()
	})
})
