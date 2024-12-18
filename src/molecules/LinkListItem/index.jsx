export const LinkListItem = (props) => {
  const { title, description, url, iconClass } = props;

  return (
    <a className="link-list-item" href={url}>
      <span className="link-list-item__text">
        <span className="link-list-item__title">{title}</span>
        {description && (
          <span className="link-list-item__description">{description}</span>
        )}
      </span>
      {iconClass && (
        <div className="link-list-item__cta">
          <span className={iconClass} />
        </div>
      )}
    </a>
  );
};
