import { j as e } from "./index.es4.js";
import N, { useRef as k, useState as y } from "react";
import { cn as i } from "./index.es27.js";
import z from "./index.es49.js";
import _ from "./index.es50.js";
const C = ({ title: r, copyrightText: a, link: n, position: l }) => {
  if (!r && !a)
    return null;
  const c = n ? "a" : "span", m = n ? { href: n, "data-mainlink": "true" } : {};
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: i(
        "absolute inset-0 flex flex-col p-6 text-white [text-shadow:1px_1px_4px_rgba(0,0,0,0.4)]",
        l === "bottom" ? "justify-end" : "justify-start"
        // Content alignment
      ),
      children: [
        r && /* @__PURE__ */ e.jsx(
          c,
          {
            className: "text-lg leading-tight font-bold hover:underline lg:text-2xl",
            ...m,
            children: r
          }
        ),
        a && /* @__PURE__ */ e.jsx(
          "p",
          {
            className: i(
              "absolute text-xs text-white/40",
              // Corresponds to 'image__copyright' within overlay
              l === "bottom" ? "top-1 right-2" : "right-2 bottom-1"
              // Position depends on main content alignment
            ),
            children: a
          }
        )
      ]
    }
  );
}, I = N.forwardRef(
  ({
    className: r,
    src: a,
    alt: n,
    caption: l,
    copyright: c,
    overlayTitle: m,
    overlayCopyright: u,
    overlayLink: p,
    overlayPosition: b = "center",
    darkenImage: j = !1,
    imgClassName: v,
    withZoomBox: x,
    ...o
  }, w) => {
    const h = k(null), [s, d] = y(null), f = (t) => (t?.height ?? 0) >= (t?.width ?? 0), g = () => d({
      src: a,
      alt: n,
      caption: l,
      width: h?.current?.clientWidth ?? 0,
      height: h?.current?.clientHeight ?? 0
    });
    return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: i("relative mb-3 block", r),
          ref: w,
          ...o,
          children: [
            /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: i(
                  (l || c) && "mb-1",
                  // Only add mb-1 if caption or copyright exists
                  j && "brightness-60 filter",
                  (o.href || x) && "cursor-pointer",
                  "relative"
                ),
                children: [
                  /* @__PURE__ */ e.jsx(
                    "img",
                    {
                      ref: h,
                      onClick: (t) => {
                        o.href && (t.preventDefault(), window.open(o.href, "_blank")), x && (t.preventDefault(), g());
                      },
                      src: a,
                      alt: n,
                      className: i("block h-auto w-full", v)
                    }
                  ),
                  x && /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      className: "absolute right-1.5 bottom-1.5 flex items-center justify-center bg-white p-1.5",
                      onClick: g,
                      children: /* @__PURE__ */ e.jsx(z, { className: "size-6 text-white" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              C,
              {
                title: m,
                copyrightText: u,
                link: p,
                position: b
              }
            ),
            l && /* @__PURE__ */ e.jsxs("p", { className: "mb-1 block px-4 text-sm leading-tight font-normal break-words text-black lg:px-0", children: [
              " ",
              l
            ] }),
            c && /* @__PURE__ */ e.jsxs("p", { className: "mb-1 block px-4 text-[11px] leading-tight break-words text-gray-600 lg:px-0", children: [
              " ",
              c
            ] })
          ]
        }
      ),
      s?.src && /* @__PURE__ */ e.jsx(
        "div",
        {
          id: "overlay",
          className: "fixed inset-0 z-[10000] flex items-center justify-center bg-black/80",
          onClick: (t) => {
            t.target.id === "overlay" && d(null);
          },
          children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: "relative inline-block h-fit w-fit",
              onClick: (t) => t.stopPropagation(),
              children: [
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: "absolute top-0 right-0 z-10 cursor-pointer bg-white p-2",
                    onClick: () => d(null),
                    children: /* @__PURE__ */ e.jsx(_, { className: "size-6" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: i(
                      "relative flex items-center justify-center bg-white",
                      f(s) ? "h-[min(980px,80vh)] w-auto max-w-[min(980px,90vw)] lg:max-w-[min(980px,90vh)]" : "h-auto max-h-[min(980px,90vh)] w-[min(980px,95vw)] lg:w-[min(980px,90vh)]"
                    ),
                    children: /* @__PURE__ */ e.jsx(
                      "img",
                      {
                        src: s.src,
                        alt: s.alt || "",
                        className: i(
                          "object-contain select-none",
                          f(s) ? "h-full w-auto" : "h-auto w-full"
                        ),
                        draggable: !1
                      }
                    )
                  }
                ),
                s.caption && /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-0 left-0 z-10 w-full translate-y-[100%] bg-white px-1 py-0.5 text-xs lg:w-auto lg:translate-y-0 lg:px-2 lg:py-1 lg:text-base", children: s.caption })
              ]
            }
          )
        }
      )
    ] });
  }
);
I.displayName = "Image";
export {
  I as Image
};
//# sourceMappingURL=index.es19.js.map
