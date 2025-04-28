import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { variant: 'default', size: 'default', children: 'Click Me' },
};

export const Link: Story = {
  args: { variant: 'link', size: 'default', children: 'Click Me' },
};