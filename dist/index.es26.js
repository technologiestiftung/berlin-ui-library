import { j as r } from "./index.es4.js";
import { cn as t } from "./index.es28.js";
const o = {
  extraSmall: "h-6 w-6",
  small: "h-8 w-8",
  mid: "h-16 w-16",
  large: "h-20 w-20"
}, h = {
  extraSmall: "h-4 w-4 top-1 left-1",
  small: "h-6 w-6 top-1 left-1",
  mid: "h-12 w-12 top-2 left-2",
  large: "h-16 w-16 top-2 left-2"
}, f = {
  extraSmall: "border-[3px]",
  small: "border-[4px]",
  mid: "border-[5px]",
  large: "border-[6px]"
}, b = {
  extraSmall: "text-xs",
  small: "text-base",
  mid: "text-xl",
  large: "text-2xl"
}, g = {
  extraSmall: "gap-1",
  small: "gap-2",
  mid: "gap-4",
  large: "gap-6"
};
function j({
  withText: m,
  size: e = "mid",
  text: s,
  position: l,
  textColor: c = "red",
  innerOnly: a = !1
}) {
  const n = m || s, x = l === "right" && n ? t("flex items-center justify-center", g[e]) : "text-center", d = t(
    "animate-spin-outer relative inline-block rounded-full ",
    !a && "bg-red",
    o[e]
  ), i = t(
    "animate-spin-inner absolute z-10 rounded-full border-white/80 border-t-transparent",
    a ? o[e] : h[e],
    f[e]
  ), p = t(
    "font-bold",
    c === "red" ? "text-red" : "text-black",
    l === "under" || !l ? "my-2" : "",
    b[e]
  );
  return a ? /* @__PURE__ */ r.jsx("div", { className: d, children: /* @__PURE__ */ r.jsx("div", { className: i }) }) : /* @__PURE__ */ r.jsxs("div", { className: x, children: [
    /* @__PURE__ */ r.jsx("div", { className: d, children: /* @__PURE__ */ r.jsx("div", { className: i }) }),
    n && /* @__PURE__ */ r.jsx("p", { className: p, children: s || "Der Inhalt wird geladen" })
  ] });
}
export {
  j as Spinner
};
//# sourceMappingURL=index.es26.js.map
