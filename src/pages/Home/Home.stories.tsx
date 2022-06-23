import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Home from './Home'

export default {
	title: 'Pages/Home',
	component: Home,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = () => <Home />

export const Primary = Template.bind({})
