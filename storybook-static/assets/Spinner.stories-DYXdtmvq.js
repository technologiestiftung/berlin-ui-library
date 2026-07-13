import{S as i}from"./Spinner-CgX6Pswx.js";import"./jsx-runtime-D_zvdyIk.js";import"./utils-CBfrqCZ4.js";const d={title:"Elements/Spinner",component:i,tags:["autodocs"],argTypes:{withText:{control:"boolean",defaultValue:!1,description:"Whether to show loading text under the spinner"},size:{control:"select",options:["small","mid","large"],description:"Controls the size of the spinner",defaultValue:"mid"},text:{control:"text",description:"Set the text under the spinner"},position:{control:"select",options:["under","right"],description:"Controls the position of the text relative to the spinner",defaultValue:"under"},textColor:{control:"select",options:["black","red"],description:"Controls the color of the text",defaultValue:"red"}}},e={args:{withText:!1}},t={args:{withText:!0}},r={args:{size:"small"}},s={args:{withText:!0,size:"small"}},a={args:{withText:!0,size:"large"}},o={args:{text:"Custom loading text"}},n={args:{withText:!0,position:"right"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    withText: false
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    withText: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    withText: true,
    size: "small"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    withText: true,
    size: "large"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Custom loading text"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    withText: true,
    position: "right"
  }
}`,...n.parameters?.docs?.source}}};const m=["Default","WithText","Small","SmallWithText","LargeWithText","IndividualText","RightText"];export{e as Default,o as IndividualText,a as LargeWithText,n as RightText,r as Small,s as SmallWithText,t as WithText,m as __namedExportsOrder,d as default};
