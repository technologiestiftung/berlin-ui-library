import l from "./index.es23.js";
import { useLanguage as o, t as r } from "./index.es4.js";
function s({ onOpenMenu: t, className: n = "" }) {
  const { translations: a } = o(), e = r("menu", a);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: `flex flex-col items-center gap-1 text-[11px] leading-3 ${n}`,
      onClick: t,
      "aria-label": e
    },
    /* @__PURE__ */ React.createElement(l, null),
    e
  );
}
export {
  s as MenuButton
};
//# sourceMappingURL=index.es22.js.map
