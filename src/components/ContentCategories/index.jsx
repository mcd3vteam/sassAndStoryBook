export const ContentCategories = (props) => {
  const { title, description } = props;
  return (
    <section
      className="content-categories"
      data-animate
      data-animate-duration="2"
      data-animate-opacity="0"
    >
      <div className="content-categories__container">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="content-categories__categories">
          <a href="#">
            <span>Oral cavity, including the mouth, jaw and tongue</span>
            <span className="fas fa-arrow-right"></span>
          </a>
          <a href="#">
            <span>HPV-related tonsil and base of tongue</span>
            <span className="fas fa-arrow-right"></span>
          </a>
          <a href="#">
            <span>Child Page</span>
            <span className="fas fa-arrow-right"></span>
          </a>
        </div>
        <a className="content-categories__cta" href="#">
          View All Specialities
        </a>
      </div>
    </section>
  );
};
