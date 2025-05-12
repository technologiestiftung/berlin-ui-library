import { j as e } from "./index.es4.js";
import { useLanguage as c, t as r } from "./index.es5.js";
import { Drawer as i, DrawerContent as m } from "./index.es6.js";
import { SearchForm as h } from "./index.es7.js";
function u({ isOpen: n, close: s, onSearch: t }) {
  const { translations: a } = c(), o = (l) => {
    t && t(l), s();
  };
  return /* @__PURE__ */ e.jsx(i, { open: n, onOpenChange: (l) => !l && s(), children: /* @__PURE__ */ e.jsx(m, { size: "large", className: "flex flex-col gap-4", children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-row justify-center", children: /* @__PURE__ */ e.jsxs("div", { className: "mt-[10vh] flex w-full flex-col gap-2 px-4 md:mt-[30vh] md:w-[50%]", children: [
    /* @__PURE__ */ e.jsx("h1", { className: "font-bold", children: r("search.title", a) }),
    /* @__PURE__ */ e.jsx(
      h,
      {
        placeholder: r("search.placeholder", a),
        onSubmit: o,
        className: "w-full",
        label: r("search.ariaLabel", a),
        submitLabel: r("search.submit", a)
      }
    )
  ] }) }) }) });
}
export {
  u as SearchMenu
};
//# sourceMappingURL=index.es48.js.map
