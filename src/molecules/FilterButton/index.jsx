export const FilterButton = (props) => {
  const { title, action } = props;
  return (
    <div className="filter-button">
      <span className="filter-button__title">{title}</span>
      <div>
        <span className="filter-button__action">{action}</span>
        <button className="btn-round btn-sm btn-primary">
          <span className="fas fa-arrow-right"></span>
        </button>
      </div>
    </div>
  );
};
