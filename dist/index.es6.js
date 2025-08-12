import { j as o } from "./index.es4.js";
import * as i from "react";
import * as e from "@radix-ui/react-dialog";
import { cva as f } from "class-variance-authority";
import { cn as r } from "./index.es24.js";
import p from "./index.es28.js";
const v = e.Root, C = e.Trigger, R = e.Close, x = e.Portal, d = i.forwardRef(({ className: t, ...a }, s) => /* @__PURE__ */ o.jsx(
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
d.displayName = e.Overlay.displayName;
const u = f(
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
), g = i.forwardRef(
  ({ side: t = "right", size: a = "default", className: s, children: c, ...l }, m) => /* @__PURE__ */ o.jsxs(x, { children: [
    /* @__PURE__ */ o.jsx(d, {}),
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
          /* @__PURE__ */ o.jsx(n, { className: "px-[0.8rem] text-xl font-bold", children: l.title }),
          c,
          /* @__PURE__ */ o.jsx(e.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-5.5 right-5.5 cursor-pointer rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none", children: /* @__PURE__ */ o.jsx(p, { className: "text-black" }) })
        ]
      }
    )
  ] })
);
g.displayName = e.Content.displayName;
const w = ({
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
w.displayName = "DrawerHeader";
const y = ({
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
y.displayName = "DrawerFooter";
const n = i.forwardRef(({ className: t, ...a }, s) => /* @__PURE__ */ o.jsx(
  e.Title,
  {
    ref: s,
    className: r("text-foreground px-[0.8rem] text-xl font-bold", t),
    ...a
  }
));
n.displayName = e.Title.displayName;
const b = i.forwardRef(({ className: t, ...a }, s) => /* @__PURE__ */ o.jsx(
  e.Description,
  {
    ref: s,
    className: r("text-muted-foreground text-sm", t),
    ...a
  }
));
b.displayName = e.Description.displayName;
export {
  v as Drawer,
  R as DrawerClose,
  g as DrawerContent,
  b as DrawerDescription,
  y as DrawerFooter,
  w as DrawerHeader,
  d as DrawerOverlay,
  x as DrawerPortal,
  n as DrawerTitle,
  C as DrawerTrigger
};
//# sourceMappingURL=index.es6.js.map
