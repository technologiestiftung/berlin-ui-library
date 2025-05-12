import { j as s } from "./index.es4.js";
import n from "./index.es53.js";
import { useLanguage as o, t as c } from "./index.es5.js";
function p({
  onOpenAccessibility: t,
  className: i = ""
}) {
  const { translations: a } = o(), e = c("accessibility", a);
  return /* @__PURE__ */ s.jsxs(
    "button",
    {
      className: `flex cursor-pointer flex-col items-center justify-between gap-1 text-[11px] leading-normal ${i}`,
      onClick: t,
      "aria-label": e,
      children: [
        /* @__PURE__ */ s.jsx(n, { className: "size-8" }),
        /* @__PURE__ */ s.jsx("span", { className: "whitespace-nowrap", children: e })
      ]
    }
  );
}
export {
  p as AccessibilityButton
};
//# sourceMappingURL=index.es32.js.map
