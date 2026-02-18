import { j as r } from "./index.es4.js";
import { cn as t } from "./index.es28.js";
function u({ children: m, className: l, ...i }) {
  return /* @__PURE__ */ r.jsx(
    "li",
    {
      className: t("mb-2 break-words", l),
      ...i,
      children: m
    }
  );
}
function a({ variant: m = "unordered", children: l, className: i, ...e }) {
  return m === "ordered" ? /* @__PURE__ */ r.jsx(
    "ol",
    {
      className: t(
        "mb-[25px] mt-0 list-outside pl-[10px]",
        "[&>li]:ml-[0.7em] [&>li]:mb-2 [&>li]:break-words",
        "[&>li>ol]:mt-2 [&>li>ol]:mb-2 [&>li>ul]:mt-2 [&>li>ul]:mb-2",
        i
      ),
      ...e,
      children: l
    }
  ) : /* @__PURE__ */ r.jsx(
    "ul",
    {
      className: t(
        "mb-[25px] mt-0 list-disc pl-[1.1em]",
        "[&>li]:mb-2 [&>li]:break-words",
        "[&>li::marker]:text-red [&>li::marker]:text-[17px] [&>li::marker]:leading-none",
        "[&>li>ul]:mt-2 [&>li>ul]:mb-2 [&>li>ol]:mt-2 [&>li>ol]:mb-2",
        i
      ),
      ...e,
      children: l
    }
  );
}
export {
  a as List,
  u as ListItem
};
//# sourceMappingURL=index.es24.js.map
