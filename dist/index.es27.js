import { j as e } from "./index.es4.js";
import o from "./index.es28.js";
import { useLanguage as r, t as i } from "./index.es5.js";
function p({ onOpenMenu: t, className: n = "" }) {
  const { translations: a } = r(), s = i("menu", a);
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: `flex cursor-pointer flex-col items-center justify-between gap-1 text-[11px] leading-normal ${n}`,
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
  p as MenuButton
};
//# sourceMappingURL=index.es27.js.map
