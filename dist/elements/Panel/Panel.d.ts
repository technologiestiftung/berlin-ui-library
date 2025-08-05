import { default as React, ReactNode } from 'react';
export type PanelVariant = "heavy" | "dark" | "light" | "clean" | "bordered" | "colored" | "boxed" | "white" | "hint";
export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    variant?: PanelVariant;
    removeInnerPanels?: boolean;
    footer?: ReactNode;
    className?: string;
}
declare const Panel: React.ForwardRefExoticComponent<PanelProps & React.RefAttributes<HTMLDivElement>>;
export { Panel };
//# sourceMappingURL=Panel.d.ts.map