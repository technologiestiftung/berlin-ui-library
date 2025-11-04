import { j as e } from "./index.es4.js";
import N, { useRef as k, useState as y } from "react";
import { cn as c } from "./index.es27.js";
import _ from "./index.es61.js";
import z from "./index.es43.js";
const C = ({ title: n, copyrightText: i, link: a, position: s }) => {
  if (!n && !i)
    return null;
  const r = a ? "a" : "span", m = a ? { href: a, "data-mainlink": "true" } : {};
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: c(
        "absolute inset-0 flex flex-col p-6 text-white [text-shadow:1px_1px_4px_rgba(0,0,0,0.4)]",
        s === "bottom" ? "justify-end" : "justify-start"
        // Content alignment
      ),
      children: [
        n && /* @__PURE__ */ e.jsx(
          r,
          {
            className: "text-lg leading-tight font-bold hover:underline lg:text-2xl",
            ...m,
            children: n
          }
        ),
        i && /* @__PURE__ */ e.jsx(
          "p",
          {
            className: c(
              "absolute text-xs text-white/40",
              // Corresponds to 'image__copyright' within overlay
              s === "bottom" ? "top-1 right-2" : "right-2 bottom-1"
              // Position depends on main content alignment
            ),
            children: i
          }
        )
      ]
    }
  );
}, I = N.forwardRef(
  ({
    className: n,
    src: i,
    alt: a,
    caption: s,
    copyright: r,
    overlayTitle: m,
    overlayCopyright: g,
    overlayLink: b,
    overlayPosition: p = "center",
    darkenImage: j = !1,
    imgClassName: v,
    withZoomBox: x,
    ...o
  }, w) => {
    const h = k(null), [l, d] = y(null), f = (t) => (t?.height ?? 0) >= (t?.width ?? 0), u = () => d({
      src: i,
      alt: a,
      caption: s,
      width: h?.current?.clientWidth ?? 0,
      height: h?.current?.clientHeight ?? 0
    });
    return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: c("relative mb-3 block", n),
          ref: w,
          ...o,
          children: [
            /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: c(
                  (s || r) && "mb-1",
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
                        o.href && (t.preventDefault(), window.open(o.href, "_blank")), x && (t.preventDefault(), u());
                      },
                      src: i,
                      alt: a,
                      className: c("block h-auto w-full", v)
                    }
                  ),
                  x && /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      className: "absolute right-1.5 bottom-1.5 flex items-center justify-center bg-white p-1.5",
                      onClick: u,
                      children: /* @__PURE__ */ e.jsx(_, { className: "size-6 text-white" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              C,
              {
                title: m,
                copyrightText: g,
                link: b,
                position: p
              }
            ),
            s && /* @__PURE__ */ e.jsxs("p", { className: "mb-1 block px-4 text-sm leading-tight font-normal break-words text-black lg:px-0", children: [
              " ",
              s
            ] }),
            r && /* @__PURE__ */ e.jsxs("p", { className: "mb-1 block px-4 text-[11px] leading-tight break-words text-gray-600 lg:px-0", children: [
              " ",
              r
            ] })
          ]
        }
      ),
      l?.src && /* @__PURE__ */ e.jsx(
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
              className: "relative inline-block",
              onClick: (t) => t.stopPropagation(),
              children: [
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: "absolute top-0 right-0 z-10 cursor-pointer bg-white p-2",
                    onClick: () => d(null),
                    children: /* @__PURE__ */ e.jsx(z, { className: "size-6" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: f(l) ? "relative flex h-[min(735px,90vh)] w-auto max-w-[min(980px,98vw)] items-center justify-center" : "relative flex h-auto max-h-[min(735px,90vh)] w-[min(980px,98vw)] items-center justify-center",
                    children: /* @__PURE__ */ e.jsx(
                      "img",
                      {
                        src: l.src,
                        alt: l.alt || "",
                        className: f(l) ? "h-full w-auto object-contain select-none" : "h-auto w-full object-contain select-none",
                        draggable: !1
                      }
                    )
                  }
                ),
                l.caption && /* @__PURE__ */ e.jsx("div", { className: "w-full bg-white px-2 py-1", children: l.caption })
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
