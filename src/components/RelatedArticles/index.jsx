import { Image } from "../../sharedReact/Image";

export const RelatedArticles = (props) => {
  const { title, description } = props;
  return (
    <section className="container related-articles">
      <div className="row">
        <div className="related-articles__title-section">
          <h4>{title}</h4>
          <a href="#" className="btn btn-secondary">
            <span className="btn-label">View All</span>
            <span className="fas fa-arrow-right" />
          </a>
        </div>
        <a href="#" className="related-articles__article">
          <Image src="/resources/images/jobs.png" alt="alt" />
          <span className="category">Month 20XX . Category</span>
          <h3>When Mom Talks, Are Infants with ASD Listening?</h3>
          <p>{description}</p>
        </a>
        <a href="#" className="related-articles__article">
          <Image src="/resources/images/jobs.png" alt="alt" />
          <span className="category">Month 20XX . Category</span>
          <h3>When Mom Talks, Are Infants with ASD Listening?</h3>
          <p>{description}</p>
        </a>
        <div className="related-articles__article">
          <Image src="/resources/images/jobs.png" alt="alt" />
          <span className="category">Month 20XX . Category</span>
          <h3>When Mom Talks, Are Infants with ASD Listening?</h3>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};
