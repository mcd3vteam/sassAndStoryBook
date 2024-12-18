import { Image } from "../../sharedReact/Image";

const ImageColumn = (props) => {
  const { imageSrc, title, descrp } = props;
  return (
    <div className="two-column-content__column">
      <Image
        src={imageSrc}
        data-animate
        data-animate-duration="6"
        data-animate-y="100"
        data-animate-opacity="0"
      />
      <div className="two-column-content__column-text-section-sm">
        <h2>{title}</h2>
        <p>{descrp}</p>
        <ul className="links">
          <li>
            <a className="btn">
              <span className="two-column-content__icon-container">
                <span className="fab fa-android" />
              </span>
              <span>Get it on Google Play</span>
              <i className="fas fa-arrow-right" />
            </a>
          </li>
          <li>
            <a className="btn">
              <span className="two-column-content__icon-container">
                <span className="fab fa-apple" />
              </span>
              <span>Dowload on the App Store</span>
              <i className="fas fa-arrow-right" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const DetailsColumn = (props) => {
  const { title, descrp } = props;
  return (
    <div
      className="two-column-content__column"
      data-animate
      data-animate-duration="4"
      data-animate-y="150"
      data-animate-opacity="0"
    >
      <div className="two-column-content__column-text-section-md">
        <h2>{title}</h2>
        <p>{descrp}</p>
        <ul className="links">
          <li>
            <a className="btn">
              <span className="two-column-content__icon-container">
                <span className="fab fa-android" />
              </span>
              <span>Get it on Google Play</span>
              <i className="fas fa-arrow-right" />
            </a>
          </li>
          <li>
            <a className="btn">
              <span className="two-column-content__icon-container">
                <span className="fab fa-apple" />
              </span>
              <span>Dowload on the App Store</span>
              <i className="fas fa-arrow-right" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const TwoColumnContent = (props) => {
  const { color, imageFirst } = props;
  return (
    <section className="container two-column-content ">
      <div className={`row two-column-content__${color}`}>
        {imageFirst ? (
          <>
            <ImageColumn {...props} />
            <DetailsColumn {...props} />
          </>
        ) : (
          <>
            <DetailsColumn {...props} />
            <ImageColumn {...props} />
          </>
        )}
      </div>
    </section>
  );
};
