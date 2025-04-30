import * as e from "react";
import { Slot as f } from "@radix-ui/react-slot";
import { useFormContext as u, FormProvider as F, Controller as p } from "react-hook-form";
import { cva as x } from "class-variance-authority";
import { cn as i } from "./index.es11.js";
import { Label as I } from "./index.es10.js";
const $ = F, d = e.createContext(
  {}
), D = (r) => {
  const { name: o, rules: t, ...m } = r, s = !!t?.required;
  return /* @__PURE__ */ e.createElement(d.Provider, { value: { name: o, required: s } }, /* @__PURE__ */ e.createElement(p, { name: o, rules: t, ...m }));
}, c = () => {
  const r = e.useContext(d), o = e.useContext(l), { getFieldState: t, formState: m } = u(), s = t(r.name, m);
  if (!r)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = o;
  return {
    id: a,
    name: r.name,
    required: r.required,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...s
  };
}, l = e.createContext(
  {}
), v = x("space-y-2", {
  variants: {
    layout: {
      vertical: "flex flex-col space-y-2 bg-white",
      horizontal: "flex items-center space-x-4"
    }
  },
  defaultVariants: {
    layout: "vertical"
  }
}), b = e.forwardRef(({ className: r, layout: o, ...t }, m) => {
  const s = e.useId();
  return /* @__PURE__ */ e.createElement(l.Provider, { value: { id: s } }, /* @__PURE__ */ e.createElement(
    "div",
    {
      ref: m,
      className: i(v({ layout: o, className: r })),
      ...t
    }
  ));
});
b.displayName = "FormItem";
const g = e.forwardRef(({ className: r, children: o, ...t }, m) => {
  const { error: s, formItemId: a, required: n } = c();
  return /* @__PURE__ */ e.createElement(
    I,
    {
      ref: m,
      className: i(s && "font-bold text-destructive", r),
      htmlFor: a,
      ...t
    },
    o,
    n && /* @__PURE__ */ e.createElement("span", { className: "ml-1 text-destructive" }, "*")
  );
});
g.displayName = "FormLabel";
const C = e.forwardRef(({ ...r }, o) => {
  const { error: t, formItemId: m, formDescriptionId: s, formMessageId: a } = c();
  return /* @__PURE__ */ e.createElement(
    f,
    {
      ref: o,
      id: m,
      className: "border-2 border-black bg-white p-2",
      "aria-describedby": t ? `${s} ${a}` : `${s}`,
      "aria-invalid": !!t,
      ...r
    }
  );
});
C.displayName = "FormControl";
const y = e.forwardRef(({ className: r, ...o }, t) => {
  const { formDescriptionId: m } = c();
  return /* @__PURE__ */ e.createElement(
    "p",
    {
      ref: t,
      id: m,
      className: i("text-sm text-muted-foreground", r),
      ...o
    }
  );
});
y.displayName = "FormDescription";
const N = e.forwardRef(({ className: r, children: o, ...t }, m) => {
  const { error: s, formMessageId: a } = c(), n = s ? String(s?.message ?? "") : o;
  return n ? /* @__PURE__ */ e.createElement(
    "p",
    {
      ref: m,
      id: a,
      className: i("text-sm font-medium text-destructive", r),
      ...t
    },
    n
  ) : null;
});
N.displayName = "FormMessage";
export {
  $ as Form,
  C as FormControl,
  y as FormDescription,
  D as FormField,
  b as FormItem,
  g as FormLabel,
  N as FormMessage,
  c as useFormField
};
//# sourceMappingURL=index.es9.js.map
