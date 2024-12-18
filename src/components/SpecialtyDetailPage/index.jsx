export const SpecialtyDetailPage = ({ cta }) => {
  return (
    <div className="specialty-detail-page container">
      <div className="row between-md top-xs grid-wrapper">
        <div className="section-1">
          <h1>Salivary Gland Cancer</h1>
        </div>
        <div className="section-3">
          <div className="specialty-detail-page__cta">
            <div>
              <i className={cta[0].icon} />
            </div>
            <div>
              <span>{cta[0].type}</span>
              <span>{cta[0].label}</span>
            </div>
          </div>
          <a href="#" className="specialty-detail-page__cta">
            <div>
              <i className={cta[1].icon} />
            </div>
            <div>
              <span>{cta[1].type}</span>
              <span>{cta[1].label}</span>
            </div>
          </a>
          <a className="specialty-detail-page__cta">
            <div>
              <i className={cta[2].icon} />
            </div>
            <div>
              <span>{cta[2].type}</span>
              <span>{cta[2].label}</span>
            </div>
          </a>
        </div>
        <div className="section-2">
          <section className="container">
            <div className="row">
              <div
                className="rich-text-block centered"
                data-animate-disabled=""
              >
                <p className="intro-text">
                  Our team of head and neck oncoloogists - including Dr. Ezra
                  Cohen, a nationally known expert in salivary gland cancer -
                  has years of expertise dealing with salivary gland cancer.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
