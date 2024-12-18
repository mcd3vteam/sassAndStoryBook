export const FeatureProviderCard = ({ name, details, title, shape }) => {
  return (
    <article className="feature-provider-card">
      <img
        className={shape}
        src="/resources/images/docheadshot.png"
        alt="image of doctor"
      />
      <div>
        <span>{name}</span>
        <hr />
        <ul>
          <li>{title}</li>
          <li>{details}</li>
        </ul>
        <a href="#">View More</a>
      </div>
    </article>
  );
};
