import { j as r } from "./index.es4.js";
import { LanguageSelect as t } from "./index.es44.js";
import { Breadcrumbs as o } from "./index.es8.js";
function l({
  showBreadcrumbs: e,
  breadcrumbs: m,
  showLanguageSelect: i,
  LinkComponent: s
}) {
  return !e && !i ? null : /* @__PURE__ */ r.jsx("div", { className: "bg-block-colored px-4 shadow-inner lg:px-0", children: /* @__PURE__ */ r.jsxs("div", { className: "mx-auto flex max-w-[61.25rem] justify-between", children: [
    e && /* @__PURE__ */ r.jsx(o, { items: m, LinkComponent: s }),
    i && /* @__PURE__ */ r.jsx(t, {})
  ] }) });
}
export {
  l as SubHeaderBar
};
//# sourceMappingURL=index.es43.js.map
