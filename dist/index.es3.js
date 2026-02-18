import { j as r } from "./index.es4.js";
import { useState as B, useRef as Y, useEffect as D } from "react";
import { LogoBar as H } from "./index.es55.js";
import { MainHeaderContent as R } from "./index.es56.js";
import { SubHeaderBar as C } from "./index.es57.js";
import { LanguageProvider as M } from "./index.es5.js";
function F({
  header: i = "Design System",
  caption: c = "Berlin.de",
  url: a = "/",
  logoUrl: d = "https://www.berlin.de",
  logoComponent: u,
  LinkComponent: m,
  breadcrumbs: f = [],
  showBreadcrumbs: h = !0,
  showLanguageSelect: p = !0,
  language: w = "de",
  languages: E = [
    { code: "de", label: "Deutsch" },
    { code: "en", label: "English" }
  ],
  translations: g,
  onLanguageChange: x = () => {
  },
  showSearchButton: S = !0,
  onSearch: j = () => {
  },
  doBerlinSearch: b,
  showMenuButton: v = !0,
  menuItems: y = [],
  onOpenMenu: T = () => {
  },
  className: k = ""
}) {
  const [t, I] = B(!1), l = Y(null);
  return D(() => {
    if (l.current) {
      let e = null;
      const L = 50;
      let o = !1;
      const s = () => {
        const n = (window.scrollY || window.pageYOffset) > (o ? 0 : 2);
        n !== o && (o = n, e && clearTimeout(e), e = setTimeout(() => {
          I(n);
        }, L));
      };
      return s(), window.addEventListener("scroll", s, { passive: !0 }), () => {
        e && clearTimeout(e), window.removeEventListener("scroll", s);
      };
    }
  }, []), /* @__PURE__ */ r.jsx(
    M,
    {
      initialLanguage: w,
      languages: E,
      translations: g,
      onLanguageChange: x,
      children: /* @__PURE__ */ r.jsxs(
        "header",
        {
          ref: l,
          className: `sticky top-0 z-20 box-border leading-[1.22rem] ${k}`,
          children: [
            /* @__PURE__ */ r.jsx(
              H,
              {
                logoUrl: d,
                logoComponent: u,
                isSticky: t
              }
            ),
            /* @__PURE__ */ r.jsx(
              R,
              {
                header: i,
                caption: c,
                url: a,
                showSearchButton: S,
                onSearch: j,
                doBerlinSearch: b,
                showMenuButton: v,
                menuItems: y,
                onOpenMenu: T
              }
            ),
            !t && /* @__PURE__ */ r.jsx(
              C,
              {
                showBreadcrumbs: h,
                breadcrumbs: f,
                showLanguageSelect: p,
                LinkComponent: m,
                isSticky: t
              }
            )
          ]
        }
      )
    }
  );
}
export {
  F as Header
};
//# sourceMappingURL=index.es3.js.map
