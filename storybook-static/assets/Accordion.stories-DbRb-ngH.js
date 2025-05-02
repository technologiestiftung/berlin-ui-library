import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a as t,b as i,c as o}from"./Accordion-EsDNdD_4.js";import"./index-CFahbR6w.js";import"./index-fFXgbEt_.js";import"./index-GKcSamc8.js";import"./index-CmtHiJK_.js";import"./index-KTNLvksQ.js";import"./index-CHC4nfYS.js";import"./index-chp1rBSu.js";import"./index-BsSnUN43.js";import"./index-D9hrn0-u.js";import"./utils-15tqT33e.js";import"./chevron-down-CIrWunyT.js";import"./createLucideIcon-DWaKWC9b.js";const y={title:"Components/Accordion",component:n,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>e.jsxs(n,{type:"single",collapsible:!0,className:"w-[400px]",children:[e.jsxs(t,{value:"item-1",children:[e.jsx(i,{children:"Is it accessible?"}),e.jsx(o,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),e.jsxs(t,{value:"item-2",children:[e.jsx(i,{children:"Is it styled?"}),e.jsx(o,{children:"Yes. It comes with default styling that matches the Berlin design system."})]}),e.jsxs(t,{value:"item-3",children:[e.jsx(i,{children:"Is it animated?"}),e.jsx(o,{children:"Yes. It's animated by default, but you can disable it if needed."})]})]})},c={render:()=>e.jsxs(n,{type:"multiple",className:"w-[400px]",children:[e.jsxs(t,{value:"item-1",children:[e.jsx(i,{children:"First item"}),e.jsx(o,{children:"This is the first item's content. You can open multiple items at once."})]}),e.jsxs(t,{value:"item-2",children:[e.jsx(i,{children:"Second item"}),e.jsx(o,{children:"This is the second item's content."})]}),e.jsxs(t,{value:"item-3",children:[e.jsx(i,{children:"Third item"}),e.jsx(o,{children:"This is the third item's content."})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-[400px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styling that matches the Berlin design
                    system.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                    Yes. It's animated by default, but you can disable it if needed.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple" className="w-[400px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>First item</AccordionTrigger>
                <AccordionContent>
                    This is the first item's content. You can open multiple items at once.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Second item</AccordionTrigger>
                <AccordionContent>This is the second item's content.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Third item</AccordionTrigger>
                <AccordionContent>This is the third item's content.</AccordionContent>
            </AccordionItem>
        </Accordion>
}`,...c.parameters?.docs?.source}}};const C=["Default","Multiple"];export{r as Default,c as Multiple,C as __namedExportsOrder,y as default};
