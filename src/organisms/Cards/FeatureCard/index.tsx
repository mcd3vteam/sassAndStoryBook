import React from "react";
import { Image } from "../../../sharedReact/Image";

export const FeatureCard = (props) => {
  const { imageSrc, link, title, text, cta, variant = "third" } = props;

  return (
    <a className={`feature-card feature-card--${variant}`} href={link}>
      {imageSrc && (
        <div className="feature-card__image">
          <Image
            alt="Lorem Ipsum"
            src={imageSrc}
            data-animate
            data-animate-duration="4"
            data-animate-y="100"
          />
        </div>
      )}
      <div className="feature-card__content">
        <h3>{title}</h3>
        <p className="body">{text}</p>
      </div>
      <div className="btn">
        <span className="btn-label">{cta}</span>
        <span className="btn-round btn-primary btn-responsive">
          <span className="fas fa-arrow-right" />
        </span>
      </div>
    </a>
  );
};

export const FeatureCardGrid = (props) => {
  const { children, emphasis, text, title } = props;

  return (
    <section className="container feature-card-composition">
      <header
        data-animate
        data-animate-duration="4"
        data-animate-opacity="0"
        data-animate-y="100"
      >
        {title && <h2>{title}

          {emphasis && (
            
              <em>{emphasis}</em>
          )}
        </h2>}

        {text && <p className="body">{text}</p>}
      </header>
      <div
        className="row"
        data-animate="children"
        data-animate-duration="4"
        data-animate-stagger="0.2"
        data-animate-y="200"
      >
        {children}
      </div>
    </section>
  );
};
