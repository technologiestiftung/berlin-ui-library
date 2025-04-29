import * as s from "react";
import { Slot as a } from "@radix-ui/react-slot";
import { cva as d } from "class-variance-authority";
import { cn as c } from "./index.es6.js";
const u = d(
  // base: replace global .button styles with Tailwind
  "relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-visible text-base leading-[1.2] font-medium whitespace-nowrap transition-colors duration-200 ease-out outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-destructive/40",
  {
    variants: {
      variant: {
        default: "border-2 ts:border-black flex h-[43px] w-fit items-center justify-center text-link-blue text-white hover:underline",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        "vertical-shop": (
          // convert .button + .button--vertical-shop CSS to Tailwind
          "flex min-h-[43px] w-auto items-center justify-center rounded-none border-2 border-black bg-white px-[10px] py-[10px] pr-[59px] text-black no-underline hover:bg-gray-200 focus:bg-gray-200"
        )
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function f({
  className: e,
  variant: t,
  size: r,
  asChild: o = !1,
  ...i
}) {
  const n = o ? a : "button";
  return /* @__PURE__ */ s.createElement(
    n,
    {
      "data-slot": "button",
      className: c(u({ variant: t, size: r, className: e })),
      ...i
    }
  );
}
export {
  f as Button,
  u as buttonVariants
};
//# sourceMappingURL=index.es3.js.map
