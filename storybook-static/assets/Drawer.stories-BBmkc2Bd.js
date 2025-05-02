import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-CFahbR6w.js";import{D as i,a as h,b as D,c as a,d as s,e as t,f as m,S as f}from"./Drawer-Ki6sJUO_.js";import{B as r}from"./Button-lPW3mpyF.js";import"./index-fFXgbEt_.js";import"./index-CmtHiJK_.js";import"./index-D9hrn0-u.js";import"./index-Btk-NVQ6.js";import"./index-KTNLvksQ.js";import"./index-CHC4nfYS.js";import"./index-chp1rBSu.js";import"./index-C_A5rLc3.js";import"./index-BsSnUN43.js";import"./index-B-xwPz7g.js";import"./utils-15tqT33e.js";const R={title:"Components/Drawer",component:i,tags:["autodocs"]},o={render:()=>e.jsxs(i,{children:[e.jsx(h,{asChild:!0,children:e.jsx(r,{variant:"default",children:"Open Drawer"})}),e.jsxs(D,{children:[e.jsxs(a,{children:[e.jsx(s,{children:"Menü"}),e.jsx(t,{children:"This is a drawer component that slides in from the side."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"This is the main content of the drawer."})}),e.jsx(m,{children:e.jsx(r,{variant:"default",children:"Save Changes"})})]})]})},d={render:()=>e.jsxs(i,{children:[e.jsx(h,{asChild:!0,children:e.jsx(r,{variant:"default",children:"Open Left Drawer"})}),e.jsxs(D,{side:"left",children:[e.jsxs(a,{children:[e.jsx(s,{children:"Left Drawer"}),e.jsx(t,{children:"This drawer slides in from the left side."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"Left drawer content example."})})]})]})},l={render:()=>e.jsxs(i,{children:[e.jsx(h,{asChild:!0,children:e.jsx(r,{variant:"default",children:"Open Right Drawer"})}),e.jsxs(D,{side:"right",children:[e.jsxs(a,{children:[e.jsx(s,{children:"Right Drawer"}),e.jsx(t,{children:"This drawer slides in from the right side."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"Right drawer content example."})})]})]})},c={render:()=>{const u=()=>{const[g,n]=x.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"default",onClick:()=>n(!0),children:"Open Simple Drawer"}),e.jsxs(f,{isOpen:g,close:()=>n(!1),side:"right",children:[e.jsxs(a,{children:[e.jsx(s,{children:"Simple Drawer"}),e.jsx(t,{children:"This uses the SimpleDrawer API with isOpen/close pattern."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"This provides an easier-to-use API that matches the original drawer components."})}),e.jsx(m,{children:e.jsx(r,{variant:"default",onClick:()=>n(!1),children:"Close"})})]})]})};return e.jsx(u,{})}},p={render:()=>e.jsxs(i,{children:[e.jsx(h,{asChild:!0,children:e.jsx(r,{variant:"default",children:"Open Large Drawer"})}),e.jsxs(D,{side:"right",size:"large",children:[e.jsxs(a,{children:[e.jsx(s,{children:"Large Drawer"}),e.jsx(t,{children:"This is a large drawer that uses 90% of the viewport width."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"This drawer uses the large size variant (w-90vw) instead of the default size (w-35rem)."})}),e.jsx(m,{children:e.jsx(r,{variant:"default",children:"Close"})})]})]})},w={render:()=>{const u=()=>{const[g,n]=x.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"default",onClick:()=>n(!0),children:"Open Large Simple Drawer"}),e.jsxs(f,{isOpen:g,close:()=>n(!1),side:"right",size:"large",children:[e.jsxs(a,{children:[e.jsx(s,{children:"Large Simple Drawer"}),e.jsx(t,{children:"This uses the SimpleDrawer API with the large size variant."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"This drawer uses the large size variant (w-90vw) for when you need more horizontal space."})}),e.jsx(m,{children:e.jsx(r,{variant:"default",onClick:()=>n(!1),children:"Close"})})]})]})};return e.jsx(u,{})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="default">Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Menü</DrawerTitle>
                        <DrawerDescription>
                            This is a drawer component that slides in from the side.
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="py-4">
                        <p>This is the main content of the drawer.</p>
                    </div>
                    <DrawerFooter>
                        <Button variant="default">Save Changes</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>;
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="default">Open Left Drawer</Button>
                </DrawerTrigger>
                <DrawerContent side="left">
                    <DrawerHeader>
                        <DrawerTitle>Left Drawer</DrawerTitle>
                        <DrawerDescription>
                            This drawer slides in from the left side.
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="py-4">
                        <p>Left drawer content example.</p>
                    </div>
                </DrawerContent>
            </Drawer>;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="default">Open Right Drawer</Button>
                </DrawerTrigger>
                <DrawerContent side="right">
                    <DrawerHeader>
                        <DrawerTitle>Right Drawer</DrawerTitle>
                        <DrawerDescription>
                            This drawer slides in from the right side.
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="py-4">
                        <p>Right drawer content example.</p>
                    </div>
                </DrawerContent>
            </Drawer>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Using React hooks in Storybook component
    const SimpleDrawerDemo = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
                    <Button variant="default" onClick={() => setIsOpen(true)}>
                        Open Simple Drawer
                    </Button>

                    <SimpleDrawer isOpen={isOpen} close={() => setIsOpen(false)} side="right">
                        <DrawerHeader>
                            <DrawerTitle>Simple Drawer</DrawerTitle>
                            <DrawerDescription>
                                This uses the SimpleDrawer API with isOpen/close pattern.
                            </DrawerDescription>
                        </DrawerHeader>
                        <div className="py-4">
                            <p>
                                This provides an easier-to-use API that matches the original
                                drawer components.
                            </p>
                        </div>
                        <DrawerFooter>
                            <Button variant="default" onClick={() => setIsOpen(false)}>
                                Close
                            </Button>
                        </DrawerFooter>
                    </SimpleDrawer>
                </>;
    };
    return <SimpleDrawerDemo />;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="default">Open Large Drawer</Button>
                </DrawerTrigger>
                <DrawerContent side="right" size="large">
                    <DrawerHeader>
                        <DrawerTitle>Large Drawer</DrawerTitle>
                        <DrawerDescription>
                            This is a large drawer that uses 90% of the viewport width.
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="py-4">
                        <p>
                            This drawer uses the large size variant (w-90vw) instead of the
                            default size (w-35rem).
                        </p>
                    </div>
                    <DrawerFooter>
                        <Button variant="default">Close</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>;
  }
}`,...p.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Using React hooks in Storybook component
    const LargeSimpleDrawerDemo = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
                    <Button variant="default" onClick={() => setIsOpen(true)}>
                        Open Large Simple Drawer
                    </Button>

                    <SimpleDrawer isOpen={isOpen} close={() => setIsOpen(false)} side="right" size="large">
                        <DrawerHeader>
                            <DrawerTitle>Large Simple Drawer</DrawerTitle>
                            <DrawerDescription>
                                This uses the SimpleDrawer API with the large size variant.
                            </DrawerDescription>
                        </DrawerHeader>
                        <div className="py-4">
                            <p>
                                This drawer uses the large size variant (w-90vw) for when you
                                need more horizontal space.
                            </p>
                        </div>
                        <DrawerFooter>
                            <Button variant="default" onClick={() => setIsOpen(false)}>
                                Close
                            </Button>
                        </DrawerFooter>
                    </SimpleDrawer>
                </>;
    };
    return <LargeSimpleDrawerDemo />;
  }
}`,...w.parameters?.docs?.source}}};const A=["Standard","LeftSide","RightSide","SimpleDrawerExample","LargeDrawer","LargeSimpleDrawer"];export{p as LargeDrawer,w as LargeSimpleDrawer,d as LeftSide,l as RightSide,c as SimpleDrawerExample,o as Standard,A as __namedExportsOrder,R as default};
