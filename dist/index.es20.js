import { j as a } from "./index.es4.js";
import * as s from "react";
import * as e from "@radix-ui/react-toggle";
import { cva as l } from "class-variance-authority";
import { cn as f } from "./index.es26.js";
const c = l(
  "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors hover:bg-block-heavy hover:font-bold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-block-heavy data-[state=on]:font-bold [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-input hover:bg-accent hover:text-accent-foreground cursor-pointer border-2 border-black bg-transparent"
      },
      size: {
        default: "h-10 min-w-10 px-3",
        md: "h-9 min-w-9 px-2.5",
        lg: "h-11 min-w-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), d = s.forwardRef(({ className: t, variant: o, size: i, ...r }, n) => /* @__PURE__ */ a.jsx(
  e.Root,
  {
    ref: n,
    className: f(c({ variant: o, size: i, className: t })),
    ...r
  }
));
d.displayName = e.Root.displayName;
export {
  d as Toggle,
  c as toggleVariants
};
//# sourceMappingURL=index.es20.js.map
