// src/components/Header/SubHeaderBar.tsx
import { LanguageSelect } from "./LanguageSelect";
import { BreadcrumbItem, LinkComponentProps } from "./types";
import { Breadcrumbs } from "../Breadcrumb/Breadcrumb";

interface SubHeaderBarProps extends LinkComponentProps {
	showBreadcrumbs: boolean;
	breadcrumbs: BreadcrumbItem[];
	showLanguageSelect: boolean;
	isSticky?: boolean;
}

export function SubHeaderBar({
	showBreadcrumbs,
	breadcrumbs,
	showLanguageSelect,
	LinkComponent,
	isSticky = false,
}: SubHeaderBarProps) {
	// Render only if at least one section is shown
	if (!showBreadcrumbs && !showLanguageSelect) {
		return null;
	}

	return (
		<div
			className={`relative z-10 bg-block-colored px-4 lg:px-0 ${isSticky ? "-translate-y-64 opacity-0" : "translate-y-0 opacity-100"} motion-safe:transition-all motion-safe:duration-100 motion-safe:ease-in-out`}
		>
			<div className="mx-auto flex max-w-[61.25rem] justify-between">
				{showBreadcrumbs && (
					<Breadcrumbs items={breadcrumbs} LinkComponent={LinkComponent} />
				)}
				{showLanguageSelect && <LanguageSelect />}
			</div>
		</div>
	);
}
