import * as a from "react";
import * as e from "@radix-ui/react-avatar";
import { cn as m } from "./index.es5.js";
const s = a.forwardRef(({ className: l, ...r }, t) => /* @__PURE__ */ a.createElement(
  e.Root,
  {
    ref: t,
    className: m(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      l
    ),
    ...r
  }
));
s.displayName = e.Root.displayName;
const o = a.forwardRef(({ className: l, ...r }, t) => /* @__PURE__ */ a.createElement(
  e.Image,
  {
    ref: t,
    className: m("aspect-square h-full w-full", l),
    ...r
  }
));
o.displayName = e.Image.displayName;
const f = a.forwardRef(({ className: l, ...r }, t) => /* @__PURE__ */ a.createElement(
  e.Fallback,
  {
    ref: t,
    className: m(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      l
    ),
    ...r
  }
));
f.displayName = e.Fallback.displayName;
export {
  s as Avatar,
  f as AvatarFallback,
  o as AvatarImage
};
//# sourceMappingURL=index.es3.js.map
