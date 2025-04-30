import { j as r } from "./index.es4.js";
import { LanguageSelect as x } from "./index.es24.js";
import { Breadcrumbs as m } from "./index.es8.js";
function o({
  showBreadcrumbs: e,
  breadcrumbs: t,
  showLanguageSelect: i,
  LinkComponent: s
}) {
  return !e && !i ? null : /* @__PURE__ */ r.jsx("div", { className: "bg-berlin-grey-light px-4 shadow-inner lg:px-0", children: /* @__PURE__ */ r.jsxs("div", { className: "mx-auto flex max-w-[980px] justify-between", children: [
    e && /* @__PURE__ */ r.jsx(m, { items: t, LinkComponent: s }),
    i && /* @__PURE__ */ r.jsx(x, {})
  ] }) });
}
export {
  o as SubHeaderBar
};
//# sourceMappingURL=index.es23.js.map
