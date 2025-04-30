import a from "./index.es24.js";
import { useLanguage as i, t as n } from "./index.es10.js";
function r({
  onOpenAccessibility: t,
  className: c = ""
}) {
  const { translations: l } = i(), e = n("accessibility", l);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: `flex flex-col items-center gap-1 text-[11px] leading-3 ${c}`,
      onClick: t,
      "aria-label": e
    },
    /* @__PURE__ */ React.createElement(a, null),
    e
  );
}
export {
  r as AccessibilityButton
};
//# sourceMappingURL=index.es18.js.map
