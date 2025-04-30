import * as e from "react";
import * as r from "@radix-ui/react-dialog";
import { cva as f } from "class-variance-authority";
import { cn as s } from "./index.es13.js";
import { Button as p } from "./index.es14.js";
const u = r.Root, C = r.Trigger, R = r.Close, g = r.Portal, d = e.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ e.createElement(
  r.Overlay,
  {
    className: s(
      "fixed inset-0 z-50 bg-black/40 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
      t
    ),
    ...a,
    ref: o
  }
));
d.displayName = r.Overlay.displayName;
const w = f(
  "fixed z-50 gap-4 bg-background pt-[0.7em] shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=closed]:animate-out data-[state=open]:duration-500 data-[state=open]:animate-in",
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
), m = e.forwardRef(
  ({ side: t = "right", size: a = "default", className: o, children: n, ...l }, i) => /* @__PURE__ */ e.createElement(g, null, /* @__PURE__ */ e.createElement(d, null), /* @__PURE__ */ e.createElement(
    r.Content,
    {
      ref: i,
      className: s(
        w({ side: t, size: a }),
        "overflow-y-auto",
        o
      ),
      ...l
    },
    n,
    /* @__PURE__ */ e.createElement(r.Close, { className: "absolute top-1 right-4 cursor-pointer rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary" }, /* @__PURE__ */ e.createElement(p, { variant: "close" }), /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, "Close"))
  ))
);
m.displayName = r.Content.displayName;
const y = ({
  className: t,
  ...a
}) => /* @__PURE__ */ e.createElement(
  "div",
  {
    className: s(
      "flex flex-col space-y-2 text-center sm:text-left",
      t
    ),
    ...a
  }
);
y.displayName = "DrawerHeader";
const x = ({
  className: t,
  ...a
}) => /* @__PURE__ */ e.createElement(
  "div",
  {
    className: s(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...a
  }
);
x.displayName = "DrawerFooter";
const N = e.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ e.createElement(
  r.Title,
  {
    ref: o,
    className: s("px-[0.8rem] text-xl font-bold text-foreground", t),
    ...a
  }
));
N.displayName = r.Title.displayName;
const b = e.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ e.createElement(
  r.Description,
  {
    ref: o,
    className: s("text-sm text-muted-foreground", t),
    ...a
  }
));
b.displayName = r.Description.displayName;
const D = ({
  isOpen: t,
  close: a,
  children: o,
  side: n = "right",
  size: l = "default",
  className: i
}) => /* @__PURE__ */ e.createElement(u, { open: t, onOpenChange: (c) => !c && a() }, /* @__PURE__ */ e.createElement(m, { side: n, size: l, className: i }, o));
D.displayName = "SimpleDrawer";
export {
  u as Drawer,
  R as DrawerClose,
  m as DrawerContent,
  b as DrawerDescription,
  x as DrawerFooter,
  y as DrawerHeader,
  d as DrawerOverlay,
  g as DrawerPortal,
  N as DrawerTitle,
  C as DrawerTrigger,
  D as SimpleDrawer
};
//# sourceMappingURL=index.es11.js.map
