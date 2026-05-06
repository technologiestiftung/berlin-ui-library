import { j as r } from "./index.es4.js";
import * as n from "react";
import * as a from "@radix-ui/react-tabs";
import { cva as d } from "class-variance-authority";
import { cn as o } from "./index.es29.js";
const y = a.Root, c = d("flex w-auto items-center justify-start", {
  variants: {
    variant: {
      default: "h-12 gap-1",
      module: "margin-0 mb-[30px] border-b border-grey-dark p-0"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), f = d(
  "ring-offset-background focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center text-base whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "data-[state=active]:text-foreground h-full border-b-4 border-transparent px-3 py-1.5 data-[state=active]:border-red data-[state=active]:shadow-[inset_0_4px_0_0_var(--color-red)]",
        module: "mr-[20px] mb-0 border-b-4 border-transparent p-2 text-text-lightest last:mr-0 data-[state=active]:border-red data-[state=active]:font-bold data-[state=active]:text-black data-[state=active]:no-underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), b = n.forwardRef(({ className: s, variant: t, ...e }, i) => /* @__PURE__ */ r.jsx(
  a.List,
  {
    ref: i,
    className: o(c({ variant: t, className: s })),
    ...e
  }
));
b.displayName = a.List.displayName;
const u = n.forwardRef(({ className: s, variant: t, children: e, ...i }, l) => t === "module" ? /* @__PURE__ */ r.jsx(
  a.Trigger,
  {
    ref: l,
    className: o(f({ variant: t, className: s })),
    ...i,
    children: /* @__PURE__ */ r.jsxs("span", { className: "relative", children: [
      /* @__PURE__ */ r.jsx(
        "span",
        {
          className: "invisible absolute left-0 font-bold",
          "aria-hidden": "true",
          children: e
        }
      ),
      /* @__PURE__ */ r.jsx("span", { className: "relative", children: e })
    ] })
  }
) : /* @__PURE__ */ r.jsx(
  a.Trigger,
  {
    ref: l,
    className: o(
      f({ variant: t }),
      "data-[state=active]:font-bold data-[state=active]:shadow-[inset_0_4px_0_0_var(--tab-color)]",
      s
    ),
    ...i,
    children: e
  }
));
u.displayName = a.Trigger.displayName;
const m = d(
  "ring-offset-background focus-visible:ring-ring border-t-1 border-t-grey-dark focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
  {
    variants: {
      variant: {
        default: "p-6",
        module: "clear-left"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), v = n.forwardRef(({ className: s, variant: t, ...e }, i) => /* @__PURE__ */ r.jsx(
  a.Content,
  {
    ref: i,
    className: o(m({ variant: t, className: s })),
    ...e
  }
));
v.displayName = a.Content.displayName;
export {
  y as Tabs,
  v as TabsContent,
  b as TabsList,
  u as TabsTrigger
};
//# sourceMappingURL=index.es18.js.map
