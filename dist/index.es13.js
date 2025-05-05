import { j as m } from "./index.es4.js";
import { cn as p } from "./index.es20.js";
function i({
  children: r,
  withBackground: o = !0,
  padding: t = "p-6",
  className: e
}) {
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      className: p(
        o && "bg-block-colored",
        t,
        "w-full",
        e
      ),
      children: r
    }
  );
}
export {
  i as FormWrapper
};
//# sourceMappingURL=index.es13.js.map
