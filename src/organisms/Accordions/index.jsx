import { AccordionCard } from "../../molecules/Accordion";

export const Accordions = (props) => {
  const { list } = props;

  return (
    <section className="accordion__cards">
      {list.map((item, i) => (
        <AccordionCard list={item} key={i} />
      ))}
    </section>
  );
};
