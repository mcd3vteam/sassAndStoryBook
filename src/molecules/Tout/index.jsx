export const Tout = (props) => {
  const { url, title, description, ctaLabel, icon, variation, color } = props;
  const toutClasses = [
    variation ? `tout-${variation}` : "tout",
    color && `tout__${color} `,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className="container">
      <a className={toutClasses} href={url}>
        <div className="tout__content">
          <div className="tout__copy">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="btn">
            <span className="btn-label">{ctaLabel}</span>
            <span className="btn-round btn-sm">
              <span className={icon || "fas fa-arrow-right"} />
            </span>
          </div>
        </div>
      </a>
    </section>
  );
};
