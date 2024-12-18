import { Accordions } from "../../organisms/Accordions";

export const FAQAccordion = (props) => {
  const { list, title, description, seeAll } = props;

  return (
    <section className="faq-accordion">
      <header>
        <span>{title}</span>
        <span>{description}</span>
      </header>
      <hr />
      <Accordions list={list} />
      <hr />
      <a href="#" className="btn">
        <span className="btn-label">{seeAll}</span>
        <span className="btn-round btn-sm btn-primary">
          <span className="fas fa-arrow-right"></span>
        </span>
      </a>
    </section>
  );
};
