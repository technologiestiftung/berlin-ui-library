import { j as a } from "./index.es4.js";
import { FormField as j, FormItem as b, FormLabel as p, FormControl as g, FormDescription as C, FormMessage as F } from "./index.es11.js";
import { Input as h } from "./index.es14.js";
import { Textarea as N } from "./index.es37.js";
import { Select as $, SelectTrigger as w, SelectValue as f, SelectContent as S, SelectGroup as T, SelectItem as k } from "./index.es38.js";
import { Checkbox as x } from "./index.es17.js";
import { RadioGroup as D, RadioGroupItem as V } from "./index.es39.js";
import { Info as I } from "lucide-react";
import { TooltipProvider as R, Tooltip as A, TooltipTrigger as E, TooltipContent as G } from "./index.es40.js";
import { Label as u } from "./index.es15.js";
const z = (s, e) => {
  const { name: n, description: c, placeholder: t, isDisabled: l } = s, d = e.value !== void 0 ? e.value : "";
  return /* @__PURE__ */ a.jsx(
    h,
    {
      ...e,
      type: "number",
      min: s.min,
      max: s.max,
      step: s.step || 1,
      placeholder: t || `Enter ${c || n}`,
      disabled: l,
      onChange: (r) => {
        const o = r.target.value;
        o === "" ? e.onChange("") : e.onChange(Number(o));
      },
      value: d
    }
  );
}, L = (s, e) => {
  const { name: n, description: c, placeholder: t, isDisabled: l } = s;
  return /* @__PURE__ */ a.jsx(
    h,
    {
      ...e,
      type: s.type,
      placeholder: t || `Enter ${c || n}`,
      disabled: l
    }
  );
}, q = (s, e) => {
  const { name: n, description: c, placeholder: t, isDisabled: l } = s;
  return /* @__PURE__ */ a.jsx(
    N,
    {
      ...e,
      placeholder: t || `Enter ${c || n}`,
      disabled: l
    }
  );
}, y = (s, e) => {
  const { name: n, description: c, options: t, isDisabled: l } = s, d = e.value !== void 0 ? e.value : "";
  return /* @__PURE__ */ a.jsxs(
    $,
    {
      disabled: l,
      onValueChange: e.onChange,
      value: d,
      defaultValue: d,
      children: [
        /* @__PURE__ */ a.jsx(w, { className: "w-full", children: /* @__PURE__ */ a.jsx(f, { placeholder: `Select ${c || n}` }) }),
        /* @__PURE__ */ a.jsx(S, { children: /* @__PURE__ */ a.jsx(T, { children: t?.map((r) => /* @__PURE__ */ a.jsx(k, { value: r.value, children: r.label || r.value }, r.value)) }) })
      ]
    }
  );
}, M = (s, e) => {
  const { name: n, isDisabled: c, options: t, direction: l } = s;
  if (t && Array.isArray(t) && t.length > 0) {
    let d = [];
    return Array.isArray(e.value) ? d = e.value : e.value && (d = [e.value]), /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `flex ${l === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-2"}`,
        children: t.map((r) => {
          const o = d.includes(r.value);
          return /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ a.jsx(
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
                    const m = i.indexOf(r.value);
                    m > -1 && i.splice(m, 1);
                  }
                  e.onChange(i);
                }
              }
            ),
            /* @__PURE__ */ a.jsx(
              u,
              {
                htmlFor: `${e.name}-${r.value}`,
                className: "leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
                children: r.label || r.value
              }
            )
          ] }, r.value);
        })
      }
    );
  }
  return /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ a.jsx(
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
    /* @__PURE__ */ a.jsx(
      u,
      {
        htmlFor: e.name,
        className: "text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
        children: n
      }
    )
  ] });
}, O = (s, e) => {
  const { options: n, isDisabled: c, direction: t } = s;
  return /* @__PURE__ */ a.jsx(
    D,
    {
      value: e.value,
      onValueChange: e.onChange,
      disabled: c,
      className: `flex ${t === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-1"}`,
      children: n?.map((l) => /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ a.jsx(
          V,
          {
            id: `${e.name}-${l.value}`,
            value: l.value
          }
        ),
        /* @__PURE__ */ a.jsx(
          u,
          {
            htmlFor: `${e.name}-${l.value}`,
            className: "leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
            children: l.label || l.value
          }
        )
      ] }, l.value))
    }
  );
}, W = (s, e) => {
  const { type: n } = s;
  switch (n) {
    case "text":
    case "email":
    case "password":
    case "url":
    case "tel":
    case "date":
    case "datetime-local":
      return L(s, e);
    case "textarea":
      return q(s, e);
    case "number":
      return z(s, e);
    case "checkbox":
      return M(s, e);
    case "radio":
      return O(s, e);
    case "select":
      return y(s, e);
    default:
      return null;
  }
}, B = (s) => /* @__PURE__ */ a.jsx(R, { children: /* @__PURE__ */ a.jsxs(A, { children: [
  /* @__PURE__ */ a.jsx(E, { asChild: !0, children: /* @__PURE__ */ a.jsx(I, { className: "text-muted-foreground h-4 w-4" }) }),
  /* @__PURE__ */ a.jsx(G, { children: /* @__PURE__ */ a.jsx("p", { children: s }) })
] }) });
function ee({
  formProperty: s,
  form: e
}) {
  const { id: n, name: c, description: t, isRequired: l, helperText: d } = s;
  return /* @__PURE__ */ a.jsx(
    j,
    {
      control: e.control,
      name: n,
      render: ({ field: r }) => /* @__PURE__ */ a.jsxs(b, { children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ a.jsxs(p, { className: "font-bold", children: [
            c,
            l && /* @__PURE__ */ a.jsx("span", { className: "ml-1 align-top text-[1.75em] leading-none text-decorative-destructive", children: "*" })
          ] }),
          d && B(d)
        ] }),
        /* @__PURE__ */ a.jsx(g, { children: W(s, r) }),
        /* @__PURE__ */ a.jsx(C, { className: "text-sm text-text-lightest", children: t }),
        /* @__PURE__ */ a.jsx(F, {})
      ] })
    },
    n
  );
}
export {
  ee as FormFieldWrapper
};
//# sourceMappingURL=index.es12.js.map
