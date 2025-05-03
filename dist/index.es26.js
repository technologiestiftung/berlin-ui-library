import { j as e } from "./index.es4.js";
import { SearchIconLarge as n } from "./index.es27.js";
import { useLanguage as s, t as c } from "./index.es5.js";
function x({
  onOpenSearch: r,
  className: a = ""
}) {
  const { translations: o } = s(), t = c("search", o);
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: `flex flex-col items-center gap-1 text-[11px] leading-3 ${a}`,
      onClick: r,
      "aria-label": t,
      children: [
        /* @__PURE__ */ e.jsx(n, {}),
        t
      ]
    }
  );
}
export {
  x as SearchButton
};
//# sourceMappingURL=index.es26.js.map
