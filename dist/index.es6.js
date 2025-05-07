import { j as t } from "./index.es4.js";
import * as i from "react";
import * as e from "@radix-ui/react-dialog";
import { cva as f } from "class-variance-authority";
import { cn as r } from "./index.es20.js";
import p from "./index.es24.js";
const v = e.Root, C = e.Trigger, R = e.Close, x = e.Portal, n = i.forwardRef(({ className: a, ...s }, o) => /* @__PURE__ */ t.jsx(
  e.Overlay,
  {
    className: r(
      "fixed inset-0 z-50 bg-black/40 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
      a
    ),
    ...s,
    ref: o
  }
));
n.displayName = e.Overlay.displayName;
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
  ({ side: a = "right", size: s = "default", className: o, children: m, ...l }, c) => /* @__PURE__ */ t.jsxs(x, { children: [
    /* @__PURE__ */ t.jsx(n, {}),
    /* @__PURE__ */ t.jsxs(
      e.Content,
      {
        ref: c,
        className: r(
          u({ side: a, size: s }),
          "overflow-y-auto",
          o
        ),
        ...l,
        children: [
          /* @__PURE__ */ t.jsx(d, { className: "px-[0.8rem] text-xl font-bold", children: l.title }),
          m,
          /* @__PURE__ */ t.jsxs(e.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-1 right-4 cursor-pointer rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none", children: [
            /* @__PURE__ */ t.jsx(p, { className: "m-2 text-black" }),
            /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] })
);
g.displayName = e.Content.displayName;
const w = ({
  className: a,
  ...s
}) => /* @__PURE__ */ t.jsx(
  "div",
  {
    className: r(
      "flex flex-col space-y-2 text-center sm:text-left",
      a
    ),
    ...s
  }
);
w.displayName = "DrawerHeader";
const y = ({
  className: a,
  ...s
}) => /* @__PURE__ */ t.jsx(
  "div",
  {
    className: r(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      a
    ),
    ...s
  }
);
y.displayName = "DrawerFooter";
const d = i.forwardRef(({ className: a, ...s }, o) => /* @__PURE__ */ t.jsx(
  e.Title,
  {
    ref: o,
    className: r("text-foreground px-[0.8rem] text-xl font-bold", a),
    ...s
  }
));
d.displayName = e.Title.displayName;
const N = i.forwardRef(({ className: a, ...s }, o) => /* @__PURE__ */ t.jsx(
  e.Description,
  {
    ref: o,
    className: r("text-muted-foreground text-sm", a),
    ...s
  }
));
N.displayName = e.Description.displayName;
export {
  v as Drawer,
  R as DrawerClose,
  g as DrawerContent,
  N as DrawerDescription,
  y as DrawerFooter,
  w as DrawerHeader,
  n as DrawerOverlay,
  x as DrawerPortal,
  d as DrawerTitle,
  C as DrawerTrigger
};
//# sourceMappingURL=index.es6.js.map
