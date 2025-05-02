import { jsx as p } from "react/jsx-runtime";
import { cn as t } from "../../lib/utils.mjs";
function f({
  children: r,
  withBackground: o = !0,
  padding: e = "p-6",
  className: m
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      className: t(
        o && "bg-block-colored",
        e,
        "w-full",
        m
      ),
      children: r
    }
  );
}
export {
  f as FormWrapper
};
//# sourceMappingURL=FormWrapper.mjs.map
