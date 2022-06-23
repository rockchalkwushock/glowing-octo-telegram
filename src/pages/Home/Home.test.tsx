/* eslint-disable import/named */
import { render, screen } from '@utils/test-utils'
import { describe, expect, test } from 'vitest'

import Home from './Home'

describe('<Home />', () => {
	test('should render', () => {
		render(<Home />)

		expect(screen.getByText('Home')).toBeDefined()
	})
})
