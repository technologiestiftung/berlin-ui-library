import { jsx as r, jsxs as t } from "react/jsx-runtime";
import { LanguageSelect as l } from "./LanguageSelect.mjs";
import { Breadcrumbs as n } from "../Breadcrumb/Breadcrumb.mjs";
function c({
  showBreadcrumbs: e,
  breadcrumbs: m,
  showLanguageSelect: i,
  LinkComponent: o
}) {
  return !e && !i ? null : /* @__PURE__ */ r("div", { className: "bg-block-colored px-4 shadow-inner lg:px-0", children: /* @__PURE__ */ t("div", { className: "mx-auto flex max-w-[980px] justify-between", children: [
    e && /* @__PURE__ */ r(n, { items: m, LinkComponent: o }),
    i && /* @__PURE__ */ r(l, {})
  ] }) });
}
export {
  c as SubHeaderBar
};
//# sourceMappingURL=SubHeaderBar.mjs.map
