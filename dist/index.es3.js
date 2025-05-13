import { j as e } from "./index.es4.js";
import { LogoBar as w } from "./index.es34.js";
import { MainHeaderContent as B } from "./index.es35.js";
import { SubHeaderBar as H } from "./index.es36.js";
import { LanguageProvider as L } from "./index.es5.js";
function v({
  header: r = "Design System",
  caption: t = "Berlin.de",
  url: o = "/",
  logoUrl: i = "https://www.berlin.de",
  logoComponent: a,
  LinkComponent: n,
  breadcrumbs: s = [],
  showBreadcrumbs: d = !0,
  showLanguageSelect: m = !0,
  language: l = "de",
  languages: u = [
    { code: "de", label: "Deutsch" },
    { code: "en", label: "English" }
  ],
  translations: x,
  onLanguageChange: g = () => {
  },
  showSearchButton: p = !0,
  onSearch: c = () => {
  },
  showMenuButton: b = !0,
  menuItems: h = [],
  onOpenMenu: j = () => {
  },
  className: f = ""
}) {
  return /* @__PURE__ */ e.jsx(
    L,
    {
      initialLanguage: l,
      languages: u,
      translations: x,
      onLanguageChange: g,
      children: /* @__PURE__ */ e.jsxs(
        "header",
        {
          className: `sticky top-0 z-[20] box-border bg-white text-xl leading-[1.22rem] ${f}`,
          children: [
            /* @__PURE__ */ e.jsx(w, { logoUrl: i, logoComponent: a }),
            /* @__PURE__ */ e.jsx(
              B,
              {
                header: r,
                caption: t,
                url: o,
                showSearchButton: p,
                onSearch: c,
                showMenuButton: b,
                menuItems: h,
                onOpenMenu: j
              }
            ),
            /* @__PURE__ */ e.jsx(
              H,
              {
                showBreadcrumbs: d,
                breadcrumbs: s,
                showLanguageSelect: m,
                LinkComponent: n
              }
            )
          ]
        }
      )
    }
  );
}
export {
  v as Header
};
//# sourceMappingURL=index.es3.js.map
