import { j as s } from "./index.es4.js";
import { FormField as j, FormItem as b, FormLabel as p, FormControl as g, FormDescription as F, FormMessage as C } from "./index.es11.js";
import { Input as h } from "./index.es14.js";
import { Textarea as N } from "./index.es42.js";
import { Select as $, SelectTrigger as f, SelectValue as w, SelectContent as S, SelectGroup as T, SelectItem as k } from "./index.es43.js";
import { Checkbox as x } from "./index.es44.js";
import { RadioGroup as D, RadioGroupItem as V } from "./index.es45.js";
import { Info as I } from "lucide-react";
import { TooltipProvider as R, Tooltip as A, TooltipTrigger as E, TooltipContent as G } from "./index.es46.js";
import { Label as m } from "./index.es15.js";
const z = (a, e) => {
  const { name: n, description: c, placeholder: t, isDisabled: l } = a, d = e.value !== void 0 ? e.value : "";
  return /* @__PURE__ */ s.jsx(
    h,
    {
      ...e,
      type: "number",
      min: a.min,
      max: a.max,
      step: a.step || 1,
      placeholder: t || `Enter ${c || n}`,
      disabled: l,
      onChange: (r) => {
        const o = r.target.value;
        o === "" ? e.onChange("") : e.onChange(Number(o));
      },
      value: d
    }
  );
}, L = (a, e) => {
  const { name: n, description: c, placeholder: t, isDisabled: l } = a;
  return /* @__PURE__ */ s.jsx(
    h,
    {
      ...e,
      type: a.type,
      placeholder: t || `Enter ${c || n}`,
      disabled: l
    }
  );
}, q = (a, e) => {
  const { name: n, description: c, placeholder: t, isDisabled: l } = a;
  return /* @__PURE__ */ s.jsx(
    N,
    {
      ...e,
      placeholder: t || `Enter ${c || n}`,
      disabled: l
    }
  );
}, y = (a, e) => {
  const { name: n, description: c, options: t, isDisabled: l } = a, d = e.value !== void 0 ? e.value : "";
  return /* @__PURE__ */ s.jsxs(
    $,
    {
      disabled: l,
      onValueChange: e.onChange,
      value: d,
      defaultValue: d,
      children: [
        /* @__PURE__ */ s.jsx(f, { className: "w-full", children: /* @__PURE__ */ s.jsx(w, { placeholder: `Select ${c || n}` }) }),
        /* @__PURE__ */ s.jsx(S, { children: /* @__PURE__ */ s.jsx(T, { children: t?.map((r) => /* @__PURE__ */ s.jsx(k, { value: r.value, children: r.label || r.value }, r.value)) }) })
      ]
    }
  );
}, M = (a, e) => {
  const { name: n, isDisabled: c, options: t, direction: l } = a;
  if (t && Array.isArray(t) && t.length > 0) {
    let d = [];
    return Array.isArray(e.value) ? d = e.value : e.value && (d = [e.value]), /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `flex ${l === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-2"}`,
        children: t.map((r) => {
          const o = d.includes(r.value);
          return /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ s.jsx(
              x,
              {
                id: `${e.name}-${r.value}`,
                disabled: c,
                checked: o,
                onCheckedChange: (v) => {
                  const i = [...d];
                  if (v)
                    i.includes(r.value) || i.push(r.value);
                  else {
                    const u = i.indexOf(r.value);
                    u > -1 && i.splice(u, 1);
                  }
                  e.onChange(i);
                }
              }
            ),
            /* @__PURE__ */ s.jsx(
              m,
              {
                htmlFor: `${e.name}-${r.value}`,
                className: "text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
                children: r.label || r.value
              }
            )
          ] }, r.value);
        })
      }
    );
  }
  return /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ s.jsx(
      x,
      {
        ...e,
        id: e.name,
        disabled: c,
        checked: e.value,
        onCheckedChange: (d) => {
          e.onChange(d);
        }
      }
    ),
    /* @__PURE__ */ s.jsx(
      m,
      {
        htmlFor: e.name,
        className: "text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
        children: n
      }
    )
  ] });
}, O = (a, e) => {
  const { options: n, isDisabled: c, direction: t } = a;
  return /* @__PURE__ */ s.jsx(
    D,
    {
      ...e,
      disabled: c,
      className: `flex ${t === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-1"}`,
      children: n?.map((l) => /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ s.jsx(
          V,
          {
            id: `${e.name}-${l.value}`,
            value: l.value
          }
        ),
        /* @__PURE__ */ s.jsx(
          m,
          {
            htmlFor: `${e.name}-${l.value}`,
            className: "leading-none peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
            children: l.label || l.value
          }
        )
      ] }, l.value))
    }
  );
}, W = (a, e) => {
  const { type: n } = a;
  switch (n) {
    case "text":
    case "email":
    case "password":
    case "url":
    case "tel":
    case "date":
    case "datetime-local":
      return L(a, e);
    case "textarea":
      return q(a, e);
    case "number":
      return z(a, e);
    case "checkbox":
      return M(a, e);
    case "radio":
      return O(a, e);
    case "select":
      return y(a, e);
    default:
      return null;
  }
}, B = (a) => /* @__PURE__ */ s.jsx(R, { children: /* @__PURE__ */ s.jsxs(A, { children: [
  /* @__PURE__ */ s.jsx(E, { asChild: !0, children: /* @__PURE__ */ s.jsx(I, { className: "text-muted-foreground h-4 w-4" }) }),
  /* @__PURE__ */ s.jsx(G, { children: /* @__PURE__ */ s.jsx("p", { children: a }) })
] }) });
function ee({
  formProperty: a,
  form: e
}) {
  const { id: n, name: c, description: t, isRequired: l, helperText: d } = a;
  return /* @__PURE__ */ s.jsx(
    j,
    {
      control: e.control,
      name: n,
      render: ({ field: r }) => /* @__PURE__ */ s.jsxs(b, { children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ s.jsxs(p, { className: "font-bold", children: [
            c,
            l && /* @__PURE__ */ s.jsx("span", { className: "ml-1 text-decorative-destructive", children: "*" })
          ] }),
          d && B(d)
        ] }),
        /* @__PURE__ */ s.jsx(g, { children: W(a, r) }),
        /* @__PURE__ */ s.jsx(F, { className: "text-sm text-text-lightest", children: t }),
        /* @__PURE__ */ s.jsx(C, {})
      ] })
    },
    n
  );
}
export {
  ee as FormFieldWrapper
};
//# sourceMappingURL=index.es12.js.map
