import { j as r } from "./index.es4.js";
import { useState as Y, useRef as D, useEffect as H } from "react";
import { LogoBar as R } from "./index.es55.js";
import { MainHeaderContent as C } from "./index.es56.js";
import { SubHeaderBar as M } from "./index.es57.js";
import { LanguageProvider as N } from "./index.es5.js";
function G({
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
  className: k = "",
  accessibilityItems: I = []
}) {
  const [t, L] = Y(!1), l = D(null);
  return H(() => {
    if (l.current) {
      let e = null;
      const B = 50;
      let o = !1;
      const s = () => {
        const n = (window.scrollY || window.pageYOffset) > (o ? 0 : 2);
        n !== o && (o = n, e && clearTimeout(e), e = setTimeout(() => {
          L(n);
        }, B));
      };
      return s(), window.addEventListener("scroll", s, { passive: !0 }), () => {
        e && clearTimeout(e), window.removeEventListener("scroll", s);
      };
    }
  }, []), /* @__PURE__ */ r.jsx(
    N,
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
              R,
              {
                logoUrl: d,
                logoComponent: u,
                isSticky: t
              }
            ),
            /* @__PURE__ */ r.jsx(
              C,
              {
                header: i,
                caption: c,
                url: a,
                showSearchButton: S,
                onSearch: j,
                doBerlinSearch: b,
                showMenuButton: v,
                menuItems: y,
                onOpenMenu: T,
                accessibilityItems: I
              }
            ),
            !t && /* @__PURE__ */ r.jsx(
              M,
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
  G as Header
};
//# sourceMappingURL=index.es3.js.map
