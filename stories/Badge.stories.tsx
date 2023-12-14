import { Meta, StoryObj } from '@storybook/react'
import { themedPalette } from '../styles/themeVariables'
import { Badge } from '@/common'

const meta: Meta<typeof Badge> = {
  title: 'Components/Common/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Badge>

export const Primary: Story = {
  args: {
    children: 'Badge',
    aggressive: 'body_oneline_bold_001',
    backgroundColor: themedPalette.point_bg_color,
  },
}
