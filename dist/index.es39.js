import { j as a } from "./index.es4.js";
import * as d from "react";
import * as o from "@radix-ui/react-tooltip";
import { cn as s } from "./index.es24.js";
const l = o.Provider, f = o.Root, c = o.Trigger, n = d.forwardRef(({ className: t, sideOffset: i = 4, ...e }, r) => /* @__PURE__ */ a.jsx(
  o.Content,
  {
    ref: r,
    sideOffset: i,
    className: s(
      "bg-popover text-popover-foreground z-50 origin-[--radix-tooltip-content-transform-origin] overflow-hidden border px-3 py-1.5 text-sm shadow-md animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      t
    ),
    ...e
  }
));
n.displayName = o.Content.displayName;
export {
  f as Tooltip,
  n as TooltipContent,
  l as TooltipProvider,
  c as TooltipTrigger
};
//# sourceMappingURL=index.es39.js.map
