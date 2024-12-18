//   as seen on
//   (04 Templates) Primary & Specialty Care Subsection Page > Primary & Specialty Care Subsection Template
//   (02 Modules) Text Blocks > Intro
export const IntroTextBlock = (props) => {
  const { title, h2Class } = props;
  return (
    <section className="container">
      <div className="intro-text">
        <div className="row">
          <h2 className={h2Class}>{title}</h2>
        </div>
      </div>
    </section>
  );
};
