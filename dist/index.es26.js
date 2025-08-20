import { j as r } from "./index.es4.js";
import { cn as t } from "./index.es27.js";
const p = {
  small: "h-8 w-8",
  mid: "h-16 w-16",
  large: "h-20 w-20"
}, x = {
  small: "h-6 w-6 top-1 left-1 border-[4px]",
  mid: "h-12 w-12 top-2 left-2 border-[5px]",
  large: "h-16 w-16 top-2 left-2 border-[6px]"
}, h = {
  small: "text-base",
  mid: "text-xl",
  large: "text-2xl"
}, b = {
  small: "gap-2",
  mid: "gap-4",
  large: "gap-6"
};
function g({
  withText: a,
  size: e = "mid",
  text: l,
  position: s,
  textColor: i = "red"
}) {
  const n = a || l, d = s === "right" && n ? t("flex items-center justify-center", b[e]) : "text-center", o = t(
    "animate-spin-outer relative inline-block rounded-full bg-red",
    p[e]
  ), c = t(
    "animate-spin-inner absolute z-10 rounded-full border-white/80 border-t-transparent",
    x[e]
  ), m = t(
    "font-bold",
    i === "red" ? "text-red" : "text-black",
    s === "under" || !s ? "my-2" : "",
    h[e]
  );
  return /* @__PURE__ */ r.jsxs("div", { className: d, children: [
    /* @__PURE__ */ r.jsx("div", { className: o, children: /* @__PURE__ */ r.jsx("div", { className: c }) }),
    n && /* @__PURE__ */ r.jsx("p", { className: m, children: l || "Der Inhalt wird geladen" })
  ] });
}
export {
  g as Spinner
};
//# sourceMappingURL=index.es26.js.map
