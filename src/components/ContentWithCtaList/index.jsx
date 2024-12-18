import { LinkListItem } from "../../molecules/LinkListItem";

export const ContentWithCtaList = (props) => {
  const { links, title, subtitle, description, cta, variation } = props;
  const variationClassName = `content-cta-list${
    variation ? `-${variation}` : ""
  }`;

  return (
    <section
      className={variationClassName}
      data-animate
      data-animate-duration="2"
      data-animate-opacity="0"
    >
      {variation !== "stacked" ? (
        <div className="row">
          <div className="content-cta-list__content">
            <div className="content-cta-list__copy">
              {title && <h2>{title}</h2>}
              {subtitle && <h3>{subtitle}</h3>}
              {description && <p>{description}</p>}
            </div>
            <a href={cta.url} className="btn">
              <span className="btn-label">{cta.label}</span>
              <span className="btn-round btn-primary btn-responsive">
                <span className={cta.icon || "fas fa-arrow-right"} />
              </span>
            </a>
          </div>
          <div className="content-cta-list__links">
            {links &&
              links.map((link, i) => <LinkListItem {...link} key={i} />)}
          </div>
          {variation === "tabbed" && (
            <div className="content-cta-list__cta">
              <a href={cta.url} className="btn">
                <span className="btn-label">{cta.label}</span>
                <span className="btn-round btn-primary btn-responsive">
                  <span className={cta.icon || "fas fa-arrow-right"} />
                </span>
              </a>
            </div>
          )}
        </div>
      ) : (
        <div className="row">
          <div className="content-cta-list__title">
            <h2>
              {title}
              <em>{subtitle}</em>
            </h2>
          </div>
          <div className="content-cta-list__description">
            {description && <p>{description}</p>}
          </div>
          <div className="content-cta-list__links">
            {links && links.map((l, i) => <LinkListItem {...l} key={i} />)}
          </div>
        </div>
      )}
    </section>
  );
};
