interface SpinnerProps {
    /**
     * Size of the spinner: "small" = 25px, "mid" = 50px, "large" = 75px
     */
    size?: "small" | "mid" | "large";
    /**
     * Whether to show text alongside the spinner
     */
    withText?: boolean;
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
export declare function Spinner({ withText, size, text, position, textColor, }: SpinnerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Spinner.d.ts.map