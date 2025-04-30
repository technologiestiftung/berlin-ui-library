import { j as n } from "./index.es4.js";
import * as i from "react";
import { Slot as u } from "@radix-ui/react-slot";
import { useFormContext as x, FormProvider as p, Controller as F } from "react-hook-form";
import { cva as I } from "class-variance-authority";
import { cn as d } from "./index.es12.js";
import { Label as v } from "./index.es11.js";
const M = p, l = i.createContext(
  {}
), S = (e) => {
  const { name: t, rules: r, ...o } = e, s = !!r?.required;
  return /* @__PURE__ */ n.jsx(l.Provider, { value: { name: t, required: s }, children: /* @__PURE__ */ n.jsx(F, { name: t, rules: r, ...o }) });
}, c = () => {
  const e = i.useContext(l), t = i.useContext(f), { getFieldState: r, formState: o } = x(), s = r(e.name, o);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: m } = t;
  return {
    id: m,
    name: e.name,
    required: e.required,
    formItemId: `${m}-form-item`,
    formDescriptionId: `${m}-form-item-description`,
    formMessageId: `${m}-form-item-message`,
    ...s
  };
}, f = i.createContext(
  {}
), b = I("space-y-2", {
  variants: {
    layout: {
      vertical: "flex flex-col space-y-2 bg-white",
      horizontal: "flex items-center space-x-4"
    }
  },
  defaultVariants: {
    layout: "vertical"
  }
}), g = i.forwardRef(({ className: e, layout: t, ...r }, o) => {
  const s = i.useId();
  return /* @__PURE__ */ n.jsx(f.Provider, { value: { id: s }, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: o,
      className: d(b({ layout: t, className: e })),
      ...r
    }
  ) });
});
g.displayName = "FormItem";
const h = i.forwardRef(({ className: e, children: t, ...r }, o) => {
  const { error: s, formItemId: m, required: a } = c();
  return /* @__PURE__ */ n.jsxs(
    v,
    {
      ref: o,
      className: d(s && "font-bold text-destructive", e),
      htmlFor: m,
      ...r,
      children: [
        t,
        a && /* @__PURE__ */ n.jsx("span", { className: "ml-1 text-destructive", children: "*" })
      ]
    }
  );
});
h.displayName = "FormLabel";
const C = i.forwardRef(({ ...e }, t) => {
  const { error: r, formItemId: o, formDescriptionId: s, formMessageId: m } = c();
  return /* @__PURE__ */ n.jsx(
    u,
    {
      ref: t,
      id: o,
      className: "border-2 border-black bg-white p-2",
      "aria-describedby": r ? `${s} ${m}` : `${s}`,
      "aria-invalid": !!r,
      ...e
    }
  );
});
C.displayName = "FormControl";
const j = i.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: o } = c();
  return /* @__PURE__ */ n.jsx(
    "p",
    {
      ref: r,
      id: o,
      className: d("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
j.displayName = "FormDescription";
const y = i.forwardRef(({ className: e, children: t, ...r }, o) => {
  const { error: s, formMessageId: m } = c(), a = s ? String(s?.message ?? "") : t;
  return a ? /* @__PURE__ */ n.jsx(
    "p",
    {
      ref: o,
      id: m,
      className: d("text-sm font-medium text-destructive", e),
      ...r,
      children: a
    }
  ) : null;
});
y.displayName = "FormMessage";
export {
  M as Form,
  C as FormControl,
  j as FormDescription,
  S as FormField,
  g as FormItem,
  h as FormLabel,
  y as FormMessage,
  c as useFormField
};
//# sourceMappingURL=index.es10.js.map
