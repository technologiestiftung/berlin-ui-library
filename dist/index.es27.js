import { j as e } from "./index.es4.js";
function x({
  titleImage: t,
  copyright: s,
  title: l,
  description: a
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: "relative bg-grey-darkest", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex max-h-[70vh] w-full overflow-hidden brightness-75 max-lg:min-h-[400px] lg:h-[500px]", children: /* @__PURE__ */ e.jsx(
      "img",
      {
        src: t,
        alt: l,
        className: "h-full w-full object-cover object-center"
      }
    ) }),
    s && /* @__PURE__ */ e.jsx("p", { className: "absolute bottom-1 left-1 text-white", children: s }),
    /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center justify-center px-4", children: /* @__PURE__ */ e.jsxs("div", { className: "max-w-[61.25rem] bg-white px-8 py-10 text-center", children: [
      /* @__PURE__ */ e.jsx("h1", { className: "mb-2 text-[27px] leading-[31px] font-bold", children: l }),
      /* @__PURE__ */ e.jsx("p", { className: "", children: a })
    ] }) })
  ] });
}
export {
  x as Opener
};
//# sourceMappingURL=index.es27.js.map
