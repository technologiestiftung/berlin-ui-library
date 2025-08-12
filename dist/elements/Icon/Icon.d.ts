import { SVGProps } from 'react';
declare const icons: {
    readonly "arrow-down": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "arrow-left": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "arrow-right": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "arrow-up": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly bars: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly calendar: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly cart: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "check-circle": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "chevron-down": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "chevron-right": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "chevron-up": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "circle-down": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly clock: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "clock-circle": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly close: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly comment: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "comment-dots": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly comments: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly desktop: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly dgs: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly download: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly edit: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly envelope: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly error: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "euro-sign": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "external-link": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly facebook: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly fax: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly filter: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly flickr: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly heart: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly info: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "info-circle": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly instagram: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly landmark: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "leichte-sprache": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly link: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly lock: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "lock-open": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly login: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly logout: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly map: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "map-marker": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly mobile: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly pause: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly phone: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly pinterest: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly play: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly print: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "quote-left": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly right: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly rss: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly search: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly seeding: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly snapchat: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "square-bluesky": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "square-facebook": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "square-instagram": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "square-linkedin": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "square-threads": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "square-x-twitter": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "square-xing": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "square-youtube": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly star: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "star-half-stroke": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "star-solid": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly success: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly tablet: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly threads: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly ticket: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly times: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "times-circle": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly trash: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly twitter: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "universal-access": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly user: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "user-check": React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly whatsapp: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly x: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    readonly "x-twitter": React.FunctionComponent<SVGProps<SVGSVGElement>>;
};
export type IconName = keyof typeof icons;
export interface IconProps {
    /**
     * The icon name
     */
    name: IconName;
    /**
     * Additional CSS classes for styling the icon (use size-* for dimensions, text-* for colors)
     */
    className?: string;
    /**
     * Accessible label for screen readers
     */
    "aria-label"?: string;
    /**
     * Whether to hide the icon from screen readers (default: true)
     */
    "aria-hidden"?: boolean;
}
export declare function Icon({ name, className, "aria-label": ariaLabel, "aria-hidden": ariaHidden, }: IconProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=Icon.d.ts.map