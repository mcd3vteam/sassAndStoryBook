export const CallToAction = (props) => {
  const { url, title, subtitle, lead, ctaLabel, icon, centered, children } =
    props;
  return (
    <section className="container">
      <div className={`row call-to-action${centered ? "  centered" : ""}`}>
        <div className={`call-to-action__copy${centered ? "  centered" : ""}`}>
          {title && <h2 className="call-to-action__title">{title}</h2>}
          {subtitle && <h3 className="call-to-action__subtitle">{subtitle}</h3>}
          {lead?.length > 0 && (
            <div className="call-to-action__lead">
              {lead.map((l, i) => (
                <p key={i}>{l}</p>
              ))}
            </div>
          )}
          {
            children && (
              <div className="call-to-action__body">{children}</div>
            ) /* rich text markup */
          }
        </div>
        <div className="call-to-action__cta">
          <a href={url} className="btn">
            <span className="btn-label">{ctaLabel}</span>
            <span className="btn-round btn-primary btn-responsive">
              <span className={icon || "fas fa-arrow-right"} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
