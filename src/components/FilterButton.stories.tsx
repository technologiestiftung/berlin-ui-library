import type { Meta, StoryObj } from '@storybook/react';
import FilterButton from './FilterButton';

const meta: Meta<typeof FilterButton> = {
  title: 'Components/FilterButton',
  component: FilterButton,
  argTypes: { onClick: { action: 'clicked' } },
};
export default meta;

type Story = StoryObj<typeof FilterButton>;

export const Default: Story = { args: { numActiveFilters: 0 } };

export const WithCount: Story = { args: { numActiveFilters: 3 } };