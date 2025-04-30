import { j as r } from "./index.es4.js";
import { Slot as p } from "@radix-ui/react-slot";
import { cva as x } from "class-variance-authority";
import { cn as c } from "./index.es12.js";
import f from "./index.es13.js";
import u from "./index.es14.js";
import h from "./index.es15.js";
import m from "./index.es16.js";
const y = (e, t) => {
  if (e === "light" || e === "white" || e === "clean" || e === "link")
    return null;
  if (e === "close")
    return /* @__PURE__ */ r.jsx("span", { className: "flex h-full w-full items-center justify-center", children: /* @__PURE__ */ r.jsx(
      h,
      {
        className: `${t ? "text-gray-500" : "text-black"}`
      }
    ) });
  const a = t ? "bg-gray-400" : "bg-primary";
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(
      "span",
      {
        className: `absolute top-0 right-0 flex h-full w-[39px] items-center justify-center ${e.includes("fulltone") ? "" : "border-l-2"} ${t ? "border-gray-400" : "border-black"} ${a}`
      }
    ),
    /* @__PURE__ */ r.jsx("span", { className: "pointer-events-none absolute top-0 right-0 flex h-full w-[39px] items-center justify-center", children: e === "default" || e === "colored" || e === "fulltone" || e === "light-fulltone" ? /* @__PURE__ */ r.jsx(f, { className: "text-white" }) : e === "search" ? /* @__PURE__ */ r.jsx(u, { className: "fill-white" }) : e === "filter" ? /* @__PURE__ */ r.jsx(m, { className: "fill-white" }) : null })
  ] });
}, w = x(
  // base styles for all buttons
  "relative inline-block min-h-[43px] w-auto cursor-pointer justify-center overflow-visible rounded-none border-2 border-black bg-white px-4 py-[10px] text-center font-sans text-base leading-[1.2] text-black no-underline transition-colors duration-200 ease-out disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "pr-[59px] hover:bg-hover focus:bg-hover disabled:border-gray-400 disabled:text-gray-500",
        light: "px-4 hover:bg-hover focus:bg-hover disabled:border-gray-400 disabled:text-gray-500",
        white: "disabled:bg-gray-200focus:bg-hover border-0 border-white bg-white px-4 text-black hover:bg-hover disabled:text-gray-500",
        fulltone: "border-0 bg-primary px-4 text-white hover:bg-[#fb203d] focus:bg-[#fb203d] disabled:bg-gray-400 disabled:text-white",
        negative: "border-2 border-white bg-transparent text-white hover:bg-transparent focus:bg-transparent disabled:border-gray-500 disabled:bg-transparent disabled:text-gray-500",
        colored: "border-primary pr-[59px] hover:bg-hover focus:bg-hover disabled:border-gray-400 disabled:text-gray-500",
        clean: "border border-transparent px-4 disabled:text-gray-500",
        play: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        download: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        search: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        filter: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        addtocart: "flex pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        close: "h-[39px] min-h-0 w-[39px] border-0 border-transparent bg-transparent p-0 disabled:opacity-50",
        extern: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        link: "m-0 h-auto cursor-pointer border-0 bg-transparent p-0 text-left text-[#0047d3] hover:underline disabled:text-gray-500 disabled:no-underline",
        "light-fulltone": "border-0 bg-primary px-4 text-white hover:bg-[#fb203d] focus:bg-[#fb203d] disabled:bg-gray-400 disabled:text-white",
        "negative-light": "border-2 border-white bg-transparent text-white hover:bg-transparent focus:bg-transparent disabled:border-gray-500 disabled:bg-transparent disabled:text-gray-500"
      },
      size: {
        default: "",
        fullwidth: "w-full",
        "fullwidth-palm": "md:w-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function B({
  className: e,
  variant: t = "default",
  size: a,
  asChild: b = !1,
  booking: o = !1,
  price: l,
  children: d,
  disabled: s = !1,
  ...n
}) {
  const i = b ? p : "button", g = o && l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("span", { className: "price mr-[0.7em] border-r border-black/60 pr-[0.7em]", children: l }),
    /* @__PURE__ */ r.jsx("span", { children: d })
  ] }) : d;
  return /* @__PURE__ */ r.jsxs(
    i,
    {
      "data-slot": "button",
      className: c(
        w({ variant: t, size: a, className: e }),
        o ? "button--booking flex" : ""
      ),
      disabled: s,
      ...n,
      children: [
        g,
        y(t, s)
      ]
    }
  );
}
export {
  B as Button,
  w as buttonVariants
};
//# sourceMappingURL=index.es9.js.map
