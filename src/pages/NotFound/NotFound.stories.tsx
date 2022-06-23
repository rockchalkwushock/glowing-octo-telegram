import type { ComponentMeta, ComponentStory } from '@storybook/react'

import NotFound from './NotFound'

export default {
	title: 'Pages/NotFound',
	component: NotFound,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof NotFound>

const Template: ComponentStory<typeof NotFound> = () => <NotFound />

export const Primary = Template.bind({})
