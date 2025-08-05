import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n,R as G}from"./index-BCtMShv3.js";import{c as D}from"./index-B-xwPz7g.js";import{c as d}from"./utils-15tqT33e.js";const W=a=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512",...a},n.createElement("path",{d:"M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z"})),C=a=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...a},n.createElement("path",{d:"M256 8C119 8 8 119.1 8 256c0 137 111 248 248 248s248-111 248-248C504 119.1 393 8 256 8zm0 110c23.2 0 42 18.8 42 42s-18.8 42-42 42-42-18.8-42-42 18.8-42 42-42zm56 254c0 6.6-5.4 12-12 12h-88c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h12v-64h-12c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h64c6.6 0 12 5.4 12 12v100h12c6.6 0 12 5.4 12 12v24z"})),B=a=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...a},n.createElement("path",{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"})),R=a=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...a},n.createElement("path",{d:"M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM227.3 387.3l184-184c6.2-6.2 6.2-16.4 0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6 0L216 308.1l-70.1-70.1c-6.2-6.2-16.4-6.2-22.6 0l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6l104 104c6.2 6.2 16.4 6.2 22.6 0z"})),q=D("pill text-3.5 inline-flex w-auto min-w-[unset] items-center gap-[0.4em] rounded-full border border-transparent px-1.75 py-0.25 leading-[1.2] transition-colors",{variants:{variant:{default:"bg-black text-white",error:"bg-message-error text-text-error",success:"bg-message-success text-text-success",info:"bg-message-info text-blue",message:"bg-message-default text-text-base",filter:"bg-grey-dark text-black hover:bg-border-light data-[state=active]:bg-red data-[state=active]:text-white data-[state=active]:hover:bg-red"},inverted:{true:""},size:{default:"",md:"text-3.5 rounded-full px-3.5 py-1.5 font-normal",lg:"text-4 rounded-full px-4 py-2 font-medium",xl:"text-4.5 rounded-full px-5 py-2.5 font-medium"}},compoundVariants:[{variant:"default",inverted:!0,className:"bg-black text-white"},{variant:"error",inverted:!0,className:"bg-text-error text-white"},{variant:"success",inverted:!0,className:"bg-text-success text-white"},{variant:"info",inverted:!0,className:"bg-blue text-white"},{variant:"message",inverted:!0,className:"bg-text-base text-white"}],defaultVariants:{variant:"default",size:"default",inverted:!1}}),l=n.forwardRef(({className:a,variant:i,inverted:s,size:r,active:c,onToggle:u,showIcon:o=!0,value:T,children:V,...t},f)=>{const g=i==="filter"&&u!==void 0,A=k=>{g&&u?.(),t.onClick?.(k)};return e.jsxs("div",{ref:f,className:d(q({variant:i,inverted:s,size:r,className:a}),c&&"data-[state=active]",g&&"cursor-pointer"),"data-state":c?"active":"inactive",onClick:A,...t,children:[o&&i==="info"&&e.jsx(C,{className:d(s?"fill-white":"fill-blue",r==="md"||r==="lg"||r==="xl"?"size-4":"size-3")}),o&&i==="message"&&e.jsx(C,{className:d(s?"fill-white":"fill-text-base",r==="md"||r==="lg"||r==="xl"?"size-4":"size-3")}),o&&i==="error"&&e.jsx(B,{className:d(s?"fill-white":"fill-text-error",r==="md"||r==="lg"||r==="xl"?"size-4":"size-3")}),o&&i==="success"&&e.jsx(R,{className:d(s?"fill-white":"fill-text-success",r==="md"||r==="lg"||r==="xl"?"size-4":"size-3")}),V,o&&i==="filter"&&c&&e.jsx(W,{className:d("fill-white",r==="md"||r==="lg"||r==="xl"?"size-4":"size-3")})]})});l.displayName="Pill";const v=n.forwardRef(({className:a,activeValues:i,onValueToggle:s,size:r="default",showIcon:c=!0,children:u,...o},T)=>{const V=n.Children.map(u,t=>{if(n.isValidElement(t)&&t.type===l&&t.props.variant==="filter"){const f=t.props.value||(typeof t.props.children=="string"?t.props.children:""),g=i.includes(f);return n.cloneElement(t,{active:g,size:r,showIcon:c,onToggle:()=>s(f),value:f})}return t});return e.jsx("div",{ref:T,className:d("flex flex-wrap gap-2",a),...o,children:V})});v.displayName="FilterPillGroup";l.__docgenInfo={description:"",methods:[],displayName:"Pill",props:{active:{required:!1,tsType:{name:"boolean"},description:"Whether the pill is active (primarily used with filter variant)"},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function called when the pill is toggled (for filter variant)"},value:{required:!1,tsType:{name:"string"},description:"Value of the pill (used for filter variant in FilterPillGroup)"},showIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the icon (applies to all variants that have icons)",defaultValue:{value:"true",computed:!1}}},composes:["VariantProps"]};v.__docgenInfo={description:"",methods:[],displayName:"FilterPillGroup",props:{activeValues:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The currently active filter values"},onValueToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when a filter value is toggled"},size:{required:!1,tsType:{name:"union",raw:'"default" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"Size variant for all pills in the group",defaultValue:{value:'"default"',computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show icons for all pills in the group",defaultValue:{value:"true",computed:!1}}}};const U={title:"Elements/Pill",component:l,tags:["autodocs"],args:{children:"Pill"},parameters:{layout:"centered"}},m={args:{children:"Default Pill",variant:"default"}},h={args:{children:"Error Pill",variant:"error"}},x={args:{children:"Success Pill",variant:"success"}},p={args:{children:"Info Pill",variant:"info"}},P={args:{children:"Message Pill",variant:"message"}},I={args:{children:"Filter Pill",variant:"filter"}},j={args:{children:"Active Filter Pill",variant:"filter",active:!0}},w={render:()=>{const[a,i]=G.useState(!1);return e.jsx(l,{variant:"filter",active:a,onToggle:()=>i(!a),children:a?"Active Filter":"Inactive Filter"})}},N={args:{children:"Inverted Pill",variant:"default",inverted:!0}},b={args:{children:"Error Inverted Pill",variant:"error",inverted:!0}},S={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-lg font-bold",children:"Size Variants"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(l,{variant:"default",size:"default",children:"Default Size"}),e.jsx(l,{variant:"default",size:"md",children:"Medium Size"}),e.jsx(l,{variant:"default",size:"lg",children:"Large Size"}),e.jsx(l,{variant:"default",size:"xl",children:"Extra Large Size"})]})]})},z={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(l,{variant:"default",children:[e.jsx("span",{children:"With Icon"}),e.jsx("i",{className:"fa fa-check","aria-hidden":"true",children:"✓"})]}),e.jsxs(l,{variant:"error",children:[e.jsx("i",{className:"fa fa-exclamation-circle","aria-hidden":"true",children:"!"}),e.jsx("span",{children:"Error with Icon"})]}),e.jsxs(l,{variant:"success",children:[e.jsx("span",{children:"Success"}),e.jsx("i",{className:"fa fa-check","aria-hidden":"true",children:"✓"})]})]})},F={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-lg font-bold",children:"Default Size"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(l,{variant:"info",children:"Info with Icon"}),e.jsx(l,{variant:"message",children:"Message with Icon"}),e.jsx(l,{variant:"error",children:"Error with Icon"}),e.jsx(l,{variant:"success",children:"Success with Icon"})]}),e.jsx("h3",{className:"text-lg font-bold",children:"Inverted Variants"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(l,{variant:"info",inverted:!0,children:"Info Inverted"}),e.jsx(l,{variant:"message",inverted:!0,children:"Message Inverted"}),e.jsx(l,{variant:"error",inverted:!0,children:"Error Inverted"}),e.jsx(l,{variant:"success",inverted:!0,children:"Success Inverted"})]}),e.jsx("h3",{className:"text-lg font-bold",children:"Medium Size"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(l,{variant:"info",size:"md",children:"Medium Info"}),e.jsx(l,{variant:"message",size:"md",children:"Medium Message"}),e.jsx(l,{variant:"error",size:"md",children:"Medium Error"}),e.jsx(l,{variant:"success",size:"md",children:"Medium Success"})]}),e.jsx("h3",{className:"text-lg font-bold",children:"Large Size"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(l,{variant:"info",size:"lg",children:"Large Info"}),e.jsx(l,{variant:"message",size:"lg",children:"Large Message"}),e.jsx(l,{variant:"error",size:"lg",children:"Large Error"}),e.jsx(l,{variant:"success",size:"lg",children:"Large Success"})]})]})},E={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(l,{variant:"default",children:[e.jsx("span",{children:"Closable"}),e.jsx("button",{onClick:()=>alert("Close clicked"),children:"×"})]}),e.jsxs(l,{variant:"info",className:"!gap-1",children:[e.jsx("span",{children:"Custom Info Button"}),e.jsx("button",{onClick:()=>alert("Info action clicked"),children:"ⓘ"})]})]})},L={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(l,{variant:"default",children:"Default"}),e.jsx(l,{variant:"error",children:"Error"}),e.jsx(l,{variant:"success",children:"Success"}),e.jsx(l,{variant:"info",children:"Info"}),e.jsx(l,{variant:"message",children:"Message"}),e.jsx(l,{variant:"filter",children:"Filter"}),e.jsx(l,{variant:"filter",active:!0,children:"Active Filter"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(l,{variant:"default",inverted:!0,children:"Default Inverted"}),e.jsx(l,{variant:"error",inverted:!0,children:"Error Inverted"}),e.jsx(l,{variant:"success",inverted:!0,children:"Success Inverted"}),e.jsx(l,{variant:"info",inverted:!0,children:"Info Inverted"}),e.jsx(l,{variant:"message",inverted:!0,children:"Message Inverted"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(l,{variant:"default",size:"md",children:"Medium Default"}),e.jsx(l,{variant:"error",size:"lg",children:"Large Error"}),e.jsx(l,{variant:"success",size:"xl",children:"XL Success"})]})]})},M={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-lg font-bold",children:"With Icons (Default)"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(l,{variant:"info",children:"Info with Icon"}),e.jsx(l,{variant:"error",children:"Error with Icon"}),e.jsx(l,{variant:"success",children:"Success with Icon"}),e.jsx(l,{variant:"message",children:"Message with Icon"}),e.jsx(l,{variant:"filter",active:!0,children:"Active Filter with Icon"})]}),e.jsx("h3",{className:"text-lg font-bold",children:"Without Icons (showIcon=false)"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(l,{variant:"info",showIcon:!1,children:"Info without Icon"}),e.jsx(l,{variant:"error",showIcon:!1,children:"Error without Icon"}),e.jsx(l,{variant:"success",showIcon:!1,children:"Success without Icon"}),e.jsx(l,{variant:"message",showIcon:!1,children:"Message without Icon"}),e.jsx(l,{variant:"filter",active:!0,showIcon:!1,children:"Active Filter without Icon"})]}),e.jsx("h3",{className:"text-lg font-bold",children:"Large Size Comparison"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(l,{variant:"info",size:"lg",children:"Large with Icon"}),e.jsx(l,{variant:"info",size:"lg",showIcon:!1,children:"Large without Icon"})]})]})},y={render:()=>{const[a,i]=n.useState([]),s=r=>{i(c=>c.includes(r)?c.filter(u=>u!==r):[...c,r])};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"mb-2 text-lg font-bold",children:["Active filters: ",a.join(", ")||"None"]}),e.jsxs(v,{activeValues:a,onValueToggle:s,children:[e.jsx(l,{variant:"filter",value:"Red",children:"Red"}),e.jsx(l,{variant:"filter",value:"Green",children:"Green"}),e.jsx(l,{variant:"filter",value:"Blue",children:"Blue"}),e.jsx(l,{variant:"filter",value:"Yellow",children:"Yellow"}),e.jsx(l,{variant:"filter",value:"Purple",children:"Purple"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-bold",children:"Medium Filter Pills"}),e.jsxs(v,{activeValues:a,onValueToggle:s,size:"md",children:[e.jsx(l,{variant:"filter",value:"Category 1",children:"Category 1"}),e.jsx(l,{variant:"filter",value:"Category 2",children:"Category 2"}),e.jsx(l,{variant:"filter",value:"Category 3",children:"Category 3"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-bold",children:"Large Filter Pills"}),e.jsxs(v,{activeValues:a,onValueToggle:s,size:"lg",children:[e.jsx(l,{variant:"filter",value:"Large 1",children:"Large 1"}),e.jsx(l,{variant:"filter",value:"Large 2",children:"Large 2"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-bold",children:"Extra Large Filter Pills"}),e.jsxs(v,{activeValues:a,onValueToggle:s,size:"xl",children:[e.jsx(l,{variant:"filter",value:"Extra Large 1",children:"Extra Large 1"}),e.jsx(l,{variant:"filter",value:"Extra Large 2",children:"Extra Large 2"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-bold",children:"Filter Pills Without Icons"}),e.jsxs(v,{activeValues:a,onValueToggle:s,size:"md",showIcon:!1,children:[e.jsx(l,{variant:"filter",value:"No Icon 1",children:"No Icon 1"}),e.jsx(l,{variant:"filter",value:"No Icon 2",children:"No Icon 2"}),e.jsx(l,{variant:"filter",value:"No Icon 3",children:"No Icon 3"})]})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Default Pill",
    variant: "default"
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Error Pill",
    variant: "error"
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Success Pill",
    variant: "success"
  }
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Info Pill",
    variant: "info"
  }
}`,...p.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Message Pill",
    variant: "message"
  }
}`,...P.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Filter Pill",
    variant: "filter"
  }
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Active Filter Pill",
    variant: "filter",
    active: true
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Using React hooks in Storybook render function
    const [active, setActive] = React.useState(false);
    return <Pill variant="filter" active={active} onToggle={() => setActive(!active)}>
                {active ? "Active Filter" : "Inactive Filter"}
            </Pill>;
  }
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Inverted Pill",
    variant: "default",
    inverted: true
  }
}`,...N.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Error Inverted Pill",
    variant: "error",
    inverted: true
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Size Variants</h3>
            <div className="flex flex-wrap items-center gap-2">
                <Pill variant="default" size="default">
                    Default Size
                </Pill>
                <Pill variant="default" size="md">
                    Medium Size
                </Pill>
                <Pill variant="default" size="lg">
                    Large Size
                </Pill>
                <Pill variant="default" size="xl">
                    Extra Large Size
                </Pill>
            </div>
        </div>
}`,...S.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
            <Pill variant="default">
                <span>With Icon</span>
                <i className="fa fa-check" aria-hidden="true">
                    ✓
                </i>
            </Pill>
            <Pill variant="error">
                <i className="fa fa-exclamation-circle" aria-hidden="true">
                    !
                </i>
                <span>Error with Icon</span>
            </Pill>
            <Pill variant="success">
                <span>Success</span>
                <i className="fa fa-check" aria-hidden="true">
                    ✓
                </i>
            </Pill>
        </div>
}`,...z.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Default Size</h3>
            <div className="flex flex-wrap gap-2">
                <Pill variant="info">Info with Icon</Pill>
                <Pill variant="message">Message with Icon</Pill>
                <Pill variant="error">Error with Icon</Pill>
                <Pill variant="success">Success with Icon</Pill>
            </div>

            <h3 className="text-lg font-bold">Inverted Variants</h3>
            <div className="flex flex-wrap gap-2">
                <Pill variant="info" inverted>
                    Info Inverted
                </Pill>
                <Pill variant="message" inverted>
                    Message Inverted
                </Pill>
                <Pill variant="error" inverted>
                    Error Inverted
                </Pill>
                <Pill variant="success" inverted>
                    Success Inverted
                </Pill>
            </div>

            <h3 className="text-lg font-bold">Medium Size</h3>
            <div className="flex flex-wrap gap-2">
                <Pill variant="info" size="md">
                    Medium Info
                </Pill>
                <Pill variant="message" size="md">
                    Medium Message
                </Pill>
                <Pill variant="error" size="md">
                    Medium Error
                </Pill>
                <Pill variant="success" size="md">
                    Medium Success
                </Pill>
            </div>

            <h3 className="text-lg font-bold">Large Size</h3>
            <div className="flex flex-wrap gap-2">
                <Pill variant="info" size="lg">
                    Large Info
                </Pill>
                <Pill variant="message" size="lg">
                    Large Message
                </Pill>
                <Pill variant="error" size="lg">
                    Large Error
                </Pill>
                <Pill variant="success" size="lg">
                    Large Success
                </Pill>
            </div>
        </div>
}`,...F.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
            <Pill variant="default">
                <span>Closable</span>
                <button onClick={() => alert("Close clicked")}>×</button>
            </Pill>
            {/* This example uses a custom button instead of the built-in InfoIcon */}
            <Pill variant="info" className="!gap-1">
                <span>Custom Info Button</span>
                <button onClick={() => alert("Info action clicked")}>ⓘ</button>
            </Pill>
        </div>
}`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
                <Pill variant="default">Default</Pill>
                <Pill variant="error">Error</Pill>
                <Pill variant="success">Success</Pill>
                <Pill variant="info">Info</Pill>
                <Pill variant="message">Message</Pill>
                <Pill variant="filter">Filter</Pill>
                <Pill variant="filter" active>
                    Active Filter
                </Pill>
            </div>

            <div className="flex flex-wrap gap-2">
                <Pill variant="default" inverted>
                    Default Inverted
                </Pill>
                <Pill variant="error" inverted>
                    Error Inverted
                </Pill>
                <Pill variant="success" inverted>
                    Success Inverted
                </Pill>
                <Pill variant="info" inverted>
                    Info Inverted
                </Pill>
                <Pill variant="message" inverted>
                    Message Inverted
                </Pill>
            </div>

            <div className="flex flex-wrap gap-2">
                <Pill variant="default" size="md">
                    Medium Default
                </Pill>
                <Pill variant="error" size="lg">
                    Large Error
                </Pill>
                <Pill variant="success" size="xl">
                    XL Success
                </Pill>
            </div>
        </div>
}`,...L.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">With Icons (Default)</h3>
            <div className="flex flex-wrap gap-2">
                <Pill variant="info">Info with Icon</Pill>
                <Pill variant="error">Error with Icon</Pill>
                <Pill variant="success">Success with Icon</Pill>
                <Pill variant="message">Message with Icon</Pill>
                <Pill variant="filter" active>
                    Active Filter with Icon
                </Pill>
            </div>

            <h3 className="text-lg font-bold">Without Icons (showIcon=false)</h3>
            <div className="flex flex-wrap gap-2">
                <Pill variant="info" showIcon={false}>
                    Info without Icon
                </Pill>
                <Pill variant="error" showIcon={false}>
                    Error without Icon
                </Pill>
                <Pill variant="success" showIcon={false}>
                    Success without Icon
                </Pill>
                <Pill variant="message" showIcon={false}>
                    Message without Icon
                </Pill>
                <Pill variant="filter" active showIcon={false}>
                    Active Filter without Icon
                </Pill>
            </div>

            <h3 className="text-lg font-bold">Large Size Comparison</h3>
            <div className="flex flex-wrap items-center gap-2">
                <Pill variant="info" size="lg">
                    Large with Icon
                </Pill>
                <Pill variant="info" size="lg" showIcon={false}>
                    Large without Icon
                </Pill>
            </div>
        </div>
}`,...M.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const handleFilterToggle = (value: string) => {
      setActiveFilters(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
    };
    return <div className="flex flex-col gap-4">
                <div>
                    <h3 className="mb-2 text-lg font-bold">
                        Active filters: {activeFilters.join(", ") || "None"}
                    </h3>
                    <FilterPillGroup activeValues={activeFilters} onValueToggle={handleFilterToggle}>
                        <Pill variant="filter" value="Red">
                            Red
                        </Pill>
                        <Pill variant="filter" value="Green">
                            Green
                        </Pill>
                        <Pill variant="filter" value="Blue">
                            Blue
                        </Pill>
                        <Pill variant="filter" value="Yellow">
                            Yellow
                        </Pill>
                        <Pill variant="filter" value="Purple">
                            Purple
                        </Pill>
                    </FilterPillGroup>
                </div>

                <div className="mt-4">
                    <h3 className="mb-2 text-lg font-bold">Medium Filter Pills</h3>
                    <FilterPillGroup activeValues={activeFilters} onValueToggle={handleFilterToggle} size="md">
                        <Pill variant="filter" value="Category 1">
                            Category 1
                        </Pill>
                        <Pill variant="filter" value="Category 2">
                            Category 2
                        </Pill>
                        <Pill variant="filter" value="Category 3">
                            Category 3
                        </Pill>
                    </FilterPillGroup>
                </div>

                <div className="mt-4">
                    <h3 className="mb-2 text-lg font-bold">Large Filter Pills</h3>
                    <FilterPillGroup activeValues={activeFilters} onValueToggle={handleFilterToggle} size="lg">
                        <Pill variant="filter" value="Large 1">
                            Large 1
                        </Pill>
                        <Pill variant="filter" value="Large 2">
                            Large 2
                        </Pill>
                    </FilterPillGroup>
                </div>

                <div className="mt-4">
                    <h3 className="mb-2 text-lg font-bold">Extra Large Filter Pills</h3>
                    <FilterPillGroup activeValues={activeFilters} onValueToggle={handleFilterToggle} size="xl">
                        <Pill variant="filter" value="Extra Large 1">
                            Extra Large 1
                        </Pill>
                        <Pill variant="filter" value="Extra Large 2">
                            Extra Large 2
                        </Pill>
                    </FilterPillGroup>
                </div>

                <div className="mt-4">
                    <h3 className="mb-2 text-lg font-bold">Filter Pills Without Icons</h3>
                    <FilterPillGroup activeValues={activeFilters} onValueToggle={handleFilterToggle} size="md" showIcon={false}>
                        <Pill variant="filter" value="No Icon 1">
                            No Icon 1
                        </Pill>
                        <Pill variant="filter" value="No Icon 2">
                            No Icon 2
                        </Pill>
                        <Pill variant="filter" value="No Icon 3">
                            No Icon 3
                        </Pill>
                    </FilterPillGroup>
                </div>
            </div>;
  }
}`,...y.parameters?.docs?.source}}};const H=["Default","Error","Success","Info","Message","Filter","FilterActive","FilterToggle","Inverted","ErrorInverted","SizeVariants","WithIcon","BuiltInIcons","WithButton","AllVariants","OptionalIcons","FilterPillGroupExample"];export{L as AllVariants,F as BuiltInIcons,m as Default,h as Error,b as ErrorInverted,I as Filter,j as FilterActive,y as FilterPillGroupExample,w as FilterToggle,p as Info,N as Inverted,P as Message,M as OptionalIcons,S as SizeVariants,x as Success,E as WithButton,z as WithIcon,H as __namedExportsOrder,U as default};
