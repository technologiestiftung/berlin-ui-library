import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./Checkbox-DBgdhggK.js";import"./index-CFahbR6w.js";import"./index-CmtHiJK_.js";import"./index-fFXgbEt_.js";import"./index-CTWW28yj.js";import"./index-BsSnUN43.js";import"./index-KTNLvksQ.js";import"./index-CHC4nfYS.js";import"./index-chp1rBSu.js";import"./utils-15tqT33e.js";import"./check-MFvInxwV.js";import"./createLucideIcon-DWaKWC9b.js";const N={title:"Components/Checkbox",component:s,parameters:{layout:"centered"},tags:["autodocs"]},d={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"terms"}),e.jsx("label",{htmlFor:"terms",className:"text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Accept terms and conditions"})]})},a={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"checked",defaultChecked:!0}),e.jsx("label",{htmlFor:"checked",className:"text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"This option is checked by default"})]})},r={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"disabled",disabled:!0}),e.jsx("label",{htmlFor:"disabled",className:"text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"This option is disabled"})]})},i={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"disabled-checked",disabled:!0,defaultChecked:!0}),e.jsx("label",{htmlFor:"disabled-checked",className:"text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"This option is disabled and checked"})]})},t={render:()=>e.jsxs("div",{className:"items-top flex space-x-2",children:[e.jsx(s,{id:"terms-with-description"}),e.jsxs("div",{className:"grid gap-1.5 leading-none",children:[e.jsx("label",{htmlFor:"terms-with-description",className:"text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Accept terms and conditions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"You agree to our Terms of Service and Privacy Policy."})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Accept terms and conditions
            </label>
        </div>
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
            <Checkbox id="checked" defaultChecked />
            <label htmlFor="checked" className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                This option is checked by default
            </label>
        </div>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
            <Checkbox id="disabled" disabled />
            <label htmlFor="disabled" className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                This option is disabled
            </label>
        </div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
            <Checkbox id="disabled-checked" disabled defaultChecked />
            <label htmlFor="disabled-checked" className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                This option is disabled and checked
            </label>
        </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="items-top flex space-x-2">
            <Checkbox id="terms-with-description" />
            <div className="grid gap-1.5 leading-none">
                <label htmlFor="terms-with-description" className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Accept terms and conditions
                </label>
                <p className="text-sm text-muted-foreground">
                    You agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </div>
}`,...t.parameters?.docs?.source}}};const v=["Default","Checked","Disabled","DisabledChecked","WithDescription"];export{a as Checked,d as Default,r as Disabled,i as DisabledChecked,t as WithDescription,v as __namedExportsOrder,N as default};
