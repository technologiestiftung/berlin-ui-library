import { j as e } from "./index.es4.js";
import n from "./index.es26.js";
import { useLanguage as o, t as c } from "./index.es5.js";
function p({
  onOpenSearch: t,
  className: a = ""
}) {
  const { translations: r } = o(), s = c("search", r);
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: `flex cursor-pointer flex-col items-center justify-between gap-1 text-[11px] leading-normal ${a}`,
      onClick: t,
      "aria-label": s,
      children: [
        /* @__PURE__ */ e.jsx(n, { className: "size-8" }),
        /* @__PURE__ */ e.jsx("span", { className: "whitespace-nowrap", children: s })
      ]
    }
  );
}
export {
  p as SearchButton
};
//# sourceMappingURL=index.es46.js.map
