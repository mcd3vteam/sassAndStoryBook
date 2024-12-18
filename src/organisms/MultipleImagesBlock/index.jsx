import { Image } from "../../sharedReact/Image";

export const MultipleImages = (props) => {
  const { title, description, imageSrc, animationDisabled } = props;
  return (
    <section className="container multiple-images">
      <div className="row multiple-images__row-margin">
        <div className="multiple-images__main-column">
          <div className="row">
            <div className="multiple-images__column multiple-images__col-down">
              <Image
                {...(animationDisabled && { "data-animate-disabled": true })}
                data-animate
                data-animate-duration="2"
                data-animate-y="300"
                src={imageSrc}
              />
              <Image
                {...(animationDisabled && { "data-animate-disabled": true })}
                data-animate
                data-animate-duration="2"
                data-animate-y="300"
                src={imageSrc}
              />
            </div>
            <div className="multiple-images__column">
              <Image
                {...(animationDisabled && { "data-animate-disabled": true })}
                data-animate
                data-animate-duration="2"
                data-animate-y="300"
                src={imageSrc}
              />
              <Image
                {...(animationDisabled && { "data-animate-disabled": true })}
                data-animate
                data-animate-duration="2"
                data-animate-y="300"
                src={imageSrc}
              />
              <Image
                {...(animationDisabled && { "data-animate-disabled": true })}
                data-animate
                data-animate-duration="2"
                data-animate-y="300"
                src={imageSrc}
              />
            </div>
            <div className="multiple-images__column multiple-images__col-down">
              <Image
                {...(animationDisabled && { "data-animate-disabled": true })}
                data-animate
                data-animate-duration="2"
                data-animate-y="300"
                src={imageSrc}
              />
              <Image
                {...(animationDisabled && { "data-animate-disabled": true })}
                data-animate
                data-animate-duration="2"
                data-animate-y="300"
                src={imageSrc}
              />
            </div>
          </div>
        </div>
        <div className="multiple-images__main-column multiple-images__text-section">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href="#" className="btn">
            <span className="btn-label">Call Us</span>
            <span className="btn-round btn-responsive btn-primary">
              <span className="fas fa-arrow-right" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
