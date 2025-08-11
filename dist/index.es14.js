import { j as l } from "./index.es4.js";
import * as u from "react";
import { cva as d } from "class-variance-authority";
import { cn as i } from "./index.es24.js";
const p = d(
  "placeholder-berlin-grey focus:border-focus-blue relative col-start-1 row-start-1 h-[47px] w-full rounded-none border border-black px-4 pr-20 pl-10 focus:shadow-default focus:outline-none",
  {
    variants: {
      variant: {
        default: "text-foreground bg-white",
        outline: "bg-transparent"
      },
      size: {
        md: "h-8 px-2 text-sm",
        default: "h-9 px-3 text-base",
        lg: "h-10 px-4 text-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), f = u.forwardRef(({ className: t, type: r, variant: e, size: a, invalid: o, ...s }, n) => /* @__PURE__ */ l.jsx(
  "input",
  {
    type: r,
    className: i(
      p({ variant: e, size: a, className: t }),
      o && "border-2 border-l-[6px] border-decorative-destructive"
    ),
    ref: n,
    ...s
  }
));
f.displayName = "Input";
export {
  f as Input,
  p as inputVariants
};
//# sourceMappingURL=index.es14.js.map
