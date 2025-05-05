import { j as i } from "./index.es4.js";
import n from "./index.es54.js";
import { useLanguage as c, t as l } from "./index.es5.js";
function x({
  onOpenAccessibility: s,
  className: e = ""
}) {
  const { translations: o } = c(), t = l("accessibility", o);
  return /* @__PURE__ */ i.jsxs(
    "button",
    {
      className: `flex flex-col items-center gap-1 text-[11px] leading-3 ${e}`,
      onClick: s,
      "aria-label": t,
      children: [
        /* @__PURE__ */ i.jsx(n, {}),
        t
      ]
    }
  );
}
export {
  x as AccessibilityButton
};
//# sourceMappingURL=index.es48.js.map
