import * as e from "react";
import * as a from "@radix-ui/react-label";
import { cva as m } from "class-variance-authority";
import { cn as i } from "./index.es11.js";
const l = m(
  "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), s = e.forwardRef(({ className: o, ...t }, r) => /* @__PURE__ */ e.createElement(
  a.Root,
  {
    ref: r,
    className: i(l(), o),
    ...t
  }
));
s.displayName = a.Root.displayName;
export {
  s as Label
};
//# sourceMappingURL=index.es10.js.map
