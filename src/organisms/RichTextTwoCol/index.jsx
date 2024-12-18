export const RichText2Columns = (props) => {
  const {
    eyebrow,
    children,
    leftTitle,
    leftSubtitle,
    rightTitle,
    rightSubtitle,
    isTitleBlock,
  } = props;
  return (
    <section className="container">
      <div className={`rich-text-2-col${isTitleBlock ? " title-block" : ""}`}>
        <div className="row">
          {eyebrow && <h2 className="eyebrow">{eyebrow}</h2>}
          <div className="rich-text-col">
            {leftTitle && <h2>{leftTitle}</h2>}
            {leftSubtitle && (
              <h3>
                {rightTitle ? <small>{leftSubtitle}</small> : leftSubtitle}
              </h3>
            )}
            {children[0]}
          </div>
          <div className="rich-text-col">
            {rightTitle && <h2>{rightTitle}</h2>}
            {rightSubtitle && <h3>{rightSubtitle}</h3>}
            {children[1]}
          </div>
        </div>
      </div>
    </section>
  );
};
