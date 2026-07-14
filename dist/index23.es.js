import { j as e } from "./index4.es.js";
import * as t from "react";
import { cn as x } from "./index29.es.js";
import { Button as i } from "./index10.es.js";
const f = t.forwardRef(
  ({
    className: o,
    title: l,
    description: n,
    fileType: s,
    date: a,
    downloadUrl: m,
    buttonText: d = "Download",
    onClickDownloadItem: r,
    ...c
  }, h) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: h,
      className: x(
        "flex flex-col border-b border-grey-dark py-5 md:flex-row md:items-center md:justify-between",
        o
      ),
      ...c,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "md:flex-grow md:border-r md:border-grey-dark md:pr-[18px]", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "mb-[0.4em] text-[17px] leading-[1.353em] font-bold text-black", children: l }),
          n && /* @__PURE__ */ e.jsx("p", { className: "mr-2 mb-2 break-words", children: n }),
          (s || a) && /* @__PURE__ */ e.jsxs("div", { className: "mb-0 text-[14px] text-text-lightest md:mb-0", children: [
            s && /* @__PURE__ */ e.jsx("span", { children: s }),
            s && a && /* @__PURE__ */ e.jsx("span", { children: " – " }),
            a && /* @__PURE__ */ e.jsxs("span", { children: [
              "Stand: ",
              a
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "mt-4 md:mt-0 md:flex-shrink-0 md:pl-[18px]", children: m ? /* @__PURE__ */ e.jsx(
          i,
          {
            asChild: !0,
            variant: "download",
            className: "min-h-[43px] w-auto text-base",
            children: /* @__PURE__ */ e.jsx("a", { href: m, className: "inline-block", children: d })
          }
        ) : /* @__PURE__ */ e.jsx(
          i,
          {
            variant: "download",
            className: "min-h-[43px] w-auto text-base",
            onClick: (p) => {
              p.preventDefault(), r && r();
            },
            children: d
          }
        ) })
      ]
    }
  )
);
f.displayName = "DownloadItem";
const b = t.forwardRef(({ className: o, title: l, asList: n = !0, children: s, ...a }, m) => {
  const d = t.Children.map(s, (r) => t.isValidElement(r) && n ? /* @__PURE__ */ e.jsx("li", { className: "m-0 before:hidden before:content-none after:hidden after:content-none", children: r }) : r);
  return /* @__PURE__ */ e.jsxs("div", { ref: m, className: x("modul-download-multi", o), ...a, children: [
    l && /* @__PURE__ */ e.jsx("h2", { className: "mb-0 text-xl font-bold", children: l }),
    n ? /* @__PURE__ */ e.jsx("ul", { className: "list-none p-0", children: d }) : /* @__PURE__ */ e.jsx("div", { className: "border-grey-dark", children: d })
  ] });
});
b.displayName = "DownloadGroup";
export {
  b as DownloadGroup,
  f as DownloadItem
};
//# sourceMappingURL=index23.es.js.map
