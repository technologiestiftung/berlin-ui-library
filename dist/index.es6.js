import { j as o } from "./index.es4.js";
import * as i from "react";
import * as e from "@radix-ui/react-dialog";
import { cva as p } from "class-variance-authority";
import { cn as r } from "./index.es28.js";
import x from "./index.es38.js";
const C = e.Root, R = e.Trigger, z = e.Close, u = e.Portal, n = i.forwardRef(({ className: t, ...a }, s) => /* @__PURE__ */ o.jsx(
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
const g = p(
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
), w = i.forwardRef(
  ({ side: t = "right", size: a = "default", className: s, children: c, ...l }, f) => /* @__PURE__ */ o.jsxs(u, { children: [
    /* @__PURE__ */ o.jsx(n, {}),
    /* @__PURE__ */ o.jsxs(
      e.Content,
      {
        ref: f,
        onOpenAutoFocus: (m) => m.preventDefault(),
        className: r(
          g({ side: t, size: a }),
          "overflow-y-auto",
          s
        ),
        ...l,
        children: [
          /* @__PURE__ */ o.jsx(d, { className: "px-[0.8rem] text-xl font-bold", children: l.title }),
          c,
          /* @__PURE__ */ o.jsx(e.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-5.5 right-5.5 cursor-pointer rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none", children: /* @__PURE__ */ o.jsx(x, { className: "size-4 text-black" }) })
        ]
      }
    )
  ] })
);
w.displayName = e.Content.displayName;
const y = ({
  className: t,
  ...a
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: r(
      "flex flex-col space-y-2 text-center lg:text-left",
      t
    ),
    ...a
  }
);
y.displayName = "DrawerHeader";
const b = ({
  className: t,
  ...a
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: r(
      "flex flex-col-reverse lg:flex-row lg:justify-end lg:space-x-2",
      t
    ),
    ...a
  }
);
b.displayName = "DrawerFooter";
const d = i.forwardRef(({ className: t, ...a }, s) => /* @__PURE__ */ o.jsx(
  e.Title,
  {
    ref: s,
    className: r("text-foreground px-[0.8rem] text-xl font-bold", t),
    ...a
  }
));
d.displayName = e.Title.displayName;
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
  C as Drawer,
  z as DrawerClose,
  w as DrawerContent,
  N as DrawerDescription,
  b as DrawerFooter,
  y as DrawerHeader,
  n as DrawerOverlay,
  u as DrawerPortal,
  d as DrawerTitle,
  R as DrawerTrigger
};
//# sourceMappingURL=index.es6.js.map
