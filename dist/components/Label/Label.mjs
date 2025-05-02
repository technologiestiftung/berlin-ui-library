import { jsx as t } from "react/jsx-runtime";
import * as i from "react";
import * as e from "@radix-ui/react-label";
import { cva as m } from "class-variance-authority";
import { cn as s } from "../../lib/utils.mjs";
const l = m(
  "leading-none peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
), d = i.forwardRef(({ className: o, ...a }, r) => /* @__PURE__ */ t(
  e.Root,
  {
    ref: r,
    className: s(l(), o),
    ...a
  }
));
d.displayName = e.Root.displayName;
export {
  d as Label
};
//# sourceMappingURL=Label.mjs.map
