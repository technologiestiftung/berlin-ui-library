import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-CFahbR6w.js";import{A as T,a as y,b as v,c as j}from"./Accordion-EsDNdD_4.js";import{L as C,u as A,t as F}from"./LanguageProvider-DamZhFPU.js";import"./index-fFXgbEt_.js";import"./index-GKcSamc8.js";import"./index-CmtHiJK_.js";import"./index-KTNLvksQ.js";import"./index-CHC4nfYS.js";import"./index-chp1rBSu.js";import"./index-BsSnUN43.js";import"./index-D9hrn0-u.js";import"./utils-15tqT33e.js";import"./chevron-down-CIrWunyT.js";import"./createLucideIcon-DWaKWC9b.js";const L=o=>x.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},x.createElement("path",{d:"M5.93771 13.0475L5.22601 12.3539C4.92466 12.0602 4.92466 11.5852 5.22601 11.2946L11.455 5.22029C11.7564 4.92657 12.2436 4.92657 12.5418 5.22029L18.774 11.2946C19.0753 11.5883 19.0753 12.0633 18.774 12.3539L18.0623 13.0475C17.7577 13.3444 17.2608 13.3381 16.9627 13.035L13.2823 9.26984L13.2823 18.2501C13.2823 18.6657 12.9393 19 12.5129 19L11.4871 19C11.0607 19 10.7177 18.6657 10.7177 18.2501L10.7177 9.26984L7.03733 13.035C6.73918 13.3413 6.24227 13.3475 5.93771 13.0475Z",fill:"white"}));function S({footerColumns:o=[],berlinFooter:a,LinkComponent:l=({href:h,children:n,...c})=>e.jsx("a",{href:h,...c,children:n}),className:g="",showScrollToTop:i=!0}){const{translations:h}=A(),n=t=>F(t,h),c=()=>e.jsxs("button",{className:"flex w-48 gap-x-2 p-2",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[n("toTheTop")," ",e.jsx(L,{className:"bg-berlin-green"})]});return e.jsxs("footer",{className:`w-full bg-berlin-grey-light ${g}`,children:[e.jsx("div",{className:"flex w-full items-start justify-between md:p-6",children:e.jsxs("div",{className:"flex w-full flex-wrap justify-between md:items-start md:pl-[5%]",children:[i&&e.jsx("div",{className:"mb-4 flex w-full justify-end md:hidden",children:e.jsx(c,{})}),e.jsx("div",{className:"flex w-full flex-col md:hidden md:w-auto md:flex-row md:flex-wrap",children:e.jsx(T,{collapsible:!0,type:"single",children:o.map((t,r)=>e.jsxs(y,{value:t.title,children:[e.jsx(v,{children:t.title}),e.jsx(j,{children:e.jsx("div",{className:"flex flex-col",children:e.jsx("ul",{className:"flex flex-col",children:t.links.map(s=>e.jsx("li",{children:e.jsxs(l,{href:s.href,className:`flex gap-x-1.5 py-4 pl-7 hover:underline ${t.title.includes("socialMedia")?"flex-row":"flex-row-reverse justify-end"}`,children:[n(s.label),s.icon&&s.icon]})},s.href))})})})]},r))})}),e.jsx("div",{className:"flex w-full flex-col md:w-auto md:flex-row md:flex-wrap",children:o.map(t=>e.jsxs("div",{className:"mb-6 ml-[3svw] hidden min-w-[12svw] flex-col gap-3.5 md:flex",children:[e.jsx("div",{className:"flex items-center justify-between font-bold",children:e.jsx("span",{children:n(t.title)})}),e.jsx("ul",{className:"flex flex-col gap-2.5 bg-inherit",children:t.links.map(r=>e.jsx("li",{children:e.jsxs(l,{href:r.href,className:`flex gap-1.5 hover:underline ${t.title.includes("socialMedia")?"flex-row":"flex-row-reverse justify-end"}`,children:[n(r.label),r.icon&&r.icon]})},r.href))})]}))}),i&&e.jsx("div",{className:"hidden self-start md:block",children:e.jsx(c,{})})]})}),a&&e.jsx("div",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:a}})]})}function b({language:o="de",languages:a=[{code:"de",label:"Deutsch"},{code:"en",label:"English"}],translations:l,onLanguageChange:g=()=>{},...i}){return e.jsx(C,{initialLanguage:o,languages:a,translations:l,onLanguageChange:g,children:e.jsx(S,{...i})})}b.__docgenInfo={description:`Footer component for Berlin design system

