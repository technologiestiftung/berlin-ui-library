import { j as e } from "./index.es4.js";
import { LanguageSelect as s } from "./index.es44.js";
import { Breadcrumbs as n } from "./index.es8.js";
function f({
  showBreadcrumbs: t,
  breadcrumbs: r,
  showLanguageSelect: a,
  LinkComponent: i,
  isSticky: o = !1
}) {
  return !t && !a ? null : /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `relative z-10 bg-block-colored px-4 lg:px-0 ${o ? "-translate-y-64 opacity-0" : "translate-y-0 opacity-100"} motion-safe:transition-all motion-safe:duration-100 motion-safe:ease-in-out`,
      children: /* @__PURE__ */ e.jsxs("div", { className: "mx-auto flex max-w-[61.25rem] justify-between", children: [
        t && /* @__PURE__ */ e.jsx(n, { items: r, LinkComponent: i }),
        a && /* @__PURE__ */ e.jsx(s, {})
      ] })
    }
  );
}
export {
  f as SubHeaderBar
};
//# sourceMappingURL=index.es43.js.map
