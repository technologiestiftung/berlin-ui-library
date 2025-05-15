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
			className={`relative z-10 bg-block-colored px-4 lg:px-0 ${isSticky ? "-translate-y-16" : "translate-y-0"} transition-transform duration-200 ease-in-out`}
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
