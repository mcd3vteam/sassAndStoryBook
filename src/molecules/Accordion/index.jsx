export const AccordionCard = (props) => {
  const { list } = props;

  return (
    <div className="accordion-card">
      <button className="accordion-btn" aria-expanded={false}>
        <span>{list.question}</span>
      </button>
      <div className="accordion-info hidden">
        <p>
          {list.answer}
          <br />
          <br />
          <a href="#">View COVID-19 information for patients and visitors</a>
          <br />
          <br />
          <a href="#">View COVID-19 FAQs</a>
        </p>
      </div>
    </div>
  );
};
