import { jsx as e, jsxs as c } from "react/jsx-runtime";
import { SearchBar as s } from "./SearchBar.mjs";
import { useLanguage as i, t as f } from "./LanguageProvider.mjs";
import { Drawer as m, DrawerContent as h } from "../Drawer/Drawer.mjs";
function g({ isOpen: t, close: a, onSearch: n }) {
  const { translations: l } = i(), o = (r) => {
    n && n(r), a();
  };
  return /* @__PURE__ */ e(m, { open: t, onOpenChange: (r) => !r && a(), children: /* @__PURE__ */ e(h, { size: "large", className: "flex flex-col gap-4", children: /* @__PURE__ */ e("div", { className: "flex flex-row justify-center", children: /* @__PURE__ */ c("div", { className: "mt-[10vh] flex w-full flex-col gap-2 px-4 md:mt-[30vh] md:w-[50%]", children: [
    /* @__PURE__ */ e("h1", { className: "font-bold", children: f("search.title", l) || "Suche auf der Internetseite" }),
    /* @__PURE__ */ e(s, { onSearch: o })
  ] }) }) }) });
}
export {
  g as SearchMenu
};
//# sourceMappingURL=SearchMenu.mjs.map
