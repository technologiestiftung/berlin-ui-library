import { BackButton } from './BackButton';
const meta = {
    title: 'Components/BackButton',
    component: BackButton,
    argTypes: {
        onClick: { action: 'clicked' },
        variant: { control: { type: 'select', options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] } },
        size: { control: { type: 'select', options: ['default', 'sm', 'lg', 'icon'] } },
        title: { control: 'text' },
    },
};
export default meta;
export const Default = {
    args: { variant: 'default', size: 'default', title: 'Back' },
};
export const IconOnly = {
    args: { variant: 'default', size: 'icon', title: '' },
};
export const Destructive = {
    args: { variant: 'destructive', size: 'default', title: 'Delete' },
};
export const Small = {
    args: { variant: 'default', size: 'sm', title: 'Back' },
};
export const Large = {
    args: { variant: 'default', size: 'lg', title: 'Back' },
};
