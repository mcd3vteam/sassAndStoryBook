export const Breadcrumb = (props) => {
  const { color, links, overlay, extraMargin } = props;
  return (
    <nav
      className={`breadcrumb container ${overlay ? "overlap" : ""} ${
        extraMargin ? "extra-margin" : ""
      }`}
    >
      <div className="row">
        <ul className={`breadcrumb__row col-md col-lg ${color}`}>
          {links &&
            links.map((itm, i) => (
              <li className="item" key={i}>
                <a href={itm.href}>
                  <span>{itm.label}</span>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};
