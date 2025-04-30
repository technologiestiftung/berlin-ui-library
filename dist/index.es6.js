import { j as s } from "./index.es4.js";
import * as u from "react";
import { cva as l } from "class-variance-authority";
import { cn as p } from "./index.es12.js";
const i = l(
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
), f = u.forwardRef(({ className: t, type: r, variant: e, size: a, ...o }, n) => /* @__PURE__ */ s.jsx(
  "input",
  {
    type: r,
    className: p(i({ variant: e, size: a, className: t })),
    ref: n,
    ...o
  }
));
f.displayName = "Input";
export {
  f as Input,
  i as inputVariants
};
//# sourceMappingURL=index.es6.js.map
