import { jsx as n, jsxs as l } from "react/jsx-runtime";
import { Drawer as f, DrawerContent as p } from "../Drawer/Drawer.mjs";
import { useLanguage as u, t as i } from "./LanguageProvider.mjs";
function v({ isOpen: o, close: d, menuItems: a }) {
  const { translations: s } = u(), c = (r, t = 0) => r.map((e, h) => /* @__PURE__ */ l("div", { className: `mb-3 ${t > 0 ? "ml-4" : ""}`, children: [
    /* @__PURE__ */ l("div", { className: "flex items-center", children: [
      e.icon && /* @__PURE__ */ n("span", { className: "mr-2", children: e.icon }),
      /* @__PURE__ */ n(
        "a",
        {
          href: e.href,
          className: "flex w-full items-center py-2 text-lg font-bold transition-colors duration-200 hover:underline",
          onClick: (m) => {
            (e.href === "#" || e.href === "") && m.preventDefault();
          },
          children: e.label
        }
      )
    ] }),
    e.children && e.children.length > 0 && /* @__PURE__ */ n("div", { className: "mt-2", children: c(e.children, t + 1) })
  ] }, h));
  return /* @__PURE__ */ n(f, { open: o, onOpenChange: (r) => !r && d(), children: /* @__PURE__ */ n(p, { className: "flex flex-col gap-4", children: /* @__PURE__ */ l("div", { className: "px-6 py-4 text-base", children: [
    /* @__PURE__ */ n("div", { className: "mt-4 mb-6 flex flex-row items-center justify-between", children: /* @__PURE__ */ n("p", { className: "text-2xl font-bold", children: i("menu.title", s) || "Menu" }) }),
    /* @__PURE__ */ n("div", { className: "mt-4", children: a.length > 0 ? c(a) : /* @__PURE__ */ n("p", { children: i("menu.noItems", s) || "No menu items available." }) })
  ] }) }) });
}
export {
  v as MenuDrawer
};
//# sourceMappingURL=MenuDrawer.mjs.map
