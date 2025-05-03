import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ArrowUpIcon from "@/assets/icons/arrow_up_icon.svg?react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "../Accordion/Accordion";
import { LanguageProvider, useLanguage, t, } from "../Header/LanguageProvider";
/**
 * Internal Footer component that uses the LanguageContext
 */
function FooterContent({ footerColumns = [], berlinFooter, LinkComponent = ({ href, children, ...props }) => (_jsx("a", { href: href, ...props, children: children })), className = "", showScrollToTop = true, }) {
    // Use the language context
    const { translations } = useLanguage();
    // Translation helper
    const translate = (key) => t(key, translations);
    const ScrollToTopButton = () => (_jsxs("button", { className: "flex w-48 gap-x-2 p-2", onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }), children: [translate("toTheTop"), " ", _jsx(ArrowUpIcon, { className: "bg-berlin-green" })] }));
    return (_jsxs("footer", { className: `w-full bg-block-colored ${className}`, children: [_jsx("div", { className: "flex w-full items-start justify-between md:p-6", children: _jsxs("div", { className: "flex w-full flex-wrap justify-between md:items-start md:pl-[5%]", children: [showScrollToTop && (_jsx("div", { className: "mb-4 flex w-full justify-end md:hidden", children: _jsx(ScrollToTopButton, {}) })), _jsx("div", { className: "flex w-full flex-col md:hidden md:w-auto md:flex-row md:flex-wrap", children: _jsx(Accordion, { collapsible: true, type: "single", variant: "footer", children: footerColumns.map((column, index) => (_jsxs(AccordionItem, { value: column.title, children: [_jsx(AccordionTrigger, { children: column.title }), _jsx(AccordionContent, { children: _jsx("div", { className: "flex flex-col", children: _jsx("ul", { className: "flex flex-col gap-6", children: column.links.map((link) => (_jsx("li", { children: _jsxs(LinkComponent, { href: link.href, className: `flex gap-x-1.5 hover:underline ${column.title.includes("socialMedia")
                                                                ? "flex-row"
                                                                : "flex-row-reverse justify-end"}`, children: [translate(link.label), link.icon && link.icon] }) }, link.href))) }) }) })] }, index))) }) }), _jsx("div", { className: "flex w-full flex-col md:w-auto md:flex-row md:flex-wrap", children: footerColumns.map((column) => (_jsxs("div", { className: "mb-6 ml-[3svw] hidden min-w-[12svw] flex-col gap-3.5 md:flex", children: [_jsx("div", { className: "flex items-center justify-between font-bold", children: _jsx("span", { children: translate(column.title) }) }), _jsx("ul", { className: "flex flex-col gap-2.5 bg-inherit", children: column.links.map((link) => (_jsx("li", { children: _jsxs(LinkComponent, { href: link.href, className: `flex gap-1.5 hover:underline ${column.title.includes("socialMedia")
                                                    ? "flex-row"
                                                    : "flex-row-reverse justify-end"}`, children: [translate(link.label), link.icon && link.icon] }) }, link.href))) })] }))) }), showScrollToTop && (_jsx("div", { className: "hidden self-start md:block", children: _jsx(ScrollToTopButton, {}) }))] }) }), berlinFooter && (_jsx("div", { suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: berlinFooter } }))] }));
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
export function Footer({ language = "de", languages = [
    { code: "de", label: "Deutsch" },
    { code: "en", label: "English" },
], translations, onLanguageChange = () => { }, ...props }) {
    // If we're already inside a LanguageProvider (like within Header),
    // we can check for that in a real implementation
    // For simplicity, we always wrap in a provider here
    return (_jsx(LanguageProvider, { initialLanguage: language, languages: languages, translations: translations, onLanguageChange: onLanguageChange, children: _jsx(FooterContent, { ...props }) }));
}
