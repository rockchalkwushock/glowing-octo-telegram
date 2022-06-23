/* eslint-disable import/named */
import { render, screen } from '@utils/test-utils'
import { describe, expect, test } from 'vitest'

import { NavLink } from './NavLink'

describe('<NavLink />', () => {
	test('should render', () => {
		render(<NavLink to='/'>Home</NavLink>)

		expect(screen.getByText('Home')).toBeDefined()
	})
})
