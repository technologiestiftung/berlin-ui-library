import { jsxs as o, jsx as c } from "react/jsx-runtime";
import l from "../../assets/icons/accessibility_icon.svg.mjs";
import { useLanguage as n, t as a } from "./LanguageProvider.mjs";
function b({
  onOpenAccessibility: i,
  className: e = ""
}) {
  const { translations: s } = n(), t = a("accessibility", s);
  return /* @__PURE__ */ o(
    "button",
    {
      className: `flex flex-col items-center gap-1 text-[11px] leading-3 ${e}`,
      onClick: i,
      "aria-label": t,
      children: [
        /* @__PURE__ */ c(l, {}),
        t
      ]
    }
  );
}
export {
  b as AccessibilityButton
};
//# sourceMappingURL=AccessibilityButton.mjs.map
