import { jsx as _jsx } from "react/jsx-runtime";
import { default as BerlinLogo } from "@/assets/logo_berlin_m_srgb.svg";
export function LogoBar({ logoUrl = "https://www.berlin.de", logoComponent, }) {
    return (_jsx("div", { className: "h-11 border-b border-gray-300 bg-white px-4 py-[0.25em] md:px-6", children: _jsx("a", { href: logoUrl, "aria-label": "Homepage Berlin.de", children: logoComponent || (_jsx("img", { src: BerlinLogo, alt: "Berlin.de Logo", className: "h-8 w-auto" })) }) }));
}
