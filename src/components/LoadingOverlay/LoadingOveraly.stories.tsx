import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { LoadingOverlay } from './LoadingOverlay'

export default {
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	component: LoadingOverlay,
	parameters: {
		layout: 'fullscreen',
	},
	title: 'Components/LoadingOverlay',
} as ComponentMeta<typeof LoadingOverlay>

const Template: ComponentStory<typeof LoadingOverlay> = args => (
	<LoadingOverlay {...args} />
)

export const Primary = Template.bind({})

Primary.args = {}
