import { jsxs as o, jsx as n } from "react/jsx-runtime";
import { SearchIconLarge as c } from "../../assets/icons/search-icon-large.mjs";
import { useLanguage as l, t as s } from "./LanguageProvider.mjs";
function f({
  onOpenSearch: t,
  className: r = ""
}) {
  const { translations: a } = l(), e = s("search", a);
  return /* @__PURE__ */ o(
    "button",
    {
      className: `flex flex-col items-center gap-1 text-[11px] leading-3 ${r}`,
      onClick: t,
      "aria-label": e,
      children: [
        /* @__PURE__ */ n(c, {}),
        e
      ]
    }
  );
}
export {
  f as SearchButton
};
//# sourceMappingURL=SearchButton.mjs.map
