import type { Meta, StoryObj } from '@storybook/react'
import MediaMatch from '.'

type MediaMatchPropsAndCustomArgs = React.ComponentProps<typeof MediaMatch>

const meta: Meta<MediaMatchPropsAndCustomArgs> = {
  component: MediaMatch,
  render: ({ ...args }) => (
    <MediaMatch {...args}> MediaMatch Component</MediaMatch>
  )
}
export default meta

type Story = StoryObj<MediaMatchPropsAndCustomArgs>

export const Desktop: Story = {
  args: {
    greaterThan: 'medium'
  }
}

export const Mobile: Story = {
  args: {
    lessThan: 'medium'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
