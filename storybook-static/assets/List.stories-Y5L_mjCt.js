import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as o}from"./utils-CBfrqCZ4.js";function t({children:i,className:s,...d}){return e.jsx("li",{className:o("mb-2 break-words",s),...d,children:i})}function r({variant:i="unordered",children:s,className:d,...l}){return i==="ordered"?e.jsx("ol",{className:o("mb-[25px] mt-0 list-outside pl-[10px]","[&>li]:ml-[0.7em] [&>li]:mb-2 [&>li]:break-words","[&>li>ol]:mt-2 [&>li>ol]:mb-2 [&>li>ul]:mt-2 [&>li>ul]:mb-2",d),...l,children:s}):e.jsx("ul",{className:o("mb-[25px] mt-0 list-disc pl-[1.1em]","[&>li]:mb-2 [&>li]:break-words","[&>li::marker]:text-red [&>li::marker]:text-[17px] [&>li::marker]:leading-none","[&>li>ul]:mt-2 [&>li>ul]:mb-2 [&>li>ol]:mt-2 [&>li>ol]:mb-2",d),...l,children:s})}t.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"List",props:{variant:{required:!1,tsType:{name:"union",raw:'"unordered" | "ordered"',elements:[{name:"literal",value:'"unordered"'},{name:"literal",value:'"ordered"'}]},description:"",defaultValue:{value:'"unordered"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const L={title:"Elements/List",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["unordered","ordered"]}}},n={args:{variant:"unordered"},render:i=>e.jsx("div",{className:"w-96",children:e.jsxs(r,{...i,children:[e.jsx(t,{children:"First list item with some longer text to demonstrate word breaking"}),e.jsx(t,{children:"Second list item"}),e.jsxs(t,{children:["Third list item with nested list:",e.jsxs(r,{variant:"unordered",children:[e.jsx(t,{children:"Nested item 1"}),e.jsx(t,{children:"Nested item 2"})]})]}),e.jsx(t,{children:"Fourth list item"})]})})},m={args:{variant:"ordered"},render:i=>e.jsx("div",{className:"w-96",children:e.jsxs(r,{...i,children:[e.jsx(t,{children:"First numbered item with some longer text to demonstrate word breaking"}),e.jsx(t,{children:"Second numbered item"}),e.jsxs(t,{children:["Third numbered item with nested list:",e.jsxs(r,{variant:"ordered",children:[e.jsx(t,{children:"Nested numbered item 1"}),e.jsx(t,{children:"Nested numbered item 2"})]})]}),e.jsx(t,{children:"Fourth numbered item"})]})})},a={render:()=>e.jsxs("div",{className:"w-96",children:[e.jsx("h3",{className:"mb-4 text-lg font-bold",children:"Mixed Lists Example"}),e.jsxs(r,{variant:"unordered",children:[e.jsx(t,{children:"Unordered item 1"}),e.jsxs(t,{children:["Unordered item 2 with nested ordered list:",e.jsxs(r,{variant:"ordered",children:[e.jsx(t,{children:"Ordered nested item 1"}),e.jsx(t,{children:"Ordered nested item 2"})]})]}),e.jsx(t,{children:"Unordered item 3"})]}),e.jsxs(r,{variant:"ordered",children:[e.jsx(t,{children:"Ordered item 1"}),e.jsxs(t,{children:["Ordered item 2 with nested unordered list:",e.jsxs(r,{variant:"unordered",children:[e.jsx(t,{children:"Unordered nested item 1"}),e.jsx(t,{children:"Unordered nested item 2"})]})]}),e.jsx(t,{children:"Ordered item 3"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "unordered"
  },
  render: args => <div className="w-96">
            <List {...args}>
                <ListItem>First list item with some longer text to demonstrate word breaking</ListItem>
                <ListItem>Second list item</ListItem>
                <ListItem>
                    Third list item with nested list:
                    <List variant="unordered">
                        <ListItem>Nested item 1</ListItem>
                        <ListItem>Nested item 2</ListItem>
                    </List>
                </ListItem>
                <ListItem>Fourth list item</ListItem>
            </List>
        </div>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ordered"
  },
  render: args => <div className="w-96">
            <List {...args}>
                <ListItem>First numbered item with some longer text to demonstrate word breaking</ListItem>
                <ListItem>Second numbered item</ListItem>
                <ListItem>
                    Third numbered item with nested list:
                    <List variant="ordered">
                        <ListItem>Nested numbered item 1</ListItem>
                        <ListItem>Nested numbered item 2</ListItem>
                    </List>
                </ListItem>
                <ListItem>Fourth numbered item</ListItem>
            </List>
        </div>
}`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-96">
            <h3 className="mb-4 text-lg font-bold">Mixed Lists Example</h3>
            <List variant="unordered">
                <ListItem>Unordered item 1</ListItem>
                <ListItem>
                    Unordered item 2 with nested ordered list:
                    <List variant="ordered">
                        <ListItem>Ordered nested item 1</ListItem>
                        <ListItem>Ordered nested item 2</ListItem>
                    </List>
                </ListItem>
                <ListItem>Unordered item 3</ListItem>
            </List>
            
            <List variant="ordered">
                <ListItem>Ordered item 1</ListItem>
                <ListItem>
                    Ordered item 2 with nested unordered list:
                    <List variant="unordered">
                        <ListItem>Unordered nested item 1</ListItem>
                        <ListItem>Unordered nested item 2</ListItem>
                    </List>
                </ListItem>
                <ListItem>Ordered item 3</ListItem>
            </List>
        </div>
}`,...a.parameters?.docs?.source}}};const h=["Unordered","Ordered","Mixed"];export{a as Mixed,m as Ordered,n as Unordered,h as __namedExportsOrder,L as default};
