import * as n from "react";
import { Slot as a } from "@radix-ui/react-slot";
import { cva as d } from "class-variance-authority";
import { cn as c } from "./index.es4.js";
const u = d(
  "ts:inline-flex ts:items-center ts:justify-centerts: ts:gap-2 ts:whitespace-nowrap ts:rounded-md ts:text-sm ts:font-medium ts:transition-[color,box-shadow] ts:disabled:pointer-events-none ts:disabled:opacity-50 ts:[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 ts:shrink-0 [&_svg]:ts:shrink-0 ts:outline-none ts:focus-visible:ts:border-ring ts:focus-visible:ts:ring-ring/50 ts:focus-visible:ts:ring-[3px] aria-invalid:ts:ring-destructive/20 dark:aria-invalid:ts:ring-destructive/40 aria-invalid:ts:border-destructive",
  {
    variants: {
      variant: {
        default: "ts:text-primary-blue ts:shadow-xs ts:hover:bg-primary-blue/90 ts:cursor-pointer",
        destructive: "ts:bg-destructive ts:text-white ts:shadow-xs ts:hover:bg-destructive/90 ts:focus-visible:ring-destructive/20 dark:ts:focus-visible:ts:ring-destructive/40",
        outline: "ts:border ts:border-input ts:bg-background ts:shadow-xs ts:hover:bg-accent ts:hover:text-accent-foreground",
        secondary: "ts:bg-secondary ts:text-secondary-foreground ts:shadow-xs ts:hover:bg-secondary/80",
        ghost: "ts:hover:bg-accent ts:hover:text-accent-foreground",
        link: "ts:text-primary ts:underline-offset-4 ts:hover:underline"
      },
      size: {
        default: "ts:h-9 ts:px-4 ts:py-2 ts:has-[>svg]:px-3",
        sm: "ts:h-8 ts:rounded-md ts:gap-1.5 ts:px-3 ts:has-[>svg]:px-2.5",
        lg: "ts:h-10 ts:rounded-md ts:px-6 ts:has-[>svg]:px-4",
        icon: "ts:size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function b({
  className: t,
  variant: s,
  size: e,
  asChild: r = !1,
  ...i
}) {
  const o = r ? a : "button";
  return /* @__PURE__ */ n.createElement(
    o,
    {
      "data-slot": "button",
      className: c(u({ variant: s, size: e, className: t })),
      ...i
    }
  );
}
export {
  b as Button,
  u as buttonVariants
};
//# sourceMappingURL=index.es3.js.map
