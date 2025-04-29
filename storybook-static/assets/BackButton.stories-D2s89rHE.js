import{R as i,r as e}from"./index-BCtMShv3.js";import{S as g}from"./index-CoBdCDVR.js";import{c as v,a as h}from"./utils-DaaxtNl5.js";import"./jsx-runtime-D_zvdyIk.js";const c=()=>i.createElement("svg",{width:"21",height:"19",viewBox:"0 0 21 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M10.4087 18.9365L0.9375 9.50049L10.4087 0.0634766L12.5259 2.18848L6.69336 8H20.5127V11H6.69287L12.5259 16.8115L10.4087 18.9365Z",fill:"black"}));c.__docgenInfo={description:"",methods:[],displayName:"ArrowLeftIcon"};const x=h("justify-centerts: inline-flex shrink-0 items-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",{variants:{variant:{default:"font[var(--font-custom] flex items-center justify-center font-(--font-custom) text-link-blue hover:underline",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-[43px] w-fit",sm:"h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function l({className:d,variant:u,size:m,asChild:p=!1,...o}){const f=p?g:"button";return e.createElement(f,{"data-slot":"button",className:v(x({variant:u,size:m,className:d})),onClick:o.onClick,...o},e.createElement("div",{className:"col-start-1 row-start-1 flex flex-row items-center gap-2"},e.createElement("div",{className:"scale-75"},e.createElement(c,null)),e.createElement("div",{className:""},o.title)))}l.__docgenInfo={description:"",methods:[],displayName:"BackButton",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const z={title:"Components/BackButton",component:l,argTypes:{onClick:{action:"clicked"},variant:{control:{type:"select",options:["default","destructive","outline","secondary","ghost","link"]}},size:{control:{type:"select",options:["default","sm","lg","icon"]}},title:{control:"text"}}},t={args:{variant:"default",size:"default",title:"Back"}},a={args:{variant:"default",size:"icon",title:""}},r={args:{variant:"destructive",size:"default",title:"Delete"}},s={args:{variant:"default",size:"sm",title:"Back"}},n={args:{variant:"default",size:"lg",title:"Back"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'default',
    title: 'Back'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'icon',
    title: ''
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    size: 'default',
    title: 'Delete'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'sm',
    title: 'Back'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'lg',
    title: 'Back'
  }
}`,...n.parameters?.docs?.source}}};const B=["Default","IconOnly","Destructive","Small","Large"];export{t as Default,r as Destructive,a as IconOnly,n as Large,s as Small,B as __namedExportsOrder,z as default};
