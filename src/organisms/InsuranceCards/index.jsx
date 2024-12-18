import { InsuranceSearchCard } from "../../molecules/InsuranceSearchCard";

export const InsuranceCards = ({ list }) => {
  return (
    <div className="insurance-cards container">
      <div className="row center-xs">
        <div className="col-sm-7 col-md-7 col-lg-7 col-xs-6">
          {list.map((item, i) => (
            <InsuranceSearchCard list={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
