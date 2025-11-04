import { j as a } from "./index.es4.js";
import { cn as e } from "./index.es27.js";
import { iconRegistry as c } from "./index.es62.js";
function u({
  name: n,
  className: r,
  "aria-label": i,
  "aria-hidden": t = !0
}) {
  const o = c[n];
  return o ? /* @__PURE__ */ a.jsx(
    o,
    {
      className: e("inline-block", r),
      "aria-label": i,
      "aria-hidden": t
    }
  ) : (console.warn(`Icon "${n}" not found`), null);
}
export {
  u as Icon
};
//# sourceMappingURL=index.es25.js.map
