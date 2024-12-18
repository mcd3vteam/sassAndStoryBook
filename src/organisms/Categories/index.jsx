import { FilterButton } from "../../molecules/FilterButton";

export const Categories = (props) => {
  const { categories, title, action } = props;

  return (
    <aside className="category__filter">
      <FilterButton title={title} action={action} />
      <form>
        <fieldset>
          <legend>Categories</legend>
          <hr></hr>
          {categories.map((item, i) => {
            return (
              <div className="category__filter-checkbox" key={i}>
                <input type="checkbox" id={item} />
                <label htmlFor={item}>{item}</label>
              </div>
            );
          })}
        </fieldset>
        <input type="submit" value="Apply Filters" />
      </form>
    </aside>
  );
};
