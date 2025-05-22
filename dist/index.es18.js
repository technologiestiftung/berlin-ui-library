import { j as s } from "./index.es4.js";
import * as o from "react";
import * as a from "@radix-ui/react-tabs";
import { cva as l } from "class-variance-authority";
import { cn as n } from "./index.es24.js";
const y = a.Root, c = l("flex w-auto items-center justify-start", {
  variants: {
    variant: {
      default: "h-12 gap-1",
      module: "margin-0 mb-[30px] border-b border-grey-dark p-0"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), f = l(
  "ring-offset-background focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center text-base whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "data-[state=active]:text-foreground h-full bg-grey-dark px-3 py-1.5 data-[state=active]:bg-block-heavy data-[state=active]:shadow-[inset_0_4px_0_0_var(--color-red)]",
        module: "mr-[20px] mb-0 border-b-4 border-transparent p-2 text-text-lightest last:mr-0 data-[state=active]:border-red data-[state=active]:font-bold data-[state=active]:text-black data-[state=active]:no-underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), b = o.forwardRef(({ className: i, variant: t, ...e }, r) => /* @__PURE__ */ s.jsx(
  a.List,
  {
    ref: r,
    className: n(c({ variant: t, className: i })),
    ...e
  }
));
b.displayName = a.List.displayName;
const u = o.forwardRef(({ className: i, variant: t, children: e, ...r }, d) => t === "module" ? /* @__PURE__ */ s.jsx(
  a.Trigger,
  {
    ref: d,
    className: n(f({ variant: t, className: i })),
    ...r,
    children: /* @__PURE__ */ s.jsxs("span", { className: "relative", children: [
      /* @__PURE__ */ s.jsx(
        "span",
        {
          className: "invisible absolute left-0 font-bold",
          "aria-hidden": "true",
          children: e
        }
      ),
      /* @__PURE__ */ s.jsx("span", { className: "relative", children: e })
    ] })
  }
) : /* @__PURE__ */ s.jsx(
  a.Trigger,
  {
    ref: d,
    className: n(f({ variant: t, className: i })),
    ...r,
    children: e
  }
));
u.displayName = a.Trigger.displayName;
const m = l(
  "ring-offset-background focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
  {
    variants: {
      variant: {
        default: "bg-block-heavy p-6",
        module: "clear-left"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), g = o.forwardRef(({ className: i, variant: t, ...e }, r) => /* @__PURE__ */ s.jsx(
  a.Content,
  {
    ref: r,
    className: n(m({ variant: t, className: i })),
    ...e
  }
));
g.displayName = a.Content.displayName;
export {
  y as Tabs,
  g as TabsContent,
  b as TabsList,
  u as TabsTrigger
};
//# sourceMappingURL=index.es18.js.map
