import { j as e } from "./index.es4.js";
import s from "./index.es28.js";
import { useLanguage as a, t as l } from "./index.es5.js";
function u({ onOpenMenu: n, className: o = "" }) {
  const { translations: r } = a(), t = l("menu", r);
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: `flex flex-col items-center gap-1 text-[11px] leading-3 ${o}`,
      onClick: n,
      "aria-label": t,
      children: [
        /* @__PURE__ */ e.jsx(s, {}),
        t
      ]
    }
  );
}
export {
  u as MenuButton
};
//# sourceMappingURL=index.es27.js.map
