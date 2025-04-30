import * as t from "react";
import { cva as s } from "class-variance-authority";
import { cn as u } from "./index.es22.js";
const p = s(
  "relative col-start-1 row-start-1 h-[47px] w-full rounded-none border-2 border-black px-4 pr-20 pl-10 placeholder-berlin-grey focus:border-focus-blue focus:shadow-default focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        outline: "bg-transparent"
      },
      size: {
        sm: "h-8 px-2 text-sm",
        default: "h-9 px-3 text-base",
        lg: "h-10 px-4 text-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), d = t.forwardRef(({ className: e, type: r, variant: a, size: o, ...n }, l) => /* @__PURE__ */ t.createElement(
  "input",
  {
    type: r,
    className: u(p({ variant: a, size: o, className: e })),
    ref: l,
    ...n
  }
));
d.displayName = "Input";
export {
  d as Input,
  p as inputVariants
};
//# sourceMappingURL=index.es30.js.map
