import { Image } from "../../sharedReact/Image";
export const FeaturedStories = (props) => {
  const {
    title,
    Story1Title,
    Story1Desc,
    Story2Title,
    Story2Desc,
    Story3Title,
    Story3Desc,
  } = props;
  return (
    <section className="featured-stories">
      <div className="featured-stories__header">
        <h2>{title}</h2>
        <a href="#" className="btn btn-secondary">
          <span className="btn-label">View All Releases</span>
          <span className="fas fa-arrow-right"></span>
        </a>
      </div>
      <div className="featured-stories__row">
        <div className="featured-stories__large-story">
          <div className="story">
            <Image src="/resources/images/image 25.jpg" alt="alt" />
            <span className="category">Author . 01.01.21</span>
            <h3>{Story1Title}</h3>
            <p>{Story1Desc}</p>
          </div>
        </div>
        <div className="featured-stories__small-story">
          <div className="story">
            <Image src="/resources/images/image 26.jpg" alt="alt" />
            <span className="category">Month 20XX . Category</span>
            <h4>{Story2Title}</h4>
            <p>{Story2Desc}</p>
          </div>
          <div className="story">
            <span className="category">Month 20XX . Category</span>
            <h4>{Story3Title}</h4>
            <p>{Story3Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
