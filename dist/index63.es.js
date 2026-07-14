import { j as e } from "./index4.es.js";
import n from "./index48.es.js";
import { useLanguage as o, t as m } from "./index5.es.js";
function p({
  onOpenSearch: t,
  className: s = ""
}) {
  const { translations: a } = o(), r = m("search", a);
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: `-mt-[0.05rem] -ml-[0.05rem] flex cursor-pointer flex-col items-center justify-between gap-[0.06rem] pr-[0.05rem] text-[11px] leading-normal ${s}`,
      onClick: t,
      "aria-label": r,
      children: [
        /* @__PURE__ */ e.jsx(n, { className: "size-8" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-[11px] whitespace-nowrap", children: r })
      ]
    }
  );
}
export {
  p as SearchButton
};
//# sourceMappingURL=index63.es.js.map
