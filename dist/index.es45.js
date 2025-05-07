import { j as e } from "./index.es4.js";
import r from "./index.es22.js";
import { useLanguage as o, t as c } from "./index.es5.js";
function p({
  onOpenSearch: s,
  className: t = ""
}) {
  const { translations: n } = o(), a = c("search", n);
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: `flex flex-col items-center justify-between gap-1 text-[11px] leading-normal ${t}`,
      onClick: s,
      "aria-label": a,
      children: [
        /* @__PURE__ */ e.jsx(r, { className: "size-8" }),
        /* @__PURE__ */ e.jsx("span", { className: "whitespace-nowrap", children: a })
      ]
    }
  );
}
export {
  p as SearchButton
};
//# sourceMappingURL=index.es45.js.map
