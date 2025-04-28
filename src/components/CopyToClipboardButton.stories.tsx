import type { Meta, StoryObj } from '@storybook/react';
import { CopyToClipboardButton } from './CopyToClipboardButton';

const meta: Meta<typeof CopyToClipboardButton> = {
  title: 'Components/CopyToClipboardButton',
  component: CopyToClipboardButton,
  argTypes: { onClick: { action: 'clicked' } },
};
export default meta;

type Story = StoryObj<typeof CopyToClipboardButton>;

export const Default: Story = {};

export const WithSize: Story = { args: { size: 'default' } };