import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l,R as te}from"./index-BCtMShv3.js";import{u as x,t as o,L as ne}from"./LanguageProvider-hSOL4mGB.js";import{S as se}from"./search_icon-B9zcZCjA.js";import{D as R,b as H}from"./Drawer-3y26RY6a.js";import{S as ae}from"./SearchForm-QfM4_ubG.js";import{C as re}from"./chevron-down-DWDojfxa.js";import{B as ie}from"./Breadcrumb-CtvxTe0_.js";import"./index-DkX7lMs-.js";import"./index-BcXugKMQ.js";import"./index-SpqsU_53.js";import"./index-9SeOqIlT.js";import"./index-BM8igCfQ.js";import"./index-LATptceI.js";import"./index-B1k-hWqK.js";import"./index-D-fs5e6L.js";import"./index-D7FI_znS.js";import"./index-BMmUsUVr.js";import"./index-B-xwPz7g.js";import"./utils-15tqT33e.js";import"./close_icon-KSt-Uk_u.js";import"./createLucideIcon-DOlFIQMa.js";const oe=""+new URL("logo_berlin_m_srgb-D14p6fXV.svg",import.meta.url).href;function F({logoUrl:t="https://www.berlin.de",logoComponent:a,isSticky:n=!1}){return e.jsx("div",{className:`sticky top-0 z-10 flex items-center justify-start border-b transition-[height,background-color,opacity,padding] duration-200 ease-in-out ${n?"h-[3px] border-none bg-grey-darkest px-4 py-0 lg:px-6":"h-11 border-gray-300 bg-white px-4 py-[0.25em] lg:px-6"}`,children:e.jsx("a",{href:t,"aria-label":"Homepage Berlin.de",className:`transition-opacity duration-200 ease-in-out ${n?"opacity-0":"opacity-100"}`,children:a||e.jsx("img",{src:oe,alt:"Berlin.de Logo",className:"object-fill"})})})}F.__docgenInfo={description:"",methods:[],displayName:"LogoBar",props:{logoUrl:{required:!1,tsType:{name:"string"},description:"URL for the logo link",defaultValue:{value:'"https://www.berlin.de"',computed:!1}},logoComponent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom logo component (will be used instead of default Berlin logo if provided)"},isSticky:{required:!1,tsType:{name:"boolean"},description:"Whether the LogoBar is in sticky state",defaultValue:{value:"false",computed:!1}}}};const le=t=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",...t},l.createElement("path",{d:"M16 132h416c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H16C7.2 60 0 67.2 0 76v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16z"}));function U({onOpenMenu:t,className:a=""}){const{translations:n}=x(),s=o("menu",n);return e.jsxs("button",{className:`-mt-[0.05rem] flex cursor-pointer flex-col items-center justify-between gap-[0.06rem] text-[11px] leading-normal ${a}`,onClick:t,"aria-label":s,children:[e.jsx(le,{className:"h-8"}),e.jsx("span",{className:"-mr-[0.05rem] whitespace-nowrap",children:s})]})}U.__docgenInfo={description:"",methods:[],displayName:"MenuButton",props:{onOpenMenu:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to open the menu"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};function K({onOpenSearch:t,className:a=""}){const{translations:n}=x(),s=o("search",n);return e.jsxs("button",{className:`-mt-[0.05rem] -ml-[0.05rem] flex cursor-pointer flex-col items-center justify-between gap-[0.06rem] pr-[0.05rem] text-[11px] leading-normal ${a}`,onClick:t,"aria-label":s,children:[e.jsx(se,{className:"size-8"}),e.jsx("span",{className:"text-[11px] whitespace-nowrap",children:s})]})}K.__docgenInfo={description:"",methods:[],displayName:"SearchButton",props:{onOpenSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to handle search button click"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};const ce=t=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...t},l.createElement("path",{d:"M256 48c115 0 208 93 208 208 0 115-93 208-208 208-115 0-208-93-208-208 0-115 93-208 208-208m0-40C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 56C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64zm0 44c19.9 0 36 16.1 36 36s-16.1 36-36 36-36-16.1-36-36 16.1-36 36-36zm117.7 98c-28.7 6.8-55.5 12.7-82.1 15.8 .9 101 12.3 123.1 25 155.6 3.6 9.3-1 19.7-10.2 23.3-9.3 3.6-19.7-1-23.3-10.2-8.7-22.3-17.1-40.6-22.3-78.5h-9.7c-5.2 37.9-13.5 56.2-22.3 78.5-3.6 9.3-14.1 13.8-23.3 10.2-9.3-3.6-13.8-14.1-10.2-23.3 12.7-32.5 24.2-54.5 25-155.6-26.6-3.1-53.4-9-82.1-15.8-8.6-2-13.9-10.6-11.9-19.2s10.6-13.9 19.2-11.9c96.7 22.8 124.3 22.8 220.8 0 8.6-2 17.2 3.3 19.2 11.9 2 8.6-3.3 17.2-11.9 19.2z"}));function Y({onOpenAccessibility:t,className:a=""}){const{translations:n}=x(),s=o("accessibility",n);return e.jsxs("button",{className:`-mt-[0.05rem] flex cursor-pointer flex-col items-center justify-between gap-[0.06rem] text-[11px] leading-normal ${a}`,onClick:t,"aria-label":s,children:[e.jsx(ce,{className:"size-8"}),e.jsx("span",{className:"whitespace-nowrap",children:s})]})}Y.__docgenInfo={description:"",methods:[],displayName:"AccessibilityButton",props:{onOpenAccessibility:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to handle accessibility button click"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};function P({isOpen:t,close:a,onSearch:n}){const{translations:s}=x(),u=d=>{n&&n(d),a()};return e.jsx(R,{open:t,onOpenChange:d=>!d&&a(),children:e.jsx(H,{size:"large",className:"flex flex-col gap-4",children:e.jsx("div",{className:"flex flex-row justify-center",children:e.jsxs("div",{className:"mt-[10vh] flex w-full flex-col gap-2 px-4 lg:mt-[30vh] lg:w-[50%]",children:[e.jsx("h1",{className:"font-bold",children:o("search.title",s)}),e.jsx(ae,{placeholder:o("search.placeholder",s),onSubmit:u,className:"w-full",label:o("search.ariaLabel",s),submitLabel:o("search.submit",s)})]})})})})}P.__docgenInfo={description:"",methods:[],displayName:"SearchMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the search drawer is open"},close:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to close the search drawer"},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(searchTerm: string) => void",signature:{arguments:[{type:{name:"string"},name:"searchTerm"}],return:{name:"void"}}},description:"Function called when search is submitted"}}};function G({isOpen:t,close:a,menuItems:n}){const{translations:s}=x(),[u,d]=l.useState({}),i=c=>{d(g=>({...g,[c]:!g[c]}))},h=c=>c%2===0&&c>0?"bg-menu-background-dark pl-4":c%2===1?"bg-menu-background pl-4":"border-t border-border-light",p=(c,g=0,y="")=>c.map((r,w)=>{const f=`${y}${r.label}-${w}`,b=!!u[f],S=h(g),j=["flex h-[55px] items-center"].join(" ").trim(),N=[S,b?"shadow-[0_7px_7px_rgba(150,150,150,0.1)] relative z-10":""].join(" ").trim();return e.jsxs("div",{className:N,children:[" ",e.jsxs("div",{className:j,children:[r.icon&&e.jsx("span",{className:"mr-2",children:r.icon}),e.jsx("a",{href:r.href,className:"m-[3px] flex w-full items-center px-[24px] py-[0.1rem] text-lg transition-colors duration-200 hover:underline",onClick:v=>{r.href==="#"||r.href===""?(v.preventDefault(),r.children&&r.children.length>0&&i(f)):r.children&&r.children.length>0},children:r.label}),r.children&&r.children.length>0&&e.jsx("div",{className:"mx-[3px] my-[0.5rem] cursor-pointer border-l border-black px-[0.7rem] pt-[0.3rem] pb-[0.4rem]",onClick:()=>i(f),children:e.jsx(re,{className:`transform transition-transform duration-200 ${b?"rotate-180":""}`})})]}),b&&r.children&&r.children.length>0&&e.jsxs("div",{className:"flex flex-col",children:[" ",p(r.children,g+1,`${f}-`)]})]},f)});return e.jsx(R,{open:t,onOpenChange:c=>!c&&a(),children:e.jsx(H,{className:"flex flex-col gap-2",children:e.jsxs("div",{className:"text-base",children:[e.jsx("div",{className:"mb-5 flex flex-row items-center justify-between",children:e.jsx("p",{className:"px-6 text-2xl font-bold",children:o("menu.title",s)||"Menu"})}),e.jsx("div",{className:"flex flex-col gap-2",children:n.length>0?p(n):e.jsx("p",{children:o("menu.noItems",s)||"No menu items available."})})]})})})}G.__docgenInfo={description:"",methods:[],displayName:"MenuDrawer",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the menu drawer is open"},close:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to close the menu drawer"},menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"MenuItem"}],raw:"MenuItem[]"},description:"Menu items to display"}}};function J({isOpen:t,close:a,accessibilityItems:n=[]}){const{translations:s}=x(),u=[{question:o("accessibilityMenu.barrierefreiheit.question",s),label:o("accessibilityMenu.barrierefreiheit",s),href:"/accessibility-statement/"},{question:o("accessibilityMenu.contact.question",s),label:o("accessibilityMenu.contact",s),href:"/accessibility-statement/#accessibility-contact"},{question:o("accessibilityMenu.additionalInfo.question",s),label:o("accessibilityMenu.additionalInfo",s),href:"https://www.berlin.de/moderne-verwaltung/barrierefreie-it/anlaufstellen/kompetenzstelle/artikel.988002.php",external:!0}],d=n&&n.length>0?n:u;return e.jsx(R,{open:t,onOpenChange:i=>!i&&a(),children:e.jsxs(H,{className:"flex flex-col gap-4 px-6 py-4 text-base",children:[e.jsx("div",{className:"mt-4 mb-6 flex flex-row items-center justify-between",children:e.jsx("p",{className:"text-2xl font-bold",children:o("accessibilityMenu.title",s)})}),d.map((i,h)=>e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"mb-1 font-bold",children:i.question}),i.external?e.jsx("a",{className:"text-text-link transition-colors duration-200 hover:underline",href:i.href,target:"_blank",rel:"noreferrer",children:i.label}):e.jsx("a",{href:i.href,className:"text-text-link transition-colors duration-200 hover:underline",children:i.label})]},h))]})})}J.__docgenInfo={description:"",methods:[],displayName:"AccessibilityMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the accessibility drawer is open"},close:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to close the accessibility drawer"},accessibilityItems:{required:!1,tsType:{name:"Array",elements:[{name:"AccessibilityItem"}],raw:"AccessibilityItem[]"},description:"Accessibility items to display",defaultValue:{value:"[]",computed:!1}}}};function X({header:t,caption:a,url:n,showSearchButton:s,onSearch:u,showMenuButton:d,menuItems:i,onOpenMenu:h}){const[p,c]=l.useState(!1),[g,y]=l.useState(!1),[r,w]=l.useState(!1),f=()=>{c(!0),u()},b=()=>{c(!1)},S=T=>{console.warn("Search term:",T)},j=()=>{y(!0),h()},N=()=>{y(!1)},v=()=>{w(!0)},z=()=>{w(!1)};return e.jsxs("div",{className:"relative z-11 flex items-center justify-between bg-white px-4 py-[0rem] shadow-md lg:px-6 lg:py-[0.7rem]",children:[e.jsxs("a",{href:n,className:"flex flex-col justify-center p-0 text-[15px] leading-[1.2] break-words md:text-base lg:p-[3px] lg:text-xl",children:[e.jsx("span",{children:t}),e.jsx("span",{className:"block font-bold",children:a})]}),e.jsxs("div",{className:"mx-[0.65rem] flex h-full flex-0 items-end space-x-[0.65rem] pt-[0.59rem] pb-[0.20rem] md:space-x-[1.05rem] md:pt-[0.69rem] md:pb-[0.22rem]",children:[e.jsxs(e.Fragment,{children:[e.jsx(Y,{onOpenAccessibility:v}),e.jsx(J,{isOpen:r,close:z,accessibilityItems:[]})]}),s&&e.jsxs(e.Fragment,{children:[e.jsx(K,{onOpenSearch:f}),e.jsx(P,{isOpen:p,close:b,onSearch:S})]}),d&&e.jsxs(e.Fragment,{children:[e.jsx(U,{onOpenMenu:j}),e.jsx(G,{isOpen:g,close:N,menuItems:i})]})]})]})}X.__docgenInfo={description:"",methods:[],displayName:"MainHeaderContent",props:{header:{required:!0,tsType:{name:"string"},description:""},caption:{required:!0,tsType:{name:"string"},description:""},url:{required:!0,tsType:{name:"string"},description:""},showSearchButton:{required:!0,tsType:{name:"boolean"},description:""},onSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showMenuButton:{required:!0,tsType:{name:"boolean"},description:""},menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"MenuItem"}],raw:"MenuItem[]"},description:""},onOpenMenu:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ue=t=>l.createElement("svg",{width:19,height:11,viewBox:"0 0 19 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{id:"Rectangle 128",d:"M1.5 1.12916L9.5 8.87109L17.5 1.12916",stroke:"currentColor",strokeWidth:3})),de=t=>l.createElement("svg",{width:19,height:11,viewBox:"0 0 19 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M17.5 9.87084L9.5 2.12891L1.5 9.87084",stroke:"currentColor",strokeWidth:3}));function me(t,a){te.useEffect(()=>{const n=s=>{t.current&&!t.current.contains(s.target)&&a(!1)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[t,a])}function Q({className:t=""}){const[a,n]=l.useState(!1),s=l.useRef(null),{currentLanguage:u,languages:d,translations:i,setLanguage:h}=x();return me(s,n),e.jsxs("div",{className:`relative z-[10] text-black ${t}`,ref:s,children:[e.jsxs("button",{className:"flex h-full items-center gap-2",onClick:()=>n(!a),"aria-label":o(a?"collapse":"expand",i),"aria-expanded":a,children:[e.jsx("span",{className:"font-bolder flex size-5 items-center justify-center bg-black text-[11px] text-white",children:u.toLowerCase()}),e.jsx("span",{className:"pointer-events-none flex size-3 items-center justify-center text-red",children:a?e.jsx(de,{className:"text-berlin-green"}):e.jsx(ue,{className:"text-berlin-green"})})]}),e.jsx("div",{className:`${a?"block":"hidden"} absolute top-8 right-0 bg-white shadow-lg`,children:e.jsx("ul",{children:d.map(p=>e.jsx("li",{children:e.jsxs("button",{className:"block flex w-full gap-2 px-2 py-1 text-base hover:bg-gray-100",onClick:()=>{h(p.code),n(!1)},children:[e.jsx("span",{className:"flex size-6 items-center justify-center bg-black text-[11px] font-bold text-white",children:p.code.toLowerCase()}),p.label]})},p.code))})})]})}Q.__docgenInfo={description:"",methods:[],displayName:"LanguageSelect",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};function Z({showBreadcrumbs:t,breadcrumbs:a,showLanguageSelect:n,LinkComponent:s,isSticky:u=!1}){return!t&&!n?null:e.jsx("div",{className:`relative z-10 bg-block-colored px-4 lg:px-0 ${u?"-translate-y-64 opacity-0":"translate-y-0 opacity-100"} motion-safe:transition-all motion-safe:duration-100 motion-safe:ease-in-out`,children:e.jsxs("div",{className:"mx-auto flex max-w-[61.25rem] justify-between",children:[t&&e.jsx(ie,{items:a,LinkComponent:s}),n&&e.jsx(Q,{})]})})}Z.__docgenInfo={description:"",methods:[],displayName:"SubHeaderBar",props:{showBreadcrumbs:{required:!0,tsType:{name:"boolean"},description:""},breadcrumbs:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},showLanguageSelect:{required:!0,tsType:{name:"boolean"},description:""},isSticky:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["LinkComponentProps"]};function $({header:t="Design System",caption:a="Berlin.de",url:n="/",logoUrl:s="https://www.berlin.de",logoComponent:u,LinkComponent:d,breadcrumbs:i=[],showBreadcrumbs:h=!0,showLanguageSelect:p=!0,language:c="de",languages:g=[{code:"de",label:"Deutsch"},{code:"en",label:"English"}],translations:y,onLanguageChange:r=()=>{},showSearchButton:w=!0,onSearch:f=()=>{},showMenuButton:b=!0,menuItems:S=[],onOpenMenu:j=()=>{},className:N=""}){const[v,z]=l.useState(!1),T=l.useRef(null);return l.useEffect(()=>{if(T.current){let k=null;const ee=50;let D=!1;const V=()=>{const W=(window.scrollY||window.pageYOffset)>(D?0:2);W!==D&&(D=W,k&&clearTimeout(k),k=setTimeout(()=>{z(W)},ee))};return V(),window.addEventListener("scroll",V,{passive:!0}),()=>{k&&clearTimeout(k),window.removeEventListener("scroll",V)}}},[]),e.jsx(ne,{initialLanguage:c,languages:g,translations:y,onLanguageChange:r,children:e.jsxs("header",{ref:T,className:`sticky top-0 z-20 box-border leading-[1.22rem] ${N}`,children:[e.jsx(F,{logoUrl:s,logoComponent:u,isSticky:v}),e.jsx(X,{header:t,caption:a,url:n,showSearchButton:w,onSearch:f,showMenuButton:b,menuItems:S,onOpenMenu:j}),e.jsx(Z,{showBreadcrumbs:h,breadcrumbs:i,showLanguageSelect:p,LinkComponent:d,isSticky:v})]})})}$.__docgenInfo={description:`Header component with integrated accessibility menu

The Header component includes:
- Logo section
- Title and action buttons (search, menu, accessibility)
- Optional breadcrumbs and language selector
- Built-in accessibility menu drawer`,methods:[],displayName:"Header",props:{header:{required:!1,tsType:{name:"string"},description:"Header title text",defaultValue:{value:'"Design System"',computed:!1}},caption:{required:!1,tsType:{name:"string"},description:"Header subtitle text",defaultValue:{value:'"Berlin.de"',computed:!1}},url:{required:!1,tsType:{name:"string"},description:"URL for the header link",defaultValue:{value:'"/"',computed:!1}},logoUrl:{required:!1,tsType:{name:"string"},description:"URL for the logo link",defaultValue:{value:'"https://www.berlin.de"',computed:!1}},logoComponent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom logo component (will be used instead of default Berlin logo if provided)"},breadcrumbs:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Breadcrumb items to display",defaultValue:{value:"[]",computed:!1}},showBreadcrumbs:{required:!1,tsType:{name:"boolean"},description:"Whether to show the breadcrumbs section",defaultValue:{value:"true",computed:!1}},showLanguageSelect:{required:!1,tsType:{name:"boolean"},description:"Whether to show the language selector",defaultValue:{value:"true",computed:!1}},language:{required:!1,tsType:{name:"string"},description:"Current language code",defaultValue:{value:'"de"',computed:!1}},languages:{required:!1,tsType:{name:"Array",elements:[{name:"Language"}],raw:"Language[]"},description:"Available languages",defaultValue:{value:`[
	{ code: "de", label: "Deutsch" },
	{ code: "en", label: "English" },
]`,computed:!1}},translations:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"}],raw:"Record<string, Record<string, string>>"},description:"JSON translation files keyed by language code"},onLanguageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(code: string) => void",signature:{arguments:[{type:{name:"string"},name:"code"}],return:{name:"void"}}},description:"Callback when language changes",defaultValue:{value:"() => {}",computed:!1}},showSearchButton:{required:!1,tsType:{name:"boolean"},description:"Whether to show the search button",defaultValue:{value:"true",computed:!1}},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when search button is clicked",defaultValue:{value:"() => {}",computed:!1}},showMenuButton:{required:!1,tsType:{name:"boolean"},description:"Whether to show the menu button",defaultValue:{value:"true",computed:!1}},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"MenuItem"}],raw:"MenuItem[]"},description:"Menu items for the main menu",defaultValue:{value:"[]",computed:!1}},onOpenMenu:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when menu button is clicked",defaultValue:{value:"() => {}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}},composes:["LinkComponentProps"]};const We={title:"Elements/Header",component:$,parameters:{layout:"fullscreen"},tags:["autodocs"]},pe={accessibility:"Barrierefrei",menu:"Menü",search:"Suche",expand:"Erweitern",collapse:"Einklappen","search.title":"Suche","search.placeholder":"Suchbegriff","search.ariaLabel":"Suche","search.button":"Suchen","search.submit":"Suchen","accessibilityMenu.title":"Barrierefreiheit","button.name.close":"Schließen","accessibilityMenu.barrierefreiheit.question":"Wie barrierefrei ist diese Webseite?","accessibilityMenu.barrierefreiheit":"Erklärung zur Barrierefreiheit","accessibilityMenu.contact.question":"Haben Sie Anmerkungen oder Fragen zur Barrierefreiheit dieser Webseite?","accessibilityMenu.contact":"Kontakt zur Ansprechperson","accessibilityMenu.additionalInfo.question":"Wo gibt es zusätzliche Informationen zur Barrierefreiheit im Land Berlin?","accessibilityMenu.additionalInfo":"Barrierefreie Informations- und Kommunikationstechnik (IKT)"},he={accessibility:"Accessibility",menu:"Menu",search:"Search",expand:"Expand",collapse:"Collapse","search.title":"Search","search.placeholder":"Search term","search.ariaLabel":"Search","search.button":"Search","search.submit":"Search","accessibilityMenu.title":"Accessibility","button.name.close":"Close","accessibilityMenu.barrierefreiheit.question":"Accessibility information:","accessibilityMenu.barrierefreiheit":"Accessibility statement","accessibilityMenu.contact.question":"Report accessibility issue:","accessibilityMenu.contact":"Contact","accessibilityMenu.additionalInfo.question":"Additional information:","accessibilityMenu.additionalInfo":"Competence center for accessibility"},m={args:{header:"Senatsverwaltung für",caption:"Mobilität, Verkehr, Klimaschutz und Umwelt",breadcrumbs:[{label:"Home",href:"/"},{label:"Components",href:"/components"},{label:"Header",href:"/components/header"}],languages:[{code:"de",label:"Deutsch"},{code:"en",label:"English"}],menuItems:[{label:"Item 1",href:"/item1"},{label:"Item 2",href:"/item2"},{label:"Item 3",href:"/item3",children:[{label:"Subitem 1",href:"/item3/subitem1"},{label:"Subitem 2",href:"/item3/subitem2"},{label:"Subitem 3",href:"/item3/subitem3",children:[{label:"Subitem 1",href:"/item3/subitem1"},{label:"Subitem 2",href:"/item3/subitem2"},{label:"Subitem 1",href:"/item3/subitem1"},{label:"Subitem 2",href:"/item3/subitem2"}]},{label:"Item 4",href:"/item4"}]}],language:"de",translations:{de:pe,en:he},onOpenMenu:()=>{console.warn("Menu opened")},onSearch:()=>{console.warn("Search opened")},onLanguageChange:t=>{console.warn(`Language changed to: ${t}`)}}},L={args:{...m.args,language:"en"}},B={args:{...m.args,language:"tr"}},M={args:{...m.args,header:"With Custom Logo",logoComponent:e.jsx("div",{className:"flex h-8 items-center font-bold text-red-500",children:"CUSTOM LOGO"}),LinkComponent:({href:t,children:a})=>e.jsx("a",{href:t,className:"text-blue-500 hover:underline",children:a})}},C={args:{...m.args,showLanguageSelect:!1}},I={args:{...m.args,showBreadcrumbs:!1}},q={args:{...m.args,showSearchButton:!1}},O={args:{...m.args,showMenuButton:!1}},A={args:{header:"Minimal Header",caption:"Berlin.de",showBreadcrumbs:!1,showLanguageSelect:!1,showSearchButton:!1,showMenuButton:!1}},E={args:{...m.args},parameters:{docs:{description:{story:"This example shows how to customize the accessibility menu items. The menu opens when clicking the accessibility button in the header."}}}},_={args:{...m.args},render:t=>e.jsxs("div",{className:"h-full",children:[e.jsx($,{...t}),e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{className:"mb-4 text-2xl font-bold",children:"Scroll Test for Sticky LogoBar"}),e.jsx("p",{className:"mb-4",children:"Scroll down to see the LogoBar collapse to a thin line (3px height) with a dark gray background. The logo will fade out as you scroll."}),e.jsxs("div",{className:"mb-4 bg-gray-100 p-4",children:[e.jsx("p",{children:e.jsx("strong",{children:"Expected Behavior:"})}),e.jsxs("ul",{className:"list-disc pl-8",children:[e.jsx("li",{children:"Initial state: LogoBar is 44px tall with white background"}),e.jsx("li",{children:"When scrolling: LogoBar collapses to 3px height"}),e.jsx("li",{children:"Background color changes to dark gray"}),e.jsx("li",{children:"Logo fades out with a smooth transition"})]})]}),Array.from({length:30},(a,n)=>e.jsxs("p",{className:`mb-4 p-2 ${n%2===0?"bg-gray-50":"bg-white"}`,children:["This is scrollable content (row ",n+1,"). Continue scrolling to test the sticky behavior of the LogoBar."]},n))]})]}),parameters:{docs:{description:{story:"This story provides scrollable content to test the sticky behavior of the LogoBar component. As you scroll down, the LogoBar will collapse to a thin line and change its background color. The logo will fade out during this transition."}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    header: "Senatsverwaltung für",
    caption: "Mobilität, Verkehr, Klimaschutz und Umwelt",
    breadcrumbs: [{
      label: "Home",
      href: "/"
    }, {
      label: "Components",
      href: "/components"
    }, {
      label: "Header",
      href: "/components/header"
    }],
    languages: [{
      code: "de",
      label: "Deutsch"
    }, {
      code: "en",
      label: "English"
    }],
    menuItems: [{
      label: "Item 1",
      href: "/item1"
    }, {
      label: "Item 2",
      href: "/item2"
    }, {
      label: "Item 3",
      href: "/item3",
      children: [{
        label: "Subitem 1",
        href: "/item3/subitem1"
      }, {
        label: "Subitem 2",
        href: "/item3/subitem2"
      }, {
        label: "Subitem 3",
        href: "/item3/subitem3",
        children: [{
          label: "Subitem 1",
          href: "/item3/subitem1"
        }, {
          label: "Subitem 2",
          href: "/item3/subitem2"
        }, {
          label: "Subitem 1",
          href: "/item3/subitem1"
        }, {
          label: "Subitem 2",
          href: "/item3/subitem2"
        }]
      }, {
        label: "Item 4",
        href: "/item4"
      }]
    }],
    language: "de",
    translations: {
      de: deTranslations,
      en: enTranslations
    },
    onOpenMenu: () => {
      console.warn("Menu opened");
    },
    onSearch: () => {
      console.warn("Search opened");
    },
    onLanguageChange: (code: string) => {
      console.warn(\`Language changed to: \${code}\`);
    }
  }
}`,...m.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    language: "en"
  }
}`,...L.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    language: "tr"
  }
}`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: "With Custom Logo",
    logoComponent: <div className="flex h-8 items-center font-bold text-red-500">
                CUSTOM LOGO
            </div>,
    LinkComponent: ({
      href,
      children
    }) => <a href={href} className="text-blue-500 hover:underline">
                {children}
            </a>
  }
}`,...M.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLanguageSelect: false
  }
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showBreadcrumbs: false
  }
}`,...I.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showSearchButton: false
  }
}`,...q.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showMenuButton: false
  }
}`,...O.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    header: "Minimal Header",
    caption: "Berlin.de",
    showBreadcrumbs: false,
    showLanguageSelect: false,
    showSearchButton: false,
    showMenuButton: false
  }
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    docs: {
      description: {
        story: "This example shows how to customize the accessibility menu items. The menu opens when clicking the accessibility button in the header."
      }
    }
  }
}`,...E.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <div className="h-full">
            <Header {...args} />
            <div className="p-4">
                <h2 className="mb-4 text-2xl font-bold">
                    Scroll Test for Sticky LogoBar
                </h2>
                <p className="mb-4">
                    Scroll down to see the LogoBar collapse to a thin line (3px height)
                    with a dark gray background. The logo will fade out as you scroll.
                </p>
                <div className="mb-4 bg-gray-100 p-4">
                    <p>
                        <strong>Expected Behavior:</strong>
                    </p>
                    <ul className="list-disc pl-8">
                        <li>Initial state: LogoBar is 44px tall with white background</li>
                        <li>When scrolling: LogoBar collapses to 3px height</li>
                        <li>Background color changes to dark gray</li>
                        <li>Logo fades out with a smooth transition</li>
                    </ul>
                </div>
                {Array.from({
        length: 30
      }, (_, i) => <p key={i} className={\`mb-4 p-2 \${i % 2 === 0 ? "bg-gray-50" : "bg-white"}\`}>
                        This is scrollable content (row {i + 1}). Continue scrolling to test
                        the sticky behavior of the LogoBar.
                    </p>)}
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: "This story provides scrollable content to test the sticky behavior of the LogoBar component. As you scroll down, the LogoBar will collapse to a thin line and change its background color. The logo will fade out during this transition."
      }
    }
  }
}`,..._.parameters?.docs?.source}}};const Re=["Default","EnglishLanguage","TurkishLanguage","CustomLogoAndLinks","WithoutLanguageSelector","WithoutBreadcrumbs","WithoutSearch","WithoutMenu","MinimalHeader","WithCustomAccessibilityItems","ScrollableContent"];export{M as CustomLogoAndLinks,m as Default,L as EnglishLanguage,A as MinimalHeader,_ as ScrollableContent,B as TurkishLanguage,E as WithCustomAccessibilityItems,I as WithoutBreadcrumbs,C as WithoutLanguageSelector,O as WithoutMenu,q as WithoutSearch,Re as __namedExportsOrder,We as default};
