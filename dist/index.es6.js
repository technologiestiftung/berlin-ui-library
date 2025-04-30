import { SearchIconLarge as r } from "./index.es16.js";
import { useLanguage as c, t as l } from "./index.es10.js";
function i({
  onOpenSearch: t,
  className: a = ""
}) {
  const { translations: n } = c(), e = l("search", n);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: `flex flex-col items-center gap-1 text-[11px] leading-3 ${a}`,
      onClick: t,
      "aria-label": e
    },
    /* @__PURE__ */ React.createElement(r, null),
    e
  );
}
export {
  i as SearchButton
};
//# sourceMappingURL=index.es6.js.map
