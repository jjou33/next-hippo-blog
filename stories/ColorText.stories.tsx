import type { Meta, StoryObj } from '@storybook/react'

import ColorText from 'components/common/ColorText'

const meta: Meta<typeof ColorText> = {
  title: 'Components/Common/ColorText',
  component: ColorText,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof ColorText>

export const Primary: Story = {
  args: {
    text: 'HELLO',
    aggressive: 'montserratAlternates_Medium_003',
  },
}
