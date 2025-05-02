import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as r,a,b as c,c as n,d as l,e as t,f as u,g as d}from"./Select-Dvnjq5I7.js";import"./index-CFahbR6w.js";import"./index-CHC4nfYS.js";import"./index-chp1rBSu.js";import"./index-fFXgbEt_.js";import"./index-GKcSamc8.js";import"./index-CmtHiJK_.js";import"./index-Btk-NVQ6.js";import"./index-KTNLvksQ.js";import"./index-C_A5rLc3.js";import"./index-D9hrn0-u.js";import"./index-CTWW28yj.js";import"./utils-15tqT33e.js";import"./chevron-down-CIrWunyT.js";import"./createLucideIcon-DWaKWC9b.js";import"./check-MFvInxwV.js";const L={title:"Components/Select",component:r,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsxs(r,{children:[e.jsx(a,{className:"w-[180px]",children:e.jsx(c,{placeholder:"Select a fruit"})}),e.jsx(n,{children:e.jsxs(l,{children:[e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"banana",children:"Banana"}),e.jsx(t,{value:"blueberry",children:"Blueberry"}),e.jsx(t,{value:"orange",children:"Orange"}),e.jsx(t,{value:"strawberry",children:"Strawberry"})]})})]})},o={render:()=>e.jsxs(r,{children:[e.jsx(a,{className:"w-[200px]",children:e.jsx(c,{placeholder:"Select a location"})}),e.jsxs(n,{children:[e.jsxs(l,{children:[e.jsx(u,{children:"Europe"}),e.jsx(t,{value:"berlin",children:"Berlin"}),e.jsx(t,{value:"paris",children:"Paris"}),e.jsx(t,{value:"london",children:"London"})]}),e.jsx(d,{}),e.jsxs(l,{children:[e.jsx(u,{children:"North America"}),e.jsx(t,{value:"new-york",children:"New York"}),e.jsx(t,{value:"san-francisco",children:"San Francisco"}),e.jsx(t,{value:"toronto",children:"Toronto"})]})]})]})},i={render:()=>e.jsxs(r,{disabled:!0,children:[e.jsx(a,{className:"w-[180px]",children:e.jsx(c,{placeholder:"Disabled"})}),e.jsx(n,{children:e.jsx(l,{children:e.jsx(t,{value:"not-selectable",children:"Not selectable"})})})]})},S={render:()=>e.jsxs(r,{defaultValue:"cat",children:[e.jsx(a,{className:"w-[180px]",children:e.jsx(c,{placeholder:"Select a pet"})}),e.jsx(n,{children:e.jsxs(l,{children:[e.jsx(t,{value:"dog",children:"Dog"}),e.jsx(t,{value:"cat",children:"Cat"}),e.jsx(t,{value:"fish",children:"Fish"}),e.jsx(t,{value:"rabbit",children:"Rabbit"})]})})]})},m={render:()=>e.jsxs("div",{className:"grid w-[200px] gap-1.5",children:[e.jsx("label",{htmlFor:"country",className:"text-sm font-medium",children:"Country"}),e.jsxs(r,{children:[e.jsx(a,{id:"country",children:e.jsx(c,{placeholder:"Select a country"})}),e.jsx(n,{children:e.jsxs(l,{children:[e.jsx(t,{value:"germany",children:"Germany"}),e.jsx(t,{value:"france",children:"France"}),e.jsx(t,{value:"spain",children:"Spain"}),e.jsx(t,{value:"italy",children:"Italy"})]})})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Select the country you're from."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                    <SelectItem value="strawberry">Strawberry</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Select>
            <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Europe</SelectLabel>
                    <SelectItem value="berlin">Berlin</SelectItem>
                    <SelectItem value="paris">Paris</SelectItem>
                    <SelectItem value="london">London</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="new-york">New York</SelectItem>
                    <SelectItem value="san-francisco">San Francisco</SelectItem>
                    <SelectItem value="toronto">Toronto</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Select disabled>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Disabled" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="not-selectable">Not selectable</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
}`,...i.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Select defaultValue="cat">
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a pet" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="dog">Dog</SelectItem>
                    <SelectItem value="cat">Cat</SelectItem>
                    <SelectItem value="fish">Fish</SelectItem>
                    <SelectItem value="rabbit">Rabbit</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
}`,...S.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-[200px] gap-1.5">
            <label htmlFor="country" className="text-sm font-medium">
                Country
            </label>
            <Select>
                <SelectTrigger id="country">
                    <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="germany">Germany</SelectItem>
                        <SelectItem value="france">France</SelectItem>
                        <SelectItem value="spain">Spain</SelectItem>
                        <SelectItem value="italy">Italy</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
                Select the country you're from.
            </p>
        </div>
}`,...m.parameters?.docs?.source}}};const F=["Default","WithGroups","Disabled","WithDefaultValue","WithLabel"];export{s as Default,i as Disabled,S as WithDefaultValue,o as WithGroups,m as WithLabel,F as __namedExportsOrder,L as default};
