import { j as e } from "./index.es4.js";
import n from "./index.es29.js";
import { useLanguage as o, t as c } from "./index.es5.js";
function x({
  onOpenSearch: s,
  className: r = ""
}) {
  const { translations: a } = o(), t = c("search", a);
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: `mb-[0.1rem] flex cursor-pointer flex-col items-center justify-between text-[11px] leading-normal ${r}`,
      onClick: s,
      "aria-label": t,
      children: [
        /* @__PURE__ */ e.jsx(n, { className: "size-8" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-[11px] whitespace-nowrap", children: t })
      ]
    }
  );
}
export {
  x as SearchButton
};
//# sourceMappingURL=index.es48.js.map
