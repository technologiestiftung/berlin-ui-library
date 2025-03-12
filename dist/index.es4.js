import * as e from "react";
import { cva as i } from "class-variance-authority";
import { cn as s } from "./index.es5.js";
const d = i(
  "relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), o = e.forwardRef(({ className: t, variant: r, ...a }, l) => /* @__PURE__ */ e.createElement(
  "div",
  {
    ref: l,
    role: "alert",
    className: s(d({ variant: r }), t),
    ...a
  }
));
o.displayName = "Alert";
const n = e.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e.createElement(
  "h5",
  {
    ref: a,
    className: s("mb-1 font-medium leading-none tracking-tight", t),
    ...r
  }
));
n.displayName = "AlertTitle";
const c = e.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e.createElement(
  "div",
  {
    ref: a,
    className: s("text-sm [&_p]:leading-relaxed", t),
    ...r
  }
));
c.displayName = "AlertDescription";
export {
  o as Alert,
  c as AlertDescription,
  n as AlertTitle
};
//# sourceMappingURL=index.es4.js.map
