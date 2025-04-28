import type { Meta, StoryObj } from '@storybook/react';
import { BackButton } from './BackButton';

const meta: Meta<typeof BackButton> = {
  title: 'Components/BackButton',
  component: BackButton,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: { control: { type: 'select', options: ['default','destructive','outline','secondary','ghost','link'] } },
    size: { control: { type: 'select', options: ['default','sm','lg','icon'] } },
    title: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof BackButton>;

export const Default: Story = {
  args: { variant: 'default', size: 'default', title: 'Back' },
};

export const IconOnly: Story = {
  args: { variant: 'default', size: 'icon', title: '' },
};

export const Destructive: Story = {
  args: { variant: 'destructive', size: 'default', title: 'Delete' },
};

export const Small: Story = {
  args: { variant: 'default', size: 'sm', title: 'Back' },
};

export const Large: Story = {
  args: { variant: 'default', size: 'lg', title: 'Back' },
};