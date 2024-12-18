import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{F as e,a as S}from"./index-Ck6vc4M5.js";import"./index-C3L7_Ni2.js";import"./index-CqrSl2Gl.js";const G={component:e,title:"Organisms/Cards/Feature Card"},y=r=>a.jsx("div",{className:"container",children:a.jsx("div",{className:"row",children:a.jsx(e,{...r,variant:"third"})})}),j=r=>a.jsx("div",{className:"container",children:a.jsx("div",{className:"row",children:a.jsx(e,{...r,variant:"half"})})}),b=r=>{const{featureCards:t}=r;return a.jsxs(S,{...r,children:[a.jsx(e,{...t[0],variant:"third"}),a.jsx(e,{...t[1],variant:"third"}),a.jsx(e,{...t[2],variant:"third"})]})},F=r=>{const{featureCards:t}=r;return a.jsxs(S,{...r,children:[a.jsx(e,{...t[0],variant:"half"}),a.jsx(e,{...t[1],variant:"half"})]})},d="http://fpoimg.com/440x592?text=IMG",s=y.bind({});s.args={link:"#",imageSrc:d,title:"Primary Care",text:"This is my text",cta:"See Locations"};s.storyName="Base 1/3 Card";const i=j.bind({});i.args={link:"",imageSrc:d,title:"Primary Care",text:"This is my text",cta:"See Locations"};i.storyName="Base 1/2 Card";const o=b.bind({});o.storyName="Composition 3 Column";o.args={title:"Lorem Ipsum",emphasis:"lorem ipsum",text:"Lorem ipsum dolor sit amet",featureCards:[{link:"",imageSrc:d,title:"Primary Care",text:"We'll help you find the right provider for your family",cta:"See Locations"},{link:"",imageSrc:d,title:"Express Care",text:"Three locations for minor health needs or wellness services, with video visits available",cta:"See Locations"},{link:"",imageSrc:d,title:"Urgent Care",text:"Locations in La Jolla or Rancho Bernardo ",cta:"See Locations"}]};const n=F.bind({});n.storyName="Composition 2 Column";n.args={title:"Lorem Ipsum",emphasis:"lorem ipsum",text:"Lorem ipsum dolor sit amet",featureCards:[{link:"",imageSrc:"https://images.unsplash.com/photo-1576766125468-a5d48274c5b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2008&q=80",title:"Primary Care",text:"We'll help you find the right provider for your family",cta:"See Locations"},{link:"",imageSrc:"https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",title:"Express Care",text:"Three locations for minor health needs or wellness services, with video visits available",cta:"See Locations"},{link:"",imageSrc:"https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",title:"Urgent Care",text:"Locations in La Jolla or Rancho Bernardo ",cta:"See Locations"}]};var c,m,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => <div className="container">
    <div className="row">
      <FeatureCard {...args} variant="third" />
    </div>
  </div>`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,p,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => <div className="container">
    <div className="row">
      <FeatureCard {...args} variant="half" />
    </div>
  </div>`,...(f=(p=i.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,x,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const {
    featureCards
  } = args;
  return <FeatureCardGrid {...args}>
      <FeatureCard {...featureCards[0]} variant="third" />
      <FeatureCard {...featureCards[1]} variant="third" />
      <FeatureCard {...featureCards[2]} variant="third" />
    </FeatureCardGrid>;
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var v,g,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const {
    featureCards
  } = args;
  return <FeatureCardGrid {...args}>
      <FeatureCard {...featureCards[0]} variant="half" />
      <FeatureCard {...featureCards[1]} variant="half" />
    </FeatureCardGrid>;
}`,...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const N=["BaseThird","BaseHalf","CompositionThird","CompositionHalf"];export{i as BaseHalf,s as BaseThird,n as CompositionHalf,o as CompositionThird,N as __namedExportsOrder,G as default};
