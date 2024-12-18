import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-CqrSl2Gl.js";import{r as m}from"./index-FqUYIDda.js";import{o as u,K as v,D as h}from"./index-aBVyMkog.js";import{F as C}from"./index-UcyyzjQh.js";import"./index-729qusIZ.js";const P=s=>{const{disableAnimation:a,cards:r}=s;if(!r||r.length<1)return null;console.log(r);const i=b(r.length);return(r==null?void 0:r.length)&&e.jsx(v,{animationDisabled:a,...i,children:r.map((o,p)=>l.createElement(C,{...o,key:p}))})},b=s=>({autoplay:!1,autoplaySpeed:3e3,buttons:!1,classes:h,draggable:!0,indicators:s>1,responsive:[{breakpoint:1200,options:{slidesToShow:3,buttons:s>3,indicators:s>3}},{breakpoint:768,options:{slidesToShow:3,buttons:s>3,indicators:s>3}}],slidesToScroll:1,slidesToShow:1.5,speed:300}),f=({id:s})=>(l.useEffect(()=>{u('[data-component="providercards"]',{add(a){const{dataset:r}=a,{propsId:i}=r,o=window.ucsdh[`providercards_${i}`];console.log(o),m.render(e.jsx(P,{...o}),a)}})},[]),e.jsx("div",{"data-component":"providercards","data-props-id":s})),y=(s,{cards:a,disableAnimation:r})=>{window.ucsdh[`providercards_${s}`]={disableAnimation:r,cards:a}},M={title:"Components/Provider Carousel",layout:"fullscreen"},x=[{name:"Jeremy Hirst, MD",title:"Psychiatrist",details:"Associate Director, Patient and Family Support Services, Moores Cancer Center",shape:"circle"},{name:"Jeremy Hirst, MD",title:"Psychiatrist",details:"Associate Director, Patient and Family Support Services, Moores Cancer Center",shape:"square"},{name:"Jeremy Hirst, MD",title:"Psychiatrist",details:"Associate Director, Patient and Family Support Services, Moores Cancer Center",shape:"square"},{name:"Jeremy Hirst, MD",title:"Psychiatrist",details:"Associate Director, Patient and Family Support Services, Moores Cancer Center",shape:"circle"},{name:"Jeremy Hirst, MD",title:"Psychiatrist",details:"Associate Director, Patient and Family Support Services, Moores Cancer Center",shape:"circle"},{name:"Jeremy Hirst, MD",title:"Psychiatrist",details:"Associate Director, Patient and Family Support Services, Moores Cancer Center",shape:"square"}],S=s=>(y("54",s),e.jsxs("section",{className:"provider-carousel",children:[e.jsxs("div",{className:"container",children:[e.jsxs("h3",{className:"provider-carousel__title",children:["Specialties and Programs",e.jsx("em",{children:"lorem ipsum"})]}),e.jsx("p",{className:"provider-carousel__description",children:"Care for complex conditions that’s ranked among the nation’s best"})]}),e.jsx(f,{id:"54"}),e.jsx("div",{className:"container",children:e.jsxs("a",{href:"#",className:"btn",children:[e.jsx("span",{className:"btn-label",children:"See All Providers"}),e.jsx("span",{className:"btn-round btn-primary btn-responsive",children:e.jsx("span",{className:"fas fa-arrow-right"})})]})})]})),t=S.bind({});t.args={disableAnimation:!1,cards:x};var n,c,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  setProviderCardsArgs("54", args);
  return <section className="provider-carousel">
      <div className="container">
        <h3 className="provider-carousel__title">
          Specialties and Programs
          <em>lorem ipsum</em>
        </h3>
        <p className="provider-carousel__description">
          Care for complex conditions that’s ranked among the nation’s best
        </p>
      </div>
      <RenderProviderCards id="54"></RenderProviderCards>
      <div className="container">
        <a href="#" className="btn">
          <span className="btn-label">See All Providers</span>
          <span className="btn-round btn-primary btn-responsive">
            <span className="fas fa-arrow-right" />
          </span>
        </a>
      </div>
    </section>;
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,M as default};
