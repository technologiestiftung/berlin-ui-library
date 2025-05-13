import { j as e } from "./index.es4.js";
import a from "./index.es41.js";
import { useLanguage as o, t as l } from "./index.es5.js";
function u({ onOpenMenu: n, className: s = "" }) {
  const { translations: r } = o(), t = l("menu", r);
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: `mb-[0.1rem] flex cursor-pointer flex-col items-center justify-between text-[11px] leading-normal ${s}`,
      onClick: n,
      "aria-label": t,
      children: [
        /* @__PURE__ */ e.jsx(a, { className: "h-8" }),
        /* @__PURE__ */ e.jsx("span", { className: "whitespace-nowrap", children: t })
      ]
    }
  );
}
export {
  u as MenuButton
};
//# sourceMappingURL=index.es40.js.map
