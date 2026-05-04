import { j as e } from "./index.es4.js";
import { useLanguage as i, t as l } from "./index.es5.js";
import { Drawer as m, DrawerContent as h } from "./index.es6.js";
import { SearchForm as x } from "./index.es7.js";
function w({
  isOpen: o,
  close: s,
  onSearch: t,
  doBerlinSearch: n
}) {
  const { translations: a } = i(), c = (r) => {
    if (n)
      return s(), window.open(
        `https://www.berlin.de/suche/?q=${encodeURIComponent(r)}`,
        "_blank"
      );
    t && t(r), s();
  };
  return /* @__PURE__ */ e.jsx(m, { open: o, onOpenChange: (r) => !r && s(), children: /* @__PURE__ */ e.jsx(h, { size: "large", className: "flex flex-col gap-4", children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-row justify-center", children: /* @__PURE__ */ e.jsxs("div", { className: "mt-[10vh] flex w-full flex-col gap-2 px-4 lg:mt-[30vh] lg:w-[50%]", children: [
    /* @__PURE__ */ e.jsx("h1", { className: "font-bold", children: l("search.title", a) }),
    /* @__PURE__ */ e.jsx(
      x,
      {
        placeholder: l("search.placeholder", a),
        onSubmit: c,
        className: "w-full",
        label: l("search.ariaLabel", a),
        submitLabel: l("search.submit", a)
      }
    ),
    n && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-gray-500", children: l("search.berlinSearchInfo", a) })
  ] }) }) }) });
}
export {
  w as SearchMenu
};
//# sourceMappingURL=index.es66.js.map
