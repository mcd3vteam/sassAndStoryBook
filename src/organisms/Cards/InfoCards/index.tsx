import React, { useEffect } from "react";
import { render } from "react-dom";
import { observe } from "selector-observer";

// prototype version:
import { Karousel } from "../../../sharedReact/Carousels";
import { DefaultClasses } from "../../../sharedReact/Carousels/defaults";
// SanDiegoHealth.Web version:
// import { Karousel } from "../../../../scripts/react/Carousels";
// import { DefaultClasses } from "../../../../scripts/react/Carousels/defaults";

export const InfoCard = (props) => {
  const { url, eyebrow, title, description, ctaLabel, target } = props;

  return (
    <div className="info-card">
      <a className="info-card__link" href={url} target={target || "_self"}>
        <header>
          {eyebrow && <span className="info-card__eyebrow">{eyebrow}</span>}
          <h4>{title}</h4>
        </header>
        <p>{description}</p>
        <footer>
          <div className="btn">
            <span className="btn-label">{ctaLabel}</span>
            <span className="fas fa-arrow-right" />
          </div>
        </footer>
      </a>
    </div>
  );
};

const getKarouselOptions = (cardCount, cardSize) => {
  if (cardCount === 3) {
    return cardSize === "small"
      ? {
        classes: DefaultClasses,
        draggable: false,
        indicators: false,
        responsive: [
          {
            breakpoint: 1200,
            options: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 768,
            options: { slidesToShow: 4 },
          },
        ],
      }
      : {
        classes: DefaultClasses,
        draggable: false,
        indicators: false,
        responsive: [
          {
            breakpoint: 1200,
            options: { slidesToShow: 3 },
          },
          {
            breakpoint: 768,
            options: { slidesToShow: 3 },
          },
        ],
        slidesToScroll: 1,
      };
  }
  if (cardCount === 4 && cardSize === "small") {
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
  return cardSize === "small"
    ? {
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
    }
    : {
      classes: DefaultClasses,
      draggable: true,
      indicators: true,
      responsive: [
        {
          breakpoint: 1200,
          options: { slidesToShow: 3, buttons: true },
        },
        {
          breakpoint: 768,
          options: { slidesToShow: 3 },
        },
      ],
      slidesToScroll: 1,
      slidesToShow: 1.25,
    };
};

export const InfoCards = ({ cards, cardSize, disableAnimation }) => {
  if (cards.length < 3) return null;
  const karouselOptions = getKarouselOptions(cards.length, cardSize);
  return (
    cards?.length && (
      <Karousel animationDisabled={disableAnimation} {...karouselOptions}>
        {cards.map((card, index) => (
          <InfoCard {...card} key={index} />
        ))}
      </Karousel>
    )
  );
};

//  prototype version:
export const RenderInfoCards = ({ id }) => {
  useEffect(() => {
    observe("[data-component=\"infocards\"]", {
      add(element) {
        const { dataset } = element as HTMLElement;
        const { propsId } = dataset;
        const componentData = window.ucsdh[`infocards_${propsId}`];
        render(<InfoCards {...componentData} />, element);
      },
    });
  }, []);
  return <div data-component="infocards" data-props-id={id} />;
};

//  SanDiegoHealth.Web version:
// document.addEventListener("readystatechange", () => {
//     if (document.readyState === "interactive") {
//         observe('[data-component="infocards"]', {
//             add(element) {
//                 const { dataset } = element as HTMLElement;
//                 const { propsId } = dataset;
//                 const componentData = window.ucsdh[`infocards_${propsId}`];
//                 render(<InfoCards {...componentData} />, element);
//             },
//         });

//     }
// });
