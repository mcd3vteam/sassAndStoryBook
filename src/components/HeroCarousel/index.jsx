import React, { useEffect } from "react";
import { render } from "react-dom";
import { observe } from "selector-observer";

import { Karousel } from "../../sharedReact/Carousels";
import { DefaultClasses } from "../../sharedReact/Carousels/defaults";

export const HeroCarousel = (props) => {
  const { title, description, ctaLabel, target } = props;
  return (
    <div className="hero-carousel">
      <div className="hero-content">
        <section className="hero">
          <div className="hero__image">
            <div className="image">
              <img alt="alt" src="/resources/images/jobs.png" />
            </div>
          </div>
          <div className="hero__cta">
            <h2>{title}</h2>
            <p>{description}</p>
            <a className="hero-carousel__btn" href={target}>
              <span>{ctaLabel}</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

const getKarouselOptions = (length) => {
  return {
    buttons: length > 1,
    classes: DefaultClasses,
    draggable: length > 1,
    indicators: length > 1,
    responsive: [
      {
        breakpoint: 1200,
        options: {
          slidesToShow: 1,
          indicators: length > 1,
          buttons: length > 1,
          draggable: true,
        },
      },
      {
        breakpoint: 768,
        options: {
          slidesToShow: 1,
          indicators: length > 1,
          buttons: length > 1,
          draggable: true,
        },
      },
    ],
    slidesToScroll: 1,
  };
};

export const HeroCarouselItems = ({ disableAnimation, cards }) => {
  if (!cards?.length) return null;
  const karouselOptions = getKarouselOptions(cards.length);
  return (
    <Karousel animationDisabled={disableAnimation} {...karouselOptions}>
      {cards.map((card, index) => (
        <HeroCarousel {...card} key={index} />
      ))}
    </Karousel>
  );
};

export const RenderHeroCarouselItems = ({ id }) => {
  useEffect(() => {
    observe("[data-component='heroCarouselItems']", {
      add(element) {
        const { dataset } = element;
        const { propsId } = dataset;
        const componentData = window.ucsdh[`heroCarouselItems_${propsId}`];
        render(<HeroCarouselItems {...componentData} />, element);
      },
    });
  }, []);
  return <div data-component="heroCarouselItems" data-props-id={id} />;
};
