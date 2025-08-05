import { jsx as _jsx } from "react/jsx-runtime";
import { default as BerlinLogo } from "@/assets/logo_berlin_m_srgb.svg";
export function LogoBar({ logoUrl = "https://www.berlin.de", logoComponent, isSticky = false, }) {
    return (_jsx("div", { className: `sticky top-0 z-10 flex items-center justify-start border-b transition-[height,background-color,opacity,padding] duration-200 ease-in-out ${isSticky
            ? "h-[3px] border-none bg-grey-darkest px-4 py-0 lg:px-6"
            : "h-11 border-gray-300 bg-white px-4 py-[0.25em] lg:px-6"}`, children: _jsx("a", { href: logoUrl, "aria-label": "Homepage Berlin.de", className: `transition-opacity duration-200 ease-in-out ${isSticky ? "opacity-0" : "opacity-100"}`, children: logoComponent || (_jsx("img", { src: BerlinLogo, alt: "Berlin.de Logo", className: "object-fill" })) }) }));
}
