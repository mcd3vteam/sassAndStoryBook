export const Notification = (props) => {
  const { icon, color, title, description } = props;
  const iconClasses = `notification__icon ${icon}`;
  return (
    <section className="container">
      <div className={`notification ${color}`}>
        <div className="notification__icon-container">
          <span className={iconClasses} />
        </div>
        <div className="notification__copy">
          <h3 className="notification__title">{title}</h3>
          <p className="notification__body">{description}</p>
        </div>
      </div>
    </section>
  );
};
