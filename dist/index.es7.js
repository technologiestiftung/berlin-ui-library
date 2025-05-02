import { j as o } from "./index.es4.js";
import * as i from "react";
import * as e from "@radix-ui/react-dialog";
import { cva as c } from "class-variance-authority";
import { cn as r } from "./index.es15.js";
import { Button as f } from "./index.es10.js";
const v = e.Root, C = e.Trigger, R = e.Close, p = e.Portal, n = i.forwardRef(({ className: t, ...a }, s) => /* @__PURE__ */ o.jsx(
  e.Overlay,
  {
    className: r(
      "fixed inset-0 z-50 bg-black/40 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
      t
    ),
    ...a,
    ref: s
  }
));
n.displayName = e.Overlay.displayName;
const u = c(
  "fixed z-50 gap-4 bg-white pt-[0.7em] shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=closed]:animate-out data-[state=open]:duration-500 data-[state=open]:animate-in",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-[35rem] border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        right: "inset-y-0 right-0 h-full w-[35rem] border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
      },
      size: {
        default: "",
        large: "w-[90vw]"
      }
    },
    defaultVariants: {
      side: "right",
      size: "default"
    }
  }
), x = i.forwardRef(
  ({ side: t = "right", size: a = "default", className: s, children: d, ...l }, m) => /* @__PURE__ */ o.jsxs(p, { children: [
    /* @__PURE__ */ o.jsx(n, {}),
    /* @__PURE__ */ o.jsxs(
      e.Content,
      {
        ref: m,
        className: r(
          u({ side: t, size: a }),
          "overflow-y-auto",
          s
        ),
        ...l,
        children: [
          d,
          /* @__PURE__ */ o.jsxs(e.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-1 right-4 cursor-pointer rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none", children: [
            /* @__PURE__ */ o.jsx(f, { variant: "close" }),
            /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] })
);
x.displayName = e.Content.displayName;
const w = ({
  className: t,
  ...a
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: r(
      "flex flex-col space-y-2 text-center sm:text-left",
      t
    ),
    ...a
  }
);
w.displayName = "DrawerHeader";
const g = ({
  className: t,
  ...a
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: r(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...a
  }
);
g.displayName = "DrawerFooter";
const y = i.forwardRef(({ className: t, ...a }, s) => /* @__PURE__ */ o.jsx(
  e.Title,
  {
    ref: s,
    className: r("text-foreground px-[0.8rem] text-xl font-bold", t),
    ...a
  }
));
y.displayName = e.Title.displayName;
const N = i.forwardRef(({ className: t, ...a }, s) => /* @__PURE__ */ o.jsx(
  e.Description,
  {
    ref: s,
    className: r("text-muted-foreground text-sm", t),
    ...a
  }
));
N.displayName = e.Description.displayName;
export {
  v as Drawer,
  R as DrawerClose,
  x as DrawerContent,
  N as DrawerDescription,
  g as DrawerFooter,
  w as DrawerHeader,
  n as DrawerOverlay,
  p as DrawerPortal,
  y as DrawerTitle,
  C as DrawerTrigger
};
//# sourceMappingURL=index.es7.js.map
