import { SearchBar as l } from "./index.es25.js";
import { useLanguage as m, t as o } from "./index.es10.js";
import { Drawer as s, DrawerContent as f } from "./index.es11.js";
function u({ isOpen: r, close: t, onSearch: a }) {
  const { translations: c } = m(), n = (e) => {
    a && a(e), t();
  };
  return /* @__PURE__ */ React.createElement(s, { open: r, onOpenChange: (e) => !e && t() }, /* @__PURE__ */ React.createElement(f, { size: "large", className: "flex flex-col gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-row justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "mt-[10vh] flex w-full flex-col gap-2 px-4 md:mt-[30vh] md:w-[50%]" }, /* @__PURE__ */ React.createElement("h1", { className: "font-bold" }, o("search.title", c) || "Suche auf der Internetseite"), /* @__PURE__ */ React.createElement(l, { onSearch: n })))));
}
export {
  u as SearchMenu
};
//# sourceMappingURL=index.es19.js.map
