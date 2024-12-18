import React, { useEffect } from "react";
import { render } from "react-dom";
import { observe } from "selector-observer";
import { FeatureProviderCard as ProviderCard } from "../../organisms/Cards/FeatureProviderCard";
import { Karousel } from "../../sharedReact/Carousels";
import { DefaultClasses } from "../../sharedReact/Carousels/defaults";

export const ProviderCards = (props) => {
  const { disableAnimation, cards } = props;
  if (!cards || cards.length < 1) return null;
  console.log(cards);
  const karouselOptions = getKarouselOptions(cards.length);
  return (
    cards?.length && (
      <Karousel animationDisabled={disableAnimation} {...karouselOptions}>
        {cards.map((card, index) => (
          <ProviderCard {...card} key={index}/>
        ))}
      </Karousel>
    )
  );
};

const getKarouselOptions = (length: number) => {
  return {
    autoplay: false,
    autoplaySpeed: 3000,
    buttons: false,
    classes: DefaultClasses,
    draggable: true,
    indicators: length > 1,
    responsive: [
      {
        breakpoint: 1200,
        options: { slidesToShow: 3, buttons: length > 3, indicators: length > 3 },
      },
      {
        breakpoint: 768,
        options: { slidesToShow: 3, buttons: length > 3, indicators: length > 3 },
      },
    ],
    slidesToScroll: 1,
    slidesToShow: 1.5,
    speed: 300,
  };
};

//  prototype version:
export const RenderProviderCards = ({ id }) => {
  useEffect(() => {
    observe('[data-component="providercards"]', {
      add(element) {
        const { dataset } = element as HTMLElement;
        const { propsId } = dataset;
        const componentData = window.ucsdh[`providercards_${propsId}`];
        console.log (componentData);
        render(<ProviderCards {...componentData} />, element);
      },
    });
  }, []);
  return <div data-component="providercards" data-props-id={id} />;
};

//  SanDiegoHealth.Web version:
// document.addEventListener("readystatechange", () => {
//     if (document.readyState === "interactive") {
//         observe('[data-component="providercards"]', {
//             add(element) {
//                 const { dataset } = element as HTMLElement;
//                 const { propsId } = dataset;
//                 const componentData = window.ucsdh[`providercards_${propsId}`];
//                 render(<providercards {...componentData} />, element);
//             },
//         });

//     }
// });