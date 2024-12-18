import { Image } from "../../sharedReact/Image";
export const LocationLinks = (props) => {
  const { title, description, subtitle, animationDisabled, links } = props;
  return (
    <section className="location-links">
      <div className="location-links__container">
        <div className="location-links__text-section">
          <div className="location-links__title-sub">
            <h2>
              {title} <em>{subtitle}</em>
            </h2>
          </div>
          <p>{description}</p>
          <div className="location-links__links">
            {links &&
              links.map((item, i) => (
                <a className="link-list-item" href={item.href} key={i}>
                  <span className="link-list-item__text">
                    <span className="link-list-item__title">{item.label}</span>
                  </span>
                  <div className="link-list-item__cta">
                    <span className="fas fa-arrow-right"></span>
                  </div>
                </a>
              ))}
          </div>
          <a href="#" className="btn">
            <span className="btn-label">Browse All Locations</span>
            <span className="btn-round btn-primary btn-responsive">
              <span className="fas fa-arrow-right"></span>
            </span>
          </a>
        </div>
        <div className="location-links__Images-grid">
          <div className="big-images-container">
            <Image
              className="big-img"
              src="/resources/images/image 21.png"
              {...(animationDisabled && { "data-animate-disabled": true })}
              data-animate
              data-animate-duration="3"
              data-animate-y="100"
            />
          </div>
          <div className="small-images-container">
            <div className="first-col">
              <Image
                className="small-img"
                src="/resources/images/Rectangle 1581.png"
                {...(animationDisabled && { "data-animate-disabled": true })}
                data-animate
                data-animate-delay="1"
                data-animate-duration="3"
                data-animate-opacity="0"
                data-animate-y="300"
              />
              <Image
                className="small-img"
                src="/resources/images/Rectangle 1582.png"
                {...(animationDisabled && { "data-animate-disabled": true })}
                data-animate
                data-animate-delay="1"
                data-animate-duration="3"
                data-animate-opacity="0"
                data-animate-y="300"
              />
            </div>
            <div className="second-col">
              <Image
                className="small-img"
                src="/resources/images/Rectangle 7.png"
                {...(animationDisabled && { "data-animate-disabled": true })}
                data-animate
                data-animate-delay="1"
                data-animate-duration="3"
                data-animate-opacity="0"
                data-animate-y="300"
              />
              <Image
                className="small-img"
                src="/resources/images/Rectangle 8.png"
                {...(animationDisabled && { "data-animate-disabled": true })}
                data-animate
                data-animate-delay="1"
                data-animate-duration="3"
                data-animate-opacity="0"
                data-animate-y="300"
              />
              <Image
                className="small-img"
                src="/resources/images/Rectangle 1583.png"
                {...(animationDisabled && { "data-animate-disabled": true })}
                data-animate
                data-animate-delay="1"
                data-animate-duration="3"
                data-animate-opacity="0"
                data-animate-y="300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
