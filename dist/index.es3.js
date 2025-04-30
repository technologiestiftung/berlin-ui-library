import e from "react";
import { LogoBar as x } from "./index.es7.js";
import { MainHeaderContent as B } from "./index.es8.js";
import { SubHeaderBar as H } from "./index.es9.js";
import { LanguageProvider as L } from "./index.es10.js";
function v({
  header: t = "Design System",
  caption: r = "Berlin.de",
  url: a = "/",
  logoUrl: n = "https://www.berlin.de",
  logoComponent: i,
  LinkComponent: o,
  breadcrumbs: l = [],
  showBreadcrumbs: m = !0,
  showLanguageSelect: c = !0,
  language: d = "de",
  languages: u = [
    { code: "de", label: "Deutsch" },
    { code: "en", label: "English" }
  ],
  translations: g,
  onLanguageChange: p = () => {
  },
  showSearchButton: s = !0,
  onSearch: f = () => {
  },
  showMenuButton: E = !0,
  menuItems: b = [],
  onOpenMenu: h = () => {
  },
  className: w = ""
}) {
  return /* @__PURE__ */ e.createElement(
    L,
    {
      initialLanguage: d,
      languages: u,
      translations: g,
      onLanguageChange: p
    },
    /* @__PURE__ */ e.createElement(
      "header",
      {
        className: `sticky top-0 z-[20] bg-white text-xl leading-[122.2%] tracking-[0.3px] ${w}`
      },
      /* @__PURE__ */ e.createElement(x, { logoUrl: n, logoComponent: i }),
      /* @__PURE__ */ e.createElement(
        B,
        {
          header: t,
          caption: r,
          url: a,
          showSearchButton: s,
          onSearch: f,
          showMenuButton: E,
          menuItems: b,
          onOpenMenu: h
        }
      ),
      /* @__PURE__ */ e.createElement(
        H,
        {
          showBreadcrumbs: m,
          breadcrumbs: l,
          showLanguageSelect: c,
          LinkComponent: o
        }
      )
    )
  );
}
export {
  v as Header
};
//# sourceMappingURL=index.es3.js.map
