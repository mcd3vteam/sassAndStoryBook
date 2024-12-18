const FeatureListItem = (props) => {
  const { title, description } = props;
  return (
    <div className="feature-list-item">
      <p className="feature-list-item__title">{title}</p>
      <p className="feature-list-item__description">{description}</p>
    </div>
  );
};

export const FeaturedList = (props) => {
  const { title, description, list, url } = props;
  return (
    <section
      className="container"
      data-animate
      data-animate-delay="0.5"
      data-animate-duration=".75"
      data-animate-opacity="0"
      data-animate-ease="power4.out"
    >
      <div className="featured-list">
        <div className="row">
          <div className="featured-list__copy">
            <h3>{url ? <a href={url}>{title}</a> : title}</h3>
            <p>{description}</p>
          </div>
          {list && (
            <div className="featured-list__list">
              {list.map((item, i) => (
                <FeatureListItem {...item} key={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
