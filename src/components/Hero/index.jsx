import { Image } from "../../sharedReact/Image";

const renderContent = (props) => {
  const {
    animationDisabled,
    title,
    subtitle,
    description,
    ctaLabel,
    imageSrc,
  } = props;
  if (imageSrc) {
    return (
      <div
        {...(animationDisabled && { "data-animate-disabled": true })}
        className="hero__cta"
        data-animate
        data-animate-delay="0.5"
        data-animate-duration=".75"
        data-animate-opacity="0"
        data-animate-ease="power4.out"
      >
        <h1>
          {title}
          {subtitle && <em>{subtitle}</em>}
        </h1>
        {description && <p>{description}</p>}
        {ctaLabel && (
          <a href="#" className="btn">
            <span className="btn-label">{ctaLabel}</span>
            <span className="btn-round btn-primary btn-responsive">
              <span className="fas fa-arrow-right" />
            </span>
          </a>
        )}
      </div>
    );
  }
  return (
    <div
      className="hero__cta-container"
      {...(animationDisabled && { "data-animate-disabled": true })}
      data-animate
      data-animate-delay="0.1"
      data-animate-duration="1.25"
      data-animate-opacity="0"
      data-animate-y="100"
    >
      <div
        className="hero__cta"
        {...(animationDisabled && { "data-animate-disabled": true })}
        data-animate
        data-animate-delay="0.25"
        data-animate-duration="1.55"
        data-animate-opacity="0"
        data-animate-y="300"
      >
        <h1>{title}</h1>
        {subtitle && (
          <h2>
            <em>{subtitle}</em>
          </h2>
        )}
        {description && <p>{description}</p>}
        {ctaLabel && (
          <a href="#" className="btn">
            <span className="btn-label">{ctaLabel}</span>
            <span className="btn-round btn-primary btn-responsive">
              <span className="fas fa-arrow-right" />
            </span>
          </a>
        )}
      </div>
    </div>
  );
};
export const Hero = (props) => {
  const { animationDisabled, imageSrc, minimal, textColor } = props;
  return (
    <section className={`hero ${minimal ? "minimal" : ""} ${textColor}`}>
      {imageSrc && (
        <div
          className="hero__image"
          {...(animationDisabled && { "data-animate-disabled": true })}
          data-animate
          data-animate-duration=".5"
          data-animate-y="350"
        >
          <div
            className="animation-imagecover"
            {...(animationDisabled && { "data-animate-disabled": true })}
            data-animate="imagecover"
            data-animate-duration=".6"
            data-animate-delay="0.2"
          />
          <Image
            src={imageSrc}
            alt="alt"
            {...(animationDisabled && { "data-animate-disabled": true })}
            data-animate
            data-animate-duration=".5"
            data-animate-opacity="0"
            data-animate-delay="0.1"
          />
        </div>
      )}
      {renderContent(props)}
    </section>
  );
};
