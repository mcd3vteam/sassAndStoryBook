export const AlertBanner = ({
  backgroundColor,
  hasLink,
  icon,
  animationDisabled,
  dismissed,
}) => {
  let className = `alert-banner ${backgroundColor || "blue"}`;
  className = `${className} ${dismissed ? "dismissed" : ""}`;

  function renderMessage() {
    return hasLink ? (
      <p>
        Coronavirus updates for UC San Diego patients and visitors&#160;
        <a href="#">Click here</a>
      </p>
    ) : (
      <span>
        Coronavirus (COVID-19) updates for UC San Diego patients and visitors
      </span>
    );
  }

  return (
    <section
      className={className}
      data-alert-id="4"
      {...(animationDisabled && { "data-animate-disabled": true })}
      data-animate
      data-animate-duration="1"
      data-animate-opacity="0"
    >
      <div className="alert-banner__message">
        <span className={`${icon} alert-banner__icon`} />
        {renderMessage()}
      </div>
      <button
        className="alert-banner__dismiss"
        type="button"
        aria-label="close alert"
      >
        <span className="far fa-times alert-banner__close" />
      </button>
    </section>
  );
};
