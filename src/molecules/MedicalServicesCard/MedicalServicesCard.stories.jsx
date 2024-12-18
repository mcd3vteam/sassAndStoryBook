import { MedicalServicesCard } from ".";

export default {
  title: "Molecules/Medical Services Card",
};

const MedicalServicesCardArgs = {
  list: [
    {
      service: "Cancer (Oncology)",
      options: [
        "Moores Cancer Center / All Cancers",
        "Blood & Marrow Transplant (BMT)",
        "Brain Tumors",
        "Breast Cancer",
        "Family Cancer Genetics",
        "Gastrointestinal Cancers",
        "Gynecological Cancers",
        "Pancreatic Cancer",
        "Urologic Cancers",
      ],
    },
  ],
};

const MedicalServicesCardComponent = (args) => (
  <MedicalServicesCard {...args} />
);

export const MedicalServices = MedicalServicesCardComponent.bind({});
MedicalServices.args = MedicalServicesCardArgs;
