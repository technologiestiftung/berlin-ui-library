import { j as e } from "./index.es4.js";
import a from "./index.es54.js";
import { useLanguage as o, t as r } from "./index.es5.js";
function p({
  onOpenAccessibility: t,
  className: i = ""
}) {
  const { translations: n } = o(), s = r("accessibility", n);
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: `mb-[0.1rem] flex cursor-pointer flex-col items-center justify-between text-[11px] leading-normal ${i}`,
      onClick: t,
      "aria-label": s,
      children: [
        /* @__PURE__ */ e.jsx(a, { className: "size-8" }),
        /* @__PURE__ */ e.jsx("span", { className: "whitespace-nowrap", children: s })
      ]
    }
  );
}
export {
  p as AccessibilityButton
};
//# sourceMappingURL=index.es44.js.map
