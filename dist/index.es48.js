import { j as s } from "./index.es4.js";
import a from "./index.es54.js";
import { useLanguage as o, t as r } from "./index.es5.js";
function p({
  onOpenAccessibility: t,
  className: i = ""
}) {
  const { translations: n } = o(), e = r("accessibility", n);
  return /* @__PURE__ */ s.jsxs(
    "button",
    {
      className: `flex cursor-pointer flex-col items-center justify-between gap-[0.2rem] font-sans text-[11px] leading-normal ${i}`,
      onClick: t,
      "aria-label": e,
      children: [
        /* @__PURE__ */ s.jsx(a, { className: "size-8" }),
        /* @__PURE__ */ s.jsx("span", { className: "whitespace-nowrap", children: e })
      ]
    }
  );
}
export {
  p as AccessibilityButton
};
//# sourceMappingURL=index.es48.js.map
