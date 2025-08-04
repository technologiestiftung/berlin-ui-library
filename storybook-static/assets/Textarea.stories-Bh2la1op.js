import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as a}from"./Textarea-98_AdlF2.js";import"./index-BCtMShv3.js";import"./utils-15tqT33e.js";const n={title:"Elements/Textarea",component:a,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>e.jsx(a,{placeholder:"Type your message here",className:"w-[300px]"})},s={render:()=>e.jsx(a,{className:"w-[300px]",value:"This is some sample text that's already in the textarea when it loads.",readOnly:!0})},t={render:()=>e.jsx(a,{placeholder:"You cannot type here",className:"w-[300px]",disabled:!0})},o={render:()=>e.jsxs("div",{className:"grid w-[300px] gap-1.5",children:[e.jsx("label",{htmlFor:"message",className:"text-sm font-medium",children:"Your message"}),e.jsx(a,{id:"message",placeholder:"Type your message here"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Your message will be sent to our team."})]})},l={render:()=>e.jsx(a,{placeholder:"Type your detailed description here",className:"h-[200px] w-[400px]"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Textarea placeholder="Type your message here" className="w-[300px]" />
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Textarea className="w-[300px]" value="This is some sample text that's already in the textarea when it loads." readOnly />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Textarea placeholder="You cannot type here" className="w-[300px]" disabled />
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-[300px] gap-1.5">
            <label htmlFor="message" className="text-sm font-medium">
                Your message
            </label>
            <Textarea id="message" placeholder="Type your message here" />
            <p className="text-muted-foreground text-sm">
                Your message will be sent to our team.
            </p>
        </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Textarea placeholder="Type your detailed description here" className="h-[200px] w-[400px]" />
}`,...l.parameters?.docs?.source}}};const i=["Default","WithValue","Disabled","WithLabel","Large"];export{r as Default,t as Disabled,l as Large,o as WithLabel,s as WithValue,i as __namedExportsOrder,n as default};
