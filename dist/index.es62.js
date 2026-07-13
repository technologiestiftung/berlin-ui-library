import { j as e } from "./index.es4.js";
import { useLanguage as i, t as a } from "./index.es5.js";
import { Drawer as m, DrawerContent as h } from "./index.es6.js";
import { SearchForm as u } from "./index.es7.js";
function w({
  isOpen: o,
  close: l,
  onSearch: s,
  doBerlinSearch: n
}) {
  const { translations: t } = i(), c = (r) => {
    if (n) {
      l(), window.open(
        `https://www.berlin.de/suche/?q=${encodeURIComponent(r)}`,
        "_blank"
      );
      return;
    }
    s && s(r), l();
  };
  return /* @__PURE__ */ e.jsx(m, { open: o, onOpenChange: (r) => !r && l(), children: /* @__PURE__ */ e.jsx(
    h,
    {
      size: "large",
      className: "flex flex-col gap-4",
      onOpenAutoFocus: (r) => {
        r.preventDefault(), window.setTimeout(() => {
          document.querySelector("#searchInput")?.focus();
        });
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-row justify-center", children: /* @__PURE__ */ e.jsxs("div", { className: "mt-[10vh] flex w-full flex-col gap-2 px-4 lg:mt-[30vh] lg:w-[50%]", children: [
        /* @__PURE__ */ e.jsx("h1", { className: "font-bold", children: a("search.title", t) }),
        /* @__PURE__ */ e.jsx(
          u,
          {
            placeholder: a("search.placeholder", t),
            onSubmit: c,
            className: "w-full",
            label: a("search.ariaLabel", t),
            submitLabel: a("search.submit", t)
          }
        ),
        n && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-gray-500", children: a("search.berlinSearchInfo", t) })
      ] }) })
    }
  ) });
}
export {
  w as SearchMenu
};
//# sourceMappingURL=index.es62.js.map
