import { j as r } from "./index.es4.js";
import { LanguageSelect as n } from "./index.es44.js";
import { Breadcrumbs as o } from "./index.es8.js";
function u({
  showBreadcrumbs: e,
  breadcrumbs: a,
  showLanguageSelect: t,
  LinkComponent: s,
  isSticky: i = !1
}) {
  return !e && !t ? null : /* @__PURE__ */ r.jsx(
    "div",
    {
      className: `relative z-10 bg-block-colored px-4 lg:px-0 ${i ? "-translate-y-16" : "translate-y-0"} transition-transform duration-200 ease-in-out`,
      children: /* @__PURE__ */ r.jsxs("div", { className: "mx-auto flex max-w-[61.25rem] justify-between", children: [
        e && /* @__PURE__ */ r.jsx(o, { items: a, LinkComponent: s }),
        t && /* @__PURE__ */ r.jsx(n, {})
      ] })
    }
  );
}
export {
  u as SubHeaderBar
};
//# sourceMappingURL=index.es43.js.map
