import { LanguageSelect as l } from "./index.es19.js";
import { Breadcrumbs as n } from "./index.es7.js";
function i({
  showBreadcrumbs: e,
  breadcrumbs: r,
  showLanguageSelect: t,
  LinkComponent: a
}) {
  return !e && !t ? null : /* @__PURE__ */ React.createElement("div", { className: "bg-berlin-grey-light px-4 shadow-inner lg:px-0" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto flex max-w-[980px] justify-between" }, e && /* @__PURE__ */ React.createElement(n, { items: r, LinkComponent: a }), t && /* @__PURE__ */ React.createElement(l, null)));
}
export {
  i as SubHeaderBar
};
//# sourceMappingURL=index.es18.js.map
