export const HeroContainerCalloutV3 = ({ includeTout }) => {
  return (
    <div className="hero-content">
      <section className="hero featured-content-callout-block">
        <div className="hero__image">
          <div className="animation-imagecover"></div>
          <div className="image hero-background-image">
            {/* <img src="https://qa.health.ucsd.edu/globalassets/hp_hero.jpg" /> */}
          </div>
        </div>
        <div className="hero__cta">
          <h1>Why Choose UC San Diego Health?</h1>
          <p>
            UC San Diego Health is repeatedly ranked the No. 1 health care
            system in San Diego. That is just one reason to choose us as your
            health care provider.
          </p>

          <a href="/" className="btn">
            <span className="btn-label">Learn more about us</span>
            <span className="btn-round btn-primary btn-responsive">
              <span className="fas fa-arrow-right"></span>
            </span>
          </a>
        </div>
      </section>
      {includeTout && (
        <section className="container">
          <a className="tout tout__white" href="Learn More">
            <div className="tout__content">
              <div className="tout__copy">
                <h2>Do you accept my plan?</h2>
                <p>
                  We accept all major health plans. Learn more at Insurance
                  Plans Accepted.
                </p>
              </div>
              <div className="btn">
                <span className="btn-label">Learn More</span>
                <span className="btn-round btn-sm">
                  <span className="fas fa-arrow-right"></span>
                </span>
              </div>
            </div>
          </a>
        </section>
      )}
    </div>
  );
};
