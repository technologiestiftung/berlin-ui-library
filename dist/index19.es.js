import { j as e } from "./index4.es.js";
import R, { useRef as f, useState as _, useEffect as I } from "react";
import { cn as n } from "./index29.es.js";
import B from "./index49.es.js";
import C from "./index30.es.js";
const L = ({ title: i, copyrightText: r, link: a, position: s }) => {
  if (!i && !r)
    return null;
  const m = a ? "a" : "span", o = a ? { href: a, "data-mainlink": "true" } : {};
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: n(
        "absolute inset-0 flex flex-col p-6 text-white [text-shadow:1px_1px_4px_rgba(0,0,0,0.4)]",
        s === "bottom" ? "justify-end" : "justify-start"
        // Content alignment
      ),
      children: [
        i && /* @__PURE__ */ e.jsx(
          m,
          {
            className: "text-lg leading-tight font-bold hover:underline lg:text-2xl",
            ...o,
            children: i
          }
        ),
        r && /* @__PURE__ */ e.jsx(
          "p",
          {
            className: n(
              "absolute text-xs text-white/40",
              // Corresponds to 'image__copyright' within overlay
              s === "bottom" ? "top-1 right-2" : "right-2 bottom-1"
              // Position depends on main content alignment
            ),
            children: r
          }
        )
      ]
    }
  );
}, P = R.forwardRef(
  ({
    className: i,
    src: r,
    alt: a,
    caption: s,
    href: m,
    copyright: o,
    overlayTitle: h,
    overlayCopyright: b,
    overlayLink: p,
    overlayPosition: v = "center",
    darkenImage: w = !1,
    imgClassName: j,
    withZoomBox: k,
    ...N
  }, y) => {
    const c = f(null), x = f(null), [t, u] = _(null), d = (l) => (l?.height ?? 0) >= (l?.width ?? 0), z = () => u({
      src: r,
      alt: a,
      caption: s,
      width: c.current?.naturalWidth || c.current?.clientWidth || 0,
      height: c.current?.naturalHeight || c.current?.clientHeight || 0
    });
    I(() => {
      const l = (E) => {
        E.key === "Escape" && u(null);
      };
      return t && (x.current?.focus(), document.addEventListener("keydown", l)), () => document.removeEventListener("keydown", l);
    }, [t]);
    const g = /* @__PURE__ */ e.jsx(
      "img",
      {
        ref: c,
        src: r,
        alt: a,
        className: n("block h-auto w-full", j)
      }
    );
    return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: n("relative mb-3 block", i),
          ref: y,
          ...N,
          children: [
            /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: n(
                  (s || o) && "mb-1",
                  // Only add mb-1 if caption or copyright exists
                  w && "brightness-60 filter",
                  "relative"
                ),
                children: [
                  m ? /* @__PURE__ */ e.jsx("a", { href: m, target: "_blank", rel: "noopener noreferrer", children: g }) : g,
                  k && /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      type: "button",
                      className: "absolute right-1.5 bottom-1.5 flex size-11 cursor-pointer items-center justify-center border border-black bg-white p-1.5 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none",
                      "aria-label": "Bild vergrößern",
                      onClick: z,
                      children: /* @__PURE__ */ e.jsx(B, { className: "size-6 text-white" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              L,
              {
                title: h,
                copyrightText: b,
                link: p,
                position: v
              }
            ),
            s && /* @__PURE__ */ e.jsxs("p", { className: "mb-1 block px-4 text-sm leading-tight font-normal break-words text-black lg:px-0", children: [
              " ",
              s
            ] }),
            o && /* @__PURE__ */ e.jsxs("p", { className: "mb-1 block px-4 text-[11px] leading-tight break-words text-gray-600 lg:px-0", children: [
              " ",
              o
            ] })
          ]
        }
      ),
      t?.src && /* @__PURE__ */ e.jsx(
        "div",
        {
          id: "overlay",
          className: "fixed inset-0 z-[10000] flex items-center justify-center bg-black/80",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": "Bildvergrößerung",
          onClick: (l) => {
            l.target.id === "overlay" && u(null);
          },
          children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: "relative inline-block h-fit w-fit",
              onClick: (l) => l.stopPropagation(),
              children: [
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    ref: x,
                    type: "button",
                    className: "absolute top-0 right-0 z-10 cursor-pointer bg-white p-2 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none",
                    "aria-label": "Bildvergrößerung schließen",
                    onClick: () => u(null),
                    children: /* @__PURE__ */ e.jsx(C, { className: "size-6" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: n(
                      "relative flex max-h-[min(980px,90vh)] max-w-[min(980px,95vw)] items-center justify-center bg-white",
                      d(t) ? "h-[min(980px,90vh)] w-auto" : "h-auto w-[min(980px,95vw)] lg:w-[min(980px,90vh)]"
                    ),
                    children: /* @__PURE__ */ e.jsx(
                      "img",
                      {
                        src: t.src,
                        alt: t.alt || "",
                        className: n(
                          "max-h-[min(980px,90vh)] max-w-[min(980px,95vw)] object-contain select-none",
                          d(t) ? "h-full w-auto" : "h-auto w-full"
                        ),
                        draggable: !1
                      }
                    )
                  }
                ),
                t.caption && /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-0 left-0 z-10 w-full translate-y-[100%] bg-white px-1 py-0.5 text-xs lg:w-auto lg:translate-y-0 lg:px-2 lg:py-1 lg:text-base", children: t.caption })
              ]
            }
          )
        }
      )
    ] });
  }
);
P.displayName = "Image";
export {
  P as Image
};
//# sourceMappingURL=index19.es.js.map
