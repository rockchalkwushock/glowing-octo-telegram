import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { ErrorOverlay } from './ErrorOverlay'

export default {
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	component: ErrorOverlay,
	parameters: {
		layout: 'fullscreen',
	},
	title: 'Components/ErrorOverlay',
} as ComponentMeta<typeof ErrorOverlay>

const Template: ComponentStory<typeof ErrorOverlay> = args => (
	<ErrorOverlay {...args} />
)

export const Primary = Template.bind({})

Primary.args = {}
