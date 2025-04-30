import { Button } from "./Button";
const meta = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        disabled: {
            control: "boolean",
            description: "Whether the button is disabled",
            defaultValue: false,
        },
    },
};
export default meta;
export const Default = {
    args: {
        children: "Default Button",
    },
};
export const DefaultDisabled = {
    args: {
        children: "Default Disabled",
        disabled: true,
    },
};
export const Light = {
    args: {
        children: "Light Button",
        variant: "light",
    },
};
export const LightDisabled = {
    args: {
        children: "Light Disabled",
        variant: "light",
        disabled: true,
    },
};
export const White = {
    args: {
        children: "White Button",
        variant: "white",
    },
};
export const WhiteDisabled = {
    args: {
        children: "White Disabled",
        variant: "white",
        disabled: true,
    },
};
export const Fulltone = {
    args: {
        children: "Fulltone Button",
        variant: "fulltone",
    },
};
export const FulltoneDisabled = {
    args: {
        children: "Fulltone Disabled",
        variant: "fulltone",
        disabled: true,
    },
};
export const LightFulltone = {
    args: {
        children: "Light Fulltone Button",
        variant: "light-fulltone",
    },
};
export const LightFulltoneDisabled = {
    args: {
        children: "Light Fulltone Disabled",
        variant: "light-fulltone",
        disabled: true,
    },
};
export const Negative = {
    args: {
        children: "Negative Button",
        variant: "negative",
        className: "bg-gray-800",
    },
};
export const NegativeDisabled = {
    args: {
        children: "Negative Disabled",
        variant: "negative",
        disabled: true,
        className: "bg-gray-800",
    },
};
export const NegativeLight = {
    args: {
        children: "Negative Light Button",
        variant: "negative-light",
        className: "bg-gray-800",
    },
};
export const NegativeLightDisabled = {
    args: {
        children: "Negative Light Disabled",
        variant: "negative-light",
        disabled: true,
        className: "bg-gray-800",
    },
};
export const Colored = {
    args: {
        children: "Colored Button",
        variant: "colored",
    },
};
export const ColoredDisabled = {
    args: {
        children: "Colored Button Disabled",
        variant: "colored",
        disabled: true,
    },
};
export const Clean = {
    args: {
        children: "Clean Button",
        variant: "clean",
    },
};
export const CleanDisabled = {
    args: {
        children: "Clean Button Disabled",
        variant: "clean",
        disabled: true,
    },
};
export const Play = {
    args: {
        children: "Play Button",
        variant: "play",
    },
};
export const PlayDisabled = {
    args: {
        children: "Play Button",
        variant: "play",
        disabled: true,
    },
};
export const Download = {
    args: {
        children: "Download",
        variant: "download",
    },
};
export const DownloadDisabled = {
    args: {
        children: "Download",
        variant: "download",
        disabled: true,
    },
};
export const Search = {
    args: {
        children: "Search",
        variant: "search",
    },
};
export const SearchDisabled = {
    args: {
        children: "Search",
        variant: "search",
        disabled: true,
    },
};
export const Filter = {
    args: {
        children: "Filter",
        variant: "filter",
    },
};
export const FilterDisabled = {
    args: {
        children: "Filter",
        variant: "filter",
        disabled: true,
    },
};
export const AddToCart = {
    args: {
        children: "Add to Cart",
        variant: "addtocart",
    },
};
export const AddToCartDisabled = {
    args: {
        children: "Add to Cart",
        variant: "addtocart",
        disabled: true,
    },
};
export const Close = {
    args: {
        variant: "close",
        "aria-label": "Close",
    },
};
export const CloseDisabled = {
    args: {
        variant: "close",
        "aria-label": "Close",
        disabled: true,
    },
};
export const Extern = {
    args: {
        children: "External Link",
        variant: "extern",
    },
};
export const ExternDisabled = {
    args: {
        children: "External Link",
        variant: "extern",
        disabled: true,
    },
};
export const Link = {
    args: {
        children: "Link Button",
        variant: "link",
    },
};
export const LinkDisabled = {
    args: {
        children: "Link Button",
        variant: "link",
        disabled: true,
    },
};
export const FullWidth = {
    args: {
        children: "Full Width Button",
        size: "fullwidth",
    },
};
export const FullWidthDisabled = {
    args: {
        children: "Full Width Button",
        size: "fullwidth",
        disabled: true,
    },
};
export const Booking = {
    args: {
        children: "Book Now",
        booking: true,
        price: "€99",
    },
};
export const BookingDisabled = {
    args: {
        children: "Book Now",
        booking: true,
        price: "€99",
        disabled: true,
    },
};
