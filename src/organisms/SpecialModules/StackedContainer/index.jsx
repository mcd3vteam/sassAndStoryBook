import { Image } from "../../../sharedReact/Image";
import { Modal } from "../../../molecules/Modal";

export const StackedContainer = (props) => {
  const {
    animationDisabled,
    cta,
    imageSrc,
    isVideo,
    text,
    title,
    videoSrc,
    subtitle,
  } = props;

  return (
    <>
      <section className="stacked-container">
        <div
          className="stacked-container__media"
          {...(animationDisabled && { "data-animate-disabled": true })}
          data-animate
          data-animate-duration="2"
          data-animate-y="300"
        >
          <Image
            alt="Running"
            src={imageSrc}
            {...(animationDisabled && { "data-animate-disabled": true })}
            data-animate
            data-animate-duration="2"
            data-animate-y="500"
          />
          {isVideo && (
            <button
              className="stacked-container__media__play"
              type="button"
              data-animate
              data-animate-delay="0.5"
              data-animate-duration="2"
              data-animate-opacity="0"
              data-modal="exampleVideoModal"
            >
              <span className="fas fa-play" />
            </button>
          )}
        </div>
        <div
          className="stacked-container__content"
          {...(animationDisabled && { "data-animate-disabled": true })}
          data-animate
          data-animate-opacity="0"
          data-animate-duration="2"
        >
          <div className="stacked-container__content-left">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </div>
          <div className="stacked-container__content-right">
            <p>{text}</p>
            <a href={cta.link} className="btn">
              <span className="btn-label">{cta.label}</span>
              <span className="btn-round btn-primary btn-responsive">
                <span className="fas fa-arrow-right" />
              </span>
            </a>
          </div>
        </div>
      </section>
      {isVideo && <Modal id="exampleVideoModal" videoSrc={videoSrc} />}
    </>
  );
};
