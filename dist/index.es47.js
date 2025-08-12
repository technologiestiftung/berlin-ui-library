import { j as e } from "./index.es4.js";
import a from "./index.es48.js";
import { useLanguage as o, t as m } from "./index.es5.js";
function p({ onOpenMenu: r, className: s = "" }) {
  const { translations: n } = o(), t = m("menu", n);
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: `-mt-[0.05rem] flex cursor-pointer flex-col items-center justify-between gap-[0.06rem] text-[11px] leading-normal ${s}`,
      onClick: r,
      "aria-label": t,
      children: [
        /* @__PURE__ */ e.jsx(a, { className: "h-8" }),
        /* @__PURE__ */ e.jsx("span", { className: "-mr-[0.05rem] whitespace-nowrap", children: t })
      ]
    }
  );
}
export {
  p as MenuButton
};
//# sourceMappingURL=index.es47.js.map
