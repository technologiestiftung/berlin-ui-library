import { j as e } from "./index.es4.js";
import { Slot as p } from "@radix-ui/react-slot";
import { cva as f } from "class-variance-authority";
import { cn as h } from "./index.es27.js";
import u from "./index.es29.js";
import n from "./index.es30.js";
import m from "./index.es31.js";
import y from "./index.es28.js";
import w from "./index.es32.js";
import i from "./index.es33.js";
import j from "./index.es34.js";
import k from "./index.es35.js";
import v from "./index.es36.js";
const N = (r, t) => {
  if (r === "light" || r === "white" || r === "clean" || r === "link" || r === "linkWithIcon")
    return null;
  if (r === "close")
    return /* @__PURE__ */ e.jsx("span", { className: "flex h-full w-full items-center justify-center", children: /* @__PURE__ */ e.jsx(
      y,
      {
        className: `size-6 ${t ? "text-gray-500" : "text-black"}`
      }
    ) });
  if (r === "back")
    return /* @__PURE__ */ e.jsx("span", { className: "flex h-full w-full items-center justify-center", children: /* @__PURE__ */ e.jsx(
      n,
      {
        className: `size-6 ${t ? "text-gray-500" : "text-black"}`
      }
    ) });
  if (r === "back-link")
    return /* @__PURE__ */ e.jsx(
      n,
      {
        className: `mr-1 size-4 ${t ? "text-gray-500" : "text-black"} flex-shrink-0`
      }
    );
  const a = t ? "bg-gray-400" : "bg-red";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "span",
      {
        className: `absolute top-0 right-0 flex h-full w-[39px] items-center justify-center ${r.includes("fulltone") ? "" : "border-l-2"} ${t ? "border-gray-400" : "border-black"} ${a}`
      }
    ),
    /* @__PURE__ */ e.jsx("span", { className: "pointer-events-none absolute top-0 right-0 flex h-full w-[39px] items-center justify-center", children: r === "default" || r === "colored" || r === "fulltone" || r === "light-fulltone" ? /* @__PURE__ */ e.jsx(u, { className: "size-5 text-white" }) : r === "search" ? /* @__PURE__ */ e.jsx(m, { className: "size-[18px] text-white" }) : r === "filter" ? /* @__PURE__ */ e.jsx(w, { className: "size-4 text-white" }) : r === "extern" ? /* @__PURE__ */ e.jsx(i, { className: "size-4 text-white" }) : r === "download" ? /* @__PURE__ */ e.jsx(j, { className: "size-[18px] text-white" }) : r === "addtocart" ? /* @__PURE__ */ e.jsx(v, { className: "size-[18px] text-white" }) : r === "play" ? /* @__PURE__ */ e.jsx(k, { className: "size-[18px] text-white" }) : null })
  ] });
}, z = f(
  // base styles for all buttons
  "relative inline-block min-h-[43px] w-auto cursor-pointer justify-center overflow-visible rounded-none border-2 border-black bg-white px-4 py-[10px] text-center font-sans text-base leading-[1.2] text-black no-underline transition-colors duration-200 ease-out disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "hover:bg-hover focus:bg-hover pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        light: "hover:bg-hover focus:bg-hover px-4 disabled:border-gray-400 disabled:text-gray-500",
        white: "disabled:bg-gray-200focus:bg-hover hover:bg-hover border-0 border-white bg-white px-4 text-black disabled:text-gray-500",
        fulltone: "border-0 bg-red px-4 text-white hover:bg-[#fb203d] focus:bg-[#fb203d] disabled:bg-gray-400 disabled:text-white",
        negative: "border-2 border-white bg-transparent text-white hover:bg-transparent focus:bg-transparent disabled:border-gray-500 disabled:bg-transparent disabled:text-gray-500",
        colored: "hover:bg-hover focus:bg-hover border-red pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        clean: "border border-transparent px-4 disabled:text-gray-500",
        play: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        download: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        search: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        filter: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        addtocart: "flex pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        close: "h-[39px] min-h-0 w-[39px] border-0 border-transparent bg-transparent p-0 disabled:opacity-50",
        back: "flex h-[39px] min-h-0 w-[39px] items-center justify-center border-0 border-transparent bg-transparent p-0 disabled:opacity-50",
        "back-link": "flex h-auto min-h-0 flex-row-reverse items-center justify-start border-0 border-transparent bg-transparent p-0 text-text-link hover:underline disabled:text-gray-500 disabled:no-underline leading-none",
        extern: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        link: "m-0 h-auto cursor-pointer border-0 bg-transparent p-0 text-left text-text-link hover:underline disabled:text-gray-500 disabled:no-underline",
        // New variant definition
        linkWithIcon: "m-0 inline-flex h-auto cursor-pointer items-center border-0 bg-transparent p-0 text-left text-text-link hover:underline disabled:text-gray-500 disabled:no-underline",
        "light-fulltone": "border-0 bg-red px-4 text-white hover:bg-[#fb203d] focus:bg-[#fb203d] disabled:bg-gray-400 disabled:text-white",
        "negative-light": "border-2 border-white bg-transparent text-white hover:bg-transparent focus:bg-transparent disabled:border-gray-500 disabled:bg-transparent disabled:text-gray-500"
      },
      size: {
        default: "",
        fullwidth: "w-full",
        "fullwidth-palm": "lg:w-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function q({
  className: r,
  variant: t = "default",
  size: a,
  asChild: b = !1,
  booking: s = !1,
  price: o,
  children: d,
  disabled: l = !1,
  ...x
}) {
  const g = b ? p : "button", c = s && o ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("span", { className: "price mr-[0.7em] border-r border-black/60 pr-[0.7em]", children: o }),
    /* @__PURE__ */ e.jsx("span", { children: d })
  ] }) : d;
  return /* @__PURE__ */ e.jsxs(
    g,
    {
      "data-slot": "button",
      className: h(
        z({ variant: t, size: a, className: r }),
        s ? "button--booking flex" : ""
      ),
      disabled: l,
      ...x,
      children: [
        c,
        t === "linkWithIcon" && /* @__PURE__ */ e.jsx(
          i,
          {
            className: `mb-2 ml-1 inline-block size-[16px] align-text-top leading-none ${l ? "text-gray-500" : "text-[#0047d3]"}`,
            "aria-hidden": "true"
          }
        ),
        N(t, l)
      ]
    }
  );
}
export {
  q as Button,
  z as buttonVariants
};
//# sourceMappingURL=index.es10.js.map
