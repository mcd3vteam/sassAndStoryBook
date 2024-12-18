import { Image } from "../../sharedReact/Image";
import { Modal } from "../../molecules/Modal";

export const MediaPlayer = (props) => {
  const { title, description, imageSrc, animationDisabled, videoSrc } = props;
  return (
    <section className="media-player">
      <div className="media-player__container">
        <div className="media-player__image">
          <Image
            {...(animationDisabled && { "data-animate-disabled": true })}
            data-animate
            data-animate-duration="2"
            data-animate-y="300"
            src={imageSrc}
          />
        </div>
        <div className="media-player__text">
          <h2>{title}</h2>
          <p>{description}</p>
          <button type="button" className="btn" data-modal="exampleVideoModal">
            <span className="btn-label">Watch Video</span>
            <span className="btn-round btn-primary btn-responsive">
              <span className="fas fa-caret-right" />
            </span>
          </button>
        </div>
      </div>
      <Modal id="exampleVideoModal" videoSrc={videoSrc} />
    </section>
  );
};
