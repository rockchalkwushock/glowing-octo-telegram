import { ComponentMeta, ComponentStory } from '@storybook/react'

import { LoadingOverlay } from './LoadingOverlay'

export default {
	title: 'Components/LoadingOverlay',
	component: LoadingOverlay,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof LoadingOverlay>

const Template: ComponentStory<typeof LoadingOverlay> = args => (
	<LoadingOverlay {...args} />
)

export const Primary = Template.bind({})

Primary.args = {}
