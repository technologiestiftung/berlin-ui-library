import { j as n } from "./index.es4.js";
import * as l from "react";
import { cva as u } from "class-variance-authority";
import { cn as i } from "./index.es15.js";
const p = u(
  "placeholder-berlin-grey focus:border-focus-blue relative col-start-1 row-start-1 h-[47px] w-full rounded-none border border-black px-4 pr-20 pl-10 focus:shadow-default focus:outline-none",
  {
    variants: {
      variant: {
        default: "text-foreground bg-white",
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
), f = l.forwardRef(({ className: t, type: e, variant: r, size: a, ...o }, s) => /* @__PURE__ */ n.jsx(
  "input",
  {
    type: e,
    className: i(p({ variant: r, size: a, className: t })),
    ref: s,
    ...o
  }
));
f.displayName = "Input";
export {
  f as Input,
  p as inputVariants
};
//# sourceMappingURL=index.es6.js.map
