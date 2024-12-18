import { useEffect } from "react";
import { observe } from "selector-observer";
import { render } from "react-dom";
import { Image } from "../../../sharedReact/Image";

// prototype version:
import { Karousel } from "../../../sharedReact/Carousels";
import { DefaultClasses } from "../../../sharedReact/Carousels/defaults";
import React from "react";
// SanDiegoHealth.Web version:
// import { Karousel } from "../../../../scripts/react/Carousels";
// import { DefaultClasses } from "../../../../scripts/react/Carousels/defaults";

export const LocationCard = (props) => {
  const {
    imageSrc,
    eyebrow,
    name,
    addressLine1,
    addressLine2,
    addressLine3,
    link,
    linkLabel,
    target,
    ctaLink,
    ctaLabel,
    ctaTarget,
  } = props;

  return (
    <div className="location-card">
      <Image alt="Lorem Ipsum" src={imageSrc} />
      <header>
        <span>{eyebrow}</span>
        <h3>{name}</h3>
      </header>
      <div className="location-card__details">
        <p>{addressLine1}</p>
        <p>{addressLine2}</p>
        <p>{addressLine3}</p>
        <a href={link} target={target || "_self"}>
          {linkLabel}
        </a>
        <br />
      </div>
      {ctaLink && (
        <a href={ctaLink} className="btn" target={ctaTarget}>
          <span className="btn-label">{ctaLabel}</span>
          <span className="btn-round btn-sm btn-primary">
            <span className="fas fa-arrow-right" />
          </span>
        </a>
      )}
    </div>
  );
};

const getKarouselOptions = (length) => {
  return {
    classes: DefaultClasses,
    draggable: true,
    indicators: length > 1,
    responsive: [
      {
        breakpoint: 1200,
        options: {
          slidesToShow: 3,
          draggable: true,
          buttons: length > 3,
          indicators: false,
        },
      },
      {
        breakpoint: 768,
        options: { slidesToShow: 3, indicators: length > 3 },
      },
    ],
    slidesToShow: 1.25,
  };
};

export const LocationCards = (props) => {
  const { disableAnimation, cards } = props;
  const karouselOptions = getKarouselOptions(cards.length);
  return (
    cards.length > 0 && (
      <Karousel animationDisabled={disableAnimation} {...karouselOptions}>
        {cards.map((card, index) => (
          <LocationCard {...card} key={index} />
        ))}
      </Karousel>
    )
  );
};

//  prototype version:
export const RenderLocationCards = ({ id }) => {
  useEffect(() => {
    observe("[data-component=\"locationcards\"]", {
      add(element) {
        const { dataset } = element as HTMLElement;
        const { propsId } = dataset;
        const componentData = window.ucsdh[`locationcards_${propsId}`];
        render(<LocationCards {...componentData} />, element);
      },
    });
  }, []);
  return <div data-component="locationcards" data-props-id={id} />;
};

//  SanDiegoHealth.Web version:
// document.addEventListener("readystatechange", () => {
//     if (document.readyState === "interactive") {
//         observe('[data-component="locationcards"]', {
//             add(element) {
//                 const { dataset } = element as HTMLElement;
//                 const { propsId } = dataset;
//                 const componentData = window.ucsdh[`locationcards_${propsId}`]
//                 render(<LocationCards {...componentData} />, element);
//             },
//         });

//     }
// });
