import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{I as L}from"./index-C3L7_Ni2.js";import"./index-CqrSl2Gl.js";const s=e=>{const{badgeImgSrc:r,badgeUrl:E,instance:k="third"}=e;return a.jsx("a",{className:`badge-card badge-card--${k}`,href:E,children:r&&a.jsx("div",{className:"badge-card__image",children:a.jsx(L,{alt:"Lorem ipsum",src:r,"data-animate":!0,"data-animate-duration":"2","data-animate-y":"100"})})})},m=e=>{const{children:r}=e;return a.jsx("section",{className:"container badge-card-composition",children:a.jsx("div",{className:"row badge-row","data-animate":"children","data-animate-duration":"4","data-animate-stagger":"0.2","data-animate-y":"200",children:r})})};s.__docgenInfo={description:"",methods:[],displayName:"BadgeCard"};m.__docgenInfo={description:"",methods:[],displayName:"BadgeCardGrid"};const A={component:s,title:"Components/BadgeCard"},_=e=>a.jsx("div",{className:"container",children:a.jsx("div",{className:"row",children:a.jsx(s,{...e,instance:"third"})})}),G=e=>a.jsx("div",{className:"container",children:a.jsx("div",{className:"row",children:a.jsx(s,{...e,instance:"half"})})}),H=e=>a.jsx("div",{className:"container",children:a.jsx("div",{className:"row",children:a.jsx(s,{...e,instance:"single"})})}),O=e=>{const{badgeCards:r}=e;return a.jsxs(m,{...e,children:[a.jsx(s,{...r[0],instance:"third"}),a.jsx(s,{...r[1],instance:"third"}),a.jsx(s,{...r[2],instance:"third"})]})},P=e=>{const{badgeCards:r}=e;return a.jsxs(m,{...e,children:[a.jsx(s,{...r[0],instance:"half"}),a.jsx(s,{...r[1],instance:"half"})]})},R=e=>{const{badgeCards:r}=e;return a.jsx(m,{...e,children:a.jsx(s,{...r[0],instance:"single"})})},d="https://health.ucsd.edu/PublishingImages/usnwr-uc-san-diego-top-ranked-in-10-specialties.png",o=_.bind({});_.args={badgeUrl:"#",badgeImgSrc:d};o.storyName="Badge Base 1/3 card";const c=G.bind({});G.args={badgeUrl:"#",badgeImgSrc:d};c.storyName="Badge Base 1/2 card";const g=H.bind({});H.args={badgeUrl:"#",badgeImgSrc:d};g.storyName="Badge Base 1 card";const n=O.bind({});n.storyName="Badge Composition 3 column";n.args={badgeCards:[{badgeUrl:"",badgeImgSrc:d},{badgeUrl:"",badgeImgSrc:d},{badgeUrl:"",badgeImgSrc:d}]};const i=P.bind({});i.storyName="Badge Composition 2 Column";i.args={badgeCards:[{badgeUrl:"",badgeImgSrc:d},{badgeUrl:"",badgeImgSrc:d}]};const t=R.bind({});t.storyName="Badge Composition 1";t.args={badgeCards:[{badgeUrl:"",badgeImgSrc:d}]};var l,p,B;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`args => <div className="container">
    <div className="row">
      <BadgeCard {...args} instance="third" />
    </div>
  </div>`,...(B=(p=o.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};var C,b,h;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`args => <div className="container">
      <div className="row">
        <BadgeCard {...args} instance="half" />
      </div>
    </div>`,...(h=(b=c.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var u,x,j;g.parameters={...g.parameters,docs:{...(u=g.parameters)==null?void 0:u.docs,source:{originalSource:`args => <div className="container">
      <div className="row">
        <BadgeCard {...args} instance="single" />
      </div>
    </div>`,...(j=(x=g.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var N,S,v;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const {
    badgeCards
  } = args;
  return <BadgeCardGrid {...args}>
            <BadgeCard {...badgeCards[0]} instance="third" />
            <BadgeCard {...badgeCards[1]} instance="third" />
            <BadgeCard {...badgeCards[2]} instance="third" />
        </BadgeCardGrid>;
}`,...(v=(S=n.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var f,I,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const {
    badgeCards
  } = args;
  return <BadgeCardGrid {...args}>
            <BadgeCard {...badgeCards[0]} instance="half" />
            <BadgeCard {...badgeCards[1]} instance="half" />
        </BadgeCardGrid>;
}`,...(T=(I=i.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var y,U,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const {
    badgeCards
  } = args;
  return <BadgeCardGrid {...args}>
            <BadgeCard {...badgeCards[0]} instance="single" />
        </BadgeCardGrid>;
}`,...(w=(U=t.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const D=["BadgeBaseThird","BadgeBaseHalf","BadgeBaseSingle","BadgeCompositionThird","BadgeCompositionHalf","BadgeCompositionSingle"];export{c as BadgeBaseHalf,g as BadgeBaseSingle,o as BadgeBaseThird,i as BadgeCompositionHalf,t as BadgeCompositionSingle,n as BadgeCompositionThird,D as __namedExportsOrder,A as default};
