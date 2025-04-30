import { j as e } from "./index.es4.js";
import { LogoBar as w } from "./index.es21.js";
import { MainHeaderContent as B } from "./index.es22.js";
import { SubHeaderBar as H } from "./index.es23.js";
import { LanguageProvider as L } from "./index.es5.js";
function v({
  header: r = "Design System",
  caption: t = "Berlin.de",
  url: i = "/",
  logoUrl: o = "https://www.berlin.de",
  logoComponent: a,
  LinkComponent: n,
  breadcrumbs: s = [],
  showBreadcrumbs: d = !0,
  showLanguageSelect: l = !0,
  language: m = "de",
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
  showMenuButton: h = !0,
  menuItems: j = [],
  onOpenMenu: f = () => {
  },
  className: b = ""
}) {
  return /* @__PURE__ */ e.jsx(
    L,
    {
      initialLanguage: m,
      languages: u,
      translations: x,
      onLanguageChange: g,
      children: /* @__PURE__ */ e.jsxs(
        "header",
        {
          className: `sticky top-0 z-[20] bg-white text-xl leading-[122.2%] tracking-[0.3px] ${b}`,
          children: [
            /* @__PURE__ */ e.jsx(w, { logoUrl: o, logoComponent: a }),
            /* @__PURE__ */ e.jsx(
              B,
              {
                header: r,
                caption: t,
                url: i,
                showSearchButton: p,
                onSearch: c,
                showMenuButton: h,
                menuItems: j,
                onOpenMenu: f
              }
            ),
            /* @__PURE__ */ e.jsx(
              H,
              {
                showBreadcrumbs: d,
                breadcrumbs: s,
                showLanguageSelect: l,
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
