import { Image } from "../../sharedReact/Image";
import { Modal } from "../../molecules/Modal";

export const FeaturedContentCTA = (props) => {
  const {
    animationDisabled,
    title,
    description,
    ctaLabel,
    isVideo,
    videoSrc,
    hasCTA,
  } = props;
  return (
    <>
      <section className="featured-content-cta">
        <div className="featured-content-cta__image">
          <Image
            src="/resources/images/jobs.png"
            alt="alt"
            {...(animationDisabled && { "data-animate-disabled": true })}
            data-animate
            data-animate-duration="1.5"
            data-animate-y="500"
          />
          {isVideo && hasCTA && (
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
          className="featured-content-cta__cta"
          data-animate
          data-animate-delay="0.5"
          data-animate-duration="1.25"
          data-animate-opacity="0"
        >
          <h2>{title}</h2>
          <p>{description}</p>
          {hasCTA ? (
            <a href="#" className="btn">
              <span className="btn-label">{ctaLabel}</span>
              <span className="btn-round btn-primary btn-responsive">
                <span className="fas fa-arrow-right" />
              </span>
            </a>
          ) : (
            <button
              href="#"
              className="btn"
              type="button"
              data-modal="exampleVideoModal"
            >
              <span className="btn-label">Play Video</span>
              <span className="btn-round btn-primary btn-responsive">
                <span className="fas fa-play" />
              </span>
            </button>
          )}
        </div>
      </section>
      {isVideo && <Modal id="exampleVideoModal" videoSrc={videoSrc} />}
    </>
  );
};
