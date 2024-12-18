export const StickyNav = (props) => {
  const { links } = props;
  if (!links?.length) return null;
  return (
    <>
      <div id="stickynavbar" className="sticky-nav">
        {links.map((item, i) => (
          <a className="sticky-nav__item btn" href={item.href} key={i}>
            <span className="btn-label">{item.label}</span>
          </a>
        ))}
      </div>
      {links.map((item, index) => item.section)}
    </>
  );
};
