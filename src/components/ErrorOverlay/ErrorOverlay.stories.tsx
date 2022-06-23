import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ErrorOverlay } from './ErrorOverlay'

export default {
	title: 'Components/ErrorOverlay',
	component: ErrorOverlay,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ErrorOverlay>

const Template: ComponentStory<typeof ErrorOverlay> = args => (
	<ErrorOverlay {...args} />
)

export const Primary = Template.bind({})

Primary.args = {}
