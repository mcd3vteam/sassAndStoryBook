import { Image } from "../../sharedReact/Image";
import { LinkListItem } from "../../molecules/LinkListItem";

export const StackedImageContainerWithCtaList = (props) => {
  const {
    links,
    title,
    subtitle,
    description,
    cta,
    imageSrc,
    animationDisabled,
  } = props;

  return (
    <section className="stacked-container-cta-list">
      <div
        className="stacked-container-cta-list__media"
        {...(animationDisabled && { "data-animate-disabled": true })}
        data-animate
        data-animate-duration="2"
        data-animate-opacity="1"
        data-animate-y="50"
      >
        <Image
          alt="Running"
          src={imageSrc}
          {...(animationDisabled && { "data-animate-disabled": true })}
          data-animate
          data-animate-duration="1.50"
          data-animate-y="500"
        />
      </div>
      <div
        className="stacked-container-cta-list__content"
        {...(animationDisabled && { "data-animate-disabled": true })}
        data-animate
        data-animate-opacity="0"
        data-animate-duration="3"
      >
        <div className="stacked-container-cta-list__content-left">
          <h2>
            {title} <em>{subtitle}</em>
          </h2>
        </div>
        <div className="stacked-container-cta-list__content-right">
          <p>{description}</p>
        </div>
        <ul className="stacked-container-cta-list__content-list">
          {links &&
            links.map((l, i) => (
              <li key={i}>
                <LinkListItem {...l} style={{ color: "white" }} />
              </li>
            ))}
        </ul>
        <a href={cta.url} className="btn">
          <span className="btn-label">{cta.label}</span>
          <span className="btn-round btn-primary btn-responsive">
            <span className={cta.icon || "fas fa-arrow-right"} />
          </span>
        </a>
      </div>
    </section>
  );
};
