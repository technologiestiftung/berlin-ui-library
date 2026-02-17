import { j as s } from "./index.es4.js";
import { Info as j } from "lucide-react";
import { useState as b } from "react";
import { Checkbox as h } from "./index.es17.js";
import { FormField as g, FormItem as C, FormLabel as F, FormControl as f, FormDescription as N, FormMessage as $ } from "./index.es11.js";
import { Input as p } from "./index.es14.js";
import { Label as m } from "./index.es15.js";
import { RadioGroup as T, RadioGroupItem as w } from "./index.es42.js";
import { Select as S, SelectTrigger as k, SelectValue as D, SelectContent as V, SelectGroup as R, SelectItem as I } from "./index.es43.js";
import { Textarea as A } from "./index.es44.js";
import { TooltipProvider as E, Tooltip as G, TooltipTrigger as O, TooltipContent as y } from "./index.es45.js";
const z = (a, e) => {
  const { name: r, description: c, placeholder: l, isDisabled: n } = a, i = e.value !== void 0 ? e.value : "";
  return /* @__PURE__ */ s.jsx(
    p,
    {
      ...e,
      type: "number",
      min: a.min,
      max: a.max,
      step: a.step || 1,
      placeholder: l || `Enter ${c || r}`,
      disabled: n,
      onChange: (t) => {
        const o = t.target.value;
        o === "" ? e.onChange("") : e.onChange(Number(o));
      },
      value: i
    }
  );
}, L = (a, e) => {
  const { name: r, description: c, placeholder: l, isDisabled: n } = a;
  return /* @__PURE__ */ s.jsx(
    p,
    {
      ...e,
      type: a.type,
      placeholder: l || `Enter ${c || r}`,
      disabled: n
    }
  );
}, v = ({ children: a }) => {
  if (typeof a != "string") return /* @__PURE__ */ s.jsx(s.Fragment, { children: a });
  const e = (r) => {
    const l = /<(b|i|u)>(.*?)<\/\1>/i.exec(r);
    if (!l || l.index === void 0)
      return [r];
    const [n, i, t] = l, o = r.slice(0, l.index), u = r.slice(l.index + n.length), d = i;
    return [
      ...o ? e(o) : [],
      /* @__PURE__ */ s.jsx(d, { children: e(t) }, l.index),
      ...u ? e(u) : []
    ];
  };
  return /* @__PURE__ */ s.jsx(s.Fragment, { children: e(a) });
}, M = (a, e) => {
  const { name: r, description: c, placeholder: l, isDisabled: n } = a;
  return /* @__PURE__ */ s.jsx(
    A,
    {
      ...e,
      placeholder: l || `Enter ${c || r}`,
      disabled: n
    }
  );
}, W = (a, e) => {
  const { name: r, description: c, options: l, isDisabled: n } = a, i = e.value !== void 0 ? e.value : "";
  return /* @__PURE__ */ s.jsxs(
    S,
    {
      disabled: n,
      onValueChange: e.onChange,
      value: i,
      defaultValue: i,
      children: [
        /* @__PURE__ */ s.jsx(k, { className: "w-full", children: /* @__PURE__ */ s.jsx(D, { placeholder: `Select ${c || r}` }) }),
        /* @__PURE__ */ s.jsx(V, { children: /* @__PURE__ */ s.jsx(R, { children: l?.map((t) => /* @__PURE__ */ s.jsx(I, { value: t.value, children: t.label || t.value }, t.value)) }) })
      ]
    }
  );
}, q = (a, e) => {
  const { name: r, isDisabled: c, options: l, direction: n } = a;
  if (l && Array.isArray(l) && l.length > 0) {
    let i = [];
    return Array.isArray(e.value) ? i = e.value : e.value && (i = [e.value]), /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `flex ${n === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-2"}`,
        children: l.map((t) => {
          const o = i.includes(t.value);
          return /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ s.jsx(
              h,
              {
                id: `${e.name}-${t.value}`,
                disabled: c,
                checked: o,
                onCheckedChange: (u) => {
                  const d = [...i];
                  if (u)
                    d.includes(t.value) || d.push(t.value);
                  else {
                    const x = d.indexOf(t.value);
                    x > -1 && d.splice(x, 1);
                  }
                  e.onChange(d);
                }
              }
            ),
            /* @__PURE__ */ s.jsx(
              m,
              {
                htmlFor: `${e.name}-${t.value}`,
                className: "leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
                children: /* @__PURE__ */ s.jsx(v, { children: t.label || t.value })
              }
            )
          ] }, t.value);
        })
      }
    );
  }
  return /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ s.jsx(
      h,
      {
        ...e,
        id: e.name,
        disabled: c,
        checked: e.value,
        onCheckedChange: (i) => {
          e.onChange(i);
        }
      }
    ),
    /* @__PURE__ */ s.jsx(
      m,
      {
        htmlFor: e.name,
        className: "text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
        children: r
      }
    )
  ] });
}, B = (a, e) => {
  const { options: r, isDisabled: c, direction: l } = a;
  return /* @__PURE__ */ s.jsx(
    T,
    {
      value: e.value,
      onValueChange: e.onChange,
      disabled: c,
      className: `flex ${l === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-1"}`,
      children: r?.map((n) => /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ s.jsx(
          w,
          {
            id: `${e.name}-${n.value}`,
            value: n.value
          }
        ),
        /* @__PURE__ */ s.jsx(
          m,
          {
            htmlFor: `${e.name}-${n.value}`,
            className: "leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
            children: /* @__PURE__ */ s.jsx(v, { children: n.label || n.value })
          }
        )
      ] }, n.value))
    }
  );
}, H = (a, e) => {
  const { type: r } = a;
  switch (r) {
    case "text":
    case "email":
    case "password":
    case "url":
    case "tel":
    case "date":
    case "datetime-local":
      return L(a, e);
    case "textarea":
      return M(a, e);
    case "number":
      return z(a, e);
    case "checkbox":
      return q(a, e);
    case "radio":
      return B(a, e);
    case "select":
      return W(a, e);
    default:
      return null;
  }
}, J = (a) => {
  const e = () => {
    const [r, c] = b(!1);
    return /* @__PURE__ */ s.jsx(E, { children: /* @__PURE__ */ s.jsxs(G, { open: r, onOpenChange: c, children: [
      /* @__PURE__ */ s.jsx(O, { asChild: !0, children: /* @__PURE__ */ s.jsx(
        j,
        {
          className: "text-muted-foreground h-4 w-4 cursor-pointer",
          onClick: () => c(!r)
        }
      ) }),
      /* @__PURE__ */ s.jsx(y, { children: /* @__PURE__ */ s.jsx("p", { children: a }) })
    ] }) });
  };
  return /* @__PURE__ */ s.jsx(e, {});
};
function re({
  formProperty: a,
  form: e
}) {
  const { id: r, name: c, description: l, isRequired: n, helperText: i } = a;
  return /* @__PURE__ */ s.jsx(
    g,
    {
      control: e.control,
      name: r,
      render: ({ field: t }) => /* @__PURE__ */ s.jsxs(C, { children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ s.jsxs(F, { className: "font-bold", children: [
            c,
            n && /* @__PURE__ */ s.jsx("span", { className: "ml-1 align-top text-[1.75em] leading-none text-decorative-destructive", children: "*" })
          ] }),
          i && J(i)
        ] }),
        /* @__PURE__ */ s.jsx(f, { children: H(a, t) }),
        l && /* @__PURE__ */ s.jsx(N, { className: "text-sm text-text-lightest", children: l }),
        /* @__PURE__ */ s.jsx($, {})
      ] })
    },
    r
  );
}
export {
  re as FormFieldWrapper
};
//# sourceMappingURL=index.es12.js.map
