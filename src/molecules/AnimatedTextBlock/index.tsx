export const AnimatedTextBlock = (props) => {
  const { secondary, primary, emphasis } = props;

  return (
    <div className="animated-text">
      <div>
        <small
          className="animated-text__secondary"
          data-animate
          data-animate-duration="1"
          data-animate-opacity="0"
          data-animate-y="200"
        >
          {secondary}
        </small>
        <strong
          className="animated-text__primary"
          data-animate="letters"
          data-animate-duration="1.5"
          data-animate-delay="0.25"
          data-animate-y="300"
        >
          {primary}
        </strong>
        <em
          className="animated-text__emphasis"
          data-animate
          data-animate-duration="1"
          data-animate-delay="1.00"
          data-animate-opacity="0"
          data-animate-y="100"
        >
          {emphasis}
        </em>
      </div>
    </div>
  );
};
