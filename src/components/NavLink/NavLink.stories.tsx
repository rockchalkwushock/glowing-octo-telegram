import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { NavLink } from './NavLink'

export default {
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	component: NavLink,
	parameters: {
		layout: 'centered',
	},
	title: 'Components/NavLink',
} as ComponentMeta<typeof NavLink>

const Template: ComponentStory<typeof NavLink> = args => <NavLink {...args} />

export const Active = Template.bind({})

Active.args = {
	children: 'Home',
	to: '/',
}

export const NotActive = Template.bind({})

NotActive.args = {
	children: 'Abc',
	to: '/abc',
}
