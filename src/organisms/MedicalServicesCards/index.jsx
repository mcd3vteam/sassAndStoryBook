import { MedicalServicesCard } from "../../molecules/MedicalServicesCard";

export const MedicalServicesCards = ({ list }) => {
  return (
    <div className="medical-services-cards">
      <MedicalServicesCard list={list} />
    </div>
  );
};
