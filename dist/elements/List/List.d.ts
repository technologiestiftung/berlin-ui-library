import { default as React } from 'react';
export interface ListProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "unordered" | "ordered";
    children: React.ReactNode;
}
export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
}
export declare function ListItem({ children, className, ...props }: ListItemProps): React.JSX.Element;
export declare function List({ variant, children, className, ...props }: ListProps): React.JSX.Element;
//# sourceMappingURL=List.d.ts.map