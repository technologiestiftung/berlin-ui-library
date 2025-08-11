import { j as e } from "./index.es4.js";
import n from "./index.es65.js";
import { useLanguage as r, t as o } from "./index.es5.js";
function p({
  onOpenAccessibility: t,
  className: i = ""
}) {
  const { translations: a } = r(), s = o("accessibility", a);
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: `-mt-[0.05rem] flex cursor-pointer flex-col items-center justify-between gap-[0.06rem] text-[11px] leading-normal ${i}`,
      onClick: t,
      "aria-label": s,
      children: [
        /* @__PURE__ */ e.jsx(n, { className: "size-8" }),
        /* @__PURE__ */ e.jsx("span", { className: "whitespace-nowrap", children: s })
      ]
    }
  );
}
export {
  p as AccessibilityButton
};
//# sourceMappingURL=index.es55.js.map
