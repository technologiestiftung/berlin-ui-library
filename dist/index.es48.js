import { j as e } from "./index.es4.js";
import { SearchBar as o } from "./index.es52.js";
import { useLanguage as c, t as i } from "./index.es5.js";
import { Drawer as m, DrawerContent as f } from "./index.es7.js";
function u({ isOpen: s, close: a, onSearch: n }) {
  const { translations: t } = c(), l = (r) => {
    n && n(r), a();
  };
  return /* @__PURE__ */ e.jsx(m, { open: s, onOpenChange: (r) => !r && a(), children: /* @__PURE__ */ e.jsx(f, { size: "large", className: "flex flex-col gap-4", children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-row justify-center", children: /* @__PURE__ */ e.jsxs("div", { className: "mt-[10vh] flex w-full flex-col gap-2 px-4 md:mt-[30vh] md:w-[50%]", children: [
    /* @__PURE__ */ e.jsx("h1", { className: "font-bold", children: i("search.title", t) || "Suche auf der Internetseite" }),
    /* @__PURE__ */ e.jsx(o, { onSearch: l })
  ] }) }) }) });
}
export {
  u as SearchMenu
};
//# sourceMappingURL=index.es48.js.map
