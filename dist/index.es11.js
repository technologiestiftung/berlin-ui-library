import { j as a } from "./index.es4.js";
import * as n from "react";
import { Slot as u } from "@radix-ui/react-slot";
import { useFormContext as x, FormProvider as p, Controller as F } from "react-hook-form";
import { cva as v } from "class-variance-authority";
import { cn as d } from "./index.es24.js";
import { Label as I } from "./index.es15.js";
const M = p, l = n.createContext(
  {}
), S = (e) => {
  const { name: t, rules: r, ...o } = e, s = !!r?.required;
  return /* @__PURE__ */ a.jsx(l.Provider, { value: { name: t, required: s }, children: /* @__PURE__ */ a.jsx(F, { name: t, rules: r, ...o }) });
}, c = () => {
  const e = n.useContext(l), t = n.useContext(f), { getFieldState: r, formState: o } = x(), s = r(e.name, o);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: i } = t;
  return {
    id: i,
    name: e.name,
    required: e.required,
    formItemId: `${i}-form-item`,
    formDescriptionId: `${i}-form-item-description`,
    formMessageId: `${i}-form-item-message`,
    ...s
  };
}, f = n.createContext(
  {}
), g = v("space-y-1", {
  variants: {
    layout: {
      vertical: "flex flex-col space-y-1",
      horizontal: "flex items-center space-x-4"
    },
    background: {
      white: "bg-white",
      gray: "bg-block-colored",
      transparent: "bg-transparent",
      none: ""
    }
  },
  defaultVariants: {
    layout: "vertical",
    background: "none"
  }
}), b = n.forwardRef(({ className: e, layout: t, background: r, ...o }, s) => {
  const i = n.useId();
  return /* @__PURE__ */ a.jsx(f.Provider, { value: { id: i }, children: /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: s,
      className: d(g({ layout: t, background: r, className: e })),
      ...o
    }
  ) });
});
b.displayName = "FormItem";
const h = n.forwardRef(({ className: e, children: t, ...r }, o) => {
  const { error: s, formItemId: i, required: m } = c();
  return /* @__PURE__ */ a.jsxs(
    I,
    {
      ref: o,
      className: d(
        s && "font-bold text-decorative-destructive",
        e
      ),
      htmlFor: i,
      ...r,
      children: [
        t,
        m && /* @__PURE__ */ a.jsx("span", { className: "ml-1 text-[1.75em] text-decorative-destructive", children: "*" })
      ]
    }
  );
});
h.displayName = "FormLabel";
const y = n.forwardRef(({ ...e }, t) => {
  const { error: r, formItemId: o, formDescriptionId: s, formMessageId: i } = c();
  return /* @__PURE__ */ a.jsx(
    u,
    {
      ref: t,
      id: o,
      className: "p-2",
      "aria-describedby": r ? `${s} ${i}` : `${s}`,
      "aria-invalid": !!r,
      ...e
    }
  );
});
y.displayName = "FormControl";
const C = n.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: o } = c();
  return /* @__PURE__ */ a.jsx(
    "p",
    {
      ref: r,
      id: o,
      className: d("text-text-lightest", e),
      ...t
    }
  );
});
C.displayName = "FormDescription";
const j = n.forwardRef(({ className: e, children: t, ...r }, o) => {
  const { error: s, formMessageId: i } = c(), m = s ? String(s?.message ?? "") : t;
  return m ? /* @__PURE__ */ a.jsx(
    "p",
    {
      ref: o,
      id: i,
      className: d(
        "text-sm font-medium text-decorative-destructive",
        e
      ),
      ...r,
      children: m
    }
  ) : null;
});
j.displayName = "FormMessage";
export {
  M as Form,
  y as FormControl,
  C as FormDescription,
  S as FormField,
  b as FormItem,
  h as FormLabel,
  j as FormMessage,
  c as useFormField
};
//# sourceMappingURL=index.es11.js.map