The Footer component includes:
- Navigation links organized in columns
- Responsive design for mobile (accordion) and md views
- Optional Berlin footer content section
- Scroll to top button`,methods:[],displayName:"Footer",props:{footerColumns:{required:!1,tsType:{name:"Array",elements:[{name:"FooterColumn"}],raw:"FooterColumn[]"},description:"Footer columns data for links and navigation"},berlinFooter:{required:!1,tsType:{name:"string"},description:"HTML content for the Berlin official footer (will be rendered with dangerouslySetInnerHTML)"},LinkComponent:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<
	React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
>`,elements:[{name:"intersection",raw:"React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }",elements:[{name:"ReactAnchorHTMLAttributes",raw:"React.AnchorHTMLAttributes<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]},{name:"signature",type:"object",raw:"{ href: string }",signature:{properties:[{key:"href",value:{name:"string",required:!0}}]}}]}]},description:"Component to use for links in the footer"},language:{required:!1,tsType:{name:"string"},description:"Current language code",defaultValue:{value:'"de"',computed:!1}},languages:{required:!1,tsType:{name:"Array",elements:[{name:"Language"}],raw:"Language[]"},description:"Available languages",defaultValue:{value:`[
	{ code: "de", label: "Deutsch" },
	{ code: "en", label: "English" },
]`,computed:!1}},translations:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"}],raw:"Record<string, Record<string, string>>"},description:"JSON translation files keyed by language code"},onLanguageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(code: string) => void",signature:{arguments:[{type:{name:"string"},name:"code"}],return:{name:"void"}}},description:"Callback when language changes",defaultValue:{value:"() => {}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},i18nTexts:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"Texts for i18n (if not using translations system)"},showScrollToTop:{required:!1,tsType:{name:"boolean"},description:"Whether to show the scroll-to-top button"}}};const $={title:"Components/Footer",component:b,parameters:{layout:"fullscreen"},tags:["autodocs"]},f=[{title:"About",links:[{label:"About the Project",href:"/about-project/"},{label:"Imprint",href:"/imprint/"},{label:"Privacy Policy",href:"/privacy-note/"},{label:"Accessibility Statement",href:"/accessibility-statement/"}]},{title:"Content Categories",links:[{label:"All Offers",href:"/all-offers/"},{label:"Culture",href:"/all-offers/?category=kultur"},{label:"Sports",href:"/all-offers/?category=sport"},{label:"Education",href:"/all-offers/?category=bildung_beratung"},{label:"Leisure",href:"/all-offers/?category=freizeit"},{label:"Map",href:"/map/"}]},{title:"Social Media",links:[{label:"Facebook",href:"https://www.facebook.com/BerlinDE/"},{label:"Instagram",href:"https://www.instagram.com/berlinde/"}],isDefaultOpen:!0}],w={de:{About:"Über uns","About the Project":"Über das Projekt",Imprint:"Impressum","Privacy Policy":"Datenschutz","Accessibility Statement":"Barrierefreiheit","Content Categories":"Inhaltskategorien","All Offers":"Alle Angebote",Culture:"Kultur",Sports:"Sport",Education:"Bildung & Beratung",Leisure:"Freizeit",Map:"Karte","Social Media":"Soziale Medien",Facebook:"Facebook",Instagram:"Instagram",toTheTop:"Zum Seitenanfang"},en:{toTheTop:"Back to top"}},d={args:{footerColumns:f,showScrollToTop:!0,language:"de",translations:w},parameters:{viewport:{defaultViewport:"desktop"}}},m={args:{footerColumns:f,showScrollToTop:!0,language:"en",translations:w},parameters:{viewport:{defaultViewport:"desktop"}}},p={args:{footerColumns:f,berlinFooter:`<div class="berlin-footer p-4 text-center text-sm text-gray-600">
      <p>© ${new Date().getFullYear()} - Das offizielle Hauptstadtportal</p>
    </div>`,showScrollToTop:!0},parameters:{viewport:{defaultViewport:"desktop"}}},u={args:{footerColumns:f,showScrollToTop:!0,translations:w},parameters:{viewport:{defaultViewport:"mobile1"}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    footerColumns: sampleFooterColumns,
    showScrollToTop: true,
    language: "de",
    translations: translations
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop"
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    footerColumns: sampleFooterColumns,
    showScrollToTop: true,
    language: "en",
    translations: translations
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop"
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    footerColumns: sampleFooterColumns,
    berlinFooter: \`<div class="berlin-footer p-4 text-center text-sm text-gray-600">
      <p>© \${new Date().getFullYear()} - Das offizielle Hauptstadtportal</p>
    </div>\`,
    showScrollToTop: true
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop"
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    footerColumns: sampleFooterColumns,
    showScrollToTop: true,
    translations: translations
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...u.parameters?.docs?.source}}};const W=["DefaultFooter","EnglishFooter","WithBerlinFooter","MobileFooter"];export{d as DefaultFooter,m as EnglishFooter,u as MobileFooter,p as WithBerlinFooter,W as __namedExportsOrder,$ as default};
