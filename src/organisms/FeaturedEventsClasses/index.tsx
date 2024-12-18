import React, { useEffect } from "react";
import { render } from "react-dom";
import { observe } from "selector-observer";

// prototype version:
import { Karousel } from "../../sharedReact/Carousels";
import { DefaultClasses } from "../../sharedReact/Carousels/defaults";
// SanDiegoHealth.Web version:
// import { Karousel } from "../../../../scripts/react/Carousels";
// import { DefaultClasses } from "../../../../scripts/react/Carousels/defaults";

const FeaturedEventCard = (props) => {
  const { date, title, description, link, ctaLabel, target } = props;
  return (
    <div className="card-item">
      <span className="card-item__date">{date}</span>
      <h3 className="card-item__heading">{title}</h3>
      <p className="card-item__desc">{description}</p>
      {link && (
        <a href={link} className="btn" target={target}>
          <span className="btn-label">{ctaLabel}</span>
          <span className="fas fa-arrow-right"></span>
        </a>
      )}
    </div>
  );
};

const getKarouselOptions = (cardCount) => {
  if (cardCount < 5) {
    return {
      classes: DefaultClasses,
      draggable: true,
      indicators: true,
      responsive: [
        {
          breakpoint: 1200,
          options: {
            slidesToShow: 4,
            indicators: false,
            draggable: false,
          },
        },
        {
          breakpoint: 768,
          options: { slidesToShow: 3 },
        },
      ],
      slidesToShow: 1.25,
    };
  }
  // card count > 3
  return {
    classes: DefaultClasses,
    draggable: true,
    indicators: true,
    responsive: [
      {
        breakpoint: 1200,
        options: { slidesToShow: 4, buttons: true },
      },
      {
        breakpoint: 768,
        options: { slidesToShow: 4 },
      },
    ],
    slidesToScroll: 1,
    slidesToShow: 1.25,
  };
};

export const FeaturedEvents = ({ cards, disableAnimation }) => {
  if (!cards?.length) return null;

  const karouselOptions = getKarouselOptions(cards.length);
  return (
    cards?.length && (
      <Karousel animationDisabled={disableAnimation} {...karouselOptions}>
        {cards.map((card, index) => (
          <FeaturedEventCard {...card} key={index} />
        ))}
      </Karousel>
    )
  );
};

//  prototype version:
export const RenderFeaturedEvents = ({ id }) => {
  useEffect(() => {
    observe("[data-component=\"featuredevents\"]", {
      add(element) {
        const { dataset } = element as HTMLElement;
        const { propsId } = dataset;
        const componentData = window.ucsdh[`featuredevents_${propsId}`];
        render(<FeaturedEvents {...componentData} />, element);
      },
    });
  }, []);
  return <div data-component="featuredevents" data-props-id={id} />;
};

//  SanDiegoHealth.Web version:
// document.addEventListener("readystatechange", () => {
//     if (document.readyState === "interactive") {
//         observe('[data-component="featuredevents"]', {
//             add(element) {
//                 const { dataset } = element as HTMLElement;
//                 const { propsId } = dataset;
//                 const componentData = window.ucsdh[`featuredevents_${propsId}`];
//                 render(<FeaturedEvents {...componentData} />, element);
//             },
//         });

//     }
// });
