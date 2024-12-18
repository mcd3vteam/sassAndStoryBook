export default {
  title: "Atoms/Layout",
};

const responsiveboxes = () => (
  <div className="root layout-root">
    <div className="container  layout-container">
      Container class for centered components with 13.5% left and right margin
      <div className="row">
        <div className="boxy">
          <div className="box-row" />
        </div>
        <div className="col-xs-2 col-sm-2 col-md-8 col-lg-10">
          <div className="box-row" />
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2 col-lg-1">
          <div className="box-row" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg col-md col-sm col-xs">
          <div className="box-row" />
        </div>
      </div>
    </div>
  </div>
);
export const boxes = responsiveboxes.bind({});
