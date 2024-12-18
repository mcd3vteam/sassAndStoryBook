import { ChildCTAButton } from "../../molecules/ChildCTAButton";

export const ChildCategoriesCTA = ({ list, title, description }) => {
  return (
    <section
      className="child-categories"
      data-animate
      data-animate-duration="2"
      data-animate-opacity="0"
    >
      <div className="child-categories__container">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="child-categories__cta">
          {list.map((item, i) => (
            <ChildCTAButton specialty={item.specialty} key={i} />
          ))}
          {list.length > 9 && (
            <button className="see-more hidden">View All Specialties</button>
          )}
        </div>
      </div>
    </section>
  );
};
