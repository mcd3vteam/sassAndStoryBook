export const Tabs = ({ selectedIndex, tabs }) => (
  <div className="container tabs">
    <ul className="tabs__items" tabIndex={0}>
      {tabs.map(({ title }, index) => (
        <li
          className={`tabs__item ${index === selectedIndex ? "selected" : ""}`}
          data-index={index}
          key={`item-${index}`}
        >
          <button className="tabs__item-button" type="button">
            <span className="fas fa-solid fa-list tabs__item-icon"></span>
            {title}
          </button>
        </li>
      ))}
    </ul>
    <div className="tabs__contents">
      {tabs.map(({ content }, index) => (
        <section
          className={`tabs__content ${
            index === selectedIndex ? "selected" : ""
          }`}
          data-index={index}
          key={`content-${index}`}
        >
          {content}
        </section>
      ))}
    </div>
  </div>
);
