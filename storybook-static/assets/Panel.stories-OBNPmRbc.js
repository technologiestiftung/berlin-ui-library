import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-BCtMShv3.js";import{c as x}from"./utils-15tqT33e.js";const k="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20448%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M190.5%2066.9l22.2-22.2c9.4-9.4%2024.6-9.4%2033.9%200L441%20239c9.4%209.4%209.4%2024.6%200%2033.9L246.6%20467.3c-9.4%209.4-24.6%209.4-33.9%200l-22.2-22.2c-9.5-9.5-9.3-25%20.4-34.3L311.4%20296H24c-13.3%200-24-10.7-24-24v-32c0-13.3%2010.7-24%2024-24h287.4L190.9%20101.2c-9.8-9.3-10-24.8-.4-34.3z'/%3e%3c/svg%3e",P={heavy:"p-[18px] bg-grey border border-grey",dark:"p-[18px] bg-black border-0 text-white",light:"p-[1.125em] bg-white border border-grey-dark",clean:"p-[1.125em] px-0 bg-transparent border border-transparent",bordered:"py-[1.125em] px-0 border border-grey-dark border-x-0 bg-transparent",colored:"p-[18px] bg-grey border border-grey text-black",boxed:"p-[1.125em] bg-white border border-black",white:"p-[1.125em] bg-white border border-white",hint:"mt-4 mb-4 ml-[18px] pl-3 relative font-bold"},a=j.forwardRef(({children:y,variant:r="light",removeInnerPanels:b=!1,footer:u,className:w,...T},f)=>e.jsxs("div",{ref:f,className:x("panel",P[r],b&&r==="heavy"?"panel--remove-inner-panels":"",r==="heavy"&&"has-inner-panels",w),"data-variant":r,...T,children:[r==="hint"&&e.jsx("img",{src:k,alt:"Hint icon",className:"absolute top-0 left-[-18px] h-[22px] w-[22px] text-black"}),y,u&&e.jsx("div",{className:x("panel__footer relative bottom-[-18px] -mx-[18px] mt-0 border-x-0 border-t border-b-0 p-[18px]",r==="dark"&&"text-white"),children:u})]}));a.displayName="Panel";a.__docgenInfo={description:"",methods:[],displayName:"Panel",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| "heavy"
| "dark"
| "light"
| "clean"
| "bordered"
| "colored"
| "boxed"
| "white"
| "hint"`,elements:[{name:"literal",value:'"heavy"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'},{name:"literal",value:'"clean"'},{name:"literal",value:'"bordered"'},{name:"literal",value:'"colored"'},{name:"literal",value:'"boxed"'},{name:"literal",value:'"white"'},{name:"literal",value:'"hint"'}]},description:"",defaultValue:{value:'"light"',computed:!1}},removeInnerPanels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},footer:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const C={title:"Elements/Panel",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["heavy","dark","light","clean","bordered","colored","boxed","white","hint"],description:"The visual style variant of the panel"},removeInnerPanels:{control:"boolean",description:"Controls whether nested panels should have their styling removed"},footer:{control:"text",description:"Content to display in the panel footer"}}},n={args:{variant:"light",children:e.jsx("p",{children:"This is a default panel with light styling."})}},s={args:{variant:"heavy",children:e.jsx("p",{children:"This is a panel with heavy styling."})}},t={args:{variant:"dark",children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Dark Panel"}),e.jsx("p",{children:"This is a panel with dark styling."}),e.jsx("a",{href:"#",children:"This is a link"})]})}},i={args:{variant:"light",children:e.jsx("p",{children:"This is a panel with light styling."})}},o={args:{variant:"clean",children:e.jsx("p",{children:"This is a panel with clean styling (no background or border)."})}},l={args:{variant:"bordered",children:e.jsx("p",{children:"This panel has borders on the top and bottom only."})}},d={args:{variant:"colored",children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Colored Panel"}),e.jsx("p",{children:"This is a panel with colored styling."})]})}},c={args:{variant:"boxed",children:e.jsx("p",{children:"This is a panel with boxed styling (black border)."})}},h={args:{variant:"white",children:e.jsx("p",{children:"This is a panel with white styling."})}},p={args:{variant:"hint",children:e.jsx("p",{children:"This is a hint panel with an arrow indicator."})}},m={args:{variant:"heavy",children:e.jsx("p",{children:"This panel has a footer section."}),footer:e.jsx("div",{className:"p-[18px]",children:"Footer content goes here"})}},g={args:{variant:"heavy",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This is the outer panel."}),e.jsx(a,{variant:"heavy",children:e.jsx("p",{children:"This is a nested panel."})})]})}},v={args:{variant:"heavy",removeInnerPanels:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This is the outer panel with nested panel styling removed."}),e.jsx(a,{variant:"heavy",children:e.jsx("p",{children:"This nested panel has its styling removed."})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "light",
    children: <p>This is a default panel with light styling.</p>
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "heavy",
    children: <p>This is a panel with heavy styling.</p>
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "dark",
    children: <>
                <h3>Dark Panel</h3>
                <p>This is a panel with dark styling.</p>
                <a href="#">This is a link</a>
            </>
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "light",
    children: <p>This is a panel with light styling.</p>
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "clean",
    children: <p>This is a panel with clean styling (no background or border).</p>
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "bordered",
    children: <p>This panel has borders on the top and bottom only.</p>
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "colored",
    children: <>
                <h3>Colored Panel</h3>
                <p>This is a panel with colored styling.</p>
            </>
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "boxed",
    children: <p>This is a panel with boxed styling (black border).</p>
  }
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "white",
    children: <p>This is a panel with white styling.</p>
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "hint",
    children: <p>This is a hint panel with an arrow indicator.</p>
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "heavy",
    children: <p>This panel has a footer section.</p>,
    footer: <div className="p-[18px]">Footer content goes here</div>
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "heavy",
    children: <>
                <p>This is the outer panel.</p>
                <Panel variant="heavy">
                    <p>This is a nested panel.</p>
                </Panel>
            </>
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "heavy",
    removeInnerPanels: true,
    children: <>
                <p>This is the outer panel with nested panel styling removed.</p>
                <Panel variant="heavy">
                    <p>This nested panel has its styling removed.</p>
                </Panel>
            </>
  }
}`,...v.parameters?.docs?.source}}};const I=["Default","Heavy","Dark","Light","Clean","Bordered","Colored","Boxed","White","Hint","WithFooter","NestedPanels","NestedPanelsRemoved"];export{l as Bordered,c as Boxed,o as Clean,d as Colored,t as Dark,n as Default,s as Heavy,p as Hint,i as Light,g as NestedPanels,v as NestedPanelsRemoved,h as White,m as WithFooter,I as __namedExportsOrder,C as default};
