import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as a,a as t}from"./RadioGroup-BgtLJsvm.js";import"./index-BCtMShv3.js";import"./index-DkX7lMs-.js";import"./index-BcXugKMQ.js";import"./index-SpqsU_53.js";import"./index-LATptceI.js";import"./index-B1k-hWqK.js";import"./index-D-fs5e6L.js";import"./index-KcdeYDNn.js";import"./index-DkEUhnR6.js";import"./index-9SeOqIlT.js";import"./index-D7FI_znS.js";import"./index-U0nZxCKZ.js";import"./index-BMmUsUVr.js";import"./utils-15tqT33e.js";import"./createLucideIcon-DOlFIQMa.js";const G={title:"Elements/RadioGroup",component:a,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsxs(a,{defaultValue:"option-one",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"option-one",id:"option-one"}),e.jsx("label",{htmlFor:"option-one",className:"text-sm font-medium",children:"Option One"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"option-two",id:"option-two"}),e.jsx("label",{htmlFor:"option-two",className:"text-sm font-medium",children:"Option Two"})]})]})},o={render:()=>e.jsxs(a,{defaultValue:"default",children:[e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(t,{value:"default",id:"r1"}),e.jsxs("div",{className:"grid gap-1.5 leading-none",children:[e.jsx("label",{htmlFor:"r1",className:"text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",children:"Default"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Use the system default theme."})]})]}),e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(t,{value:"light",id:"r2"}),e.jsxs("div",{className:"grid gap-1.5 leading-none",children:[e.jsx("label",{htmlFor:"r2",className:"text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",children:"Light"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Use the light theme."})]})]}),e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(t,{value:"dark",id:"r3"}),e.jsxs("div",{className:"grid gap-1.5 leading-none",children:[e.jsx("label",{htmlFor:"r3",className:"text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",children:"Dark"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Use the dark theme."})]})]})]})},l={render:()=>e.jsxs(a,{defaultValue:"option-one",disabled:!0,children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"option-one",id:"disabled-option-one"}),e.jsx("label",{htmlFor:"disabled-option-one",className:"text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",children:"Option One (Selected & Disabled)"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"option-two",id:"disabled-option-two"}),e.jsx("label",{htmlFor:"disabled-option-two",className:"text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",children:"Option Two (Disabled)"})]})]})},i={render:()=>e.jsxs(a,{defaultValue:"option-one",className:"flex flex-row space-x-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"option-one",id:"horizontal-one"}),e.jsx("label",{htmlFor:"horizontal-one",className:"text-sm font-medium",children:"Yes"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"option-two",id:"horizontal-two"}),e.jsx("label",{htmlFor:"horizontal-two",className:"text-sm font-medium",children:"No"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"option-three",id:"horizontal-three"}),e.jsx("label",{htmlFor:"horizontal-three",className:"text-sm font-medium",children:"Maybe"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <label htmlFor="option-one" className="text-sm font-medium">
                    Option One
                </label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <label htmlFor="option-two" className="text-sm font-medium">
                    Option Two
                </label>
            </div>
        </RadioGroup>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="default">
            <div className="flex items-start space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <div className="grid gap-1.5 leading-none">
                    <label htmlFor="r1" className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled">
                        Default
                    </label>
                    <p className="text-muted-foreground text-sm">
                        Use the system default theme.
                    </p>
                </div>
            </div>
            <div className="flex items-start space-x-2">
                <RadioGroupItem value="light" id="r2" />
                <div className="grid gap-1.5 leading-none">
                    <label htmlFor="r2" className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled">
                        Light
                    </label>
                    <p className="text-muted-foreground text-sm">Use the light theme.</p>
                </div>
            </div>
            <div className="flex items-start space-x-2">
                <RadioGroupItem value="dark" id="r3" />
                <div className="grid gap-1.5 leading-none">
                    <label htmlFor="r3" className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled">
                        Dark
                    </label>
                    <p className="text-muted-foreground text-sm">Use the dark theme.</p>
                </div>
            </div>
        </RadioGroup>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-one" disabled>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="disabled-option-one" />
                <label htmlFor="disabled-option-one" className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled">
                    Option One (Selected & Disabled)
                </label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="disabled-option-two" />
                <label htmlFor="disabled-option-two" className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled">
                    Option Two (Disabled)
                </label>
            </div>
        </RadioGroup>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-one" className="flex flex-row space-x-4">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="horizontal-one" />
                <label htmlFor="horizontal-one" className="text-sm font-medium">
                    Yes
                </label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="horizontal-two" />
                <label htmlFor="horizontal-two" className="text-sm font-medium">
                    No
                </label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="horizontal-three" />
                <label htmlFor="horizontal-three" className="text-sm font-medium">
                    Maybe
                </label>
            </div>
        </RadioGroup>
}`,...i.parameters?.docs?.source}}};const F=["Default","WithDescriptions","Disabled","Horizontal"];export{s as Default,l as Disabled,i as Horizontal,o as WithDescriptions,F as __namedExportsOrder,G as default};
