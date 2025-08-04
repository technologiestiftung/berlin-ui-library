import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BCtMShv3.js";import{c as V}from"./index-B-xwPz7g.js";import{c as o}from"./utils-15tqT33e.js";const A=a=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512",...a},i.createElement("path",{d:"M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z"})),T=a=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...a},i.createElement("path",{d:"M256 8C119 8 8 119.1 8 256c0 137 111 248 248 248s248-111 248-248C504 119.1 393 8 256 8zm0 110c23.2 0 42 18.8 42 42s-18.8 42-42 42-42-18.8-42-42 18.8-42 42-42zm56 254c0 6.6-5.4 12-12 12h-88c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h12v-64h-12c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h64c6.6 0 12 5.4 12 12v100h12c6.6 0 12 5.4 12 12v24z"})),M=a=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...a},i.createElement("path",{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"})),G=a=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...a},i.createElement("path",{d:"M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM227.3 387.3l184-184c6.2-6.2 6.2-16.4 0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6 0L216 308.1l-70.1-70.1c-6.2-6.2-16.4-6.2-22.6 0l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6l104 104c6.2 6.2 16.4 6.2 22.6 0z"})),D=V("pill text-3.5 inline-flex w-auto min-w-[unset] items-center gap-[0.4em] rounded-full border border-transparent px-1.75 py-0.25 leading-[1.2] transition-colors",{variants:{variant:{default:"bg-black text-white",error:"bg-message-error text-text-error",success:"bg-message-success text-text-success",info:"bg-message-info text-blue",message:"bg-message-default text-text-base",filter:"bg-grey-dark text-black hover:bg-border-light data-[state=active]:bg-red data-[state=active]:text-white data-[state=active]:hover:bg-red"},inverted:{true:""},size:{default:"",big:"text-3.5 rounded-full px-3.5 py-1.5 font-normal"}},compoundVariants:[{variant:"default",inverted:!0,className:"bg-black text-white"},{variant:"error",inverted:!0,className:"bg-text-error text-white"},{variant:"success",inverted:!0,className:"bg-text-success text-white"},{variant:"info",inverted:!0,className:"bg-blue text-white"},{variant:"message",inverted:!0,className:"bg-text-base text-white"}],defaultVariants:{variant:"default",size:"default",inverted:!1}}),r=i.forwardRef(({className:a,variant:l,inverted:s,size:n,active:c,onToggle:d,children:y,...u},t)=>{const v=l==="filter"&&d!==void 0,C=k=>{v&&d?.(),u.onClick?.(k)};return e.jsxs("div",{ref:t,className:o(D({variant:l,inverted:s,size:n,className:a}),c&&"data-[state=active]",v&&"cursor-pointer"),"data-state":c?"active":"inactive",onClick:C,...u,children:[l==="info"&&e.jsx(T,{className:o(s?"fill-white":"fill-blue",n==="big"?"size-4":"size-3")}),l==="message"&&e.jsx(T,{className:o(s?"fill-white":"fill-text-base",n==="big"?"size-4":"size-3")}),l==="error"&&e.jsx(M,{className:o(s?"fill-white":"fill-text-error",n==="big"?"size-4":"size-3")}),l==="success"&&e.jsx(G,{className:o(s?"fill-white":"fill-text-success",n==="big"?"size-4":"size-3")}),y,l==="filter"&&c&&e.jsx(A,{className:o("fill-white",n==="big"?"size-4":"size-3")})]})});r.displayName="Pill";const B=i.forwardRef(({className:a,activeValues:l,onValueToggle:s,size:n="default",children:c,...d},y)=>{const u=i.Children.map(c,t=>{if(i.isValidElement(t)&&t.type===r&&t.props.variant==="filter"){const v=t.props.value||(typeof t.props.children=="string"?t.props.children:""),C=l.includes(v);return i.cloneElement(t,{active:C,size:n,onToggle:()=>s(v),value:v})}return t});return e.jsx("div",{ref:y,className:o("flex flex-wrap gap-2",a),...d,children:u})});B.displayName="FilterPillGroup";r.__docgenInfo={description:"",methods:[],displayName:"Pill",props:{active:{required:!1,tsType:{name:"boolean"},description:"Whether the pill is active (primarily used with filter variant)"},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function called when the pill is toggled (for filter variant)"},value:{required:!1,tsType:{name:"string"},description:"Value of the pill (used for filter variant in FilterPillGroup)"}},composes:["VariantProps"]};B.__docgenInfo={description:"",methods:[],displayName:"FilterPillGroup",props:{activeValues:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The currently active filter values"},onValueToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when a filter value is toggled"},size:{required:!1,tsType:{name:"union",raw:'"default" | "big"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"big"'}]},description:"Size variant for all pills in the group",defaultValue:{value:'"default"',computed:!1}}}};const _={title:"Elements/Pill",component:r,tags:["autodocs"],args:{children:"Pill"},parameters:{layout:"centered"}},g={args:{children:"Default Pill",variant:"default"}},f={args:{children:"Error Pill",variant:"error"}},m={args:{children:"Success Pill",variant:"success"}},p={args:{children:"Info Pill",variant:"info"}},h={args:{children:"Message Pill",variant:"message"}},x={args:{children:"Filter Pill",variant:"filter"}},P={args:{children:"Active Filter Pill",variant:"filter",active:!0}},j={render:()=>{const[a,l]=React.useState(!1);return e.jsx(r,{variant:"filter",active:a,onToggle:()=>l(!a),children:a?"Active Filter":"Inactive Filter"})}},b={args:{children:"Inverted Pill",variant:"default",inverted:!0}},I={args:{children:"Error Inverted Pill",variant:"error",inverted:!0}},w={args:{children:"Big Pill",variant:"default",size:"big"}},N={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(r,{variant:"default",children:[e.jsx("span",{children:"With Icon"}),e.jsx("i",{className:"fa fa-check","aria-hidden":"true",children:"✓"})]}),e.jsxs(r,{variant:"error",children:[e.jsx("i",{className:"fa fa-exclamation-circle","aria-hidden":"true",children:"!"}),e.jsx("span",{children:"Error with Icon"})]}),e.jsxs(r,{variant:"success",children:[e.jsx("span",{children:"Success"}),e.jsx("i",{className:"fa fa-check","aria-hidden":"true",children:"✓"})]})]})},S={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-lg font-bold",children:"Default Size"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"info",children:"Info with Icon"}),e.jsx(r,{variant:"message",children:"Message with Icon"}),e.jsx(r,{variant:"error",children:"Error with Icon"}),e.jsx(r,{variant:"success",children:"Success with Icon"})]}),e.jsx("h3",{className:"text-lg font-bold",children:"Inverted Variants"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"info",inverted:!0,children:"Info Inverted"}),e.jsx(r,{variant:"message",inverted:!0,children:"Message Inverted"}),e.jsx(r,{variant:"error",inverted:!0,children:"Error Inverted"}),e.jsx(r,{variant:"success",inverted:!0,children:"Success Inverted"})]}),e.jsx("h3",{className:"text-lg font-bold",children:"Big Size"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"info",size:"big",children:"Big Info"}),e.jsx(r,{variant:"message",size:"big",children:"Big Message"}),e.jsx(r,{variant:"error",size:"big",children:"Big Error"}),e.jsx(r,{variant:"success",size:"big",children:"Big Success"})]})]})},F={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(r,{variant:"default",children:[e.jsx("span",{children:"Closable"}),e.jsx("button",{onClick:()=>alert("Close clicked"),children:"×"})]}),e.jsxs(r,{variant:"info",className:"!gap-1",children:[e.jsx("span",{children:"Custom Info Button"}),e.jsx("button",{onClick:()=>alert("Info action clicked"),children:"ⓘ"})]})]})},z={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"default",children:"Default"}),e.jsx(r,{variant:"error",children:"Error"}),e.jsx(r,{variant:"success",children:"Success"}),e.jsx(r,{variant:"info",children:"Info"}),e.jsx(r,{variant:"message",children:"Message"}),e.jsx(r,{variant:"filter",children:"Filter"}),e.jsx(r,{variant:"filter",active:!0,children:"Active Filter"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"default",inverted:!0,children:"Default Inverted"}),e.jsx(r,{variant:"error",inverted:!0,children:"Error Inverted"}),e.jsx(r,{variant:"success",inverted:!0,children:"Success Inverted"}),e.jsx(r,{variant:"info",inverted:!0,children:"Info Inverted"}),e.jsx(r,{variant:"message",inverted:!0,children:"Message Inverted"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"default",size:"big",children:"Big Default"}),e.jsx(r,{variant:"error",size:"big",children:"Big Error"}),e.jsx(r,{variant:"success",size:"big",children:"Big Success"})]})]})},E={render:()=>{const[a,l]=i.useState([]),s=n=>{l(c=>c.includes(n)?c.filter(d=>d!==n):[...c,n])};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"mb-2 text-lg font-bold",children:["Active filters: ",a.join(", ")||"None"]}),e.jsxs(B,{activeValues:a,onValueToggle:s,children:[e.jsx(r,{variant:"filter",value:"Red",children:"Red"}),e.jsx(r,{variant:"filter",value:"Green",children:"Green"}),e.jsx(r,{variant:"filter",value:"Blue",children:"Blue"}),e.jsx(r,{variant:"filter",value:"Yellow",children:"Yellow"}),e.jsx(r,{variant:"filter",value:"Purple",children:"Purple"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-bold",children:"Big Filter Pills"}),e.jsxs(B,{activeValues:a,onValueToggle:s,size:"big",children:[e.jsx(r,{variant:"filter",value:"Category 1",children:"Category 1"}),e.jsx(r,{variant:"filter",value:"Category 2",children:"Category 2"}),e.jsx(r,{variant:"filter",value:"Category 3",children:"Category 3"})]})]})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Default Pill",
    variant: "default"
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Error Pill",
    variant: "error"
  }
}`,...f.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Success Pill",
    variant: "success"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Info Pill",
    variant: "info"
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Message Pill",
    variant: "message"
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Filter Pill",
    variant: "filter"
  }
}`,...x.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Active Filter Pill",
    variant: "filter",
    active: true
  }
}`,...P.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Using React hooks in Storybook render function
    const [active, setActive] = React.useState(false);
    return <Pill variant="filter" active={active} onToggle={() => setActive(!active)}>
                {active ? "Active Filter" : "Inactive Filter"}
            </Pill>;
  }
}`,...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Inverted Pill",
    variant: "default",
    inverted: true
  }
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Error Inverted Pill",
    variant: "error",
    inverted: true
  }
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Big Pill",
    variant: "default",
    size: "big"
  }
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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

            <h3 className="text-lg font-bold">Big Size</h3>
            <div className="flex flex-wrap gap-2">
                <Pill variant="info" size="big">
                    Big Info
                </Pill>
                <Pill variant="message" size="big">
                    Big Message
                </Pill>
                <Pill variant="error" size="big">
                    Big Error
                </Pill>
                <Pill variant="success" size="big">
                    Big Success
                </Pill>
            </div>
        </div>
}`,...S.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
                <Pill variant="default" size="big">
                    Big Default
                </Pill>
                <Pill variant="error" size="big">
                    Big Error
                </Pill>
                <Pill variant="success" size="big">
                    Big Success
                </Pill>
            </div>
        </div>
}`,...z.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
                    <h3 className="mb-2 text-lg font-bold">Big Filter Pills</h3>
                    <FilterPillGroup activeValues={activeFilters} onValueToggle={handleFilterToggle} size="big">
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
            </div>;
  }
}`,...E.parameters?.docs?.source}}};const Y=["Default","Error","Success","Info","Message","Filter","FilterActive","FilterToggle","Inverted","ErrorInverted","BigPill","WithIcon","BuiltInIcons","WithButton","AllVariants","FilterPillGroupExample"];export{z as AllVariants,w as BigPill,S as BuiltInIcons,g as Default,f as Error,I as ErrorInverted,x as Filter,P as FilterActive,E as FilterPillGroupExample,j as FilterToggle,p as Info,b as Inverted,h as Message,m as Success,F as WithButton,N as WithIcon,Y as __namedExportsOrder,_ as default};
