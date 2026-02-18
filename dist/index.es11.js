import { j as i } from "./index.es4.js";
import * as a from "react";
import { Slot as u } from "@radix-ui/react-slot";
import { useFormContext as p, FormProvider as x, Controller as F } from "react-hook-form";
import { cva as b } from "class-variance-authority";
import { cn as m } from "./index.es28.js";
import { Label as g } from "./index.es15.js";
const M = x, l = a.createContext(
  {}
), S = (e) => {
  const { name: r, rules: t, ...o } = e, n = !!t?.required;
  return /* @__PURE__ */ i.jsx(l.Provider, { value: { name: r, required: n }, children: /* @__PURE__ */ i.jsx(F, { name: r, rules: t, ...o }) });
}, c = () => {
  const e = a.useContext(l), r = a.useContext(f), { getFieldState: t, formState: o } = p(), n = t(e.name, o);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: s } = r;
  return {
    id: s,
    name: e.name,
    required: e.required,
    formItemId: `${s}-form-item`,
    formDescriptionId: `${s}-form-item-description`,
    formMessageId: `${s}-form-item-message`,
    ...n
  };
}, f = a.createContext(
  {}
), I = b("space-y-1", {
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
}), h = a.forwardRef(({ className: e, layout: r, background: t, ...o }, n) => {
  const s = a.useId();
  return /* @__PURE__ */ i.jsx(f.Provider, { value: { id: s }, children: /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: n,
      className: m(I({ layout: r, background: t, className: e })),
      ...o
    }
  ) });
});
h.displayName = "FormItem";
const v = a.forwardRef(({ className: e, children: r, ...t }, o) => {
  const { formItemId: n, required: s } = c();
  return /* @__PURE__ */ i.jsxs(g, { ref: o, className: m(e), htmlFor: n, ...t, children: [
    r,
    s && /* @__PURE__ */ i.jsx("span", { className: "ml-1 text-[1.75em] text-decorative-destructive", children: "*" })
  ] });
});
v.displayName = "FormLabel";
const w = a.forwardRef(({ className: e, ...r }, t) => {
  const { error: o, formItemId: n, formDescriptionId: s, formMessageId: d } = c();
  return /* @__PURE__ */ i.jsx(
    u,
    {
      ref: t,
      id: n,
      className: m("p-2", e),
      "aria-describedby": o ? `${s} ${d}` : `${s}`,
      "aria-invalid": !!o,
      ...r
    }
  );
});
w.displayName = "FormControl";
const y = a.forwardRef(({ className: e, ...r }, t) => {
  const { formDescriptionId: o } = c();
  return /* @__PURE__ */ i.jsx(
    "p",
    {
      ref: t,
      id: o,
      className: m("text-text-lightest", e),
      ...r
    }
  );
});
y.displayName = "FormDescription";
const C = a.forwardRef(({ className: e, children: r, ...t }, o) => {
  const { error: n, formMessageId: s } = c(), d = n ? String(n?.message ?? "") : r;
  return d ? /* @__PURE__ */ i.jsx(
    "p",
    {
      ref: o,
      id: s,
      className: m(
        "mb-6 block w-fit min-w-full border border-red-50 bg-red-50 p-[18px] text-red-800",
        e
      ),
      ...t,
      children: d
    }
  ) : null;
});
C.displayName = "FormMessage";
export {
  M as Form,
  w as FormControl,
  y as FormDescription,
  S as FormField,
  h as FormItem,
  v as FormLabel,
  C as FormMessage,
  c as useFormField
};
//# sourceMappingURL=index.es11.js.map
