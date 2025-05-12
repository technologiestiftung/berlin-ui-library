import { j as e } from "./index.es4.js";
import { Drawer as m, DrawerContent as h } from "./index.es6.js";
import { useLanguage as f, t as c } from "./index.es5.js";
function N({ isOpen: i, close: o, menuItems: r }) {
  const { translations: l } = f(), a = (s, t = 0) => s.map((n, d) => /* @__PURE__ */ e.jsxs("div", { className: `mb-3 ${t > 0 ? "ml-4" : ""}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
      n.icon && /* @__PURE__ */ e.jsx("span", { className: "mr-2", children: n.icon }),
      /* @__PURE__ */ e.jsx(
        "a",
        {
          href: n.href,
          className: "flex w-full items-center py-2 text-lg font-bold transition-colors duration-200 hover:underline",
          onClick: (x) => {
            (n.href === "#" || n.href === "") && x.preventDefault();
          },
          children: n.label
        }
      )
    ] }),
    n.children && n.children.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-2", children: a(n.children, t + 1) })
  ] }, d));
  return /* @__PURE__ */ e.jsx(m, { open: i, onOpenChange: (s) => !s && o(), children: /* @__PURE__ */ e.jsx(h, { className: "flex flex-col gap-4", children: /* @__PURE__ */ e.jsxs("div", { className: "px-6 py-4 text-base", children: [
    /* @__PURE__ */ e.jsx("div", { className: "mt-4 mb-6 flex flex-row items-center justify-between", children: /* @__PURE__ */ e.jsx("p", { className: "text-2xl font-bold", children: c("menu.title", l) || "Menu" }) }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-4", children: r.length > 0 ? a(r) : /* @__PURE__ */ e.jsx("p", { children: c("menu.noItems", l) || "No menu items available." }) })
  ] }) }) });
}
export {
  N as MenuDrawer
};
//# sourceMappingURL=index.es49.js.map
