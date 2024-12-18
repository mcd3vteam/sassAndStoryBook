import React, { useEffect } from "react";
import { render } from "react-dom";
import { observe } from "selector-observer";
import { Image } from "../../../sharedReact/Image";

// prototype version:
import { Karousel } from "../../../sharedReact/Carousels";
import { DefaultClasses } from "../../../sharedReact/Carousels/defaults";
// SanDiegoHealth.Web version:
// import { Karousel } from "../../../../scripts/react/Carousels";
// import { DefaultClasses } from "../../../../scripts/react/Carousels/defaults";

export const FeaturedItem = (props) => {
  const { url, category, date, imageSrc, title } = props;

  return (
    <div className="featured-items-carousel__featured-item">
      <div className="featured-items-carousel__featured-item-header">
        <span className="category">{category}</span>
        <span className="date">{date}</span>
      </div>
      <a href={url}>
        <Image src={imageSrc} />
        <h4>{title}</h4>
      </a>
    </div>
  );
};

const getKarouselOptions = (length) => {
  return {
    buttons: false,
    classes: DefaultClasses,
    draggable: false,
    indicators: length > 2,
    responsive: [
      {
        breakpoint: 1200,
        options: {
          slidesToShow: 2,
          indicators: length > 2,
          buttons: length > 2,
          draggable: true,
        },
      },
    ],
    slidesToScroll: 1,
  };
};

export const FeaturedItems = ({ disableAnimation, cards }) => {
  if (!cards?.length) return null;
  const karouselOptions = getKarouselOptions(cards.length);
  return (
    <Karousel animationDisabled={disableAnimation} {...karouselOptions}>
      {cards.map((card, index) => (
        <FeaturedItem {...card} key={index} />
      ))}
    </Karousel>
  );
};

export const RenderFeaturedItems = ({ id }) => {
  useEffect(() => {
    observe("[data-component='featureditems']", {
      add(element) {
        const { dataset } = element;
        const { propsId } = dataset;
        const componentData = window.ucsdh[`featureditems_${propsId}`];
        render(<FeaturedItems {...componentData} />, element);
      },
    });
  }, []);
  return <div data-component="featureditems" data-props-id={id} />;
};

//  SanDiegoHealth.Web version:
// document.addEventListener("readystatechange", () => {
//     if (document.readyState === "interactive") {
//         observe('[data-component="featureditems"]', {
//             add(element) {
//                 const { dataset } = element as HTMLElement;
//                 const { propsId } = dataset;
//                 const componentData = window.ucsdh[`featureditems_${propsId}`];
//                 render(<FeaturedItems {...componentData} />, element);
//             },
//         });

//     }
// });
