interface SpinnerProps {
    /**
     * Size of the spinner: "extraSmall" = 12px, "small" = 25px, "mid" = 50px, "large" = 75px
     */
    size?: "extraSmall" | "small" | "mid" | "large";
    /**
     * Whether to show text alongside the spinner
     */
    withText?: boolean;
    /**
     * Whether to show just the inner white circle (no outer red circle)
     */
    innerOnly?: boolean;
    /**
     * Set the individual Text
     */
    text?: string;
    /**
     * Whether to show text underneath or left to the spinner
     */
    position?: "under" | "right";
    /**
     * Sets color of the loading Text
     */
    textColor?: "black" | "red";
}
export declare function Spinner({ withText, size, text, position, textColor, innerOnly, }: SpinnerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Spinner.d.ts.map