import { Image } from "../../sharedReact/Image";
export const OverlayContent = (props) => {
  const { animationDisabled, color, reverse } = props;
  let reverseClass = "";
  if (reverse) reverseClass = "overlay-content__reverse";
  return (
    <section className="overlay-content">
      <div className={`row ${reverseClass}`}>
        <div
          className="overlay-content__col img-col"
          {...(animationDisabled && { "data-animate-disabled": true })}
          data-animate
          data-animate-duration="3"
          data-animate-y="300"
        >
          <Image
            src="/resources/images/jobs.png"
            alt="alt"
            {...(animationDisabled && { "data-animate-disabled": true })}
            data-animate
            data-animate-duration="3"
            data-animate-opacity="0"
            data-animate-delay="0.5"
            data-animate-y="500"
          />
        </div>
        <div
          className={`overlay-content__col text-col ${color}`}
          {...(animationDisabled && { "data-animate-disabled": true })}
          data-animate
          data-animate-duration="3.5"
          data-animate-opacity="0"
          data-animate-delay="1"
          data-animate-y="300"
        >
          <div className="overlay-text">
            <h2>
              How to switch <em>your care</em>
            </h2>
            <p>
              We know that the financial aspects of health care treatment can be
              challenging and stressful. We will work with all eligible patients
              to help them receive medically necessary care at UC San Diego
              Health.
            </p>
            <a href="#" className="btn btn-secondary">
              <span className="btn-label">Learn how to switch your care</span>
              <span className="fa-solid fa-arrow-right"></span>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};
