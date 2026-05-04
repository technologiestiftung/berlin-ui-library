import { j as e } from "./index.es4.js";
import { cn as c } from "./index.es29.js";
function x({
  src: l,
  copyright: s,
  title: t,
  description: r,
  height: a = 500,
  className: i
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "relative pb-[var(--height)]",
      style: { "--height": `${a}px` },
      children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: c(
            "absolute h-[var(--height)] w-screen bg-grey-darkest",
            i
          ),
          children: [
            /* @__PURE__ */ e.jsx("div", { className: "flex h-[var(--height)] max-h-[70vh] w-full overflow-hidden brightness-75", children: /* @__PURE__ */ e.jsx(
              "img",
              {
                src: l,
                alt: t,
                className: "h-full w-full object-cover object-center"
              }
            ) }),
            s && /* @__PURE__ */ e.jsx("p", { className: "absolute bottom-1 left-1 text-sm text-white lg:left-3", children: s }),
            /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center justify-center px-4", children: /* @__PURE__ */ e.jsxs("div", { className: "max-w-[61.25rem] bg-white px-8 py-10 text-center", children: [
              /* @__PURE__ */ e.jsx("h1", { className: "mb-2 font-bold", children: t }),
              /* @__PURE__ */ e.jsx("p", { children: r })
            ] }) })
          ]
        }
      )
    }
  );
}
export {
  x as Opener
};
//# sourceMappingURL=index.es27.js.map
