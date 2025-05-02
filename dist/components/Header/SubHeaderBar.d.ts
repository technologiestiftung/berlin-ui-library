import { BreadcrumbItem, LinkComponentProps } from './types';
interface SubHeaderBarProps extends LinkComponentProps {
    showBreadcrumbs: boolean;
    breadcrumbs: BreadcrumbItem[];
    showLanguageSelect: boolean;
}
export declare function SubHeaderBar({ showBreadcrumbs, breadcrumbs, showLanguageSelect, LinkComponent, }: SubHeaderBarProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=SubHeaderBar.d.ts.map