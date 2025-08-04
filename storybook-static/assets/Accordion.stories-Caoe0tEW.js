import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as c,a as t,b as i,c as r}from"./Accordion-CGV1TLyz.js";import"./index-BCtMShv3.js";import"./index-SpqsU_53.js";import"./index-DkEUhnR6.js";import"./index-BcXugKMQ.js";import"./index-DkX7lMs-.js";import"./index-LATptceI.js";import"./index-B1k-hWqK.js";import"./index-D-fs5e6L.js";import"./index-BMmUsUVr.js";import"./index-9SeOqIlT.js";import"./utils-15tqT33e.js";import"./chevron-down-DWDojfxa.js";import"./createLucideIcon-DOlFIQMa.js";const T={title:"Modules/Accordion",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["default","footer"],description:"The visual style variant of the accordion",defaultValue:"footer"}}},a={render:()=>e.jsxs(c,{type:"single",collapsible:!0,className:"w-[400px]",variant:"default",children:[e.jsxs(t,{value:"item-1",variant:"default",children:[e.jsx(i,{variant:"default",children:"Is it accessible?"}),e.jsx(r,{variant:"default",children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),e.jsxs(t,{value:"item-2",variant:"default",children:[e.jsx(i,{variant:"default",children:"Is it styled?"}),e.jsx(r,{variant:"default",children:"Yes. It comes with default styling that matches the Berlin design system."})]}),e.jsxs(t,{value:"item-3",variant:"default",children:[e.jsx(i,{variant:"default",children:"Is it animated?"}),e.jsx(r,{variant:"default",children:"Yes. It's animated by default, but you can disable it if needed."})]})]})},o={render:()=>e.jsxs(c,{type:"single",collapsible:!0,className:"w-[400px]",variant:"footer",children:[e.jsxs(t,{value:"item-1",variant:"footer",children:[e.jsx(i,{variant:"footer",children:"Is it accessible?"}),e.jsx(r,{variant:"footer",children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),e.jsxs(t,{value:"item-2",variant:"footer",children:[e.jsx(i,{variant:"footer",children:"Is it styled?"}),e.jsx(r,{variant:"footer",children:"Yes. It comes with default styling that matches the Berlin design system."})]}),e.jsxs(t,{value:"item-3",variant:"footer",children:[e.jsx(i,{variant:"footer",children:"Is it animated?"}),e.jsx(r,{variant:"footer",children:"Yes. It's animated by default, but you can disable it if needed."})]})]})},n={render:()=>e.jsxs(c,{type:"multiple",className:"w-[400px]",variant:"default",children:[e.jsxs(t,{value:"item-1",variant:"default",children:[e.jsx(i,{variant:"default",children:"First item"}),e.jsx(r,{variant:"default",children:"This is the first item's content. You can open multiple items at once."})]}),e.jsxs(t,{value:"item-2",variant:"default",children:[e.jsx(i,{variant:"default",children:"Second item"}),e.jsx(r,{variant:"default",children:"This is the second item's content."})]}),e.jsxs(t,{value:"item-3",variant:"default",children:[e.jsx(i,{variant:"default",children:"Third item"}),e.jsx(r,{variant:"default",children:"This is the third item's content."})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-[400px]" variant="default">
            <AccordionItem value="item-1" variant="default">
                <AccordionTrigger variant="default">Is it accessible?</AccordionTrigger>
                <AccordionContent variant="default">
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" variant="default">
                <AccordionTrigger variant="default">Is it styled?</AccordionTrigger>
                <AccordionContent variant="default">
                    Yes. It comes with default styling that matches the Berlin design
                    system.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" variant="default">
                <AccordionTrigger variant="default">Is it animated?</AccordionTrigger>
                <AccordionContent variant="default">
                    Yes. It's animated by default, but you can disable it if needed.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-[400px]" variant="footer">
            <AccordionItem value="item-1" variant="footer">
                <AccordionTrigger variant="footer">Is it accessible?</AccordionTrigger>
                <AccordionContent variant="footer">
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" variant="footer">
                <AccordionTrigger variant="footer">Is it styled?</AccordionTrigger>
                <AccordionContent variant="footer">
                    Yes. It comes with default styling that matches the Berlin design
                    system.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" variant="footer">
                <AccordionTrigger variant="footer">Is it animated?</AccordionTrigger>
                <AccordionContent variant="footer">
                    Yes. It's animated by default, but you can disable it if needed.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple" className="w-[400px]" variant="default">
            <AccordionItem value="item-1" variant="default">
                <AccordionTrigger variant="default">First item</AccordionTrigger>
                <AccordionContent variant="default">
                    This is the first item's content. You can open multiple items at once.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" variant="default">
                <AccordionTrigger variant="default">Second item</AccordionTrigger>
                <AccordionContent variant="default">
                    This is the second item's content.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" variant="default">
                <AccordionTrigger variant="default">Third item</AccordionTrigger>
                <AccordionContent variant="default">
                    This is the third item's content.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
}`,...n.parameters?.docs?.source}}};const b=["DefaultVariant","FooterVariant","Multiple"];export{a as DefaultVariant,o as FooterVariant,n as Multiple,b as __namedExportsOrder,T as default};
