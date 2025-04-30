import { Drawer as f, DrawerContent as u } from "./index.es11.js";
import { useLanguage as d, t as r } from "./index.es10.js";
function E({ isOpen: s, close: m, menuItems: a }) {
  const { translations: n } = d(), l = (t, c = 0) => t.map((e, o) => /* @__PURE__ */ React.createElement("div", { key: o, className: `mb-3 ${c > 0 ? "ml-4" : ""}` }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, e.icon && /* @__PURE__ */ React.createElement("span", { className: "mr-2" }, e.icon), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: e.href,
      className: "flex w-full items-center py-2 text-lg font-bold transition-colors duration-200 hover:underline",
      onClick: (i) => {
        (e.href === "#" || e.href === "") && i.preventDefault();
      }
    },
    e.label
  )), e.children && e.children.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mt-2" }, l(e.children, c + 1))));
  return /* @__PURE__ */ React.createElement(f, { open: s, onOpenChange: (t) => !t && m() }, /* @__PURE__ */ React.createElement(u, { className: "flex flex-col gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "px-6 py-4 text-base" }, /* @__PURE__ */ React.createElement("div", { className: "mt-4 mb-6 flex flex-row items-center justify-between" }, /* @__PURE__ */ React.createElement("p", { className: "text-2xl font-bold" }, r("menu.title", n) || "Menu")), /* @__PURE__ */ React.createElement("div", { className: "mt-4" }, a.length > 0 ? l(a) : /* @__PURE__ */ React.createElement("p", null, r("menu.noItems", n) || "No menu items available.")))));
}
export {
  E as MenuDrawer
};
//# sourceMappingURL=index.es20.js.map
