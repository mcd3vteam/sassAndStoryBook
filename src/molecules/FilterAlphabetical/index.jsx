export const FilterAlphabetical = (props) => {
  const { title, options } = props;

  return (
    <section className="filter-alphabet">
      <div>
        <span>{title}</span>
        <button className="btn">
          <span className="filter-alphabet__btn-label">Clear</span>
          <span className="btn-round btn-sm btn-primary">
            <span className="fas fa-times"></span>
          </span>
        </button>
        <button className="toggle" aria-expanded="true" />
      </div>
      <hr />
      <div>
        {options.map((letter, i) => {
          return <button key={i}>{letter}</button>;
        })}
      </div>
      <div>
        <button>Apply Filters</button>
      </div>
    </section>
  );
};
