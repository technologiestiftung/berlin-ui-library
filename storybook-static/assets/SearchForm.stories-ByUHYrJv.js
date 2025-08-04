import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as t}from"./SearchForm-QfM4_ubG.js";import"./index-BCtMShv3.js";import"./utils-15tqT33e.js";import"./search_icon-B9zcZCjA.js";const h={title:"Elements/SearchForm",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onSubmit:{action:"submitted"},onChange:{action:"changed"}}},r={args:{placeholder:"Suchbegriff",label:"Suchbegriff",submitLabel:"Suchen"}},n={args:{placeholder:"Suchbegriff",defaultValue:"Berlin",label:"Suchbegriff",submitLabel:"Suchen"}},s={args:{placeholder:"Seiten durchsuchen...",label:"Websuche",submitLabel:"Suchen"}},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-lg font-bold",children:"Controlled Search Form Example"}),e.jsx("p",{className:"max-w-md text-sm",children:"This example shows how the SearchForm can be used as a controlled component where the parent manages the state. In a real application, you would maintain the state and handle the onChange and onSubmit events."}),e.jsx(t,{value:"Berlin",onChange:a=>console.warn("Value changed:",a),onSubmit:a=>console.warn("Form submitted with:",a)})]})},l={render:()=>e.jsxs("div",{className:"w-full max-w-2xl border border-gray-300 p-6",children:[e.jsx("h2",{className:"mb-4 text-2xl font-bold",children:"Beispiel Website"}),e.jsxs("div",{className:"mb-8",children:[e.jsx("p",{className:"mb-4",children:"Dies ist ein Beispiel für die Verwendung der Suchkomponente auf einer Website."}),e.jsx(t,{placeholder:"Website durchsuchen",onSubmit:a=>console.warn("Searching for:",a)})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Suchbegriff",
    label: "Suchbegriff",
    submitLabel: "Suchen"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Suchbegriff",
    defaultValue: "Berlin",
    label: "Suchbegriff",
    submitLabel: "Suchen"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Seiten durchsuchen...",
    label: "Websuche",
    submitLabel: "Suchen"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold">Controlled Search Form Example</h3>
                <p className="max-w-md text-sm">
                    This example shows how the SearchForm can be used as a controlled
                    component where the parent manages the state. In a real application,
                    you would maintain the state and handle the onChange and onSubmit
                    events.
                </p>
                <SearchForm value="Berlin" onChange={value => console.warn("Value changed:", value)} onSubmit={value => console.warn("Form submitted with:", value)} />
            </div>;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="w-full max-w-2xl border border-gray-300 p-6">
                <h2 className="mb-4 text-2xl font-bold">Beispiel Website</h2>
                <div className="mb-8">
                    <p className="mb-4">
                        Dies ist ein Beispiel für die Verwendung der Suchkomponente auf
                        einer Website.
                    </p>
                    <SearchForm placeholder="Website durchsuchen" onSubmit={value => console.warn("Searching for:", value)} />
                </div>
            </div>;
  }
}`,...l.parameters?.docs?.source}}};const p=["Default","WithDefaultValue","CustomPlaceholder","ControlledExample","InAForm"];export{o as ControlledExample,s as CustomPlaceholder,r as Default,l as InAForm,n as WithDefaultValue,p as __namedExportsOrder,h as default};
