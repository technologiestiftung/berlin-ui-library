import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-BCtMShv3.js";import{u as H,c as I}from"./index-DkX7lMs-.js";import{c as K}from"./index-SpqsU_53.js";import{c as _,R as q,I as J}from"./index-KcdeYDNn.js";import{P as Q}from"./index-BMmUsUVr.js";import{P as V}from"./index-LATptceI.js";import{u as X}from"./index-DkEUhnR6.js";import{u as Y}from"./index-9SeOqIlT.js";import{c as L}from"./index-B-xwPz7g.js";import{c as C}from"./utils-15tqT33e.js";import"./index-BcXugKMQ.js";import"./index-D7FI_znS.js";import"./index-B1k-hWqK.js";import"./index-D-fs5e6L.js";var k="Tabs",[Z,fe]=K(k,[_]),P=_(),[ee,M]=Z(k),R=u.forwardRef((a,s)=>{const{__scopeTabs:o,value:t,onValueChange:i,defaultValue:m,orientation:l="horizontal",dir:b,activationMode:v="automatic",...x}=a,c=X(b),[d,h]=H({prop:t,onChange:i,defaultProp:m??"",caller:k});return e.jsx(ee,{scope:o,baseId:Y(),value:d,onValueChange:h,orientation:l,dir:c,activationMode:v,children:e.jsx(V.div,{dir:c,"data-orientation":l,...x,ref:s})})});R.displayName=k;var D="TabsList",E=u.forwardRef((a,s)=>{const{__scopeTabs:o,loop:t=!0,...i}=a,m=M(D,o),l=P(o);return e.jsx(q,{asChild:!0,...l,orientation:m.orientation,dir:m.dir,loop:t,children:e.jsx(V.div,{role:"tablist","aria-orientation":m.orientation,...i,ref:s})})});E.displayName=D;var B="TabsTrigger",G=u.forwardRef((a,s)=>{const{__scopeTabs:o,value:t,disabled:i=!1,...m}=a,l=M(B,o),b=P(o),v=$(l.baseId,t),x=z(l.baseId,t),c=t===l.value;return e.jsx(J,{asChild:!0,...b,focusable:!i,active:c,children:e.jsx(V.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":x,"data-state":c?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:v,...m,ref:s,onMouseDown:I(a.onMouseDown,d=>{!i&&d.button===0&&d.ctrlKey===!1?l.onValueChange(t):d.preventDefault()}),onKeyDown:I(a.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&l.onValueChange(t)}),onFocus:I(a.onFocus,()=>{const d=l.activationMode!=="manual";!c&&!i&&d&&l.onValueChange(t)})})})});G.displayName=B;var W="TabsContent",F=u.forwardRef((a,s)=>{const{__scopeTabs:o,value:t,forceMount:i,children:m,...l}=a,b=M(W,o),v=$(b.baseId,t),x=z(b.baseId,t),c=t===b.value,d=u.useRef(c);return u.useEffect(()=>{const h=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(h)},[]),e.jsx(Q,{present:i||c,children:({present:h})=>e.jsx(V.div,{"data-state":c?"active":"inactive","data-orientation":b.orientation,role:"tabpanel","aria-labelledby":v,hidden:!h,id:x,tabIndex:0,...l,ref:s,style:{...a.style,animationDuration:d.current?"0s":void 0},children:h&&m})})});F.displayName=W;function $(a,s){return`${a}-trigger-${s}`}function z(a,s){return`${a}-content-${s}`}var ae=R,O=E,S=G,U=F;const g=ae,te=L("flex w-auto items-center justify-start",{variants:{variant:{default:"h-12 gap-1",module:"margin-0 mb-[30px] border-b border-grey-dark p-0"}},defaultVariants:{variant:"default"}}),A=L("ring-offset-background focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center text-base whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"data-[state=active]:text-foreground h-full bg-grey-dark px-3 py-1.5 data-[state=active]:bg-block-heavy data-[state=active]:shadow-[inset_0_4px_0_0_var(--color-red)]",module:"mr-[20px] mb-0 border-b-4 border-transparent p-2 text-text-lightest last:mr-0 data-[state=active]:border-red data-[state=active]:font-bold data-[state=active]:text-black data-[state=active]:no-underline"}},defaultVariants:{variant:"default"}}),p=u.forwardRef(({className:a,variant:s,...o},t)=>e.jsx(O,{ref:t,className:C(te({variant:s,className:a})),...o}));p.displayName=O.displayName;const n=u.forwardRef(({className:a,variant:s,children:o,...t},i)=>s==="module"?e.jsx(S,{ref:i,className:C(A({variant:s,className:a})),...t,children:e.jsxs("span",{className:"relative",children:[e.jsx("span",{className:"invisible absolute left-0 font-bold","aria-hidden":"true",children:o}),e.jsx("span",{className:"relative",children:o})]})}):e.jsx(S,{ref:i,className:C(A({variant:s,className:a})),...t,children:o}));n.displayName=S.displayName;const se=L("ring-offset-background focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",{variants:{variant:{default:"bg-block-heavy p-6",module:"clear-left"}},defaultVariants:{variant:"default"}}),r=u.forwardRef(({className:a,variant:s,...o},t)=>e.jsx(U,{ref:t,className:C(se({variant:s,className:a})),...o}));r.displayName=U.displayName;p.__docgenInfo={description:"",methods:[],composes:["VariantProps"]};n.__docgenInfo={description:"",methods:[],composes:["VariantProps"]};r.__docgenInfo={description:"",methods:[],composes:["VariantProps"]};const Te={title:"Elements/Tabs",component:g,tags:["autodocs"],parameters:{layout:"centered"}},f={render:()=>e.jsxs(g,{defaultValue:"account",className:"w-[400px]",children:[e.jsxs(p,{children:[e.jsx(n,{value:"account",children:"Account"}),e.jsx(n,{value:"password",children:"Password"})]}),e.jsx(r,{value:"account",children:e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"Account Settings"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Manage your account settings and email preferences."})]})}),e.jsx(r,{value:"password",children:e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"Password Settings"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Change your password and security settings."})]})})]})},T={render:()=>e.jsxs(g,{defaultValue:"overview",className:"w-[400px]",children:[e.jsxs(p,{children:[e.jsx(n,{value:"overview",children:"Overview"}),e.jsx(n,{value:"analytics",children:"Analytics"}),e.jsx(n,{value:"reports",disabled:!0,children:"Reports"})]}),e.jsx(r,{value:"overview",children:e.jsxs("div",{className:"mt-4 rounded-md border bg-white p-4",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"Overview"}),e.jsx("p",{className:"text-sm text-gray-600",children:"View a summary of your account activity."})]})}),e.jsx(r,{value:"analytics",children:e.jsxs("div",{className:"mt-4 rounded-md border bg-white p-4",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"Analytics"}),e.jsx("p",{className:"text-sm text-gray-600",children:"View detailed analytics for your account."})]})}),e.jsx(r,{value:"reports",children:e.jsxs("div",{className:"mt-4 rounded-md border bg-white p-4",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"Reports"}),e.jsx("p",{className:"text-sm text-gray-600",children:"View and download reports (currently unavailable)."})]})})]})},N={render:()=>e.jsxs(g,{defaultValue:"profile",className:"w-[400px]",children:[e.jsxs(p,{className:"grid w-full grid-cols-3",children:[e.jsx(n,{value:"profile",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-user",children:[e.jsx("circle",{cx:"12",cy:"8",r:"5"}),e.jsx("path",{d:"M20 21a8 8 0 0 0-16 0"})]}),"Profile"]})}),e.jsx(n,{value:"settings",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-settings",children:[e.jsx("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Settings"]})}),e.jsx(n,{value:"notifications",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-bell",children:[e.jsx("path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}),e.jsx("path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"})]}),"Alerts"]})})]}),e.jsx(r,{value:"profile",children:e.jsxs("div",{className:"mt-4 rounded-md border bg-white p-4",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"Profile"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Update your personal information and profile details."})]})}),e.jsx(r,{value:"settings",children:e.jsxs("div",{className:"mt-4 rounded-md border bg-white p-4",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"Settings"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Customize your application settings and preferences."})]})}),e.jsx(r,{value:"notifications",children:e.jsxs("div",{className:"mt-4 rounded-md border bg-white p-4",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"Notifications"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Configure your notification preferences."})]})})]})},j={render:()=>e.jsxs(g,{defaultValue:"tab1",className:"w-[400px]",children:[e.jsxs(p,{className:"rounded-xl bg-blue-100 p-1.5",children:[e.jsx(n,{value:"tab1",className:"rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white",children:"Information"}),e.jsx(n,{value:"tab2",className:"rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white",children:"Details"})]}),e.jsxs(r,{value:"tab1",className:"mt-2 rounded-md border border-blue-200 bg-blue-50 p-4",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"Tab Content 1"}),e.jsx("p",{className:"text-sm",children:"This tab demonstrates custom styling for the Berlin Design System."})]}),e.jsxs(r,{value:"tab2",className:"mt-2 rounded-md border border-blue-200 bg-blue-50 p-4",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"Tab Content 2"}),e.jsx("p",{className:"text-sm",children:"Custom styles can be applied to match your project's branding."})]})]})},y={render:()=>e.jsxs(g,{defaultValue:"tab1",orientation:"vertical",className:"flex w-[600px]",children:[e.jsxs(p,{className:"mr-4 h-auto flex-col border-r p-0",children:[e.jsx(n,{value:"tab1",className:"justify-start rounded-none border-r-4 border-transparent px-4 py-3 data-[state=active]:border-gray-800",children:"General Information"}),e.jsx(n,{value:"tab2",className:"justify-start rounded-none border-r-4 border-transparent px-4 py-3 data-[state=active]:border-gray-800",children:"Contact Details"}),e.jsx(n,{value:"tab3",className:"justify-start rounded-none border-r-4 border-transparent px-4 py-3 data-[state=active]:border-gray-800",children:"About"})]}),e.jsxs("div",{className:"flex-grow",children:[e.jsxs(r,{value:"tab1",className:"mt-0 rounded-md border p-4",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"General Information"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Vertical tab layout provides a different UI experience, ideal for forms with multiple sections or content organization."})]}),e.jsxs(r,{value:"tab2",className:"mt-0 rounded-md border p-4",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"Contact Details"}),e.jsx("p",{className:"text-sm text-gray-600",children:"This tab would typically contain contact information or form fields."})]}),e.jsxs(r,{value:"tab3",className:"mt-0 rounded-md border p-4",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"About"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Information about this component, project, or company would go here."})]})]})]})},w={render:()=>e.jsxs(g,{defaultValue:"tab1",className:"w-[600px]",children:[e.jsxs(p,{variant:"module",children:[e.jsx(n,{variant:"module",value:"tab1",children:"Information"}),e.jsx(n,{variant:"module",value:"tab2",children:"Details"}),e.jsx(n,{variant:"module",value:"tab3",children:"Resources"})]}),e.jsx(r,{variant:"module",value:"tab1",children:e.jsxs("div",{className:"bg-white p-4",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"Module Tab Content 1"}),e.jsx("p",{className:"text-sm text-gray-600",children:"The module variant is ideal for content sections where a lighter styling is desired."})]})}),e.jsx(r,{variant:"module",value:"tab2",children:e.jsxs("div",{className:"bg-white p-4",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"Module Tab Content 2"}),e.jsx("p",{className:"text-sm text-gray-600",children:"The module variant is ideal for content sections where a lighter styling is desired."})]})}),e.jsx(r,{variant:"module",value:"tab3",children:e.jsxs("div",{className:"bg-white p-4",children:[e.jsx("h3",{className:"mb-2 font-medium",children:"Module Tab Content 3"}),e.jsx("p",{className:"text-sm text-gray-600",children:"This variant follows the styling of the modul-tabs CSS from the reference design."})]})})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <div className="">
                    <h3 className="mb-2 font-medium">Account Settings</h3>
                    <p className="text-sm text-gray-600">
                        Manage your account settings and email preferences.
                    </p>
                </div>
            </TabsContent>
            <TabsContent value="password">
                <div className="">
                    <h3 className="mb-2 font-medium">Password Settings</h3>
                    <p className="text-sm text-gray-600">
                        Change your password and security settings.
                    </p>
                </div>
            </TabsContent>
        </Tabs>
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports" disabled>
                    Reports
                </TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
                <div className="mt-4 rounded-md border bg-white p-4">
                    <h3 className="mb-2 font-medium">Overview</h3>
                    <p className="text-sm text-gray-600">
                        View a summary of your account activity.
                    </p>
                </div>
            </TabsContent>
            <TabsContent value="analytics">
                <div className="mt-4 rounded-md border bg-white p-4">
                    <h3 className="mb-2 font-medium">Analytics</h3>
                    <p className="text-sm text-gray-600">
                        View detailed analytics for your account.
                    </p>
                </div>
            </TabsContent>
            <TabsContent value="reports">
                <div className="mt-4 rounded-md border bg-white p-4">
                    <h3 className="mb-2 font-medium">Reports</h3>
                    <p className="text-sm text-gray-600">
                        View and download reports (currently unavailable).
                    </p>
                </div>
            </TabsContent>
        </Tabs>
}`,...T.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="profile" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="profile">
                    <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                            <circle cx="12" cy="8" r="5" />
                            <path d="M20 21a8 8 0 0 0-16 0" />
                        </svg>
                        Profile
                    </span>
                </TabsTrigger>
                <TabsTrigger value="settings">
                    <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings">
                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                        Settings
                    </span>
                </TabsTrigger>
                <TabsTrigger value="notifications">
                    <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell">
                            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        </svg>
                        Alerts
                    </span>
                </TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
                <div className="mt-4 rounded-md border bg-white p-4">
                    <h3 className="mb-2 font-medium">Profile</h3>
                    <p className="text-sm text-gray-600">
                        Update your personal information and profile details.
                    </p>
                </div>
            </TabsContent>
            <TabsContent value="settings">
                <div className="mt-4 rounded-md border bg-white p-4">
                    <h3 className="mb-2 font-medium">Settings</h3>
                    <p className="text-sm text-gray-600">
                        Customize your application settings and preferences.
                    </p>
                </div>
            </TabsContent>
            <TabsContent value="notifications">
                <div className="mt-4 rounded-md border bg-white p-4">
                    <h3 className="mb-2 font-medium">Notifications</h3>
                    <p className="text-sm text-gray-600">
                        Configure your notification preferences.
                    </p>
                </div>
            </TabsContent>
        </Tabs>
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-[400px]">
            <TabsList className="rounded-xl bg-blue-100 p-1.5">
                <TabsTrigger value="tab1" className="rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                    Information
                </TabsTrigger>
                <TabsTrigger value="tab2" className="rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                    Details
                </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-2 rounded-md border border-blue-200 bg-blue-50 p-4">
                <h3 className="mb-2 font-medium">Tab Content 1</h3>
                <p className="text-sm">
                    This tab demonstrates custom styling for the Berlin Design System.
                </p>
            </TabsContent>
            <TabsContent value="tab2" className="mt-2 rounded-md border border-blue-200 bg-blue-50 p-4">
                <h3 className="mb-2 font-medium">Tab Content 2</h3>
                <p className="text-sm">
                    Custom styles can be applied to match your project's branding.
                </p>
            </TabsContent>
        </Tabs>
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" orientation="vertical" className="flex w-[600px]">
            <TabsList className="mr-4 h-auto flex-col border-r p-0">
                <TabsTrigger value="tab1" className="justify-start rounded-none border-r-4 border-transparent px-4 py-3 data-[state=active]:border-gray-800">
                    General Information
                </TabsTrigger>
                <TabsTrigger value="tab2" className="justify-start rounded-none border-r-4 border-transparent px-4 py-3 data-[state=active]:border-gray-800">
                    Contact Details
                </TabsTrigger>
                <TabsTrigger value="tab3" className="justify-start rounded-none border-r-4 border-transparent px-4 py-3 data-[state=active]:border-gray-800">
                    About
                </TabsTrigger>
            </TabsList>
            <div className="flex-grow">
                <TabsContent value="tab1" className="mt-0 rounded-md border p-4">
                    <h3 className="mb-2 font-medium">General Information</h3>
                    <p className="text-sm text-gray-600">
                        Vertical tab layout provides a different UI experience, ideal for
                        forms with multiple sections or content organization.
                    </p>
                </TabsContent>
                <TabsContent value="tab2" className="mt-0 rounded-md border p-4">
                    <h3 className="mb-2 font-medium">Contact Details</h3>
                    <p className="text-sm text-gray-600">
                        This tab would typically contain contact information or form fields.
                    </p>
                </TabsContent>
                <TabsContent value="tab3" className="mt-0 rounded-md border p-4">
                    <h3 className="mb-2 font-medium">About</h3>
                    <p className="text-sm text-gray-600">
                        Information about this component, project, or company would go here.
                    </p>
                </TabsContent>
            </div>
        </Tabs>
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-[600px]">
            <TabsList variant="module">
                <TabsTrigger variant="module" value="tab1">
                    Information
                </TabsTrigger>
                <TabsTrigger variant="module" value="tab2">
                    Details
                </TabsTrigger>
                <TabsTrigger variant="module" value="tab3">
                    Resources
                </TabsTrigger>
            </TabsList>
            <TabsContent variant="module" value="tab1">
                <div className="bg-white p-4">
                    <h3 className="mb-2 font-medium">Module Tab Content 1</h3>
                    <p className="text-sm text-gray-600">
                        The module variant is ideal for content sections where a lighter
                        styling is desired.
                    </p>
                </div>
            </TabsContent>
            <TabsContent variant="module" value="tab2">
                <div className="bg-white p-4">
                    <h3 className="mb-2 font-medium">Module Tab Content 2</h3>
                    <p className="text-sm text-gray-600">
                        The module variant is ideal for content sections where a lighter
                        styling is desired.
                    </p>
                </div>
            </TabsContent>
            <TabsContent variant="module" value="tab3">
                <div className="bg-white p-4">
                    <h3 className="mb-2 font-medium">Module Tab Content 3</h3>
                    <p className="text-sm text-gray-600">
                        This variant follows the styling of the modul-tabs CSS from the
                        reference design.
                    </p>
                </div>
            </TabsContent>
        </Tabs>
}`,...w.parameters?.docs?.source}}};const Ne=["Default","WithDisabledTab","WithIcons","CustomStyling","Vertical","ModuleVariant"];export{j as CustomStyling,f as Default,w as ModuleVariant,y as Vertical,T as WithDisabledTab,N as WithIcons,Ne as __namedExportsOrder,Te as default};
