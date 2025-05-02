import { jsx as r } from "react/jsx-runtime";
import a from "../../assets/logo_berlin_m_srgb.svg.mjs";
function m({
  logoUrl: e = "https://www.berlin.de",
  logoComponent: o
}) {
  return /* @__PURE__ */ r("div", { className: "h-11 border-b border-gray-300 bg-white px-4 py-[0.25em] md:px-6", children: /* @__PURE__ */ r("a", { href: e, "aria-label": "Homepage Berlin.de", children: o || /* @__PURE__ */ r("img", { src: a, alt: "Berlin.de Logo", className: "h-8 w-auto" }) }) });
}
export {
  m as LogoBar
};
//# sourceMappingURL=LogoBar.mjs.map
