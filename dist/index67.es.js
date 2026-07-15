import { j as e } from "./index4.es.js";
import { useLanguage as r, t as n } from "./index5.es.js";
import o from "./index128.es.js";
function p({
  onOpenAccessibility: t,
  className: a = ""
}) {
  const { translations: i } = r(), s = n("accessibility", i);
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: `-mt-[0.05rem] flex cursor-pointer flex-col items-center justify-between gap-[0.06rem] text-[11px] leading-normal ${a}`,
      onClick: t,
      "aria-label": s,
      children: [
        /* @__PURE__ */ e.jsx(o, { className: "size-8" }),
        /* @__PURE__ */ e.jsx("span", { className: "whitespace-nowrap", children: s })
      ]
    }
  );
}
export {
  p as AccessibilityButton
};
//# sourceMappingURL=index67.es.js.map
