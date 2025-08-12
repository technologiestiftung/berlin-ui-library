import React from "react";
import ArrowUpIcon from "@/assets/icons/arrow-up.svg?react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../../modules/Accordion/Accordion";
import { FooterColumn } from "./types";
import {
	LanguageProvider,
	Language,
	useLanguage,
	t,
} from "../Header/LanguageProvider";

export interface FooterProps {
	/**
	 * Footer columns data for links and navigation
	 */
	footerColumns?: FooterColumn[];

	/**
	 * HTML content for the Berlin official footer (will be rendered with dangerouslySetInnerHTML)
	 */
	berlinFooter?: string;

	/**
	 * Component to use for links in the footer
	 */
	LinkComponent?: React.ComponentType<
		React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
	>;

	/**
	 * Current language code
	 */
	language?: string;

	/**
	 * Available languages
	 */
	languages?: Language[];

	/**
	 * JSON translation files keyed by language code
	 */
	translations?: Record<string, Record<string, string>>;

	/**
	 * Callback when language changes
	 */
	onLanguageChange?: (code: string) => void;

	/**
	 * Additional CSS classes
	 */
	className?: string;

	/**
	 * Texts for i18n (if not using translations system)
	 */
	i18nTexts?: Record<string, string>;

	/**
	 * Whether to show the scroll-to-top button
	 */
	showScrollToTop?: boolean;
}

/**
 * Internal Footer component that uses the LanguageContext
 */
function FooterContent({
	footerColumns = [],
	berlinFooter,
	LinkComponent = ({ href, children, ...props }) => (
		<a href={href} {...props}>
			{children}
		</a>
	),
	className = "",
	showScrollToTop = true,
}: Omit<
	FooterProps,
	"language" | "languages" | "translations" | "onLanguageChange"
>) {
	// Use the language context
	const { translations } = useLanguage();

	// Translation helper
	const translate = (key: string) => t(key, translations);

	const ScrollToTopButton = () => (
		<button
			className="flex w-48 cursor-pointer gap-x-2 p-2"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
		>
			{translate("toTheTop")} <ArrowUpIcon className="bg-red" />
		</button>
	);

	return (
		<footer className={`w-full bg-block-colored ${className}`}>
			<div className="flex w-full items-start justify-between lg:p-6">
				<div className="flex w-full flex-wrap justify-between lg:items-start lg:pl-[5%]">
					{/* Mobile scroll to top button */}
					{showScrollToTop && (
						<div className="mb-4 flex w-full justify-end lg:hidden">
							<ScrollToTopButton />
						</div>
					)}

					{/* Footer columns */}
					<div className="flex w-full flex-col lg:hidden lg:w-auto lg:flex-row lg:flex-wrap">
						<Accordion collapsible type="single" variant="footer">
							{footerColumns.map((column, index) => (
								<AccordionItem value={column.title} key={index}>
									<AccordionTrigger>{column.title}</AccordionTrigger>
									<AccordionContent>
										<div className="flex flex-col">
											<ul className="flex flex-col gap-6">
												{column.links.map((link) => (
													<li key={link.href}>
														<LinkComponent
															href={link.href}
															className={`flex gap-x-1.5 hover:underline ${
																column.title.includes("socialMedia")
																	? "flex-row"
																	: "flex-row-reverse justify-end"
															}`}
														>
															{translate(link.label)}
															{link.icon && link.icon}
														</LinkComponent>
													</li>
												))}
											</ul>
										</div>
									</AccordionContent>

									{/* md version */}
								</AccordionItem>
							))}
						</Accordion>
					</div>

					<div className="flex w-full flex-col lg:w-auto lg:flex-row lg:flex-wrap">
						{footerColumns.map((column) => (
							<div
								key={column.title}
								className="mb-6 ml-[3svw] hidden min-w-[12svw] flex-col gap-3.5 lg:flex"
							>
								<div className="flex items-center justify-between font-bold">
									<span>{translate(column.title)}</span>
								</div>
								<ul className="flex flex-col gap-2.5 bg-inherit">
									{column.links.map((link) => (
										<li key={link.href}>
											<LinkComponent
												href={link.href}
												className={`flex gap-1.5 hover:underline ${
													column.title.includes("socialMedia")
														? "flex-row"
														: "flex-row-reverse justify-end"
												}`}
											>
												{translate(link.label)}
												{link.icon && link.icon}
											</LinkComponent>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					{/* md scroll to top button */}
					{showScrollToTop && (
						<div className="hidden self-start lg:block">
							<ScrollToTopButton />
						</div>
					)}
				</div>
			</div>

			{/* Berlin footer HTML content */}
			{berlinFooter && (
				<div
					suppressHydrationWarning={true}
					dangerouslySetInnerHTML={{ __html: berlinFooter }}
				/>
			)}
		</footer>
	);
}

/**
 * Footer component for Berlin design system
 *
 * The Footer component includes:
 * - Navigation links organized in columns
 * - Responsive design for mobile (accordion) and md views
 * - Optional Berlin footer content section
 * - Scroll to top button
 */
export function Footer({
	language = "de",
	languages = [
		{ code: "de", label: "Deutsch" },
		{ code: "en", label: "English" },
	],
	translations,
	onLanguageChange = () => {},
	...props
}: FooterProps) {
	// If we're already inside a LanguageProvider (like within Header),
	// we can check for that in a real implementation
	// For simplicity, we always wrap in a provider here

	return (
		<LanguageProvider
			initialLanguage={language}
			languages={languages}
			translations={translations}
			onLanguageChange={onLanguageChange}
		>
			<FooterContent {...props} />
		</LanguageProvider>
	);
}
