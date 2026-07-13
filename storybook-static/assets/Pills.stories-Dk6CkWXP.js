import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g,R as W}from"./index-0yr9KlQE.js";import{c as R}from"./index-CdJFUDDL.js";import{S as B}from"./times-BhbnEWYI.js";import{S as D,a as q,b as _}from"./success-Brq59ub8.js";import{c as d}from"./utils-CBfrqCZ4.js";const Y=R("pill text-3.5 inline-flex w-auto min-w-[unset] items-center gap-[0.4em] rounded-full border border-transparent px-1.75 py-0.25 leading-[1.2] transition-colors",{variants:{variant:{default:"bg-black text-white",error:"bg-message-error text-text-error",success:"bg-message-success text-text-success",info:"bg-message-info text-blue",message:"bg-message-default text-text-base",filter:"bg-grey-dark text-black hover:bg-border-light data-[state=active]:bg-red data-[state=active]:text-white data-[state=active]:hover:bg-red","filter-outline":"hover:bg-grey-light border-2 border-grey-dark bg-white text-black data-[state=active]:border-red data-[state=active]:bg-red data-[state=active]:text-white data-[state=active]:hover:bg-red"},inverted:{true:""},size:{default:"",md:"text-3.5 rounded-full px-3.5 py-1.5 font-normal",lg:"text-4 rounded-full px-4 py-2 font-medium",xl:"text-4.5 rounded-full px-5 py-2.5 font-medium"}},compoundVariants:[{variant:"default",inverted:!0,className:"bg-black text-white"},{variant:"error",inverted:!0,className:"bg-text-error text-white"},{variant:"success",inverted:!0,className:"bg-text-success text-white"},{variant:"info",inverted:!0,className:"bg-blue text-white"},{variant:"message",inverted:!0,className:"bg-text-base text-white"}],defaultVariants:{variant:"default",size:"default",inverted:!1}}),r=g.forwardRef(({className:i,variant:l,inverted:n,size:a,active:s,onToggle:c,showIcon:o=!0,value:k,children:C,...t},m)=>{const v=(l==="filter"||l==="filter-outline")&&c!==void 0,G=f=>{v&&c?.(),t.onClick?.(f)},O=f=>{v&&(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),c?.()),t.onKeyDown?.(f)};return e.jsxs("div",{ref:m,className:d(Y({variant:l,inverted:n,size:a,className:i}),s&&"data-[state=active]",v&&"cursor-pointer"),"data-state":s?"active":"inactive",onClick:G,onKeyDown:O,tabIndex:v?0:void 0,...t,children:[o&&l==="info"&&e.jsx(D,{className:d(n?"fill-white":"fill-blue",a==="md"||a==="lg"||a==="xl"?"size-4":"size-3")}),o&&l==="message"&&e.jsx(D,{className:d(n?"fill-white":"fill-text-base",a==="md"||a==="lg"||a==="xl"?"size-4":"size-3")}),o&&l==="error"&&e.jsx(q,{className:d(n?"fill-white":"fill-text-error",a==="md"||a==="lg"||a==="xl"?"size-4":"size-3")}),o&&l==="success"&&e.jsx(_,{className:d(n?"fill-white":"fill-text-success",a==="md"||a==="lg"||a==="xl"?"size-4":"size-3")}),C,o&&(l==="filter"||l==="filter-outline")&&s&&e.jsx(B,{className:d("fill-white",a==="md"||a==="lg"||a==="xl"?"size-4":"size-3")})]})});r.displayName="Pill";const u=g.forwardRef(({className:i,activeValues:l,onValueToggle:n,size:a="default",showIcon:s=!0,children:c,...o},k)=>{const C=g.Children.map(c,t=>{if(g.isValidElement(t)&&t.type===r&&(t.props.variant==="filter"||t.props.variant==="filter-outline")){const m=t.props.value||(typeof t.props.children=="string"?t.props.children:""),v=l.includes(m);return g.cloneElement(t,{active:v,size:a,showIcon:s,onToggle:()=>n(m),value:m})}return t});return e.jsx("div",{ref:k,className:d("flex flex-wrap gap-2",i),...o,children:C})});u.displayName="FilterPillGroup";r.__docgenInfo={description:"",methods:[],displayName:"Pill",props:{active:{required:!1,tsType:{name:"boolean"},description:"Whether the pill is active (primarily used with filter variant)"},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function called when the pill is toggled (for filter variant)"},value:{required:!1,tsType:{name:"string"},description:"Value of the pill (used for filter variant in FilterPillGroup)"},showIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the icon (applies to all variants that have icons)",defaultValue:{value:"true",computed:!1}}},composes:["VariantProps"]};u.__docgenInfo={description:"",methods:[],displayName:"FilterPillGroup",props:{activeValues:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The currently active filter values"},onValueToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when a filter value is toggled"},size:{required:!1,tsType:{name:"union",raw:'"default" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"Size variant for all pills in the group",defaultValue:{value:'"default"',computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show icons for all pills in the group",defaultValue:{value:"true",computed:!1}}}};const Z={title:"Elements/Pill",component:r,tags:["autodocs"],args:{children:"Pill"},parameters:{layout:"centered"}},h={args:{children:"Default Pill",variant:"default"}},x={args:{children:"Error Pill",variant:"error"}},p={args:{children:"Success Pill",variant:"success"}},P={args:{children:"Info Pill",variant:"info"}},I={args:{children:"Message Pill",variant:"message"}},j={args:{children:"Filter Pill",variant:"filter"}},w={args:{children:"Active Filter Pill",variant:"filter",active:!0}},N={args:{children:"Outline Filter Pill",variant:"filter-outline"}},b={args:{children:"Active Outline Filter Pill",variant:"filter-outline",active:!0}},F={render:()=>{const[i,l]=W.useState(!1);return e.jsx(r,{variant:"filter",active:i,onToggle:()=>l(!i),children:i?"Active Filter":"Inactive Filter"})}},S={args:{children:"Inverted Pill",variant:"default",inverted:!0}},z={args:{children:"Error Inverted Pill",variant:"error",inverted:!0}},E={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-lg font-bold",children:"Size Variants"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{variant:"default",size:"default",children:"Default Size"}),e.jsx(r,{variant:"default",size:"md",children:"Medium Size"}),e.jsx(r,{variant:"default",size:"lg",children:"Large Size"}),e.jsx(r,{variant:"default",size:"xl",children:"Extra Large Size"})]})]})},y={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(r,{variant:"default",children:[e.jsx("span",{children:"With Icon"}),e.jsx("i",{className:"fa fa-check","aria-hidden":"true",children:"✓"})]}),e.jsxs(r,{variant:"error",children:[e.jsx("i",{className:"fa fa-exclamation-circle","aria-hidden":"true",children:"!"}),e.jsx("span",{children:"Error with Icon"})]}),e.jsxs(r,{variant:"success",children:[e.jsx("span",{children:"Success"}),e.jsx("i",{className:"fa fa-check","aria-hidden":"true",children:"✓"})]})]})},L={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-lg font-bold",children:"Default Size"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"info",children:"Info with Icon"}),e.jsx(r,{variant:"message",children:"Message with Icon"}),e.jsx(r,{variant:"error",children:"Error with Icon"}),e.jsx(r,{variant:"success",children:"Success with Icon"})]}),e.jsx("h3",{className:"text-lg font-bold",children:"Inverted Variants"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"info",inverted:!0,children:"Info Inverted"}),e.jsx(r,{variant:"message",inverted:!0,children:"Message Inverted"}),e.jsx(r,{variant:"error",inverted:!0,children:"Error Inverted"}),e.jsx(r,{variant:"success",inverted:!0,children:"Success Inverted"})]}),e.jsx("h3",{className:"text-lg font-bold",children:"Medium Size"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"info",size:"md",children:"Medium Info"}),e.jsx(r,{variant:"message",size:"md",children:"Medium Message"}),e.jsx(r,{variant:"error",size:"md",children:"Medium Error"}),e.jsx(r,{variant:"success",size:"md",children:"Medium Success"})]}),e.jsx("h3",{className:"text-lg font-bold",children:"Large Size"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"info",size:"lg",children:"Large Info"}),e.jsx(r,{variant:"message",size:"lg",children:"Large Message"}),e.jsx(r,{variant:"error",size:"lg",children:"Large Error"}),e.jsx(r,{variant:"success",size:"lg",children:"Large Success"})]})]})},V={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(r,{variant:"default",children:[e.jsx("span",{children:"Closable"}),e.jsx("button",{onClick:()=>alert("Close clicked"),children:"×"})]}),e.jsxs(r,{variant:"info",className:"!gap-1",children:[e.jsx("span",{children:"Custom Info Button"}),e.jsx("button",{onClick:()=>alert("Info action clicked"),children:"ⓘ"})]})]})},M={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"default",children:"Default"}),e.jsx(r,{variant:"error",children:"Error"}),e.jsx(r,{variant:"success",children:"Success"}),e.jsx(r,{variant:"info",children:"Info"}),e.jsx(r,{variant:"message",children:"Message"}),e.jsx(r,{variant:"filter",children:"Filter"}),e.jsx(r,{variant:"filter",active:!0,children:"Active Filter"}),e.jsx(r,{variant:"filter-outline",children:"Filter Outline"}),e.jsx(r,{variant:"filter-outline",active:!0,children:"Active Filter Outline"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"default",inverted:!0,children:"Default Inverted"}),e.jsx(r,{variant:"error",inverted:!0,children:"Error Inverted"}),e.jsx(r,{variant:"success",inverted:!0,children:"Success Inverted"}),e.jsx(r,{variant:"info",inverted:!0,children:"Info Inverted"}),e.jsx(r,{variant:"message",inverted:!0,children:"Message Inverted"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"default",size:"md",children:"Medium Default"}),e.jsx(r,{variant:"error",size:"lg",children:"Large Error"}),e.jsx(r,{variant:"success",size:"xl",children:"XL Success"})]})]})},T={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-lg font-bold",children:"With Icons (Default)"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"info",children:"Info with Icon"}),e.jsx(r,{variant:"error",children:"Error with Icon"}),e.jsx(r,{variant:"success",children:"Success with Icon"}),e.jsx(r,{variant:"message",children:"Message with Icon"}),e.jsx(r,{variant:"filter",active:!0,children:"Active Filter with Icon"})]}),e.jsx("h3",{className:"text-lg font-bold",children:"Without Icons (showIcon=false)"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"info",showIcon:!1,children:"Info without Icon"}),e.jsx(r,{variant:"error",showIcon:!1,children:"Error without Icon"}),e.jsx(r,{variant:"success",showIcon:!1,children:"Success without Icon"}),e.jsx(r,{variant:"message",showIcon:!1,children:"Message without Icon"}),e.jsx(r,{variant:"filter",active:!0,showIcon:!1,children:"Active Filter without Icon"})]}),e.jsx("h3",{className:"text-lg font-bold",children:"Large Size Comparison"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{variant:"info",size:"lg",children:"Large with Icon"}),e.jsx(r,{variant:"info",size:"lg",showIcon:!1,children:"Large without Icon"})]})]})},A={render:()=>{const[i,l]=g.useState([]),n=a=>{l(s=>s.includes(a)?s.filter(c=>c!==a):[...s,a])};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"mb-2 text-lg font-bold",children:["Active filters: ",i.join(", ")||"None"]}),e.jsxs(u,{activeValues:i,onValueToggle:n,children:[e.jsx(r,{variant:"filter",value:"Red",children:"Red"}),e.jsx(r,{variant:"filter",value:"Green",children:"Green"}),e.jsx(r,{variant:"filter",value:"Blue",children:"Blue"}),e.jsx(r,{variant:"filter",value:"Yellow",children:"Yellow"}),e.jsx(r,{variant:"filter",value:"Purple",children:"Purple"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-bold",children:"Medium Filter Pills"}),e.jsxs(u,{activeValues:i,onValueToggle:n,size:"md",children:[e.jsx(r,{variant:"filter",value:"Category 1",children:"Category 1"}),e.jsx(r,{variant:"filter",value:"Category 2",children:"Category 2"}),e.jsx(r,{variant:"filter",value:"Category 3",children:"Category 3"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-bold",children:"Large Filter Pills"}),e.jsxs(u,{activeValues:i,onValueToggle:n,size:"lg",children:[e.jsx(r,{variant:"filter",value:"Large 1",children:"Large 1"}),e.jsx(r,{variant:"filter",value:"Large 2",children:"Large 2"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-bold",children:"Extra Large Filter Pills"}),e.jsxs(u,{activeValues:i,onValueToggle:n,size:"xl",children:[e.jsx(r,{variant:"filter",value:"Extra Large 1",children:"Extra Large 1"}),e.jsx(r,{variant:"filter",value:"Extra Large 2",children:"Extra Large 2"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"mb-2 text-lg font-bold",children:"Filter Pills Without Icons"}),e.jsxs(u,{activeValues:i,onValueToggle:n,size:"md",showIcon:!1,children:[e.jsx(r,{variant:"filter",value:"No Icon 1",children:"No Icon 1"}),e.jsx(r,{variant:"filter",value:"No Icon 2",children:"No Icon 2"}),e.jsx(r,{variant:"filter",value:"No Icon 3",children:"No Icon 3"})]})]})]})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Default Pill",
    variant: "default"
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Error Pill",
    variant: "error"
  }
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Success Pill",
    variant: "success"
  }
}`,...p.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Info Pill",
    variant: "info"
  }
}`,...P.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Message Pill",
    variant: "message"
  }
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Filter Pill",
    variant: "filter"
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Active Filter Pill",
    variant: "filter",
    active: true
  }
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Outline Filter Pill",
    variant: "filter-outline"
  }
}`,...N.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Active Outline Filter Pill",
    variant: "filter-outline",
    active: true
  }
}`,...b.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Using React hooks in Storybook render function
    const [active, setActive] = React.useState(false);
    return <Pill variant="filter" active={active} onToggle={() => setActive(!active)}>
                {active ? "Active Filter" : "Inactive Filter"}
            </Pill>;
  }
}`,...F.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Inverted Pill",
    variant: "default",
    inverted: true
  }
}`,...S.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Error Inverted Pill",
    variant: "error",
    inverted: true
  }
}`,...z.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
                <Pill variant="filter-outline">Filter Outline</Pill>
                <Pill variant="filter-outline" active>
                    Active Filter Outline
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
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};const $=["Default","Error","Success","Info","Message","Filter","FilterActive","FilterOutline","FilterOutlineActive","FilterToggle","Inverted","ErrorInverted","SizeVariants","WithIcon","BuiltInIcons","WithButton","AllVariants","OptionalIcons","FilterPillGroupExample"];export{M as AllVariants,L as BuiltInIcons,h as Default,x as Error,z as ErrorInverted,j as Filter,w as FilterActive,N as FilterOutline,b as FilterOutlineActive,A as FilterPillGroupExample,F as FilterToggle,P as Info,S as Inverted,I as Message,T as OptionalIcons,E as SizeVariants,p as Success,V as WithButton,y as WithIcon,$ as __namedExportsOrder,Z as default};
