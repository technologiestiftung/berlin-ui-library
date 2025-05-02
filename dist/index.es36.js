import { j as r } from "./index.es4.js";
import { LanguageSelect as x } from "./index.es37.js";
import { Breadcrumbs as m } from "./index.es8.js";
function l({
  showBreadcrumbs: e,
  breadcrumbs: s,
  showLanguageSelect: i,
  LinkComponent: t
}) {
  return !e && !i ? null : /* @__PURE__ */ r.jsx("div", { className: "bg-block-colored px-4 shadow-inner lg:px-0", children: /* @__PURE__ */ r.jsxs("div", { className: "mx-auto flex max-w-[980px] justify-between", children: [
    e && /* @__PURE__ */ r.jsx(m, { items: s, LinkComponent: t }),
    i && /* @__PURE__ */ r.jsx(x, {})
  ] }) });
}
export {
  l as SubHeaderBar
};
//# sourceMappingURL=index.es36.js.map
