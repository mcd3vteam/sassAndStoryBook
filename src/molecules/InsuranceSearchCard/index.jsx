export const InsuranceSearchCard = ({ list }) => {
  return (
    <section className="insurance-search-card">
      <a href="#">
        <header>
          <span>{list.insurance}</span>
          <span>{list.details}</span>
        </header>
        <ul>
          {list.options.map((option) => {
            return <li key={option}>{option}</li>;
          })}
        </ul>
      </a>
    </section>
  );
};
