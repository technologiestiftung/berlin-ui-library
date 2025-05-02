import { jsxs as r, jsx as a } from "react/jsx-runtime";
import l from "../../assets/icons/bars_icon.svg.mjs";
import { useLanguage as s, t as i } from "./LanguageProvider.mjs";
function x({ onOpenMenu: e, className: n = "" }) {
  const { translations: o } = s(), t = i("menu", o);
  return /* @__PURE__ */ r(
    "button",
    {
      className: `flex flex-col items-center gap-1 text-[11px] leading-3 ${n}`,
      onClick: e,
      "aria-label": t,
      children: [
        /* @__PURE__ */ a(l, {}),
        t
      ]
    }
  );
}
export {
  x as MenuButton
};
//# sourceMappingURL=MenuButton.mjs.map
