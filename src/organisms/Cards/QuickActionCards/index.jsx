export const QuickActionCard = (props) => {
  const { title, description, url, iconClasses } = props;
  return (
    <a className="quick-action-card" href={url}>
      <span className="quick-action-card__icon">
        <span className={iconClasses} />
      </span>
      <span className="quick-action-card__text">
        <strong>{title}</strong>
        <span>{description}</span>
      </span>
    </a>
  );
};

export const QuickActionCards = (props) => {
  const { cards } = props;
  return (
    <div className="quick-action-cards">
      <ul>
        {cards &&
          cards.map((card, i) => (
            <li key={i}>
              <QuickActionCard {...card} />
            </li>
          ))}
      </ul>
    </div>
  );
};
