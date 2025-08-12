import { j as e } from "./index.es4.js";
import { useLanguage as c, t as a } from "./index.es5.js";
import { Drawer as i, DrawerContent as m } from "./index.es6.js";
import { SearchForm as h } from "./index.es7.js";
function d({ isOpen: n, close: s, onSearch: t }) {
  const { translations: l } = c(), o = (r) => {
    t && t(r), s();
  };
  return /* @__PURE__ */ e.jsx(i, { open: n, onOpenChange: (r) => !r && s(), children: /* @__PURE__ */ e.jsx(m, { size: "large", className: "flex flex-col gap-4", children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-row justify-center", children: /* @__PURE__ */ e.jsxs("div", { className: "mt-[10vh] flex w-full flex-col gap-2 px-4 lg:mt-[30vh] lg:w-[50%]", children: [
    /* @__PURE__ */ e.jsx("h1", { className: "font-bold", children: a("search.title", l) }),
    /* @__PURE__ */ e.jsx(
      h,
      {
        placeholder: a("search.placeholder", l),
        onSubmit: o,
        className: "w-full",
        label: a("search.ariaLabel", l),
        submitLabel: a("search.submit", l)
      }
    )
  ] }) }) }) });
}
export {
  d as SearchMenu
};
//# sourceMappingURL=index.es63.js.map
